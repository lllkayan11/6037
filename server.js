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
      created_at INTEGER NOT NULL,
      nickname TEXT,
      last_login_at INTEGER
    );
    CREATE TABLE IF NOT EXISTS user_state (
      uid TEXT PRIMARY KEY,
      state_json TEXT NOT NULL,
      updated_at INTEGER NOT NULL,
      FOREIGN KEY(uid) REFERENCES users(uid) ON DELETE CASCADE
    );
    CREATE TABLE IF NOT EXISTS friend_requests (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      from_uid TEXT NOT NULL,
      to_uid TEXT NOT NULL,
      status TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      UNIQUE(from_uid, to_uid)
    );
    CREATE TABLE IF NOT EXISTS friends (
      uid1 TEXT NOT NULL,
      uid2 TEXT NOT NULL,
      created_at INTEGER NOT NULL,
      PRIMARY KEY(uid1, uid2)
    );
    CREATE INDEX IF NOT EXISTS idx_friend_requests_to_uid ON friend_requests(to_uid, status);
    CREATE INDEX IF NOT EXISTS idx_friends_uid1 ON friends(uid1);
    CREATE INDEX IF NOT EXISTS idx_friends_uid2 ON friends(uid2);
  `);
  // Lightweight migrations for existing databases
  try { await db.exec(`ALTER TABLE users ADD COLUMN nickname TEXT;`); } catch (e) {}
  try { await db.exec(`ALTER TABLE users ADD COLUMN last_login_at INTEGER;`); } catch (e) {}
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

function normalizeUid(value) {
  const clean = String(value || '').trim();
  return /^\d{8}$/.test(clean) ? clean : '';
}

function normalizeNickname(value) {
  const raw = String(value || '').trim();
  // 2-12 chars; allow most unicode except control chars
  const clean = raw.replace(/[\u0000-\u001f\u007f]/g, '');
  if (clean.length < 2 || clean.length > 12) return '';
  return clean;
}

function ensureStateShape(remote) {
  const now = Date.now();
  const state = (remote && typeof remote === 'object') ? remote : {};
  const appState = (state.appState && typeof state.appState === 'object') ? state.appState : {};
  const resources = (appState.resources && typeof appState.resources === 'object') ? appState.resources : {};
  appState.resources = {
    coins: Number(resources.coins || 0),
    water: Number(resources.water || 0),
    sunlight: Number(resources.sunlight || 0),
    chances: Number(resources.chances || 0)
  };
  state.appState = appState;

  const island = (state.islandState && typeof state.islandState === 'object') ? state.islandState : {};
  island.level = Number(island.level || 1);
  island.exp = Number(island.exp || 0);
  island.maxExp = Number(island.maxExp || 100);
  island.coins = Number(island.coins || appState.resources.coins || 0);
  island.water = Number(island.water || appState.resources.water || 0);
  island.sunlight = Number(island.sunlight || appState.resources.sunlight || 0);
  island.dailyHelpCount = Number(island.dailyHelpCount || appState.resources.chances || 0);
  island.lastVisitTime = island.lastVisitTime || now;
  island.inventory = island.inventory && typeof island.inventory === 'object' ? island.inventory : {};
  island.inventory.harvested = island.inventory.harvested && typeof island.inventory.harvested === 'object'
    ? island.inventory.harvested
    : {};
  state.islandState = island;
  return state;
}

function syncIslandResources(state) {
  const s = ensureStateShape(state);
  s.islandState.coins = s.appState.resources.coins;
  s.islandState.water = s.appState.resources.water;
  s.islandState.sunlight = s.appState.resources.sunlight;
  s.islandState.dailyHelpCount = s.appState.resources.chances;
  return s;
}

// ---- Auth + Save State APIs ----
app.post('/api/auth/register', async (req, res) => {
  try {
    const { uid, password } = req.body || {};
    const cleanUid = normalizeUid(uid);
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
    const defaultNickname = `番茄${cleanUid.slice(-4)}`;
    const now = Date.now();
    await db.run(
      'INSERT INTO users(uid, password_hash, created_at, nickname, last_login_at) VALUES (?, ?, ?, ?, ?)',
      cleanUid,
      passwordHash,
      now,
      defaultNickname,
      now
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
    const cleanUid = normalizeUid(uid);
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
    await db.run('UPDATE users SET last_login_at = ? WHERE uid = ?', Date.now(), cleanUid);
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
    const row = await db.get('SELECT state_json, updated_at FROM user_state WHERE uid = ?', req.uid);
    if (!row) return res.json({ state: null, updatedAt: 0 });
    let payload = null;
    try {
      payload = JSON.parse(row.state_json);
    } catch (error) {
      payload = null;
    }
    return res.json({ state: payload, updatedAt: Number(row.updated_at || 0) });
  } catch (error) {
    console.error('get state error', error);
    return res.status(500).json({ error: '读取存档失败。' });
  }
});

app.post('/api/state', requireAuth, async (req, res) => {
  try {
    const state = req.body && req.body.state;
    const baseUpdatedAt = Number(req.body && req.body.baseUpdatedAt || 0);
    if (!state || typeof state !== 'object') {
      return res.status(400).json({ error: 'state is required.' });
    }
    const db = await dbPromise;
    const current = await db.get('SELECT updated_at, state_json FROM user_state WHERE uid = ?', req.uid);
    if (current && baseUpdatedAt && Number(current.updated_at) !== baseUpdatedAt) {
      let latest = null;
      try { latest = JSON.parse(current.state_json); } catch (e) { latest = null; }
      return res.status(409).json({ error: 'conflict', state: latest, updatedAt: Number(current.updated_at || 0) });
    }

    const serialized = JSON.stringify(syncIslandResources(state));
    const updatedAt = Date.now();
    await db.run(
      `INSERT INTO user_state(uid, state_json, updated_at)
       VALUES (?, ?, ?)
       ON CONFLICT(uid) DO UPDATE SET state_json=excluded.state_json, updated_at=excluded.updated_at`,
      req.uid,
      serialized,
      updatedAt
    );
    return res.json({ ok: true, updatedAt });
  } catch (error) {
    console.error('save state error', error);
    return res.status(500).json({ error: '保存存档失败。' });
  }
});

// ---- Profile APIs ----
app.get('/api/me', requireAuth, async (req, res) => {
  try {
    const db = await dbPromise;
    const user = await db.get('SELECT uid, nickname, created_at, last_login_at FROM users WHERE uid = ?', req.uid);
    if (!user) return res.status(404).json({ error: '用户不存在。' });
    return res.json({
      uid: user.uid,
      nickname: user.nickname || '',
      createdAt: Number(user.created_at || 0),
      lastLoginAt: Number(user.last_login_at || 0)
    });
  } catch (error) {
    console.error('get me error', error);
    return res.status(500).json({ error: '读取个人信息失败。' });
  }
});

app.post('/api/me/profile', requireAuth, async (req, res) => {
  try {
    const db = await dbPromise;
    const nickname = normalizeNickname(req.body && req.body.nickname);
    if (!nickname) return res.status(400).json({ error: '昵称需为 2-12 个字符。' });
    await db.run('UPDATE users SET nickname = ? WHERE uid = ?', nickname, req.uid);
    return res.json({ ok: true, nickname });
  } catch (error) {
    console.error('update profile error', error);
    return res.status(500).json({ error: '更新个人信息失败。' });
  }
});

// ---- Real friends system ----
app.get('/api/users/:uid', requireAuth, async (req, res) => {
  try {
    const targetUid = normalizeUid(req.params.uid);
    if (!targetUid) return res.status(400).json({ error: 'UID 必须是 8 位数字。' });
    const db = await dbPromise;
    const user = await db.get('SELECT uid, nickname, created_at FROM users WHERE uid = ?', targetUid);
    if (!user) return res.status(404).json({ error: '用户不存在。' });
    return res.json({ uid: user.uid, nickname: user.nickname || '', createdAt: user.created_at });
  } catch (error) {
    console.error('user lookup error', error);
    return res.status(500).json({ error: '查询失败。' });
  }
});

function normalizePair(a, b) {
  return a < b ? [a, b] : [b, a];
}

async function areFriends(db, uidA, uidB) {
  const [u1, u2] = normalizePair(uidA, uidB);
  const row = await db.get('SELECT 1 FROM friends WHERE uid1 = ? AND uid2 = ?', u1, u2);
  return Boolean(row);
}

app.post('/api/friends/request', requireAuth, async (req, res) => {
  try {
    const toUid = normalizeUid(req.body && req.body.toUid);
    if (!toUid) return res.status(400).json({ error: 'UID 必须是 8 位数字。' });
    if (toUid === req.uid) return res.status(400).json({ error: '不能添加自己为好友。' });
    const db = await dbPromise;
    const target = await db.get('SELECT uid FROM users WHERE uid = ?', toUid);
    if (!target) return res.status(404).json({ error: '用户不存在。' });
    if (await areFriends(db, req.uid, toUid)) return res.status(409).json({ error: '你们已经是好友了。' });

    const existing = await db.get('SELECT id, status FROM friend_requests WHERE from_uid = ? AND to_uid = ?', req.uid, toUid);
    if (existing && existing.status === 'pending') {
      return res.json({ ok: true, requestId: existing.id });
    }
    await db.run(
      `INSERT INTO friend_requests(from_uid, to_uid, status, created_at)
       VALUES (?, ?, 'pending', ?)
       ON CONFLICT(from_uid, to_uid) DO UPDATE SET status='pending', created_at=excluded.created_at`,
      req.uid,
      toUid,
      Date.now()
    );
    const row = await db.get('SELECT id FROM friend_requests WHERE from_uid = ? AND to_uid = ?', req.uid, toUid);
    return res.json({ ok: true, requestId: row ? row.id : null });
  } catch (error) {
    console.error('friend request error', error);
    return res.status(500).json({ error: '发送好友申请失败。' });
  }
});

app.get('/api/friends/requests', requireAuth, async (req, res) => {
  try {
    const db = await dbPromise;
    const incoming = await db.all(
      `SELECT id, from_uid as fromUid, created_at as createdAt
       FROM friend_requests WHERE to_uid = ? AND status = 'pending' ORDER BY created_at DESC`,
      req.uid
    );
    const outgoing = await db.all(
      `SELECT id, to_uid as toUid, created_at as createdAt
       FROM friend_requests WHERE from_uid = ? AND status = 'pending' ORDER BY created_at DESC`,
      req.uid
    );
    return res.json({ incoming, outgoing });
  } catch (error) {
    console.error('list requests error', error);
    return res.status(500).json({ error: '读取好友申请失败。' });
  }
});

app.post('/api/friends/requests/:id/accept', requireAuth, async (req, res) => {
  try {
    const requestId = Number(req.params.id);
    if (!Number.isFinite(requestId)) return res.status(400).json({ error: 'Invalid request id.' });
    const db = await dbPromise;
    const reqRow = await db.get('SELECT id, from_uid, to_uid, status FROM friend_requests WHERE id = ?', requestId);
    if (!reqRow || reqRow.to_uid !== req.uid) return res.status(404).json({ error: '好友申请不存在。' });
    if (reqRow.status !== 'pending') return res.status(409).json({ error: '该申请已处理。' });

    const [u1, u2] = normalizePair(reqRow.from_uid, reqRow.to_uid);
    await db.exec('BEGIN');
    try {
      await db.run("UPDATE friend_requests SET status = 'accepted' WHERE id = ?", requestId);
      await db.run('INSERT OR IGNORE INTO friends(uid1, uid2, created_at) VALUES (?, ?, ?)', u1, u2, Date.now());
      await db.exec('COMMIT');
    } catch (e) {
      await db.exec('ROLLBACK');
      throw e;
    }
    return res.json({ ok: true });
  } catch (error) {
    console.error('accept request error', error);
    return res.status(500).json({ error: '同意好友申请失败。' });
  }
});

app.post('/api/friends/requests/:id/reject', requireAuth, async (req, res) => {
  try {
    const requestId = Number(req.params.id);
    if (!Number.isFinite(requestId)) return res.status(400).json({ error: 'Invalid request id.' });
    const db = await dbPromise;
    const reqRow = await db.get('SELECT id, to_uid, status FROM friend_requests WHERE id = ?', requestId);
    if (!reqRow || reqRow.to_uid !== req.uid) return res.status(404).json({ error: '好友申请不存在。' });
    if (reqRow.status !== 'pending') return res.status(409).json({ error: '该申请已处理。' });
    await db.run("UPDATE friend_requests SET status = 'rejected' WHERE id = ?", requestId);
    return res.json({ ok: true });
  } catch (error) {
    console.error('reject request error', error);
    return res.status(500).json({ error: '拒绝好友申请失败。' });
  }
});

function buildIslandSnapshot(state) {
  const s = ensureStateShape(state);
  const island = s.islandState || {};
  const appResources = s.appState.resources || {};
  const plots = Array.isArray(island.plots) ? island.plots : [];
  const plotSummary = plots.map((p) => ({
    id: p.id,
    crop: p.crop || null,
    needsWater: Boolean(p.needsWater),
    growthStage: Number(p.growthStage || 0),
    plantedAt: p.plantedAt || null,
    wateredAt: p.wateredAt || null
  }));
  const pets = Array.isArray(island.pets) ? island.pets.filter(p => p.unlocked).map(p => ({
    id: p.id,
    type: p.type,
    name: p.name,
    happiness: Number(p.happiness || 0),
    lastFedAt: p.lastFedAt || null
  })) : [];
  return {
    level: island.level,
    exp: island.exp,
    maxExp: island.maxExp,
    decorations: Array.isArray(island.decorations) ? island.decorations : [],
    plots: plotSummary,
    pets,
    inventory: {
      harvested: island.inventory?.harvested || {}
    },
    resources: {
      coins: appResources.coins,
      water: appResources.water,
      sunlight: appResources.sunlight,
      chances: appResources.chances
    }
  };
}

app.get('/api/friends', requireAuth, async (req, res) => {
  try {
    const db = await dbPromise;
    const rows = await db.all(
      `SELECT uid1, uid2 FROM friends WHERE uid1 = ? OR uid2 = ? ORDER BY created_at DESC`,
      req.uid,
      req.uid
    );
    const friendUids = rows.map(r => (r.uid1 === req.uid ? r.uid2 : r.uid1));
    const result = [];
    for (const fuid of friendUids) {
      const user = await db.get('SELECT uid, nickname, created_at FROM users WHERE uid = ?', fuid);
      const stRow = await db.get('SELECT state_json FROM user_state WHERE uid = ?', fuid);
      let snapshot = null;
      if (stRow && stRow.state_json) {
        try { snapshot = buildIslandSnapshot(JSON.parse(stRow.state_json)); } catch (e) { snapshot = null; }
      }
      result.push({
        uid: fuid,
        nickname: user?.nickname || '',
        createdAt: Number(user?.created_at || 0),
        island: snapshot ? { level: snapshot.level, exp: snapshot.exp, maxExp: snapshot.maxExp } : null
      });
    }
    return res.json({ friends: result });
  } catch (error) {
    console.error('list friends error', error);
    return res.status(500).json({ error: '读取好友列表失败。' });
  }
});

app.get('/api/friends/:uid/island', requireAuth, async (req, res) => {
  try {
    const targetUid = normalizeUid(req.params.uid);
    if (!targetUid) return res.status(400).json({ error: 'UID 必须是 8 位数字。' });
    const db = await dbPromise;
    if (!(await areFriends(db, req.uid, targetUid))) return res.status(403).json({ error: '你们还不是好友。' });
    const user = await db.get('SELECT uid, nickname, created_at FROM users WHERE uid = ?', targetUid);
    const row = await db.get('SELECT state_json, updated_at FROM user_state WHERE uid = ?', targetUid);
    if (!row) return res.json({ uid: targetUid, nickname: user?.nickname || '', island: null, updatedAt: 0 });
    let parsed = null;
    try { parsed = JSON.parse(row.state_json); } catch (e) { parsed = null; }
    return res.json({ uid: targetUid, nickname: user?.nickname || '', island: parsed ? buildIslandSnapshot(parsed) : null, updatedAt: Number(row.updated_at || 0) });
  } catch (error) {
    console.error('friend island error', error);
    return res.status(500).json({ error: '读取好友岛屿失败。' });
  }
});

app.post('/api/friends/:uid/interact', requireAuth, async (req, res) => {
  try {
    const targetUid = normalizeUid(req.params.uid);
    const type = String(req.body && req.body.type || '').trim();
    const itemType = String(req.body && req.body.itemType || '').trim();
    if (!targetUid) return res.status(400).json({ error: 'UID 必须是 8 位数字。' });
    if (targetUid === req.uid) return res.status(400).json({ error: '不能对自己操作。' });
    if (!['help', 'steal', 'gift'].includes(type)) return res.status(400).json({ error: 'Invalid interaction type.' });
    const db = await dbPromise;
    if (!(await areFriends(db, req.uid, targetUid))) return res.status(403).json({ error: '你们还不是好友。' });

    await db.exec('BEGIN');
    try {
      const actorRow = await db.get('SELECT state_json FROM user_state WHERE uid = ?', req.uid);
      const targetRow = await db.get('SELECT state_json FROM user_state WHERE uid = ?', targetUid);

      let actor = actorRow && actorRow.state_json ? JSON.parse(actorRow.state_json) : null;
      let target = targetRow && targetRow.state_json ? JSON.parse(targetRow.state_json) : null;
      actor = syncIslandResources(ensureStateShape(actor));
      target = syncIslandResources(ensureStateShape(target));

      if (actor.appState.resources.chances <= 0) {
        await db.exec('ROLLBACK');
        return res.status(409).json({ error: '游戏机会不足。' });
      }

      // consume chance
      actor.appState.resources.chances -= 1;

      if (type === 'help') {
        target.appState.resources.water += 1;
      }

      if (type === 'steal') {
        const pool = ['tomato', 'strawberry', 'carrot', 'apple', 'watermelon'];
        const harvested = target.islandState.inventory.harvested || {};
        const available = pool.filter(k => Number(harvested[k] || 0) > 0);
        if (!available.length) {
          await db.exec('ROLLBACK');
          return res.status(409).json({ error: '对方背包里没有可偷的果实。' });
        }
        const pick = available[Math.floor(Math.random() * available.length)];
        harvested[pick] = Number(harvested[pick] || 0) - 1;
        if (harvested[pick] <= 0) delete harvested[pick];
        target.islandState.inventory.harvested = harvested;
        const myHarvested = actor.islandState.inventory.harvested || {};
        myHarvested[pick] = Number(myHarvested[pick] || 0) + 1;
        actor.islandState.inventory.harvested = myHarvested;
      }

      if (type === 'gift') {
        const pool = ['tomato', 'strawberry', 'carrot', 'apple', 'watermelon'];
        if (!pool.includes(itemType)) {
          await db.exec('ROLLBACK');
          return res.status(400).json({ error: '无效的礼物类型。' });
        }
        const myHarvested = actor.islandState.inventory.harvested || {};
        if (Number(myHarvested[itemType] || 0) <= 0) {
          await db.exec('ROLLBACK');
          return res.status(409).json({ error: '你的背包里没有这个果实。' });
        }
        myHarvested[itemType] -= 1;
        if (myHarvested[itemType] <= 0) delete myHarvested[itemType];
        actor.islandState.inventory.harvested = myHarvested;
        const his = target.islandState.inventory.harvested || {};
        his[itemType] = Number(his[itemType] || 0) + 1;
        target.islandState.inventory.harvested = his;
      }

      actor = syncIslandResources(actor);
      target = syncIslandResources(target);
      const actorUpdatedAt = Date.now();
      const targetUpdatedAt = Date.now();
      await db.run(
        `INSERT INTO user_state(uid, state_json, updated_at)
         VALUES (?, ?, ?)
         ON CONFLICT(uid) DO UPDATE SET state_json=excluded.state_json, updated_at=excluded.updated_at`,
        req.uid,
        JSON.stringify(actor),
        actorUpdatedAt
      );
      await db.run(
        `INSERT INTO user_state(uid, state_json, updated_at)
         VALUES (?, ?, ?)
         ON CONFLICT(uid) DO UPDATE SET state_json=excluded.state_json, updated_at=excluded.updated_at`,
        targetUid,
        JSON.stringify(target),
        targetUpdatedAt
      );
      await db.exec('COMMIT');
      return res.json({ ok: true });
    } catch (e) {
      await db.exec('ROLLBACK');
      throw e;
    }
  } catch (error) {
    console.error('interact error', error);
    return res.status(500).json({ error: '互动失败。' });
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

    const targetLanguageLabel = language === 'en'
      ? 'English'
      : (language === 'zh-HK' ? '繁體中文（香港）' : '简体中文');

    const systemPrompt = language === 'en'
      ? `You are a cute and empathetic "virtual pet coach". Your job is to break the user's long-term goal into small, doable micro-actions.
