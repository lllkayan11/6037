const test = require('node:test');
const assert = require('node:assert/strict');
const core = require('../app.js');

test('language packs include Simplified Chinese, Traditional Chinese, and English hero copy', () => {
  const languages = core.getSupportedLanguages();
  assert.deepEqual(languages, ['zh-CN', 'zh-HK', 'en']);
  assert.equal(core.t('zh-CN', 'heroTitle'), '把专注变成自己的番茄岛');
  assert.equal(core.t('zh-HK', 'heroTitle'), '把專注變成自己的番茄島');
  assert.equal(core.t('en', 'heroTitle'), 'Turn focus into your own island');
});

test('AI planning generates localized focus tasks from a goal', async () => {
  const result = await core.generateTasks('Prepare for IELTS in 3 months', 'en');
  const tasks = result.tasks;
  assert.equal(tasks.length, 4);
  assert.equal(typeof result.encouragement, 'string'); // Check for encouragement
  assert.equal(typeof tasks[0].duration, 'number');
  assert.equal(tasks[0].duration > 0, true);
  assert.match(tasks[0].title, /.+/); // DeepSeek generated tasks might not have "Vocabulary" directly
  assert.equal(typeof tasks[0].goldReward, 'number');
  assert.equal(tasks[0].goldReward > 0, true);
  assert.ok(tasks.every((task) => task.goal === 'Prepare for IELTS in 3 months'));
});

test('AI planning exposes agent execution steps before generating tasks', async () => {
  const steps = await core.getPlanningSteps('en');
  assert.equal(steps.length, 5);
  assert.equal(steps[0].id, 'analyze');
  assert.match(steps[1].text, /research/i);
  assert.match(steps[4].text, /plan/i);
});

test('task translations can switch language while preserving goal and selection ids', async () => {
  const result = await core.generateTasks('Prepare for IELTS in 3 months', 'en');
  const tasks = result.tasks;
  const translated = core.translateTasks(tasks, 'zh-HK');
  assert.equal(translated.length, 4);
  assert.equal(translated[0].id, 'task1');
  assert.equal(translated[0].goal, 'Prepare for IELTS in 3 months');
  assert.equal(translated[0].duration, tasks[0].duration);
  assert.match(translated[0].title, /.+/);
});

test('customized tasks keep user edits when switching languages', () => {
  const tasks = [{
    id: 'task1',
    goal: 'Prepare',
    title: 'My Custom Sprint',
    notes: 'Write a custom outline first',
    description: 'Write a custom outline first',
    goldReward: 28,
    duration: 20,
    customized: true
  }];
  const translated = core.translateTasks(tasks, 'zh-HK');
  assert.equal(translated[0].title, 'My Custom Sprint');
  assert.equal(translated[0].notes, 'Write a custom outline first');
});

test('task gold reward scales with duration and complexity', () => {
  const shortReward = core.calculateTaskGold(15, 'Quick review', 'Review one short concept.');
  const longReward = core.calculateTaskGold(45, 'Deep reading sprint', 'Review several hard passages and summarize key takeaways.');
  assert.equal(longReward > shortReward, true);
});

test('goal category inference changes with different user goals', () => {
  assert.equal(core.inferGoalCategory('Three months IELTS prep'), 'study');
  assert.equal(core.inferGoalCategory('Ship a product prototype this week'), 'project');
  assert.equal(core.inferGoalCategory('Build a morning workout habit'), 'habit');
});

test('API base URL prefers runtime config and trims trailing slashes', () => {
  assert.equal(core.resolveApiBaseUrl({ apiBaseUrl: 'https://api.example.com///' }), 'https://api.example.com');
  assert.equal(
    core.resolveApiBaseUrl({ config: { apiBaseUrl: 'https://worker.example.com/proxy/' } }),
    'https://worker.example.com/proxy'
  );
  assert.equal(core.resolveApiBaseUrl({}), '');
});

test('selecting a task moves it into the focus state', async () => {
  const state = core.createInitialState();
  const result = await core.generateTasks('三个月准备雅思考试', 'zh-CN');
  const tasks = result.tasks;
  const next = core.selectTask(state, tasks[1]);
  assert.equal(next.selectedTask.id, tasks[1].id);
  assert.equal(next.currentView, 'focus');
});

