require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const app = express();
const port = Number(process.env.PORT) || 3000;
const publicDir = __dirname;
const deepseekBaseUrl = process.env.DEEPSEEK_BASE_URL || 'https://api.deepseek.com';
const jwtSecret = process.env.JWT_SECRET || 'dev_secret_change_me';
const sqlitePath = process.env.SQLITE_PATH || path.join(__dirname, 'data', 'pomoland.db');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(publicDir));

function ensureDir(dirPath) {
  try {
    fs.mkdirSync(dirPath, { recursive: true });
  } catch (error) {
    // ignore
  }
}

// Database (SQLite)
const dbPromise = (async () => {
  ensureDir(path.dirname(sqlitePath));
  const db = await open({
    filename: sqlitePath,
    driver: sqlite3.Database
  });
  await db.exec(`
    PRAGMA journal_mode=WAL;
    CREATE TABLE IF NOT EXISTS users (
      uid TEXT PRIMARY KEY,
      password_hash TEXT NOT NULL,
      created_at INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS user_state (
      uid TEXT PRIMARY KEY,
      state_json TEXT NOT NULL,
      updated_at INTEGER NOT NULL,
      FOREIGN KEY(uid) REFERENCES users(uid) ON DELETE CASCADE
    );
  `);
  return db;
})();

function signToken(uid) {
  return jwt.sign({ uid }, jwtSecret, { expiresIn: '30d' });
}

function requireAuth(req, res, next) {
  const header = String(req.headers.authorization || '').trim();
  const token = header.startsWith('Bearer ') ? header.slice('Bearer '.length) : '';
  if (!token) return res.status(401).json({ error: 'Missing auth token.' });
  try {
    const payload = jwt.verify(token, jwtSecret);
    req.uid = payload.uid;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired auth token.' });
  }
}

// DeepSeek API configuration
const openai = process.env.DEEPSEEK_API_KEY
  ? new OpenAI({
      apiKey: process.env.DEEPSEEK_API_KEY,
      baseURL: deepseekBaseUrl,
    })
  : null;

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    apiConfigured: Boolean(process.env.DEEPSEEK_API_KEY),
    authConfigured: Boolean(process.env.JWT_SECRET),
    dbPath: sqlitePath,
    baseURL: deepseekBaseUrl,
    model: 'deepseek-chat'
  });
});