Return ONLY valid JSON (no markdown, no extra text). JSON must contain: { "tasks": [...], "encouragement": "..." }.`
      : (language === 'zh-HK'
        ? `你是一個可愛且充滿同理心的「虛擬寵物導師」。你的目標是把用戶的大目標拆解成「微行動」。
請只返回有效 JSON（不要 markdown、不要額外文字）。JSON 必須包含：{ "tasks": [...], "encouragement": "..." }。`
        : `你是一个可爱且充满同情心的“虚拟宠物导师”。你的目标是把用户的大目标拆解成“微行动”。
请只返回有效 JSON（不要 markdown、不要额外文字）。JSON 必须包含：{ "tasks": [...], "encouragement": "..." }。`);

    // Prompt for DeepSeek API (language-aware)
    const prompt = language === 'en'
      ? `Break the user's goal "${goal}" into 4 concrete, doable micro-action tasks.
Each task must include: taskName (fun name), duration (minutes, integer), goldReward (coins, integer).
Also include one short encouragement sentence from the pet coach as "encouragement".
IMPORTANT: taskName and encouragement must be written in ${targetLanguageLabel}.
Return JSON only. Example:
{
  "tasks": [
    { "taskName": "Warm-up micro step", "duration": 30, "goldReward": 10 },
    { "taskName": "Practice sprint", "duration": 45, "goldReward": 15 },
    { "taskName": "Deep focus block", "duration": 60, "goldReward": 20 },
    { "taskName": "Recharge", "duration": 15, "goldReward": 5 }
  ],
  "encouragement": "You’ve got this—one step at a time!"
}`
      : (language === 'zh-HK'
        ? `請將用戶的大目標「${goal}」拆解成 4 個具體、可執行的「微行動」任務。