test('claiming a reward updates resources and marks the focus session complete', () => {
  const state = core.createInitialState();
  const next = core.claimReward(state, {
    coins: 40,
    seeds: 1,
    water: 2,
    chances: 1,
    decoration: 'Solar dock'
  });
  assert.equal(next.resources.coins, 160);
  assert.equal(next.resources.seeds, 3);
  assert.equal(next.resources.water, 5);
  assert.equal(next.resources.chances, 2);
  assert.equal(next.focusCompleted, true);
  assert.equal(next.decorations.includes('Solar dock'), true);
});

test('completing focus marks the task done and resets timer state', () => {
  const state = core.selectTask(core.createInitialState(), core.generateTasks('Prepare for IELTS in 3 months', 'en')[0]);
  const result = core.completeFocusSession(state, { totalSeconds: 20, remainingSeconds: 11 });
  assert.equal(result.state.focusCompleted, true);
  assert.equal(result.state.selectedTask.completed, true);
  assert.equal(result.timer.remainingSeconds, 0);
  assert.equal(result.timer.isRunning, false);
});

test('timer state keeps counting after resume and reaches completion by clock time', () => {
  const base = core.createTimerState(90, 'task1');
  const started = core.startTimerState(base, 1_000);
  const synced = core.syncTimerState(started, 31_000);
  assert.equal(synced.remainingSeconds, 60);
  assert.equal(synced.isRunning, true);

  const paused = core.pauseTimerState(synced, 31_000);
  assert.equal(paused.isRunning, false);
  assert.equal(paused.remainingSeconds, 60);

  const resumed = core.startTimerState(paused, 41_000);
  const finished = core.syncTimerState(resumed, 101_500);
  assert.equal(finished.remainingSeconds, 0);
  assert.equal(finished.completed, true);
  assert.equal(finished.isRunning, false);
});

test('reward bundle scales with effort and only returns supported fields', () => {
  const sequence = [0.1, 0.7, 0.4, 0.8, 0.9];
  let index = 0;
  const reward = core.buildRewardBundle('zh-CN', 1800, () => sequence[index++]);
  assert.equal(reward.coins > 0, true);
  assert.equal(reward.seeds, 2);
  assert.equal(reward.water, 2);
  assert.equal(reward.chances, 1);
  assert.equal(reward.decoration, core.t('zh-CN', 'rewardDecoration'));
});

test('island actions spend resources and advance island progress', () => {
  const state = core.createInitialState();
  const planted = core.applyIslandAction(state, 'plant');
  assert.equal(planted.resources.seeds, 1);
  assert.equal(planted.islandLevel, 2);
  assert.equal(planted.cropStage, 2);
  assert.match(planted.lastMessage.en, /planted/i);

  const watered = core.applyIslandAction(planted, 'water');
  assert.equal(watered.resources.water, 2);
  assert.equal(watered.islandHydration, 1);

  const fed = core.applyIslandAction(watered, 'feed');
  assert.equal(fed.resources.coins, 100);
  assert.equal(fed.petMood, 'happy');
});

test('island visual state exposes clear growth and hydration stages', () => {
  const state = core.createInitialState();
  assert.deepEqual(core.getIslandVisualState(state), {
    level: 1,
    growthStage: 'starter',
    cropVisual: 'seedling',
    plantCount: 1,
    hydrationStage: 'dry',
    petMood: 'sleepy',
    petActivity: 'resting',
    decorationStage: 'plain',
    visibleDecorations: [],
    decorationTokens: [],
    hasDock: false
  });

  const grown = core.applyIslandAction(core.applyIslandAction(state, 'plant'), 'plant');
  const watered = core.applyIslandAction(grown, 'water');
  const fed = core.applyIslandAction(watered, 'feed');
  const decorated = core.applyIslandAction(fed, 'decorate');

  assert.deepEqual(core.getIslandVisualState(decorated), {
    level: 4,
    growthStage: 'bloom',
    cropVisual: 'flowering',
    plantCount: 3,
    hydrationStage: 'fresh',
    petMood: 'happy',
    petActivity: 'celebrating',
    decorationStage: 'lit',
    visibleDecorations: ['Shell lamp'],
    decorationTokens: ['shell-lamp'],
    hasDock: true
  });
});