// ---- Auth + Save State APIs ----
app.post('/api/auth/register', async (req, res) => {
  try {
    const { uid, password } = req.body || {};
    const cleanUid = String(uid || '').trim();
    const cleanPassword = String(password || '');
    if (!/^\d{8}$/.test(cleanUid)) {
      return res.status(400).json({ error: 'UID 必须是 8 位数字。' });
    }
    if (!cleanPassword || cleanPassword.length < 4) {
      return res.status(400).json({ error: '密码至少 4 位。' });
    }
    const db = await dbPromise;
    const existing = await db.get('SELECT uid FROM users WHERE uid = ?', cleanUid);
    if (existing) {
      return res.status(409).json({ error: '该 UID 已被注册，请换一个。' });
    }
    const passwordHash = await bcrypt.hash(cleanPassword, 10);
    await db.run(
      'INSERT INTO users(uid, password_hash, created_at) VALUES (?, ?, ?)',
      cleanUid,
      passwordHash,
      Date.now()
    );
    const token = signToken(cleanUid);
    return res.json({ uid: cleanUid, token });
  } catch (error) {
    console.error('register error', error);
    return res.status(500).json({ error: '注册失败。' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { uid, password } = req.body || {};
    const cleanUid = String(uid || '').trim();
    const cleanPassword = String(password || '');
    if (!/^\d{8}$/.test(cleanUid)) {
      return res.status(400).json({ error: 'UID 必须是 8 位数字。' });
    }
    const db = await dbPromise;
    const user = await db.get('SELECT uid, password_hash FROM users WHERE uid = ?', cleanUid);
    if (!user) {
      return res.status(401).json({ error: '账号或密码错误。' });
    }
    const ok = await bcrypt.compare(cleanPassword, user.password_hash);
    if (!ok) {
      return res.status(401).json({ error: '账号或密码错误。' });
    }
    const token = signToken(cleanUid);
    return res.json({ uid: cleanUid, token });
  } catch (error) {
    console.error('login error', error);
    return res.status(500).json({ error: '登录失败。' });
  }
});

app.get('/api/state', requireAuth, async (req, res) => {
  try {
    const db = await dbPromise;
    const row = await db.get('SELECT state_json FROM user_state WHERE uid = ?', req.uid);
    if (!row) return res.json({ state: null });
    let payload = null;
    try {
      payload = JSON.parse(row.state_json);
    } catch (error) {
      payload = null;
    }
    return res.json({ state: payload });
  } catch (error) {
    console.error('get state error', error);
    return res.status(500).json({ error: '读取存档失败。' });
  }
});

app.post('/api/state', requireAuth, async (req, res) => {
  try {
    const state = req.body && req.body.state;
    if (!state || typeof state !== 'object') {
      return res.status(400).json({ error: 'state is required.' });
    }
    const db = await dbPromise;
    const serialized = JSON.stringify(state);
    await db.run(
      `INSERT INTO user_state(uid, state_json, updated_at)
       VALUES (?, ?, ?)
       ON CONFLICT(uid) DO UPDATE SET state_json=excluded.state_json, updated_at=excluded.updated_at`,
      req.uid,
      serialized,
      Date.now()
    );
    return res.json({ ok: true });
  } catch (error) {
    console.error('save state error', error);
    return res.status(500).json({ error: '保存存档失败。' });
  }
});

// API Endpoint for generating tasks
app.post('/api/generate-tasks', async (req, res) => {
  try {
    const { goal, language } = req.body;

    if (!goal || !language) {
      return res.status(400).json({ error: 'Goal and language are required.' });
    }

    if (!openai) {
      return res.status(503).json({ error: 'DeepSeek API key is not configured on the server.' });
    }

    // Prompt for DeepSeek API
    const prompt = `你是一个可爱且充满同情心的‘虚拟宠物导师’。你的目标是把用户的大目标拆解成‘微行动’。
请将用户的大目标 "${goal}" 拆解成 4 个具体、可执行的“微行动”任务。每个任务都应包含 taskName (有趣的名字), duration (分钟), goldReward (金币数)。
此外，请提供一句宠物导师给用户的鼓励话语 encouragement。
请以纯 JSON 格式返回，例如：
{
  "tasks": [
    { "taskName": "学习计划第一步", "duration": 30, "goldReward": 10 },
    { "taskName": "资料收集", "duration": 45, "goldReward": 15 },
    { "taskName": "初步思考", "duration": 60, "goldReward": 20 },
    { "taskName": "休息放松", "duration": 15, "goldReward": 5 }
  ],
  "encouragement": "你太棒了！一步步来，Pomoland 会因你的努力而更加繁荣！"
}`;

    const chatCompletion = await openai.chat.completions.create({
      model: 'deepseek-chat', // 使用 deepseek-chat 模型
      messages: [
        { role: 'system', content: '你是一个可爱且充满同情心的‘虚拟宠物导师’。你的目标是把用户的大目标拆解成‘微行动’。请以纯 JSON 格式返回结果，包含 tasks 数组和 encouragement 字符串。' },
        { role: 'user', content: prompt }
      ],
      response_format: { type: "json_object" }, // Request JSON output
      temperature: 0.7,
      max_tokens: 1000, // 增加 max_tokens 以适应更长的响应
    });

    const text = chatCompletion.choices[0].message.content;

    // Attempt to parse the JSON response from DeepSeek
    let responseData;
    try {
      responseData = JSON.parse(text);
      // Basic validation to ensure it contains expected fields
      if (!responseData.tasks || !Array.isArray(responseData.tasks) || !responseData.encouragement) {
        throw new Error('Invalid JSON format from AI: missing tasks array or encouragement.');
      }
    } catch (parseError) {
      console.error('Failed to parse AI response as JSON:', text, parseError);
      return res.status(500).json({ error: 'Failed to parse AI response.', rawResponse: text });
    }

    res.json(responseData);
  } catch (error) {
    console.error('Error generating tasks:', error);
    res.status(500).json({ error: 'Failed to generate tasks from AI.' });
  }
});

// Endpoint for planning steps (currently simulated, can be extended to AI later)
app.post('/api/get-planning-steps', async (req, res) => {
  try {
    const { language } = req.body;

    // Simulate planning steps for now, as the current app.js doesn't fetch them from AI
    // If needed, a similar prompt can be created for Gemini API
    const planningSteps = [
      { id: 'analyze', text: 'Analyzing the goal and timeline...' },
      { id: 'research', text: 'Researching preparation materials and skill areas...' },
      { id: 'breakdown', text: 'Breaking the goal into executable daily tasks...' },
      { id: 'duration', text: 'Estimating focus duration for each task...' },
      { id: 'schedule', text: 'Generating today\'s Focus plan...' }
    ];

    res.json(planningSteps);
  } catch (error) {
    console.error('Error getting planning steps:', error);
    res.status(500).json({ error: 'Failed to get planning steps.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Pomoland app listening at http://localhost:${port}`);
});
