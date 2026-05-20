# 6037-group

## Pomoland Deploy Notes

- `npm start`: runs the local Pomoland app on one port and serves both the static site and `/api/*`.
- `npm test`: runs the focused Node test suite used by GitHub Actions.
- GitHub Pages deploys the static site from the repository root.
- To connect the public Pages site to a hosted AI backend, set the repository variable `POMOLAND_API_BASE_URL`.
- The deployed workflow writes `runtime-config.js` from that variable before publishing.

## Cloud Save (UID + Password)

This repo supports a lightweight cloud-save system using SQLite:

- Register: `POST /api/auth/register` with `{ uid: "12345678", password: "****" }`
- Login: `POST /api/auth/login` with `{ uid, password }`
- Load state: `GET /api/state` (Authorization: Bearer TOKEN)
- Save state: `POST /api/state` with `{ state: {...} }` (Authorization: Bearer TOKEN)

### Render note (important)

If you want save data to survive deploys/restarts on Render, attach a **Persistent Disk**
and set `SQLITE_PATH` to a path on that disk (e.g. `/var/data/pomoland.db`).

## AI 任务拆解 — Prompt 优化说明

`POST /api/generate-tasks` 的提示词在 server.js 里做了一轮系统性优化,目标是让 AI 拆出来的任务**更可执行、更有递进逻辑、鼓励语更人性化**。改动只在后端 server.js,前端零修改即可消费新字段。

### 1. 任务可行性 — SMART 硬约束

每个任务必须同时满足:
- **Specific** 任务名含「动词+对象+量化」,禁止"努力学一下""加油写"这类空话
- **Measurable** notes 里写明完成标准,用户能自检"做完了没"
- **Achievable** 单任务 ≤ 60 分钟,整套总时长 90–180 分钟(一天精力预算)
- **Relevant** 每个任务必须明显推进总目标
- **Time-bound** duration 按任务类型设定:深度阅读 30–45、机械操作 15–20、创意构思 25–40、短休息 5–10

### 2. 递进逻辑 — 由 AI 根据目标领域自选

不再固定输出 4 个并列任务。AI 先识别目标领域,再选最贴合的推进模板:

| 领域 | 推进逻辑 |
|---|---|
| 学习类 | 复习巩固 → 新知输入 → 主动练习 → 复盘反思 |
| 写作类 | 构思框架 → 草稿主体 → 润色细节 → 自检定稿 |
| 项目类 | 调研需求 → 设计方案 → 执行落地 → 验收检查 |
| 创意类 | 灵感采集 → 草图构思 → 深化细节 → 整理定稿 |
| 运动类 | 热身准备 → 主体训练 → 强度冲刺 → 冷却放松 |
| 习惯养成 | 启动准备 → 核心动作 → 巩固重复 → 记录追踪 |

后一个任务建立在前一个的成果上,允许 AI 在 6 类之外自创更合适的逻辑。

### 3. 任务数量 — 按目标复杂度动态 3–6 个

- 简单/单一目标 → 3 个
- 常规目标 → 4 个
- 复杂/多维目标 → 5–6 个

### 4. 新增任务字段(前端已支持,零侵入)

```json
{
  "taskName": "动词+对象+量化",
  "duration": 5-60,
  "goldReward": 整数,
  "notes": "15-40 字执行说明 + 完成标准",
  "priority": "high" | "medium" | "low"
}
```

`normalizeTask`(app.js)会自动消费 `notes`、`priority`、`dueDate` 等字段。

### 5. 金币奖励规则化

| 时长 | 基础金币 |
|---|---|
| 5–15 min | 3–6 |
| 20–30 min | 7–12 |
| 35–50 min | 13–20 |
| 55–60 min | 21–25 |

高认知负荷/高难度任务额外 +20–30%。

### 6. 温和反问机制

当用户输入的目标极短或严重含糊(1–5 个字符,如「学习」「写作」「跑步」),AI 仍会给出 3 个轻量、探索性的任务(不会拒绝拆解),并在 `encouragement` 的第 3 句**自然温柔地反问一句关键问题**,引导用户下次给出更精准的目标。范例:

- 目标=「学习」 → "对了,你最近想攻克的是哪门课或哪种技能呢?告诉我,下次我可以拆得更贴近你。"
- 目标=「写作」 → "顺便问一句,你想写的是论文、小说、还是日常随笔?我下次可以为你定制路径。"
- 目标=「跑步」 → "想多了解一下你——是为了健康打底,还是在准备某场赛事?下次告诉我,我陪你走得更准。"

目标超过 5 个字符或带有领域线索(如「30 天养成晨跑习惯」「三个月内通过雅思口语 7 分」)时,**不会反问**,直接温柔鼓励。这条规则被同时写在第 5 条(兜底:目标短也要给任务)和第 8 条(具体的反问范例)里,并在输出格式说明里再次点名,避免被其他规则覆盖。

### 7. encouragement 人性化规则

像一只坐在用户身边的小番茄宠物,用温柔陪伴的口吻说话:
- 先共情或承认目标难度,再聊今天这几步
- 用「我」和「你」建立连接(如"我陪你""你已经...")
- **禁止命令词**:加油 / 坚持 / 一定要 / 必须 / 务必 / 赶紧
- **禁止过度承诺**:轻松完成 / 一定能 / 很简单 / 绝对没问题
- 不预测未来结果,只聚焦今天这一小步
- 可提到第一个任务的具体名字(避免模板感)
- 2–3 句自然流畅,不喊口号、不用 emoji

### 8. 其他配置

- `max_tokens` 从 1000 提到 2000,适应 6 个任务 + notes 的更长输出
- `temperature: 0.7`,在稳定性和多样性之间取平衡
- 三种语言(`zh-CN`、`zh-HK`、`en`)的 system prompt 同步维护,规则一致