test('island visual state can show fruiting crops and layered decorations', () => {
  const funded = core.claimReward(core.createInitialState(), {
    coins: 120,
    seeds: 2,
    water: 0,
    chances: 0,
    decoration: 'Solar dock'
  });
  const planted = ['plant', 'plant', 'plant'].reduce(
    (state, action) => core.applyIslandAction(state, action),
    funded
  );
  const decorated = ['decorate', 'decorate', 'decorate'].reduce(
    (state, action) => core.applyIslandAction(state, action),
    planted
  );

  const visual = core.getIslandVisualState(decorated);
  assert.equal(visual.cropVisual, 'fruiting');
  assert.equal(visual.plantCount, 4);
  assert.equal(visual.decorationStage, 'festival');
  assert.deepEqual(visual.visibleDecorations, ['Solar dock', 'Shell lamp', 'Study flag', 'Harbor lights']);
  assert.deepEqual(visual.decorationTokens, ['solar-dock', 'shell-lamp', 'study-flag', 'harbor-lights']);
});

test('localized bonus dock is recognized as a dock decoration', () => {
  const state = core.claimReward(core.createInitialState(), {
    coins: 0,
    seeds: 0,
    water: 0,
    chances: 0,
    decoration: core.t('zh-CN', 'rewardDecoration')
  });

  const visual = core.getIslandVisualState(state);
  assert.equal(visual.decorationStage, 'dock');
  assert.deepEqual(visual.decorationTokens, ['solar-dock']);
  assert.equal(visual.hasDock, true);
});

test('island actions include cost and purpose for classroom explanation', () => {
  const actions = core.getIslandActions('en');
  assert.equal(actions.length, 4);
  assert.deepEqual(actions.map((action) => action.id), ['plant', 'water', 'feed', 'decorate']);
  assert.match(actions[0].purpose, /crop/i);
  assert.match(actions[1].cost, /water/i);
  assert.match(actions[2].purpose, /pet/i);
  assert.match(actions[3].effect, /decoration/i);
});

test('check-in highlights today and increases streak only once', () => {
  const state = core.createInitialState();
  const first = core.recordCheckIn(state, '2026-05-13');
  const second = core.recordCheckIn(first, '2026-05-13');
  assert.equal(first.streak, 6);
  assert.equal(second.streak, 6);
  assert.deepEqual(second.checkIns, ['2026-05-13']);
});

test('next task skips completed entries and returns the next actionable task', () => {
  const base = core.createInitialState();
  const tasks = [
    { id: 'task1', title: 'A', completed: true },
    { id: 'task2', title: 'B', completed: false },
    { id: 'task3', title: 'C', completed: false }
  ];
  const state = { ...base, tasks };
  assert.equal(core.getNextTask(state).id, 'task2');
});

test('claiming a milestone reward grants resources only once', () => {
  const state = { ...core.createInitialState(), streak: 7, milestoneClaims: [] };
  const claimed = core.claimMilestoneReward(state, 7);
  assert.equal(claimed.resources.coins, 155);
  assert.equal(claimed.streakProtection, 2);
  assert.deepEqual(claimed.milestoneClaims, [7]);

  const claimedAgain = core.claimMilestoneReward(claimed, 7);
  assert.equal(claimedAgain.resources.coins, 155);
  assert.deepEqual(claimedAgain.milestoneClaims, [7]);
});

test('using streak protection consumes one card and activates shield once', () => {
  const state = core.createInitialState();
  const activated = core.useStreakProtection(state);
  assert.equal(activated.streakProtection, 0);
  assert.equal(activated.streakShieldActive, true);

  const again = core.useStreakProtection(activated);
  assert.equal(again.streakProtection, 0);
  assert.equal(again.streakShieldActive, true);
});

test('friend actions consume chances when needed and update status', () => {
  const state = core.createInitialState();
  const helped = core.performFriendAction(state, 'mia', 'help');
  assert.equal(helped.resources.chances, 0);
  assert.match(helped.friendMessages.mia.en, /watered/i);

  const blocked = core.performFriendAction(helped, 'leo', 'steal');
  assert.equal(blocked.resources.chances, 0);
  assert.match(blocked.friendMessages.leo.en, /No game chances/);
});

test('friend visit details provide a richer island preview without consuming chances', () => {
  const state = core.createInitialState();
  const visited = core.performFriendAction(state, 'noah', 'visit');
  const details = core.getFriendVisitDetails('noah', 'en');
  assert.equal(visited.resources.chances, 1);
  assert.equal(details.name, 'Noah');
  assert.equal(details.color, 'sun');
  assert.match(details.note, /dock/i);
});

test('report data summarizes focus progress for the selected language', () => {
  const state = core.recordCheckIn(core.createInitialState(), '2026-05-13');
  const report = core.buildReport(state, 'en');
  assert.equal(report.days.length, 7);
  assert.equal(report.streak, 6);
  assert.match(report.summary, /Pomoland/);
});