每個任務都要包含：taskName（有趣的名字）、duration（分鐘，整數）、goldReward（金幣數，整數）。
另外請提供一句寵物導師給用戶的鼓勵話語 encouragement。
重要：taskName 和 encouragement 必須使用 ${targetLanguageLabel} 書寫；JSON 的 key 保持英文不變。
請以純 JSON 格式返回，例如：
{
  "tasks": [
    { "taskName": "學習計劃第一步", "duration": 30, "goldReward": 10 },
    { "taskName": "資料整理", "duration": 45, "goldReward": 15 },
    { "taskName": "專注衝刺", "duration": 60, "goldReward": 20 },
    { "taskName": "休息放鬆", "duration": 15, "goldReward": 5 }
  ],
  "encouragement": "你太棒了！一步步來，Pomoland 會因你的努力而更繁榮！"
}`
        : `请将用户的大目标 "${goal}" 拆解成 4 个具体、可执行的“微行动”任务。
每个任务都应包含 taskName（有趣的名字）、duration（分钟，整数）、goldReward（金币数，整数）。
此外，请提供一句宠物导师给用户的鼓励话语 encouragement。
重要：taskName 和 encouragement 必须使用 ${targetLanguageLabel} 书写；JSON 的 key 保持英文不变。
请以纯 JSON 格式返回，例如：
{
  "tasks": [
    { "taskName": "学习计划第一步", "duration": 30, "goldReward": 10 },
    { "taskName": "资料整理", "duration": 45, "goldReward": 15 },
    { "taskName": "专注冲刺", "duration": 60, "goldReward": 20 },
    { "taskName": "休息放松", "duration": 15, "goldReward": 5 }
  ],
  "encouragement": "你太棒了！一步步来，Pomoland 会因你的努力而更加繁荣！"
}`);

    const chatCompletion = await openai.chat.completions.create({
      model: 'deepseek-chat', // 使用 deepseek-chat 模型
      messages: [
        { role: 'system', content: systemPrompt },
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
    const planningSteps = language === 'en'
      ? [
        { id: 'analyze', text: 'Analyzing the goal and timeline...' },
        { id: 'research', text: 'Researching preparation materials and skill areas...' },
        { id: 'breakdown', text: 'Breaking the goal into executable daily tasks...' },
        { id: 'duration', text: 'Estimating focus duration for each task...' },
        { id: 'schedule', text: 'Generating today\'s Focus plan...' }
      ]
      : (language === 'zh-HK'
        ? [
          { id: 'analyze', text: '正在分析目標與時間安排...' },
          { id: 'research', text: '正在查找相關資料與能力模組...' },
          { id: 'breakdown', text: '正在拆解成可執行的每日任務...' },
          { id: 'duration', text: '正在估算每個任務的專注時長...' },
          { id: 'schedule', text: '正在生成今日 Focus 計劃...' }
        ]
        : [
          { id: 'analyze', text: '正在分析目标和剩余时间...' },
          { id: 'research', text: '正在查询资料和能力模块...' },
          { id: 'breakdown', text: '正在拆解可执行的每日任务...' },
          { id: 'duration', text: '正在估算每个任务的专注时长...' },
          { id: 'schedule', text: '正在生成今日 Focus 计划...' }
        ]);

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
