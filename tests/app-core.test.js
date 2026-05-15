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
  assert.equal(tasks[0].duration, 25);
  assert.match(tasks[0].title, /.+/); // DeepSeek generated tasks might not have "Vocabulary" directly
  assert.match(tasks[0].description, /奖励金币: \d+/); // Check for gold reward in description
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
  assert.equal(translated[0].duration, 25);
  assert.match(translated[0].title, /.+/);
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
  assert.equal(result.timer.remainingSeconds, 0);
  assert.equal(result.timer.isRunning, false);
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
