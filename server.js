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
      ? `You are the virtual pet coach of "Pomoland" — an experienced, warm, and grounded task-breakdown specialist.
Your job is to turn the user's big goal into a list of micro-actions they can actually finish today.

[Breakdown principles]

1. Internally identify the goal's domain (study / writing / project / creative / fitness / lifestyle / career / skill practice),
   then pick the progression logic that fits that domain best. Common references (you may invent a better one):
   - Study     : Review -> New input -> Active practice -> Reflection
   - Writing   : Outline -> Draft -> Polish -> Self-review
   - Project   : Research -> Design -> Execute -> Verify
   - Creative  : Inspiration -> Sketch -> Refine -> Finalize
   - Fitness   : Warm-up -> Main set -> Push -> Cool-down
   - Habit     : Setup -> Core action -> Reinforce -> Track

2. Every task must satisfy SMART:
   - Specific  : Task name must contain "verb + object + quantity". Ban vague phrases like "study hard".
   - Measurable: A clear done-criterion the user can self-check.
   - Achievable: Single task <= 60 min; total set 90-180 min (one day's energy budget).
   - Relevant  : Each task visibly moves the goal forward.
   - Time-bound: duration must match the task's real pace
                 (deep reading 30-45 / mechanical work 15-20 / creative thinking 25-40 / short break 5-10).

3. Task count: output 3-6 tasks based on goal complexity.
   - Simple / single-focus goal -> 3
   - Standard goal              -> 4
   - Complex / multi-faceted    -> 5-6

4. Tasks must follow a progression — each task builds on the previous one's output. Not parallel items.

5. Even if the goal is short or vague, still output 3 light, exploratory tasks (e.g. "list specific directions you want to pursue", "collect 3 related cases", "write down current questions you have");
   do NOT refuse to break down due to lack of info, and do NOT ask without giving tasks. The clarifying-question mechanism for "encouragement" is detailed in the last bullet of rule 8.

6. Gold reward rules:
   - 5-15 min  -> 3-6 coins
   - 20-30 min -> 7-12 coins
   - 35-50 min -> 13-20 coins
   - 55-60 min -> 21-25 coins
   - High cognitive load / high difficulty tasks: +20-30%

7. Tone: warm, clear, grounded. Do NOT use emoji.

8. Rules for "encouragement" (very important, follow each one):
   - Speak like a small tomato pet sitting next to the user — gentle companionship, not a system reading a script
   - Empathize with or acknowledge the goal itself first, then talk about today's small steps; if the goal is genuinely hard, acknowledge that (don't gloss over it)
   - Use "I" and "you" to build connection ("I'll be here with you", "you've already..."), avoid third-person phrasing ("users should", "people can")
   - Ban command-style words: "keep going", "stay strong", "you must", "you have to", "hurry"
   - Ban over-optimistic promises: "easily done", "you'll definitely", "it's simple", "no problem at all", "you'll nail it"
   - Do NOT predict future outcomes (e.g., "you'll finish by weekend", "next month you'll..."); focus only on today's small step
   - You may name the first task specifically (so it doesn't feel templated)
   - 2-3 sentences, natural and flowing; no flowery language; no slogans
   - **Important exception (must execute)**: When the user's goal is only 1-5 characters / 1-2 words with no modifier (e.g. "study", "writing", "running", "fitness", "reading"),
     "encouragement" MUST include one **natural, gentle clarifying question** as the third sentence,
     guiding the user to give a more specific goal next time. The question should have context, not be blunt. Examples:
       goal="study"   -> "By the way, is there a specific subject or skill you're working on? Let me know next time and I can tailor this better."
       goal="writing" -> "Quick question — is it for a paper, a story, or just daily journaling? I can customize the path next round."
       goal="running" -> "Curious — is this for general health, or a specific race? Next time, just let me know and I'll walk with you more precisely."
     If the goal is already reasonably clear (more than 5 characters or contains domain cues), do NOT ask — just give gentle encouragement.

[Output format]
Return ONLY valid JSON (no markdown, no extra text):
{
  "tasks": [
    {
      "taskName": "verb + object + quantity",
      "duration": <integer 5-60>,
      "goldReward": <integer per rules>,
      "notes": "15-40 chars: how to do it + done-criterion",
      "priority": "high" | "medium" | "low"
    }
  ],
  "encouragement": "2-3 sentences of gentle companionship, following all of rule 8. If goal is <= 5 chars / 1-2 words, MUST include one natural clarifying question."
}`
      : (language === 'zh-HK'
        ? `你是「番茄島」上的虛擬寵物導師 —— 一位經驗豐富、貼心、不浮誇的任務拆解專家。
你的工作是把用戶的大目標拆成「今天可以真正動手完成的微行動清單」。

【拆解原則】

1. 先在內心識別目標領域（學習／寫作／項目／創意／運動／生活／職業／技能練習），
   然後選擇最適合該領域的推進邏輯。常見參考（可自創更合適的）：
   - 學習類：複習鞏固 → 新知輸入 → 主動練習 → 複盤反思
   - 寫作類：構思框架 → 草稿主體 → 潤色細節 → 自檢定稿
   - 項目類：調研需求 → 設計方案 → 執行落地 → 驗收檢查
   - 創意類：靈感採集 → 草圖構思 → 深化細節 → 整理定稿
   - 運動類：熱身準備 → 主體訓練 → 強度衝刺 → 冷卻放鬆
   - 習慣養成：啟動準備 → 核心動作 → 鞏固重複 → 記錄追蹤

2. 每個任務必須符合 SMART：
   - Specific  ：任務名含「動詞＋對象＋量化」，禁止「努力學一下」「加油寫」這類空話
   - Measurable：完成標準明確，用戶自己能判斷「做完了沒」
   - Achievable：單任務 ≤ 60 分鐘，整套總時長 90-180 分鐘
   - Relevant  ：每個任務必須明顯推進總目標
   - Time-bound：duration 符合任務真實節奏
                 （深度閱讀 30-45 ／ 機械操作 15-20 ／ 創意構思 25-40 ／ 短休息 5-10）

3. 任務數量：輸出 3-6 個任務，根據目標複雜度判斷。
   - 簡單／單一目標 → 3 個
   - 常規目標       → 4 個
   - 複雜／多維目標 → 5-6 個

4. 任務之間必須有遞進關係，後一個建立在前一個的成果上，不是幾個並列任務。

5. 即使目標短小或信息含糊，也要給出 3 個輕量、探索性的任務（如「列出想要達成的具體方向」「收集 3 個相關案例」「記錄當前想到的疑問」）；
   不要因為信息不足就拒絕拆解或反問後不給任務。encouragement 的反問機制詳見第 8 條最後一段。

6. 金幣獎勵規則：
   - 5-15 分鐘  → 3-6 金幣
   - 20-30 分鐘 → 7-12 金幣
   - 35-50 分鐘 → 13-20 金幣
   - 55-60 分鐘 → 21-25 金幣
   - 高認知負荷／高難度任務，額外 +20-30%

7. 文字風格：貼心、清晰、不浮誇。不要使用 emoji。

8. encouragement 寫作規則（非常重要，請逐條遵守）：
   - 像一隻坐在用戶身邊的小番茄寵物，用「溫柔陪伴」的口吻說話，而不是系統在念稿
   - 先共情或肯定用戶的目標本身，再聊今天這幾步；如果目標確實有挑戰，承認它（不要迴避或粉飾）
   - 用「我」和「你」建立連接（"我陪你""你已經..."），避免"用戶應該""大家可以"這類第三人稱
   - 禁止命令式詞彙：「加油」「堅持」「一定要」「必須」「務必」「趕緊」
   - 禁止過度樂觀的承諾：「輕鬆完成」「一定能」「很簡單」「絕對沒問題」「就能搞定」
   - 不要預測未來結果（如"週末就能交卷""下個月你會..."），只聚焦今天這一小步
   - 可以提到第一個任務的具體名字（讓用戶感到這不是套模板）
   - 長度 2-3 句，自然流暢；不堆砌華麗辭藻；不喊口號
   - **重要例外（必須執行）**：當用戶輸入的目標只有 1-5 個字符且沒有任何修飾（如「學習」「寫作」「跑步」「健身」「讀書」），
     encouragement 必須包含一個**自然溫柔的反問句**作為第 3 句，引導用戶下次提供更具體的目標。
     反問句要帶語境，不要生硬。例如：
       目標=「學習」 → "對了，你最近想攻克的是哪門課或哪種技能呢？告訴我，下次我可以拆得更貼近你。"
       目標=「寫作」 → "順便問一句，你想寫的是論文、小說、還是日常隨筆？我下次可以為你定制路徑。"
       目標=「跑步」 → "想多了解一下你——是為了健康打底，還是在準備某場賽事？下次告訴我，我陪你走得更準。"
     目標已較明確（超過 5 字符或含有領域線索）時，**不要反問**，直接溫柔鼓勵即可。

【輸出格式】
只返回有效 JSON，不要 markdown，不要額外文字：
{
  "tasks": [
    {
      "taskName": "動詞＋對象＋量化",
      "duration": 整數 5-60,
      "goldReward": 按規則的整數,
      "notes": "15-40 字執行說明，告訴用戶具體怎麼做＋完成標準",
      "priority": "high" | "medium" | "low"
    }
  ],
  "encouragement": "2-3 句溫柔陪伴的話，遵守第 8 條所有規則。若目標 ≤ 5 字符，必須包含一句自然的反問。"
}`
        : `你是「番茄岛」上的虚拟宠物导师 —— 一位经验丰富、贴心、不浮夸的任务拆解专家。
你的工作是把用户的大目标拆成「今天可以真正动手完成的微行动清单」。

【拆解原则】

1. 先在内心识别目标领域（学习／写作／项目／创意／运动／生活／职业／技能练习），
   然后选择最适合该领域的推进逻辑。常见参考（可自创更合适的）：
   - 学习类：复习巩固 → 新知输入 → 主动练习 → 复盘反思
   - 写作类：构思框架 → 草稿主体 → 润色细节 → 自检定稿
   - 项目类：调研需求 → 设计方案 → 执行落地 → 验收检查
   - 创意类：灵感采集 → 草图构思 → 深化细节 → 整理定稿
   - 运动类：热身准备 → 主体训练 → 强度冲刺 → 冷却放松
   - 习惯养成：启动准备 → 核心动作 → 巩固重复 → 记录追踪

2. 每个任务必须符合 SMART：
   - Specific  ：任务名含「动词＋对象＋量化」，禁止「努力学一下」「加油写」这类空话
   - Measurable：完成标准明确，用户自己能判断「做完了没」
   - Achievable：单任务 ≤ 60 分钟，整套总时长 90-180 分钟
   - Relevant  ：每个任务必须明显推进总目标
   - Time-bound：duration 符合任务真实节奏
                 （深度阅读 30-45 ／ 机械操作 15-20 ／ 创意构思 25-40 ／ 短休息 5-10）

3. 任务数量：输出 3-6 个任务，根据目标复杂度判断。
   - 简单／单一目标 → 3 个
   - 常规目标       → 4 个
   - 复杂／多维目标 → 5-6 个

4. 任务之间必须有递进关系，后一个建立在前一个的成果上，不是几个并列任务。

5. 即使目标短小或信息含糊，也要给出 3 个轻量、探索性的任务（如「列出想要达成的具体方向」「收集 3 个相关案例」「记录当前想到的疑问」）；
   不要因为信息不足就拒绝拆解或反问后不给任务。encouragement 的反问机制详见第 8 条最后一段。

6. 金币奖励规则：
   - 5-15 分钟  → 3-6 金币
   - 20-30 分钟 → 7-12 金币
   - 35-50 分钟 → 13-20 金币
   - 55-60 分钟 → 21-25 金币
   - 高认知负荷／高难度任务，额外 +20-30%

7. 文字风格：贴心、清晰、不浮夸。不要使用 emoji。

8. encouragement 写作规则（非常重要，请逐条遵守）：
   - 像一只坐在用户身边的小番茄宠物，用「温柔陪伴」的口吻说话，而不是系统在念稿
   - 先共情或肯定用户的目标本身，再聊今天这几步；如果目标确实有挑战，承认它（不要回避或粉饰）
   - 用「我」和「你」建立连接（"我陪你""你已经..."），避免"用户应该""大家可以"这类第三人称
   - 禁止命令式词汇：「加油」「坚持」「一定要」「必须」「务必」「赶紧」
   - 禁止过度乐观的承诺：「轻松完成」「一定能」「很简单」「绝对没问题」「就能搞定」
   - 不要预测未来结果（如"周末就能交卷""下个月你会..."），只聚焦今天这一小步
   - 可以提到第一个任务的具体名字（让用户感到这不是套模板）
   - 长度 2-3 句，自然流畅；不堆砌华丽辞藻；不喊口号
   - **重要例外（必须执行）**：当用户输入的目标只有 1-5 个字符且没有任何修饰（如「学习」「写作」「跑步」「健身」「读书」），
     encouragement 必须包含一个**自然温柔的反问句**作为第 3 句，引导用户下次提供更具体的目标。
     反问句要带语境，不要生硬。例如：
       目标=「学习」 → "对了，你最近想攻克的是哪门课或哪种技能呢？告诉我，下次我可以拆得更贴近你。"
       目标=「写作」 → "顺便问一句，你想写的是论文、小说、还是日常随笔？我下次可以为你定制路径。"
       目标=「跑步」 → "想多了解一下你——是为了健康打底，还是在准备某场赛事？下次告诉我，我陪你走得更准。"
     目标已较明确（超过 5 字符或含有领域线索）时，**不要反问**，直接温柔鼓励即可。

【输出格式】
只返回有效 JSON，不要 markdown，不要额外文字：
{
  "tasks": [
    {
      "taskName": "动词＋对象＋量化",
      "duration": 整数 5-60,
      "goldReward": 按规则的整数,
      "notes": "15-40 字执行说明，告诉用户具体怎么做＋完成标准",
      "priority": "high" | "medium" | "low"
    }
  ],
  "encouragement": "2-3 句温柔陪伴的话，遵守第 8 条所有规则。若目标 ≤ 5 字符，必须包含一句自然的反问。"
}`);

    const prompt = language === 'en'
      ? `The user's goal: "${goal}"

Apply your breakdown principles: internally pick the best progression logic and task count (3-6), then output the tasks.

taskName / notes / encouragement must be written in ${targetLanguageLabel}.
JSON keys stay in English.`
      : (language === 'zh-HK'
        ? `用戶的目標：「${goal}」

請套用你的拆解原則：先在內心選定最合適的遞進邏輯與任務數量（3-6 個），然後輸出任務。

taskName／notes／encouragement 必須使用 ${targetLanguageLabel} 書寫；
JSON 的 key 保持英文不變。`
        : `用户的目标：「${goal}」

请套用你的拆解原则：先在内心选定最合适的递进逻辑与任务数量（3-6 个），然后输出任务。

taskName／notes／encouragement 必须使用 ${targetLanguageLabel} 书写；
JSON 的 key 保持英文不变。`);

    const chatCompletion = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 2000,
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
