const PomolandCore = (() => {
  const LANGUAGE_ORDER = ['zh-CN', 'zh-HK', 'en'];

  const COPY = {
    'zh-CN': {
      languageName: '简体中文',
      heroTitle: '把专注变成自己的番茄岛',
      heroLead: 'AI 帮你拆解目标，Focus Mode 帮你进入番茄钟，每一次完成都会变成 Bonus，继续建设 Pomoland。',
      launchDemo: 'Launch Demo',
      viewJourney: '查看流程',
      navJourney: 'Journey',
      navFeatures: 'Features',
      navAI: 'AI Layer',
      heroBadge: 'AI Focus Game',
      statFocus: '今日专注',
      statStreak: '连续打卡',
      statIsland: '岛屿等级',
      previewTask: 'IELTS 词汇冲刺',
      previewBonus: 'Bonus 已解锁',
      previewIsland: '番茄苗正在生长',
      journeyTitle: '一个让用户愿意回来的专注闭环',
      journeyLead: '从大目标到每日行动，再到奖励、建设和社交反馈，Pomoland 把效率工具变成持续养成体验。',
      stepPlan: 'AI 拆解目标',
      stepFocus: '进入 Focus Mode',
      stepReward: '领取 Bonus',
      stepBuild: '建设 Pomoland',
      stepReturn: '明天继续打卡',
      featuresTitle: '功能完整，但演示路径清晰',
      featureAI: 'AI Task Planning',
      featureAIDesc: '把考试、项目、习惯目标拆成可执行的每日任务。',
      featureFocus: 'Focus Mode',
      featureFocusDesc: '支持 Demo 快进和真实 25/30/45 分钟番茄钟。',
      featureIsland: 'Pomoland Island',
      featureIslandDesc: '用水滴、种子和金币种植、浇水、喂养和装饰。',
      featureSocial: 'Friends',
      featureSocialDesc: '参观好友岛屿，帮忙浇水，或用游戏机会偷取果实。',
      featureReport: 'Report',
      featureReportDesc: '用 7 天趋势、完成率和 AI 周报展示成长。',
      aiTitle: 'AI 不抢戏，只推动行动',
      aiGoal: '目标拆解',
      aiGoalDesc: '把长期目标转换成每周和每日 Focus 任务。',
      aiNudge: '防拖延干预',
      aiNudgeDesc: '连续未完成时降低任务难度并生成鼓励文案。',
      aiReport: '成长总结',
      aiReportDesc: '根据打卡、专注和奖励数据生成周报。',
      ctaTitle: '准备好演示 Pomoland 的完整闭环',
      ctaLead: '进入工作台后可以从 AI 拆任务一路演示到 Bonus 和岛屿建设。',
      workspaceTitle: 'Pomoland Demo',
      today: 'Today / AI Plan',
      focusMode: 'Focus Mode',
      island: 'Pomoland Island',
      checkIn: 'Check-in',
      friends: 'Friends',
      report: 'Report',
      goalLabel: '输入一个长期目标',
      goalPlaceholder: '例如：三个月准备雅思考试',
      aiButton: '帮你制定计划',
      aiLoading: 'AI 正在拆解目标...',
      agentIdle: '点击按钮后，Pomoland Agent 会展示规划过程。',
      agentTitle: 'Pomoland Agent 正在执行',
      agentComplete: '规划完成，已生成今日 Focus 任务。',
      agentStepAnalyze: '正在分析目标和剩余时间...',
      agentStepResearch: '正在查询备考资料和能力模块...',
      agentStepBreakdown: '正在拆解可执行的每日任务...',
      agentStepDuration: '正在估算每个任务的专注时长...',
      agentStepSchedule: '正在生成今日 Focus 计划...',
      generatedPlan: 'AI 生成的今日计划',
      selectTask: '选择任务',
      selectedTask: '当前任务',
      noTask: '还没有选择任务',
      start: '开始',
      pause: '暂停',
      reset: '重置',
      completeDemo: '演示完成',
      demo20: 'Demo 20s',
      min25: '25m',
      min30: '30m',
      min45: '45m',
      timerReady: '选择任务后开始 Focus Mode',
      bonusTitle: 'Bonus 已掉落',
      bonusLead: '这次专注转化成了新的岛屿资源。',
      claimBonus: 'Claim Bonus',
      coins: '金币',
      seeds: '种子',
      water: '水滴',
      chances: '游戏机会',
      plant: 'Plant',
      waterAction: 'Water',
      feed: 'Feed',
      decorate: 'Decorate',
      plantCost: '消耗 1 个种子',
      plantPurpose: '种下新的作物，让岛上出现新的成长目标。',
      plantEffect: '新增番茄苗，作物阶段提升。',
      waterCost: '消耗 1 个水滴',
      waterPurpose: '给已有作物浇水，让它进入更健康的成长状态。',
      waterEffect: '水面变亮，作物出现水润闪光。',
      feedCost: '消耗 20 金币',
      feedPurpose: '喂养岛上的小宠物，提高岛屿活跃度。',
      feedEffect: '宠物醒来，岛屿等级提升。',
      decorateCost: '消耗 30 金币',
      decoratePurpose: '放置码头、灯具等装饰，让 Pomoland 更有展示感。',
      decorateEffect: '解锁岛屿装饰。',
      islandStatus: '岛屿状态',
      checkInTitle: '打卡与连胜',
      streak: '连续天数',
      protection: '连胜保护卡',
      milestone: '里程碑奖励',
      friendsTitle: '好友岛屿',
      help: 'Help Water',
      visit: 'Visit',
      steal: 'Steal Fruit',
      visitIslandTitle: '参观好友岛屿',
      visitFocusLabel: '最近专注',
      visitMoodLabel: '岛屿状态',
      visitResourcesLabel: '可互动资源',
      visitClose: '关闭参观',
      reportTitle: '成长报告',
      focusTrend: '7 天专注趋势',
      completionRate: '任务完成率',
      aiSummary: 'AI 周报',
      defaultGoal: '三个月准备雅思考试',
      task1: '词汇冲刺',
      task1Desc: '复习高频词 40 个，并记录 5 个易错词。',
      task2: '听力跟练',
      task2Desc: '完成一段 30 分钟听力精听，标记薄弱题型。',
      task3: '阅读计时训练',
      task3Desc: '用 45 分钟完成一组阅读，并复盘错题原因。',
      task4: '写作提纲',
      task4Desc: '为 Task 2 写 3 个论点和例子。',
      rewardDecoration: '太阳码头',
      weeklySummary: 'Pomoland 本周显示你更容易在下午进入专注。建议下周把长任务拆成 25 分钟块，并优先完成听力训练。',
      noChance: '游戏机会不足，先完成一次 Focus Mode 再来互动。',
      helpedMia: '你帮 Mia 浇水了，双方都获得了金币。',
      stoleLeo: '你从 Leo 的岛上偷到一个果实，但明天要记得回访。',
      visitedNoah: '你参观了 Noah 的岛屿，发现了新的装饰灵感。',
      friendMiaMood: '水滴充足，番茄田很稳定',
      friendLeoMood: '果实成熟，但小心被发现',
      friendNoahMood: '新码头刚建好，适合参观',
      friendMiaNote: 'Mia 的岛缺一点水，帮助浇水后双方都能获得金币。',
      friendLeoNote: 'Leo 的果树已经成熟，可以消耗一次游戏机会偷取一个果实。',
      friendNoahNote: 'Noah 的 solar dock 刚完成，参观后可以获得新的装饰灵感。',
      plantDone: '新的番茄苗已经种下。',
      waterDone: '水滴让岛屿更有活力。',
      feedDone: '宠物吃饱了，岛屿经验提升。',
      decorateDone: '贝壳灯已放到码头旁。',
      needSeeds: '种子不足，先完成 Focus Mode 获得 Bonus。',
      needWater: '水滴不足，先完成 Focus Mode 获得 Bonus。',
      needCoins: '金币不足，先完成 Focus Mode 获得 Bonus。',
      aiFallbackEncouragement: 'AI 暂时无法使用，这里有一些默认任务！'
    },
    'zh-HK': {
      languageName: '繁體中文',
      heroTitle: '把專注變成自己的番茄島',
      heroLead: 'AI 幫你拆解目標，Focus Mode 幫你進入番茄鐘，每一次完成都會變成 Bonus，繼續建設 Pomoland。',
      launchDemo: 'Launch Demo',
      viewJourney: '查看流程',
      navJourney: 'Journey',
      navFeatures: 'Features',
      navAI: 'AI Layer',
      heroBadge: 'AI Focus Game',
      statFocus: '今日專注',
      statStreak: '連續打卡',
      statIsland: '島嶼等級',
      previewTask: 'IELTS 詞彙衝刺',
      previewBonus: 'Bonus 已解鎖',
      previewIsland: '番茄苗正在生長',
      journeyTitle: '一個讓用戶願意回來的專注閉環',
      journeyLead: '從大目標到每日行動，再到獎勵、建設和社交回饋，Pomoland 把效率工具變成持續養成體驗。',
      stepPlan: 'AI 拆解目標',
      stepFocus: '進入 Focus Mode',
      stepReward: '領取 Bonus',
      stepBuild: '建設 Pomoland',
      stepReturn: '明天繼續打卡',
      featuresTitle: '功能完整，但演示路徑清晰',
      featureAI: 'AI Task Planning',
      featureAIDesc: '把考試、項目、習慣目標拆成可執行的每日任務。',
      featureFocus: 'Focus Mode',
      featureFocusDesc: '支援 Demo 快進和真實 25/30/45 分鐘番茄鐘。',
      featureIsland: 'Pomoland Island',
      featureIslandDesc: '用水滴、種子和金幣種植、澆水、餵養和裝飾。',
      featureSocial: 'Friends',
      featureSocialDesc: '參觀好友島嶼，幫忙澆水，或用遊戲機會偷取果實。',
      featureReport: 'Report',
      featureReportDesc: '用 7 天趨勢、完成率和 AI 週報展示成長。',
      aiTitle: 'AI 不搶戲，只推動行動',
      aiGoal: '目標拆解',
      aiGoalDesc: '把長期目標轉換成每週和每日 Focus 任務。',
      aiNudge: '防拖延干預',
      aiNudgeDesc: '連續未完成時降低任務難度並生成鼓勵文案。',
      aiReport: '成長總結',
      aiReportDesc: '根據打卡、專注和獎勵數據生成週報。',
      ctaTitle: '準備好演示 Pomoland 的完整閉環',
      ctaLead: '進入工作台後可以從 AI 拆任務一路演示到 Bonus 和島嶼建設。',
      workspaceTitle: 'Pomoland Demo',
      today: 'Today / AI Plan',
      focusMode: 'Focus Mode',
      island: 'Pomoland Island',
      checkIn: 'Check-in',
      friends: 'Friends',
      report: 'Report',
      goalLabel: '輸入一個長期目標',
      goalPlaceholder: '例如：三個月準備雅思考試',
      aiButton: '幫你制定計劃',
      aiLoading: 'AI 正在拆解目標...',
      agentIdle: '點擊按鈕後，Pomoland Agent 會展示規劃過程。',
      agentTitle: 'Pomoland Agent 正在執行',
      agentComplete: '規劃完成，已生成今日 Focus 任務。',
      agentStepAnalyze: '正在分析目標和剩餘時間...',
      agentStepResearch: '正在查詢備考資料和能力模組...',
      agentStepBreakdown: '正在拆解可執行的每日任務...',
      agentStepDuration: '正在估算每個任務的專注時長...',
      agentStepSchedule: '正在生成今日 Focus 計劃...',
      generatedPlan: 'AI 生成的今日計劃',
      selectTask: '選擇任務',
      selectedTask: '目前任務',
      noTask: '尚未選擇任務',
      start: '開始',
      pause: '暫停',
      reset: '重置',
      completeDemo: '演示完成',
      demo20: 'Demo 20s',
      min25: '25m',
      min30: '30m',
      min45: '45m',
      timerReady: '選擇任務後開始 Focus Mode',
      bonusTitle: 'Bonus 已掉落',
      bonusLead: '這次專注轉化成了新的島嶼資源。',
      claimBonus: 'Claim Bonus',
      coins: '金幣',
      seeds: '種子',
      water: '水滴',
      chances: '遊戲機會',
      plant: 'Plant',
      waterAction: 'Water',
      feed: 'Feed',
      decorate: 'Decorate',
      plantCost: '消耗 1 個種子',
      plantPurpose: '種下新的作物，讓島上出現新的成長目標。',
      plantEffect: '新增番茄苗，作物階段提升。',
      waterCost: '消耗 1 個水滴',
      waterPurpose: '給已有作物澆水，讓它進入更健康的成長狀態。',
      waterEffect: '水面變亮，作物出現水潤閃光。',
      feedCost: '消耗 20 金幣',
      feedPurpose: '餵養島上的小寵物，提高島嶼活躍度。',
      feedEffect: '寵物醒來，島嶼等級提升。',
      decorateCost: '消耗 30 金幣',
      decoratePurpose: '放置碼頭、燈具等裝飾，讓 Pomoland 更有展示感。',
      decorateEffect: '解鎖島嶼裝飾。',
      islandStatus: '島嶼狀態',
      checkInTitle: '打卡與連勝',
      streak: '連續天數',
      protection: '連勝保護卡',
      milestone: '里程碑獎勵',
      friendsTitle: '好友島嶼',
      help: 'Help Water',
      visit: 'Visit',
      steal: 'Steal Fruit',
      visitIslandTitle: '參觀好友島嶼',
      visitFocusLabel: '最近專注',
      visitMoodLabel: '島嶼狀態',
      visitResourcesLabel: '可互動資源',
      visitClose: '關閉參觀',
      reportTitle: '成長報告',
      focusTrend: '7 天專注趨勢',
      completionRate: '任務完成率',
      aiSummary: 'AI 週報',
      defaultGoal: '三個月準備雅思考試',
      task1: '詞彙衝刺',
      task1Desc: '複習高頻詞 40 個，並記錄 5 個易錯詞。',
      task2: '聽力跟練',
      task2Desc: '完成一段 30 分鐘聽力精聽，標記薄弱題型。',
      task3: '閱讀計時訓練',
      task3Desc: '用 45 分鐘完成一組閱讀，並復盤錯題原因。',
      task4: '寫作提綱',
      task4Desc: '為 Task 2 寫 3 個論點和例子。',
      rewardDecoration: '太陽碼頭',
      weeklySummary: 'Pomoland 本週顯示你更容易在下午進入專注。建議下週把長任務拆成 25 分鐘段，並優先完成聽力訓練。',
      noChance: '遊戲機會不足，先完成一次 Focus Mode 再來互動。',
      helpedMia: '你幫 Mia 澆水了，雙方都獲得了金幣。',
      stoleLeo: '你從 Leo 的島上偷到一個果實，但明天要記得回訪。',
      visitedNoah: '你參觀了 Noah 的島嶼，發現了新的裝飾靈感。',
      friendMiaMood: '水滴充足，番茄田很穩定',
      friendLeoMood: '果實成熟，但小心被發現',
      friendNoahMood: '新碼頭剛建好，適合參觀',
      friendMiaNote: 'Mia 的島缺一點水，幫助澆水後雙方都能獲得金幣。',
      friendLeoNote: 'Leo 的果樹已經成熟，可以消耗一次遊戲機會偷取一個果實。',
      friendNoahNote: 'Noah 的 solar dock 剛完成，參觀後可以獲得新的裝飾靈感。',
      plantDone: '新的番茄苗已經種下。',
      waterDone: '水滴讓島嶼更有活力。',
      feedDone: '寵物吃飽了，島嶼經驗提升。',
      decorateDone: '貝殼燈已放到碼頭旁。',
      needSeeds: '種子不足，先完成 Focus Mode 獲得 Bonus。',
      needWater: '水滴不足，先完成 Focus Mode 獲得 Bonus。',
      needCoins: '金幣不足，先完成 Focus Mode 獲得 Bonus。',
      aiFallbackEncouragement: 'AI 暫時無法使用，這裡有一些默認任務！'
    },
    en: {
      languageName: 'English',
      heroTitle: 'Turn focus into your own island',
      heroLead: 'AI breaks big goals into daily tasks, Focus Mode protects deep work, and every completed session drops a Bonus for building Pomoland.',
      launchDemo: 'Launch Demo',
      viewJourney: 'View Journey',
      navJourney: 'Journey',
      navFeatures: 'Features',
      navAI: 'AI Layer',
      heroBadge: 'AI Focus Game',
      statFocus: 'Focus Today',
      statStreak: 'Day Streak',
      statIsland: 'Island Level',
      previewTask: 'IELTS vocabulary sprint',
      previewBonus: 'Bonus unlocked',
      previewIsland: 'Tomato sprouts growing',
      journeyTitle: 'A focus loop worth returning to',
      journeyLead: 'Pomoland turns long-term goals into daily action, then links focus, rewards, island building, and social feedback into one repeatable loop.',
      stepPlan: 'AI plans the goal',
      stepFocus: 'Enter Focus Mode',
      stepReward: 'Claim Bonus',
      stepBuild: 'Build Pomoland',
      stepReturn: 'Check in tomorrow',
      featuresTitle: 'Complete feature set, clear demo path',
      featureAI: 'AI Task Planning',
      featureAIDesc: 'Break exams, projects, and habits into daily focus tasks.',
      featureFocus: 'Focus Mode',
      featureFocusDesc: 'Supports demo fast-forward and real 25/30/45 minute focus sessions.',
      featureIsland: 'Pomoland Island',
      featureIslandDesc: 'Spend drops, seeds, and coins to plant, water, feed, and decorate.',
      featureSocial: 'Friends',
      featureSocialDesc: 'Visit islands, help water plants, or spend a chance to steal fruit.',
      featureReport: 'Report',
      featureReportDesc: 'Show growth through 7-day trends, completion rate, and AI summaries.',
      aiTitle: 'AI stays quiet and pushes action',
      aiGoal: 'Goal decomposition',
      aiGoalDesc: 'Convert long-term ambitions into weekly and daily Focus tasks.',
      aiNudge: 'Anti-procrastination nudges',
      aiNudgeDesc: 'Lower difficulty and write supportive prompts after missed tasks.',
      aiReport: 'Growth summary',
      aiReportDesc: 'Turn check-ins, focus time, and rewards into a weekly report.',
      ctaTitle: 'Ready to demo the full Pomoland loop',
      ctaLead: 'Enter the workspace and present AI planning, Focus Mode, Bonus rewards, and island building in one flow.',
      workspaceTitle: 'Pomoland Demo',
      today: 'Today / AI Plan',
      focusMode: 'Focus Mode',
      island: 'Pomoland Island',
      checkIn: 'Check-in',
      friends: 'Friends',
      report: 'Report',
      goalLabel: 'Enter a long-term goal',
      goalPlaceholder: 'Example: Prepare for IELTS in 3 months',
      aiButton: 'Plan My Day',
      aiLoading: 'AI is breaking down the goal...',
      agentIdle: 'Click the button to watch Pomoland Agent plan step by step.',
      agentTitle: 'Pomoland Agent is working',
      agentComplete: 'Planning complete. Today\'s Focus tasks are ready.',
      agentStepAnalyze: 'Analyzing the goal and timeline...',
      agentStepResearch: 'Researching preparation materials and skill areas...',
      agentStepBreakdown: 'Breaking the goal into executable daily tasks...',
      agentStepDuration: 'Estimating focus duration for each task...',
      agentStepSchedule: 'Generating today\'s Focus plan...',
      generatedPlan: 'AI-generated plan for today',
      selectTask: 'Select Task',
      selectedTask: 'Selected Task',
      noTask: 'No task selected yet',
      start: 'Start',
      pause: 'Pause',
      reset: 'Reset',
      completeDemo: 'Finish Demo',
      demo20: 'Demo 20s',
      min25: '25m',
      min30: '30m',
      min45: '45m',
      timerReady: 'Select a task to start Focus Mode',
      bonusTitle: 'Bonus dropped',
      bonusLead: 'This focus session became new island resources.',
      claimBonus: 'Claim Bonus',
      coins: 'Coins',
      seeds: 'Seeds',
      water: 'Water Drops',
      chances: 'Game Chances',
      plant: 'Plant',
      waterAction: 'Water',
      feed: 'Feed',
      decorate: 'Decorate',
      plantCost: 'Costs 1 seed',
      plantPurpose: 'Plant a new crop so the island has a visible growth target.',
      plantEffect: 'Adds a tomato sprout and advances the crop stage.',
      waterCost: 'Costs 1 water drop',
      waterPurpose: 'Water existing crops so they enter a healthier growth state.',
      waterEffect: 'Brightens the water and adds fresh sparkle around crops.',
      feedCost: 'Costs 20 coins',
      feedPurpose: 'Feed the island pet to raise island activity.',
      feedEffect: 'Wakes the pet and raises the island level.',
      decorateCost: 'Costs 30 coins',
      decoratePurpose: 'Place docks, lamps, and decorations to make Pomoland presentation-ready.',
      decorateEffect: 'Unlocks island decoration.',
      islandStatus: 'Island Status',
      checkInTitle: 'Check-in and streak',
      streak: 'Day Streak',
      protection: 'Streak Protection',
      milestone: 'Milestone Rewards',
      friendsTitle: 'Friend Islands',
      help: 'Help Water',
      visit: 'Visit',
      steal: 'Steal Fruit',
      visitIslandTitle: 'Visiting Friend Island',
      visitFocusLabel: 'Recent focus',
      visitMoodLabel: 'Island status',
      visitResourcesLabel: 'Interactive resources',
      visitClose: 'Close Visit',
      reportTitle: 'Growth Report',
      focusTrend: '7-day focus trend',
      completionRate: 'Task completion rate',
      aiSummary: 'AI Weekly Summary',
      defaultGoal: 'Prepare for IELTS in 3 months',
      task1: 'Vocabulary sprint',
      task1Desc: 'Review 40 high-frequency words and capture 5 weak words.',
      task2: 'Listening practice',
      task2Desc: 'Complete a 30-minute listening drill and mark weak question types.',
      task3: 'Timed reading set',
      task3Desc: 'Finish one reading set in 45 minutes and review mistakes.',
      task4: 'Writing outline',
      task4Desc: 'Draft 3 arguments and examples for Task 2 writing.',
      rewardDecoration: 'Solar dock',
      weeklySummary: 'Pomoland shows that you enter focus more easily in the afternoon. Next week, split long work into 25-minute blocks and prioritize listening practice.',
      noChance: 'No game chances left. Complete another Focus Mode session first.',
      helpedMia: 'You watered Mia\'s island. Both of you earned coins.',
      stoleLeo: 'You stole a fruit from Leo, but remember to visit back tomorrow.',
      visitedNoah: 'You visited Noah and found new decoration inspiration.',
      friendMiaMood: 'Well-watered tomato field',
      friendLeoMood: 'Ripe fruit, risky to steal',
      friendNoahMood: 'New dock ready for visitors',
      friendMiaNote: 'Mia needs a little water. Helping her gives both islands coins.',
      friendLeoNote: 'Leo has ripe fruit. Spend one game chance to steal a fruit.',
      friendNoahNote: 'Noah just built a solar dock. Visit to collect decoration inspiration.',
      plantDone: 'A new tomato sprout has been planted.',
      waterDone: 'Water drops made the island brighter.',
      feedDone: 'The pet is full and the island gained experience.',
      decorateDone: 'The shell lamp is now beside the dock.',
      needSeeds: 'Not enough seeds. Finish Focus Mode to earn a Bonus.',
      needWater: 'Not enough water. Finish Focus Mode to earn a Bonus.',
      needCoins: 'Not enough coins. Finish Focus Mode to earn a Bonus.',
      aiFallbackEncouragement: 'AI is currently unavailable, here are some default tasks!'
    }
  };

  const TASK_IDS = ['task1', 'task2', 'task3', 'task4'];
  const TASK_DURATIONS = [25, 30, 45, 25];
  const WEEKLY_FOCUS = [25, 50, 30, 65, 45, 70, 55];
  const PLANNING_STEP_KEYS = [
    ['analyze', 'agentStepAnalyze'],
    ['research', 'agentStepResearch'],
    ['breakdown', 'agentStepBreakdown'],
    ['duration', 'agentStepDuration'],
    ['schedule', 'agentStepSchedule']
  ];
  const ISLAND_ACTIONS = [
    ['plant', 'plant', 'plantCost', 'plantPurpose', 'plantEffect'],
    ['water', 'waterAction', 'waterCost', 'waterPurpose', 'waterEffect'],
    ['feed', 'feed', 'feedCost', 'feedPurpose', 'feedEffect'],
    ['decorate', 'decorate', 'decorateCost', 'decoratePurpose', 'decorateEffect']
  ];
  const CROP_VISUALS = ['seedling', 'leafy', 'flowering', 'fruiting'];
  const DECORATION_SEQUENCE = ['Shell lamp', 'Study flag', 'Harbor lights'];
  const FRIENDS = [
    { id: 'mia', name: 'Mia', statusKey: 'Focus 42m', color: 'mint' },
    { id: 'leo', name: 'Leo', statusKey: 'Streak 12d', color: 'tomato' },
    { id: 'noah', name: 'Noah', statusKey: 'New dock', color: 'sun' }
  ];
  const FRIEND_DETAILS = {
    mia: { focusMinutes: 42, moodKey: 'friendMiaMood', noteKey: 'friendMiaNote', resources: ['Water +1', 'Coins +10'] },
    leo: { focusMinutes: 35, moodKey: 'friendLeoMood', noteKey: 'friendLeoNote', resources: ['Fruit +1', 'Chance -1'] },
    noah: { focusMinutes: 58, moodKey: 'friendNoahMood', noteKey: 'friendNoahNote', resources: ['Decor idea', 'Solar dock'] }
  };

  function normalizeLanguage(language) {
    return LANGUAGE_ORDER.includes(language) ? language : 'zh-CN';
  }

  function getSupportedLanguages() {
    return [...LANGUAGE_ORDER];
  }

  function t(language, key) {
    const lang = normalizeLanguage(language);
    return COPY[lang][key] || COPY.en[key] || key;
  }

  function createInitialState() {
    return {
      language: 'zh-CN',
      currentView: 'today',
      goal: COPY['zh-CN'].defaultGoal,
      tasks: [],
      selectedTask: null,
      resources: {
        coins: 120,
        seeds: 2,
        water: 3,
        chances: 1
      },
      decorations: [],
      islandLevel: 1,
      cropStage: 1,
      islandHydration: 0,
      petMood: 'sleepy',
      streak: 5,
      streakProtection: 1,
      streakShieldActive: false,
      coachStats: {
        shown: 0,
        accepted: 0,
        completed: 0
      },
      coachAcceptedTaskId: null,
      milestoneClaims: [],
      checkIns: [],
      focusCompleted: false,
      friendMessages: {},
      lastMessage: {
        'zh-CN': '完成 Focus Mode 后可以继续建设 Pomoland。',
        'zh-HK': '完成 Focus Mode 後可以繼續建設 Pomoland。',
        en: 'Complete Focus Mode to keep building Pomoland.'
      }
    };
  }

  function copyState(state) {
    return {
      ...state,
      resources: { ...state.resources },
      decorations: [...state.decorations],
      milestoneClaims: [...(state.milestoneClaims || [])],
      checkIns: [...state.checkIns],
      friendMessages: { ...state.friendMessages },
      lastMessage: { ...state.lastMessage },
      selectedTask: state.selectedTask ? { ...state.selectedTask } : null,
      tasks: state.tasks.map((task) => ({ ...task })),
      streakProtection: state.streakProtection || 0,
      streakShieldActive: Boolean(state.streakShieldActive),
      coachStats: {
        shown: state.coachStats?.shown || 0,
        accepted: state.coachStats?.accepted || 0,
        completed: state.coachStats?.completed || 0
      },
      coachAcceptedTaskId: state.coachAcceptedTaskId || null
    };
  }

  function calculateTaskGold(duration, title = '', notes = '') {
    const safeDuration = Math.max(5, Math.min(120, Math.round(Number(duration) || 25)));
    const titleBonus = String(title).trim().length > 12 ? 3 : 0;
    const notesBonus = String(notes).trim().length > 48 ? 2 : 0;
    const durationBonus = safeDuration >= 45 ? 8 : safeDuration >= 30 ? 4 : 0;
    return 10 + Math.round(safeDuration * 0.9) + titleBonus + notesBonus + durationBonus;
  }

  function inferTaskPriority(goal, title = '', duration = 25) {
    const combined = `${goal} ${title}`.toLowerCase();
    const urgentKeywords = ['ielts', 'exam', 'test', 'final', 'deadline', 'presentation', 'report', '面试', '考试', '雅思', '汇报', 'ddl', '截止'];
    const mediumKeywords = ['plan', 'outline', 'review', '复习', '计划', '提纲', '项目', 'project'];
    if (urgentKeywords.some((keyword) => combined.includes(keyword)) || Number(duration) >= 45) {
      return 'high';
    }
    if (mediumKeywords.some((keyword) => combined.includes(keyword)) || Number(duration) >= 30) {
      return 'medium';
    }
    return 'low';
  }

  function inferTaskDueDate(goal, index = 0) {
    const now = new Date();
    const combined = String(goal || '').toLowerCase();
    const offset = combined.includes('today') || combined.includes('今天')
      ? 0
      : combined.includes('tomorrow') || combined.includes('明天')
        ? 1
        : combined.includes('week') || combined.includes('本周')
          ? Math.min(index + 1, 5)
          : Math.min(index + 1, 3);
    now.setDate(now.getDate() + offset);
    return now.toISOString().slice(0, 10);
  }

  function inferGoalCategory(goal = '') {
    const combined = String(goal).toLowerCase();
    if (/(ielts|exam|study|学习|雅思|考试|复习|阅读|听力|写作)/i.test(combined)) return 'study';
    if (/(project|prototype|coding|code|design|develop|ship|开发|产品|项目|编程|设计|原型|上线)/i.test(combined)) return 'project';
    if (/(habit|workout|fitness|exercise|习惯|健身|运动|早起)/i.test(combined)) return 'habit';
    return 'general';
  }

  function buildTaskNote(goal, title, language) {
    const lang = normalizeLanguage(language);
    if (lang === 'en') {
      return `Turn "${goal}" into one clear action by finishing "${title}" and then move to the next step.`;
    }
    if (lang === 'zh-HK') {
      return `把「${goal}」拆成一個可執行的小步驟，先完成「${title}」，再進入下一段專注。`;
    }
    return `把「${goal}」拆成一个可执行的小步骤，先完成「${title}」，再进入下一段专注。`;
  }

  function normalizeTask(task, index, goal, language) {
    const lang = normalizeLanguage(language);
    const title = String(task.taskName || task.title || COPY[lang][TASK_IDS[index]] || `Task ${index + 1}`).trim();
    const note = String(task.notes || task.description || buildTaskNote(goal, title, lang)).trim();
    const duration = Math.max(5, Math.min(120, Math.round(Number(task.duration) || TASK_DURATIONS[index] || 25)));
    const goldReward = Number.isFinite(Number(task.goldReward))
      ? Math.max(1, Math.round(Number(task.goldReward)))
      : calculateTaskGold(duration, title, note);

    return {
      id: task.id || `task${index + 1}`,
      goal,
      title,
      notes: note,
      description: note,
      goldReward,
      duration,
      energy: duration >= 45 ? 'Deep' : duration >= 30 ? 'Steady' : 'Light',
      priority: task.priority || inferTaskPriority(goal, title, duration),
      dueDate: task.dueDate || inferTaskDueDate(goal, index),
      customized: Boolean(task.customized),
      completed: Boolean(task.completed)
    };
  }

  async function fetchApi(endpoint, data) {
    const response = await fetch(`http://localhost:3000${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `API call failed with status ${response.status}`);
    }
    return response.json();
  }

  async function generateTasks(goal, language) {
    const lang = normalizeLanguage(language);
    const cleanGoal = goal && goal.trim() ? goal.trim() : COPY[lang].defaultGoal;
    try {
      const apiResponse = await fetchApi('/api/generate-tasks', { goal: cleanGoal, language: lang });
      const tasks = apiResponse.tasks.map((task, index) => normalizeTask({
        ...task,
        id: `task${index + 1}`
      }, index, cleanGoal, lang));
      return { tasks, encouragement: apiResponse.encouragement };
    } catch (error) {
      console.error('Error fetching tasks from AI:', error);
      return {
        tasks: TASK_IDS.map((id, index) => normalizeTask({
          id,
          title: COPY[lang][id],
          description: COPY[lang][`${id}Desc`],
          duration: TASK_DURATIONS[index]
        }, index, cleanGoal, lang)),
        encouragement: COPY[lang].aiFallbackEncouragement
      };
    }
  }

  async function getPlanningSteps(language) {
    const lang = normalizeLanguage(language);
    try {
      const steps = await fetchApi('/api/get-planning-steps', { language: lang });
      return steps;
    } catch (error) {
      console.error('Error fetching planning steps from AI:', error);
      // Fallback to local data if API fails
      return PLANNING_STEP_KEYS.map(([id, key]) => ({
        id,
        text: COPY[lang][key]
      }));
    }
  }

  function translateTasks(tasks, language) {
    const lang = normalizeLanguage(language);
    return tasks.map((task) => ({
      ...task,
      title: task.customized ? task.title : (COPY[lang][task.id] || task.title),
      notes: task.customized ? task.notes : (COPY[lang][`${task.id}Desc`] || task.notes || task.description),
      description: task.customized ? task.description : (COPY[lang][`${task.id}Desc`] || task.notes || task.description)
    }));
  }

  function selectTask(state, task) {
    const next = copyState(state);
    next.selectedTask = { ...task };
    next.currentView = 'focus';
    next.focusCompleted = false;
    return next;
  }

  function claimReward(state, reward) {
    const next = copyState(state);
    next.resources.coins += reward.coins || 0;
    next.resources.seeds += reward.seeds || 0;
    next.resources.water += reward.water || 0;
    next.resources.chances += reward.chances || 0;
    if (reward.decoration && !next.decorations.includes(reward.decoration)) {
      next.decorations.push(reward.decoration);
    }
    next.focusCompleted = true;
    next.lastMessage = {
      'zh-CN': 'Bonus 已领取，可以建设 Pomoland。',
      'zh-HK': 'Bonus 已領取，可以建設 Pomoland。',
      en: 'Bonus claimed. Pomoland is ready to grow.'
    };
    return next;
  }

  function completeFocusSession(state, timer) {
    const next = copyState(state);
    next.focusCompleted = true;
    if (next.selectedTask) {
      const selectedTaskId = next.selectedTask.id;
      next.selectedTask = {
        ...next.selectedTask,
        completed: true
      };
      next.tasks = next.tasks.map((task) => (
        task.id === selectedTaskId
          ? { ...task, completed: true }
          : task
      ));
    }
    if (next.selectedTask && next.selectedTask.id === next.coachAcceptedTaskId) {
      next.coachStats.completed += 1;
      next.coachAcceptedTaskId = null;
    }
    next.lastMessage = {
      'zh-CN': '本次 Focus Mode 已结束，可以领取 Bonus。',
      'zh-HK': '本次 Focus Mode 已結束，可以領取 Bonus。',
      en: 'Focus Mode is complete. Claim the Bonus to continue.'
    };
    return {
      state: next,
      timer: {
        totalSeconds: timer ? timer.totalSeconds : 0,
        remainingSeconds: 0,
        isRunning: false
      }
    };
  }

  function createTimerState(totalSeconds, taskId = null) {
    const safeSeconds = Math.max(1, Number(totalSeconds) || 20);
    return {
      taskId,
      totalSeconds: safeSeconds,
      remainingSeconds: safeSeconds,
      isRunning: false,
      completed: false,
      endTime: null
    };
  }

  function syncTimerState(timer, now = Date.now()) {
    const fallback = createTimerState(20);
    const normalized = timer ? {
      taskId: timer.taskId || null,
      totalSeconds: Math.max(1, Number(timer.totalSeconds) || fallback.totalSeconds),
      remainingSeconds: Math.max(0, Number(timer.remainingSeconds) || 0),
      isRunning: Boolean(timer.isRunning),
      completed: Boolean(timer.completed),
      endTime: typeof timer.endTime === 'number' ? timer.endTime : null
    } : fallback;

    if (!normalized.remainingSeconds && !normalized.completed && !normalized.isRunning) {
      normalized.remainingSeconds = normalized.totalSeconds;
    }

    if (!normalized.isRunning || !normalized.endTime) {
      return normalized.completed
        ? { ...normalized, remainingSeconds: 0, endTime: null, isRunning: false }
        : { ...normalized, endTime: null };
    }

    const remainingSeconds = Math.max(0, Math.ceil((normalized.endTime - now) / 1000));
    return {
      ...normalized,
      remainingSeconds,
      isRunning: remainingSeconds > 0,
      completed: remainingSeconds === 0,
      endTime: remainingSeconds > 0 ? normalized.endTime : null
    };
  }

  function startTimerState(timer, now = Date.now()) {
    const synced = syncTimerState(timer, now);
    if (synced.completed) {
      return synced;
    }
    const remainingSeconds = synced.remainingSeconds > 0 ? synced.remainingSeconds : synced.totalSeconds;
    return {
      ...synced,
      remainingSeconds,
      isRunning: true,
      completed: false,
      endTime: now + remainingSeconds * 1000
    };
  }

  function pauseTimerState(timer, now = Date.now()) {
    const synced = syncTimerState(timer, now);
    if (synced.completed) {
      return synced;
    }
    return {
      ...synced,
      isRunning: false,
      endTime: null
    };
  }

  function resetTimerState(timer) {
    const base = syncTimerState(timer);
    return createTimerState(base.totalSeconds, base.taskId);
  }

  function buildRewardBundle(language, totalSeconds, randomValue = Math.random) {
    const effortMinutes = Math.max(1, Math.round((Number(totalSeconds) || 1200) / 60));
    const coins = 18 + Math.round(effortMinutes * 0.8) + Math.floor(randomValue() * 10);
    const seeds = 1 + (randomValue() > 0.55 ? 1 : 0);
    const water = 1 + (randomValue() > 0.35 ? 1 : 0);
    const chances = effortMinutes >= 25 && randomValue() > 0.7 ? 1 : 0;
    const decoration = randomValue() > 0.72 ? t(language, 'rewardDecoration') : null;
    return {
      coins,
      seeds,
      water,
      chances,
      decoration
    };
  }

  function applyIslandAction(state, action) {
    const next = copyState(state);

    if (action === 'plant') {
      if (next.resources.seeds <= 0) return withMessage(next, 'needSeeds');
      next.resources.seeds -= 1;
      next.cropStage = Math.min((next.cropStage || 1) + 1, 4);
      next.islandLevel = Math.min(next.islandLevel + 1, 5);
      return withMessage(next, 'plantDone');
    }

    if (action === 'water') {
      if (next.resources.water <= 0) return withMessage(next, 'needWater');
      next.resources.water -= 1;
      next.islandHydration = Math.min(next.islandHydration + 1, 3);
      return withMessage(next, 'waterDone');
    }

    if (action === 'feed') {
      if (next.resources.coins < 20) return withMessage(next, 'needCoins');
      next.resources.coins -= 20;
      next.petMood = 'happy';
      next.islandLevel = Math.min(next.islandLevel + 1, 5);
      return withMessage(next, 'feedDone');
    }

    if (action === 'decorate') {
      if (next.resources.coins < 30) return withMessage(next, 'needCoins');
      next.resources.coins -= 30;
      const nextDecoration = DECORATION_SEQUENCE.find((item) => !next.decorations.includes(item));
      if (nextDecoration) {
        next.decorations.push(nextDecoration);
      }
      return withMessage(next, 'decorateDone');
    }

    return next;
  }

  function getIslandVisualState(state) {
    const level = Math.max(1, Math.min(state.islandLevel, 5));
    const cropStage = Math.max(1, Math.min(state.cropStage || 1, 4));
    const hydration = Math.max(0, Math.min(state.islandHydration, 3));
    const visibleDecorations = [...state.decorations];
    const decorationTokens = visibleDecorations.map(getDecorationToken);
    const cropVisual = CROP_VISUALS[cropStage - 1] || 'seedling';
    const growthStage = cropStage >= 4 || (level >= 5 && cropStage >= 3)
      ? 'lush'
      : cropStage >= 3
        ? 'bloom'
        : cropStage >= 2
          ? 'growing'
          : 'starter';
    const hydrationStage = hydration >= 3
      ? 'sparkling'
      : hydration >= 1
        ? 'fresh'
        : 'dry';

    return {
      level,
      growthStage,
      cropVisual,
      plantCount: cropStage,
      hydrationStage,
      petMood: state.petMood || 'sleepy',
      petActivity: state.petMood === 'happy' ? 'celebrating' : 'resting',
      decorationStage: getDecorationStage(visibleDecorations),
      visibleDecorations,
      decorationTokens,
      hasDock: visibleDecorations.length > 0
    };
  }

  function getDecorationStage(decorations) {
    const hasDock = decorations.some(isDockDecoration);
    const hasLamp = decorations.includes('Shell lamp');
    const hasFlag = decorations.includes('Study flag');
    const hasLights = decorations.includes('Harbor lights');
    if ((hasDock && hasLamp && hasFlag && hasLights) || decorations.length >= 4) return 'festival';
    if (hasLights || decorations.length >= 3) return 'harbor';
    if (hasFlag || hasDock || decorations.length >= 2) return 'dock';
    if (hasLamp || decorations.length >= 1) return 'lit';
    return 'plain';
  }

  function isDockDecoration(decoration) {
    return ['Solar dock', COPY['zh-CN'].rewardDecoration, COPY['zh-HK'].rewardDecoration].includes(decoration);
  }

  function getDecorationToken(decoration) {
    if (isDockDecoration(decoration)) return 'solar-dock';
    if (decoration === 'Shell lamp') return 'shell-lamp';
    if (decoration === 'Study flag') return 'study-flag';
    if (decoration === 'Harbor lights') return 'harbor-lights';
    return 'decoration';
  }

  function getIslandActions(language) {
    const lang = normalizeLanguage(language);
    return ISLAND_ACTIONS.map(([id, labelKey, costKey, purposeKey, effectKey]) => ({
      id,
      label: COPY[lang][labelKey],
      cost: COPY[lang][costKey],
      purpose: COPY[lang][purposeKey],
      effect: COPY[lang][effectKey]
    }));
  }

  function withMessage(state, copyKey) {
    return {
      ...state,
      lastMessage: {
        'zh-CN': COPY['zh-CN'][copyKey],
        'zh-HK': COPY['zh-HK'][copyKey],
        en: COPY.en[copyKey]
      }
    };
  }

  function recordCheckIn(state, isoDate) {
    const next = copyState(state);
    if (!next.checkIns.includes(isoDate)) {
      next.checkIns.push(isoDate);
      next.streak += 1;
    }
    return next;
  }

  function getNextTask(state) {
    return (state.tasks || []).find((task) => !task.completed) || null;
  }

  function claimMilestoneReward(state, milestone) {
    const next = copyState(state);
    const normalizedMilestone = Number(milestone);
    if (!normalizedMilestone || next.streak < normalizedMilestone || next.milestoneClaims.includes(normalizedMilestone)) {
      return next;
    }

    const milestoneReward = {
      7: { coins: 35, seeds: 1, water: 1, chances: 0, streakProtection: 1 },
      30: { coins: 90, seeds: 2, water: 2, chances: 1, streakProtection: 1 },
      100: { coins: 180, seeds: 3, water: 3, chances: 1, streakProtection: 2 }
    }[normalizedMilestone] || { coins: 20, seeds: 1, water: 1, chances: 0, streakProtection: 0 };

    next.resources.coins += milestoneReward.coins;
    next.resources.seeds += milestoneReward.seeds;
    next.resources.water += milestoneReward.water;
    next.resources.chances += milestoneReward.chances;
    next.streakProtection += milestoneReward.streakProtection;
    next.milestoneClaims.push(normalizedMilestone);
    next.lastMessage = {
      'zh-CN': `已领取 ${normalizedMilestone} 天连胜奖励，继续保持专注节奏。`,
      'zh-HK': `已領取 ${normalizedMilestone} 天連勝獎勵，繼續保持專注節奏。`,
      en: `You claimed the ${normalizedMilestone}-day streak reward. Keep the rhythm going.`
    };
    return next;
  }

  function useStreakProtection(state) {
    const next = copyState(state);
    if (next.streakProtection <= 0 || next.streakShieldActive) {
      return next;
    }
    next.streakProtection -= 1;
    next.streakShieldActive = true;
    next.lastMessage = {
      'zh-CN': '已启用连胜保护卡，下次错过打卡时会优先保住连胜。',
      'zh-HK': '已啟用連勝保護卡，下次錯過打卡時會優先保住連勝。',
      en: 'Streak protection is now active. Your next missed check-in will be protected.'
    };
    return next;
  }

  function getFriend(friendId) {
    return FRIENDS.find((friend) => friend.id === friendId) || FRIENDS[0];
  }

  function makeFriendActionMessage(friend, action) {
    if (action === 'help') {
      return {
        'zh-CN': `你帮 ${friend.name} 浇水了，双方都获得了金币。`,
        'zh-HK': `你幫 ${friend.name} 澆水了，雙方都獲得了金幣。`,
        en: `You watered ${friend.name}'s island. Both of you earned coins.`
      };
    }
    if (action === 'steal') {
      return {
        'zh-CN': `你从 ${friend.name} 的岛上偷到一个果实，但明天要记得回访。`,
        'zh-HK': `你從 ${friend.name} 的島上偷到一個果實，但明天要記得回訪。`,
        en: `You stole a fruit from ${friend.name}, but remember to visit back tomorrow.`
      };
    }
    return {
      'zh-CN': `你参观了 ${friend.name} 的岛屿，发现了新的装饰灵感。`,
      'zh-HK': `你參觀了 ${friend.name} 的島嶼，發現了新的裝飾靈感。`,
      en: `You visited ${friend.name}'s island and found new decoration inspiration.`
    };
  }

  function performFriendAction(state, friendId, action) {
    const next = copyState(state);
    const friend = getFriend(friendId);
    const consumesChance = action === 'help' || action === 'steal';

    if (consumesChance && next.resources.chances <= 0) {
      next.friendMessages[friendId] = {
        'zh-CN': COPY['zh-CN'].noChance,
        'zh-HK': COPY['zh-HK'].noChance,
        en: COPY.en.noChance
      };
      return next;
    }

    if (consumesChance) {
      next.resources.chances -= 1;
    }

    if (action === 'help') {
      next.resources.coins += 10;
      next.friendMessages[friendId] = makeFriendActionMessage(friend, 'help');
    } else if (action === 'steal') {
      next.resources.coins += 8;
      next.friendMessages[friendId] = makeFriendActionMessage(friend, 'steal');
    } else {
      next.friendMessages[friendId] = makeFriendActionMessage(friend, 'visit');
    }

    return next;
  }

  function getFriendVisitDetails(friendId, language) {
    const lang = normalizeLanguage(language);
    const friend = getFriend(friendId);
    const detail = FRIEND_DETAILS[friend.id] || FRIEND_DETAILS.mia;
    return {
      id: friend.id,
      name: friend.name,
      color: friend.color,
      status: friend.statusKey,
      focusMinutes: detail.focusMinutes,
      mood: COPY[lang][detail.moodKey],
      resources: detail.resources,
      note: COPY[lang][detail.noteKey]
    };
  }

  function buildReport(state, language) {
    const lang = normalizeLanguage(language);
    const dayLabels = lang === 'en'
      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      : ['一', '二', '三', '四', '五', '六', '日'];
    const totalTasks = (state.tasks || []).length;
    const completedTasks = (state.tasks || []).filter((task) => task.completed).length;
    const completionRate = totalTasks ? Math.round((completedTasks / totalTasks) * 100) : 86;
    return {
      days: WEEKLY_FOCUS.map((value, index) => ({
        label: dayLabels[index],
        value
      })),
      completionRate,
      streak: state.streak,
      summary: COPY[lang].weeklySummary
    };
  }

  function todayIso() {
    const date = new Date();
    const offset = date.getTimezoneOffset();
    return new Date(date.getTime() - offset * 60000).toISOString().slice(0, 10);
  }

  return {
    COPY,
    FRIENDS,
    WEEKLY_FOCUS,
    getSupportedLanguages,
    t,
    createInitialState,
    generateTasks,
    getPlanningSteps,
    translateTasks,
    selectTask,
    claimReward,
    completeFocusSession,
    applyIslandAction,
    getIslandVisualState,
    getIslandActions,
    calculateTaskGold,
    inferGoalCategory,
    createTimerState,
    syncTimerState,
    startTimerState,
    pauseTimerState,
    resetTimerState,
    buildRewardBundle,
    recordCheckIn,
    getNextTask,
    claimMilestoneReward,
    useStreakProtection,
    performFriendAction,
    getFriendVisitDetails,
    buildReport,
    todayIso
  };
})();

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PomolandCore;
}

if (typeof window !== 'undefined') {
  window.PomolandCore = PomolandCore;
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const core = PomolandCore;
    const DURATION_PRESETS = [20, 25 * 60, 30 * 60, 45 * 60, 60 * 60];
    const FOCUS_MODES = [
      { id: 'light', seconds: 15 * 60, theme: 'sun' },
      { id: 'standard', seconds: 25 * 60, theme: 'tomato' },
      { id: 'deep', seconds: 45 * 60, theme: 'leaf' },
      { id: 'night', seconds: 60 * 60, theme: 'moon' }
    ];
    let state = core.createInitialState();
    let language = 'zh-CN';
    let selectedDuration = 20;
    let customDurationMinutes = 25;
    let timerState = core.createTimerState(selectedDuration);
    let timerId = null;
    let rewardReady = core.buildRewardBundle(language, selectedDuration);
    let editingTaskId = null;
    let focusSceneState = {
      outcome: 'idle',
      progress: 0,
      reason: 'ready',
      reward: null,
      theme: null
    };

    const elements = {
      home: document.querySelector('.home-shell'),
      workspace: document.querySelector('.workspace-shell'),
      goalInput: document.querySelector('#goalInput'),
      generatePlanButton: document.querySelector('#generatePlan'),
      agentProgress: document.querySelector('#agentProgress'),
      taskList: document.querySelector('#taskList'),
      coachPanel: document.querySelector('#coachPanel'),
      selectedTask: document.querySelector('#selectedTask'),
      timerDisplay: document.querySelector('#timerDisplay'),
      timerRing: document.querySelector('#timerRing'),
      timerMoodLabel: document.querySelector('#timerMoodLabel'),
      focusScene: document.querySelector('#focusScene'),
      focusSceneEyebrow: document.querySelector('#focusSceneEyebrow'),
      focusSceneTitle: document.querySelector('#focusSceneTitle'),
      focusSceneMessage: document.querySelector('#focusSceneMessage'),
      focusModeGrid: document.querySelector('#focusModeGrid'),
      durationPresets: document.querySelector('#durationPresets'),
      customDurationBadge: document.querySelector('#customDurationBadge'),
      customDurationTitle: document.querySelector('#customDurationTitle'),
      customDurationHint: document.querySelector('#customDurationHint'),
      customDurationRange: document.querySelector('#customDurationRange'),
      customDurationInput: document.querySelector('#customDurationInput'),
      customDurationUnit: document.querySelector('#customDurationUnit'),
      applyCustomDuration: document.querySelector('#applyCustomDuration'),
      decreaseCustomDuration: document.querySelector('#decreaseCustomDuration'),
      increaseCustomDuration: document.querySelector('#increaseCustomDuration'),
      bonusModal: document.querySelector('#bonusModal'),
      bonusList: document.querySelector('#bonusList'),
      bonusActions: document.querySelector('#bonusActions'),
      resourceRows: document.querySelectorAll('[data-resource]'),
      islandScene: document.querySelector('#islandScene'),
      islandMessage: document.querySelector('#islandMessage'),
      checkInGrid: document.querySelector('#checkInGrid'),
      checkinActions: document.querySelector('#checkinActions'),
      journeyGuide: document.querySelector('#journeyGuide'),
      protectionValue: document.querySelector('#protectionValue'),
      milestoneValue: document.querySelector('#milestoneValue'),
      friendGrid: document.querySelector('#friendGrid'),
      reportBars: document.querySelector('#reportBars'),
      reportSummary: document.querySelector('#reportSummary'),
      visitModal: document.querySelector('#visitModal'),
      visitName: document.querySelector('#visitName'),
      visitIsland: document.querySelector('#visitIsland'),
      visitFocus: document.querySelector('#visitFocus'),
      visitMood: document.querySelector('#visitMood'),
      visitResources: document.querySelector('#visitResources'),
      visitNote: document.querySelector('#visitNote'),
      authShell: document.querySelector('#authShell'),
      homeShell: document.querySelector('#homeShell'),
      loginStep1: document.querySelector('#loginStep1'),
      loginStep2: document.querySelector('#loginStep2'),
      phoneInput: document.querySelector('#phoneInput'),
      codeInput: document.querySelector('#codeInput'),
      nicknameInput: document.querySelector('#nicknameInput'),
      sendCodeBtn: document.querySelector('#sendCodeBtn'),
      confirmLoginBtn: document.querySelector('#confirmLoginBtn')
    };

    const STORAGE_KEYS = {
      appState: 'pomoland-demo-state-v2',
      timerState: 'pomoland-demo-timer-v2',
      rewardState: 'pomoland-demo-reward-v1',
      authState: 'pomoland-demo-auth-v1'
    };

    const focusPreview = (() => {
      const params = new URLSearchParams(window.location.search);
      const outcome = params.get('focusPreview');
      if (!outcome) return null;
      const safeOutcome = ['idle', 'growing', 'happy', 'rotten'].includes(outcome) ? outcome : 'idle';
      const progressValue = Number(params.get('focusProgress'));
      const theme = params.get('focusTheme');
      return {
        outcome: safeOutcome,
        progress: Number.isFinite(progressValue)
          ? clamp(progressValue, 0, 1)
          : safeOutcome === 'happy'
            ? 1
            : safeOutcome === 'rotten'
              ? 0.42
              : 0.5,
        theme: ['tomato', 'sun', 'leaf', 'moon'].includes(theme) ? theme : null
      };
    })();

    function localizedText(zhCN, zhHK, en) {
      if (language === 'zh-HK') return zhHK;
      if (language === 'en') return en;
      return zhCN;
    }

    function clamp(value, min, max) {
      return Math.min(max, Math.max(min, value));
    }

    function readStorage(key) {
      try {
        const raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : null;
      } catch (error) {
        console.warn(`Failed to read ${key} from storage`, error);
        return null;
      }
    }

    function writeStorage(key, value) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.warn(`Failed to save ${key} to storage`, error);
      }
    }

    function mergeState(savedState) {
      const base = core.createInitialState();
      if (!savedState || typeof savedState !== 'object') {
        return base;
      }
      const selectedTaskId = savedState.selectedTask && savedState.selectedTask.id;
      const merged = {
        ...base,
        ...savedState,
        resources: {
          ...base.resources,
          ...(savedState.resources || {})
        },
        decorations: Array.isArray(savedState.decorations) ? savedState.decorations : [],
        milestoneClaims: Array.isArray(savedState.milestoneClaims) ? savedState.milestoneClaims : [],
        checkIns: Array.isArray(savedState.checkIns) ? savedState.checkIns : [],
        tasks: Array.isArray(savedState.tasks) ? savedState.tasks : [],
        friendMessages: savedState.friendMessages || {},
        lastMessage: savedState.lastMessage || base.lastMessage,
        coachStats: {
          ...base.coachStats,
          ...(savedState.coachStats || {})
        },
        coachAcceptedTaskId: savedState.coachAcceptedTaskId || null
      };
      merged.selectedTask = merged.tasks.find((task) => task.id === selectedTaskId) || null;
      return merged;
    }

    function persistSession() {
      state.language = language;
      writeStorage(STORAGE_KEYS.appState, state);
      writeStorage(STORAGE_KEYS.timerState, timerState);
      writeStorage(STORAGE_KEYS.rewardState, rewardReady);
    }

    function restoreSession() {
      state = mergeState(readStorage(STORAGE_KEYS.appState));
      language = state.language || language;
      timerState = core.syncTimerState(readStorage(STORAGE_KEYS.timerState) || core.createTimerState(selectedDuration));
      selectedDuration = timerState.totalSeconds || selectedDuration;
      rewardReady = readStorage(STORAGE_KEYS.rewardState) || core.buildRewardBundle(language, selectedDuration);

      const auth = readStorage(STORAGE_KEYS.authState);
      if (auth && auth.loggedIn) {
        elements.authShell.hidden = true;
        elements.homeShell.hidden = false;
        if (auth.phone) elements.phoneInput.value = auth.phone;
        if (auth.nickname) elements.nicknameInput.value = auth.nickname;
      }
    }

    function getTaskActionLabel(task) {
      if (task.completed) {
        return localizedText('已完成', '已完成', 'Done');
      }
      if (state.selectedTask && state.selectedTask.id === task.id) {
        return localizedText('已选择', '已選擇', 'Selected');
      }
      return core.t(language, 'selectTask');
    }

    function getTaskNotes(task) {
      return task.notes || task.description || '';
    }

    function formatTaskReward(task) {
      return localizedText(`奖励金币 ${task.goldReward}`, `獎勵金幣 ${task.goldReward}`, `${task.goldReward} coins`);
    }

    function formatTaskPriority(priority) {
      if (priority === 'high') return localizedText('高优先级', '高優先級', 'High priority');
      if (priority === 'medium') return localizedText('中优先级', '中優先級', 'Medium priority');
      return localizedText('低优先级', '低優先級', 'Low priority');
    }

    function formatTaskDueDate(dueDate) {
      if (!dueDate) return localizedText('无截止时间', '無截止時間', 'No due date');
      return localizedText(`截止 ${dueDate}`, `截止 ${dueDate}`, `Due ${dueDate}`);
    }

    function normalizeTaskDurationValue(value, fallback = 25) {
      const numericValue = Number(value);
      if (!Number.isFinite(numericValue)) return fallback;
      return Math.max(5, Math.min(120, Math.round(numericValue / 5) * 5));
    }

    function getTaskDurationLabel(minutes) {
      return localizedText(`${minutes} 分钟`, `${minutes} 分鐘`, `${minutes} min`);
    }

    function updateTaskById(taskId, patch) {
      const target = state.tasks.find((task) => task.id === taskId);
      if (!target) return null;

      const nextTask = {
        ...target,
        ...patch,
        customized: true
      };

      nextTask.title = String(nextTask.title || target.title || '').trim() || target.title;
      nextTask.notes = String(nextTask.notes || target.notes || target.description || '').trim() || getTaskNotes(target);
      nextTask.description = nextTask.notes;
      nextTask.duration = normalizeTaskDurationValue(nextTask.duration, target.duration || 25);
      nextTask.goldReward = core.calculateTaskGold(nextTask.duration, nextTask.title, nextTask.notes);
      nextTask.energy = nextTask.duration >= 45 ? 'Deep' : nextTask.duration >= 30 ? 'Steady' : 'Light';
      nextTask.priority = patch.priority || nextTask.priority || 'medium';
      nextTask.dueDate = Object.prototype.hasOwnProperty.call(patch, 'dueDate') ? patch.dueDate : (nextTask.dueDate || '');

      state.tasks = state.tasks.map((task) => task.id === taskId ? nextTask : task);
      if (state.selectedTask && state.selectedTask.id === taskId) {
        state.selectedTask = { ...nextTask };
      }
      return nextTask;
    }

    function addCustomTask() {
      const taskId = `custom-${Date.now()}`;
      const dueDate = new Date();
      dueDate.setDate(dueDate.getDate() + 1);
      const nextTask = {
        id: taskId,
        goal: state.goal,
        title: localizedText('自定义任务', '自訂任務', 'Custom task'),
        notes: localizedText('写下你真正想完成的动作，比如“整理 lecture 2 笔记并总结 3 个重点”。', '寫下你真正想完成的動作，例如「整理 lecture 2 筆記並總結 3 個重點」。', 'Write the exact action you want to finish, like “summarize lecture 2 and capture 3 key takeaways.”'),
        description: '',
        duration: 25,
        goldReward: core.calculateTaskGold(25, localizedText('自定义任务', '自訂任務', 'Custom task')),
        energy: 'Normal',
        priority: 'medium',
        dueDate: dueDate.toISOString().slice(0, 10),
        customized: true,
        completed: false
      };
      nextTask.description = nextTask.notes;
      state.tasks = [nextTask, ...state.tasks];
      editingTaskId = taskId;
      return nextTask;
    }

    function getDaysUntil(dueDate) {
      if (!dueDate) return null;
      const due = new Date(`${dueDate}T00:00:00`);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return Math.round((due - today) / 86400000);
    }

    function startTaskVoiceInput(taskId, field = 'notes') {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        alert(localizedText('当前浏览器不支持语音输入，你可以先手动输入。', '目前瀏覽器不支援語音輸入，你可以先手動輸入。', 'Voice input is not supported in this browser yet.'));
        return;
      }

      const recognition = new SpeechRecognition();
      recognition.lang = language === 'en' ? 'en-US' : language === 'zh-HK' ? 'zh-HK' : 'zh-CN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.onresult = (event) => {
        const transcript = event.results?.[0]?.[0]?.transcript?.trim();
        if (!transcript) return;
        const card = document.querySelector(`[data-task-card="${taskId}"]`);
        if (!card) return;
        const targetField = field === 'title'
          ? card.querySelector('[data-task-title-input]')
          : card.querySelector('[data-task-notes-input]');
        if (targetField) {
          targetField.value = targetField.value ? `${targetField.value} ${transcript}` : transcript;
          targetField.dispatchEvent(new Event('input', { bubbles: true }));
        }
      };
      recognition.onerror = () => {
        alert(localizedText('这次没有成功识别语音，可以再试一次。', '這次沒有成功識別語音，可以再試一次。', 'Voice input did not come through this time. Please try again.'));
      };
      recognition.start();
    }

    function getCoachInsights() {
      const actionableTasks = (state.tasks || []).filter((task) => !task.completed);
      const shown = state.coachStats?.shown || 0;
      const accepted = state.coachStats?.accepted || 0;
      const completed = state.coachStats?.completed || 0;
      const goalCategory = core.inferGoalCategory(state.goal);
      const completionRate = state.tasks.length
        ? state.tasks.filter((task) => task.completed).length / state.tasks.length
        : 0;

      if (!actionableTasks.length) {
        return {
          recommendedTask: null,
          difficultyTask: null,
          difficultyDuration: null,
          metrics: { shown, accepted, completed },
          completionRate,
          goalCategory,
          rationale: localizedText('当前任务都完成了，可以生成下一轮计划。', '目前任務都完成了，可以生成下一輪計劃。', 'All current tasks are complete. Generate your next plan.')
        };
      }

      const scoredTasks = actionableTasks.map((task) => {
        let score = 0;
        const daysUntil = getDaysUntil(task.dueDate);
        score += task.priority === 'high' ? 30 : task.priority === 'medium' ? 18 : 8;
        score += daysUntil !== null && daysUntil <= 1 ? 20 : daysUntil !== null && daysUntil <= 3 ? 10 : 0;
        score += completionRate < 0.45 ? Math.max(0, 26 - task.duration * 0.45) : Math.min(22, task.duration * 0.35);
        if (goalCategory === 'study' && /(阅读|听力|写作|词汇|study|exam|review|ielts)/i.test(`${task.title} ${task.notes}`)) score += 12;
        if (goalCategory === 'project' && /(project|code|prototype|design|开发|原型|测试|文档)/i.test(`${task.title} ${task.notes}`)) score += 12;
        if (goalCategory === 'habit' && /(habit|routine|check|复盘|打卡|习惯|运动)/i.test(`${task.title} ${task.notes}`)) score += 12;
        if (state.streak >= 7 && task.duration >= 35) score += 6;
        if (state.streak <= 3 && task.duration <= 30) score += 8;
        return { task, score, daysUntil };
      }).sort((a, b) => b.score - a.score);

      const recommendedTask = scoredTasks[0]?.task || actionableTasks[0];

      const difficultyTask = completionRate < 0.4 || state.streak <= 3
        ? [...actionableTasks].sort((a, b) => b.duration - a.duration)[0]
        : [...actionableTasks].sort((a, b) => a.duration - b.duration)[0];

      const difficultyDuration = completionRate < 0.4 || state.streak <= 3
        ? Math.max(15, difficultyTask.duration - 10)
        : Math.min(60, difficultyTask.duration + 10);

      return {
        recommendedTask,
        difficultyTask,
        difficultyDuration,
        metrics: { shown, accepted, completed },
        completionRate,
        goalCategory,
        rationale: scoredTasks[0]?.daysUntil !== null && scoredTasks[0]?.daysUntil <= 1
          ? localizedText('因为这项任务更紧急，而且离截止时间最近，所以优先级被抬高了。', '因為這項任務更緊急，而且離截止時間最近，所以優先級被抬高了。', 'This task is ranked first because it is the most urgent and closest to its due date.')
          : goalCategory === 'study'
            ? localizedText('这次推荐会更偏向学习闭环：先完成最能推进复习链路的一项任务。', '這次推薦會更偏向學習閉環：先完成最能推進複習鏈路的一項任務。', 'This recommendation leans toward your study loop and picks the task that moves revision forward fastest.')
            : goalCategory === 'project'
              ? localizedText('这次推荐会更偏向项目推进：优先选择最能消除阻塞的一项任务。', '這次推薦會更偏向項目推進：優先選擇最能消除阻塞的一項任務。', 'This recommendation leans toward project progress and prioritizes the most unblock-worthy task.')
              : localizedText('这次推荐综合了完成率、优先级和任务体量，优先帮你建立稳定的推进节奏。', '這次推薦綜合了完成率、優先級和任務體量，優先幫你建立穩定的推進節奏。', 'This recommendation blends completion rate, priority, and task size to keep your momentum stable.')
      };
    }

    function getMilestoneProgress() {
      const targets = [7, 30, 100];
      const nextTarget = targets.find((value) => state.streak < value && !state.milestoneClaims.includes(value)) || null;
      const available = targets.filter((value) => state.streak >= value && !state.milestoneClaims.includes(value));
      return { targets, nextTarget, available };
    }

    function normalizeCustomMinutes(value) {
      const numericValue = Number(value);
      if (!Number.isFinite(numericValue)) return customDurationMinutes;
      const rounded = Math.round(numericValue / 5) * 5;
      return Math.max(5, Math.min(120, rounded));
    }

    function getDurationLabel(seconds) {
      if (seconds === 20) return 'Demo 20s';
      const minutes = Math.round(seconds / 60);
      return localizedText(`${minutes} 分钟`, `${minutes} 分鐘`, `${minutes} min`);
    }

    function getTimerTheme(seconds = selectedDuration) {
      if (seconds <= 20) {
        return {
          key: 'tomato',
          label: localizedText('番茄热身', '番茄熱身', 'Tomato warm-up')
        };
      }
      if (seconds <= 20 * 60) {
        return {
          key: 'sun',
          label: localizedText('轻专注晨光', '輕專注晨光', 'Light focus glow')
        };
      }
      if (seconds <= 35 * 60) {
        return {
          key: 'tomato',
          label: localizedText('标准番茄节奏', '標準番茄節奏', 'Standard tomato rhythm')
        };
      }
      if (seconds <= 55 * 60) {
        return {
          key: 'leaf',
          label: localizedText('深度森林沉浸', '深度森林沉浸', 'Deep forest flow')
        };
      }
      return {
        key: 'moon',
        label: localizedText('夜间静谧模式', '夜間靜謐模式', 'Quiet night mode')
      };
    }

    function getModeCopy(modeId) {
      if (modeId === 'light') {
        return {
          title: localizedText('轻专注', '輕專注', 'Light'),
          description: localizedText('15 分钟快速进入状态，适合热身。', '15 分鐘快速進入狀態，適合熱身。', '15-minute warm-up to ease into focus.')
        };
      }
      if (modeId === 'deep') {
        return {
          title: localizedText('深度专注', '深度專注', 'Deep'),
          description: localizedText('45 分钟沉浸冲刺，适合长块任务。', '45 分鐘沉浸衝刺，適合長塊任務。', '45-minute immersive sprint for heavier work.')
        };
      }
      if (modeId === 'night') {
        return {
          title: localizedText('夜间模式', '夜間模式', 'Night'),
          description: localizedText('60 分钟安静沉淀，适合夜晚复盘。', '60 分鐘安靜沉澱，適合夜晚復盤。', '60-minute calm session for quiet nighttime work.')
        };
      }
      return {
        title: localizedText('标准', '標準', 'Standard'),
        description: localizedText('25 分钟经典番茄钟，最平衡的节奏。', '25 分鐘經典番茄鐘，最平衡的節奏。', '25-minute classic Pomodoro rhythm.')
      };
    }

    function getFocusProgress(timer = timerState) {
      if (!timer || !timer.totalSeconds) return 0;
      return clamp(1 - timer.remainingSeconds / timer.totalSeconds, 0, 1);
    }

    function setFocusScene(outcome, options = {}) {
      focusSceneState = {
        ...focusSceneState,
        outcome,
        progress: typeof options.progress === 'number' ? clamp(options.progress, 0, 1) : focusSceneState.progress,
        reason: options.reason || focusSceneState.reason,
        reward: Object.prototype.hasOwnProperty.call(options, 'reward') ? options.reward : focusSceneState.reward,
        theme: Object.prototype.hasOwnProperty.call(options, 'theme') ? options.theme : focusSceneState.theme
      };
    }

    function getFocusSceneCopy(themeKey, outcome, progress) {
      if (outcome === 'happy') {
        const reward = focusSceneState.reward || rewardReady;
        return {
          eyebrow: localizedText('Focus Celebration', 'Focus Celebration', 'Focus Celebration'),
          title: themeKey === 'moon'
            ? localizedText('夜晚也被你点亮了', '夜晚也被你點亮了', 'You lit up the night')
            : localizedText('你把番茄养成啦', '你把番茄養成啦', 'You raised a joyful tomato'),
          message: localizedText(
            `专注成功收官，番茄已经笑开花。奖励掉落：${reward.water} 水滴、${reward.coins} 金币，还有 ${reward.seeds} 颗种子在等你去建设小岛。`,
            `專注成功收官，番茄已經笑開花。獎勵掉落：${reward.water} 水滴、${reward.coins} 金幣，還有 ${reward.seeds} 顆種子等你去建設小島。`,
            `You finished strong and your tomato is glowing. Rewards are ready: ${reward.water} water, ${reward.coins} coins, and ${reward.seeds} seeds for your island.`
          )
        };
      }

      if (outcome === 'rotten') {
        return {
          eyebrow: localizedText('番茄撒娇中', '番茄撒嬌中', 'Tomato needs a hug'),
          title: localizedText('半途离开也没关系', '半途離開也沒關係', 'Leaving midway is okay'),
          message: localizedText(
            '小番茄已经委屈地变成了可爱烂番茄，但它还在等你下一轮把它重新养回来。休息一下，我们再开一颗新的番茄。',
            '小番茄已經委屈地變成可愛爛番茄，但它還在等你下一輪把它重新養回來。休息一下，我們再開一顆新的番茄。',
            'Your tomato turned into a cute little rotten bean, but it is still waiting for a comeback run. Take a breath and grow a fresh one next round.'
          )
        };
      }

      if (outcome === 'growing') {
        if (progress < 0.2) {
          return {
            eyebrow: localizedText('番茄发芽中', '番茄發芽中', 'Tomato sprouting'),
            title: localizedText('先稳稳进入状态', '先穩穩進入狀態', 'Ease into the rhythm'),
            message: localizedText(
              '专注才刚刚开始，番茄还是颗小小苗。先守住前几分钟，今天的状态就会慢慢站稳。',
              '專注才剛剛開始，番茄還是一顆小小苗。先守住前幾分鐘，今天的狀態就會慢慢站穩。',
              'Focus has just started and your tomato is still tiny. Hold the first few minutes steady and the session will lock in.'
            )
          };
        }
        if (progress < 0.55) {
          return {
            eyebrow: localizedText('番茄正在长大', '番茄正在長大', 'Tomato growing'),
            title: localizedText('你已经把节奏养起来了', '你已經把節奏養起來了', 'You have momentum now'),
            message: localizedText(
              '倒计时过半之前，番茄会一点点变圆变饱满。继续保持，现在正是最容易进入心流的时候。',
              '倒計時過半之前，番茄會一點點變圓變飽滿。繼續保持，現在正是最容易進入心流的時候。',
              'Your tomato is getting plumper with every minute. Keep the rhythm and you are entering the easiest window for flow.'
            )
          };
        }
        if (progress < 0.9) {
          return {
            eyebrow: localizedText('番茄快熟啦', '番茄快熟啦', 'Almost ripe'),
            title: localizedText('离奖励只差一点点', '離獎勵只差一點點', 'Rewards are close'),
            message: localizedText(
              '现在的每一分钟都在让番茄接近成熟。别切走，这一段坚持下来会很有成就感。',
              '現在的每一分鐘都在讓番茄接近成熟。別切走，這一段堅持下來會很有成就感。',
              'Every minute now ripens the tomato further. Stay with it and the finish will feel extra satisfying.'
            )
          };
        }
        return {
          eyebrow: localizedText('最后冲刺', '最後衝刺', 'Final sprint'),
          title: localizedText('再坚持一下就开花庆祝', '再堅持一下就開花慶祝', 'One more push to celebrate'),
          message: localizedText(
            '番茄已经圆润到快要发光了，最后这一小段坚持下来，马上就是奖励时刻。',
            '番茄已經圓潤到快要發光了，最後這一小段堅持下來，馬上就是獎勵時刻。',
            'Your tomato is practically glowing. Hold this last stretch and the reward moment is next.'
          )
        };
      }

      if (focusSceneState.reason === 'paused' && progress > 0) {
        return {
          eyebrow: localizedText('暂停补气中', '暫停補氣中', 'Paused for a breath'),
          title: localizedText('番茄在等你回来', '番茄在等你回來', 'Your tomato is waiting'),
          message: localizedText(
            '暂停不算失败，番茄只是先停在这里等你。回来继续的时候，它会从现在的大小接着长。',
            '暫停不算失敗，番茄只是先停在這裡等你。回來繼續的時候，它會從現在的大小接著長。',
            'A pause is not a failure. Your tomato is simply waiting here and will keep growing from this exact size when you return.'
          )
        };
      }

      if (themeKey === 'sun') {
        return {
          eyebrow: localizedText('晨光模式', '晨光模式', 'Morning glow'),
          title: localizedText('先来一颗轻盈小番茄', '先來一顆輕盈小番茄', 'Start with a light tomato'),
          message: localizedText(
            '短时专注适合热身，让大脑柔和地进入工作状态。开始后，番茄会随着倒计时慢慢鼓起来。',
            '短時專注適合熱身，讓大腦柔和地進入工作狀態。開始後，番茄會隨著倒計時慢慢鼓起來。',
            'A shorter session is perfect for warming up. Once you start, the tomato slowly puffs up with the countdown.'
          )
        };
      }

      if (themeKey === 'leaf') {
        return {
          eyebrow: localizedText('森林深潜', '森林深潛', 'Forest flow'),
          title: localizedText('适合把任务一口气吃掉', '適合把任務一口氣吃掉', 'Built for deep focus'),
          message: localizedText(
            '更长的专注会把氛围切到森林沉浸感。开始后，番茄会越长越饱满，像陪你一起闯关的小宠物。',
            '更長的專注會把氛圍切到森林沉浸感。開始後，番茄會越長越飽滿，像陪你一起闖關的小寵物。',
            'Longer sessions switch the mood into a forest flow. Your tomato grows beside you like a tiny companion clearing the level.'
          )
        };
      }

      if (themeKey === 'moon') {
        return {
          eyebrow: localizedText('夜航静谧', '夜航靜謐', 'Quiet night'),
          title: localizedText('把夜晚变成安静奖励区', '把夜晚變成安靜獎勵區', 'Turn the night into a reward zone'),
          message: localizedText(
            '夜间模式会切换成更安静的氛围。番茄会在星空边慢慢长大，陪你把思路稳定下来。',
            '夜間模式會切換成更安靜的氛圍。番茄會在星空邊慢慢長大，陪你把思路穩定下來。',
            'Night mode creates a calmer atmosphere. The tomato grows under the stars while your thoughts settle into place.'
          )
        };
      }

      return {
        eyebrow: localizedText('番茄待命中', '番茄待命中', 'Tomato on standby'),
        title: localizedText('让番茄陪你一起长大', '讓番茄陪你一起長大', 'Grow the tomato with your focus'),
        message: localizedText(
          '开始专注后，番茄会随着倒计时慢慢成熟。坚持完成，会收获超可爱的奖励时刻。',
          '開始專注後，番茄會隨著倒計時慢慢成熟。堅持完成，會收穫超可愛的獎勵時刻。',
          'Start focusing and the tomato ripens with the countdown. Finish the session to unlock a delightfully rewarding moment.'
        )
      };
    }

    function renderFocusScene() {
      if (!elements.focusScene) return;

      const timerTheme = getTimerTheme(timerState.totalSeconds || selectedDuration);
      const themeKey = focusPreview?.theme || focusSceneState.theme || timerTheme.key;
      const previewProgress = typeof focusPreview?.progress === 'number' ? focusPreview.progress : null;
      const progress = previewProgress ?? (timerState.isRunning ? getFocusProgress() : focusSceneState.progress);
      const outcome = focusPreview?.outcome || (timerState.isRunning ? 'growing' : focusSceneState.outcome);
      const scale = outcome === 'happy'
        ? 1.18
        : outcome === 'rotten'
          ? 0.94
          : 0.78 + clamp(progress, 0, 1) * 0.42;
      const copy = getFocusSceneCopy(themeKey, outcome, progress);
      const burstLabels = outcome === 'happy'
        ? [
            `+${rewardReady.water}${localizedText(' 水滴', ' 水滴', ' water')}`,
            `+${rewardReady.coins}${localizedText(' 金币', ' 金幣', ' coins')}`,
            `+${rewardReady.seeds}${localizedText(' 种子', ' 種子', ' seeds')}`
          ]
        : [
            localizedText('稳住节奏', '穩住節奏', 'Stay steady'),
            localizedText('继续长大', '繼續長大', 'Keep growing'),
            localizedText('快熟啦', '快熟啦', 'Almost ripe')
          ];

      elements.focusScene.dataset.theme = themeKey;
      elements.focusScene.dataset.outcome = outcome;
      elements.focusScene.style.setProperty('--tomato-scale', scale.toFixed(3));
      elements.focusScene.style.setProperty('--focus-progress', progress.toFixed(3));

      if (elements.focusSceneEyebrow) elements.focusSceneEyebrow.textContent = copy.eyebrow;
      if (elements.focusSceneTitle) elements.focusSceneTitle.textContent = copy.title;
      if (elements.focusSceneMessage) elements.focusSceneMessage.textContent = copy.message;

      document.querySelectorAll('.mini-reward-bursts span').forEach((node, index) => {
        if (burstLabels[index]) node.textContent = burstLabels[index];
      });
    }

    function getJourneyState() {
      const nextTask = core.getNextTask(state);
      const checkedInToday = state.checkIns.includes(core.todayIso());

      if (!state.tasks.length) {
        return {
          title: localizedText('第一步：让 AI 帮你拆任务', '第一步：讓 AI 幫你拆任務', 'Step 1: Let AI break down your goal'),
          description: localizedText('从一个长期目标开始，生成今天的 to-do list，再进入专注模式。', '從一個長期目標開始，生成今天的 to-do list，再進入專注模式。', 'Start with one long-term goal, generate today’s to-do list, and then move into focus mode.'),
          chips: [
            localizedText('Journey 01', 'Journey 01', 'Journey 01'),
            localizedText('AI Task Planning', 'AI Task Planning', 'AI Task Planning')
          ],
          actions: [{ id: 'generate-plan', label: localizedText('生成今日任务', '生成今日任務', 'Generate today plan'), style: 'primary' }]
        };
      }

      if (!state.selectedTask) {
        return {
          title: localizedText('第二步：选择一个最想完成的任务', '第二步：選擇一個最想完成的任務', 'Step 2: Pick the task you want to finish first'),
          description: localizedText('选中任务后会直接进入 Focus Mode，倒计时结束会自动掉落奖励。', '選中任務後會直接進入 Focus Mode，倒計時結束會自動掉落獎勵。', 'Selecting a task takes you straight into Focus Mode, and finishing the timer drops a reward.'),
          chips: [
            localizedText(`${state.tasks.length} 个任务待专注`, `${state.tasks.length} 個任務待專注`, `${state.tasks.length} tasks ready`),
            localizedText('Journey 02', 'Journey 02', 'Journey 02')
          ],
          actions: [{ id: 'select-next-task', label: localizedText('选第一项任务', '選第一項任務', 'Pick first task'), style: 'primary' }]
        };
      }

      if (!state.selectedTask.completed && timerState.isRunning) {
        return {
          title: localizedText('第三步：保持专注，倒计时会继续运行', '第三步：保持專注，倒計時會繼續運行', 'Step 3: Stay focused, the timer keeps running'),
          description: localizedText('现在可以停留在计时界面，或者切到后台。结束后会震动/音效提醒并弹出 Bonus。', '現在可以停留在計時界面，或者切到後台。結束後會震動/音效提醒並彈出 Bonus。', 'Stay on the timer screen or switch to the background. When time is up, you get a cue and a bonus.'),
          chips: [
            localizedText(`剩余 ${Math.ceil(timerState.remainingSeconds / 60)} 分钟`, `剩餘 ${Math.ceil(timerState.remainingSeconds / 60)} 分鐘`, `${Math.ceil(timerState.remainingSeconds / 60)} min left`),
            localizedText('Journey 03', 'Journey 03', 'Journey 03')
          ],
          actions: [
            { id: 'open-focus', label: localizedText('返回计时界面', '返回計時界面', 'Open focus view'), style: 'secondary' },
            { id: 'pause-focus', label: localizedText('暂停专注', '暫停專注', 'Pause focus'), style: 'ghost' }
          ]
        };
      }

      if (state.focusCompleted) {
        return {
          title: localizedText('第四步：领取 Bonus 并推进今日闭环', '第四步：領取 Bonus 並推進今日閉環', 'Step 4: Claim the bonus and move the journey forward'),
          description: localizedText('奖励已经准备好。你可以先去打卡，再建设岛屿，或者直接开启下一项任务。', '獎勵已經準備好。你可以先去打卡，再建設島嶼，或者直接開啟下一項任務。', 'Your reward is ready. Check in first, build your island, or jump to the next task.'),
          chips: [
            localizedText('Journey 04', 'Journey 04', 'Journey 04'),
            localizedText('Bonus Ready', 'Bonus Ready', 'Bonus Ready')
          ],
          actions: [
            { id: 'open-checkin', label: localizedText('去看打卡', '去看打卡', 'Open check-in'), style: 'primary' },
            { id: 'open-island', label: localizedText('去建设岛屿', '去建設島嶼', 'Build island'), style: 'secondary' }
          ]
        };
      }

      if (checkedInToday && nextTask) {
        return {
          title: localizedText('第五步：今天的闭环已建立，继续下一项或去社交互动', '第五步：今天的閉環已建立，繼續下一項或去社交互動', 'Step 5: Today’s loop is active, continue or socialize'),
          description: localizedText('今天已经打卡完成。你可以继续下一项专注任务，或者去好友岛屿互动。', '今天已經打卡完成。你可以繼續下一項專注任務，或者去好友島嶼互動。', 'Today’s check-in is done. Continue with the next focus task or visit friends.'),
          chips: [
            localizedText('Journey 05', 'Journey 05', 'Journey 05'),
            localizedText('Friends & Return', 'Friends & Return', 'Friends & Return')
          ],
          actions: [
            { id: 'select-next-task', label: localizedText('开始下一项', '開始下一項', 'Start next task'), style: 'primary' },
            { id: 'open-friends', label: localizedText('去看好友状态', '去看好友狀態', 'Visit friends'), style: 'secondary' },
            { id: 'prepare-tomorrow', label: localizedText('安排明日计划', '安排明日計劃', 'Plan tomorrow'), style: 'ghost' }
          ]
        };
      }

      return {
        title: localizedText('继续推动 Pomoland 的专注旅程', '繼續推動 Pomoland 的專注旅程', 'Keep moving the Pomoland journey forward'),
        description: localizedText('从任务、专注、奖励到建设和好友互动，每一步都在推动番茄岛成长。', '從任務、專注、獎勵到建設和好友互動，每一步都在推動番茄島成長。', 'Tasks, focus, rewards, building, and social play all push your island forward.'),
        chips: [localizedText('Journey', 'Journey', 'Journey')],
        actions: [
          { id: 'open-today', label: localizedText('回到任务台', '回到任務台', 'Back to today'), style: 'secondary' },
          { id: 'open-island', label: localizedText('建设岛屿', '建設島嶼', 'Build island'), style: 'primary' }
        ]
      };
    }

    function stopTicker() {
      if (timerId) {
        window.clearInterval(timerId);
        timerId = null;
      }
    }

    function playCompletionCue() {
      if (navigator.vibrate) {
        navigator.vibrate([180, 120, 220]);
      }
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass) {
          const audioContext = new AudioContextClass();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          oscillator.type = 'sine';
          oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
          gainNode.gain.setValueAtTime(0.0001, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.18, audioContext.currentTime + 0.02);
          gainNode.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.28);
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.3);
        }
      } catch (error) {
        console.warn('Unable to play completion cue', error);
      }

      if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
        new Notification(
          localizedText('Pomoland 专注完成', 'Pomoland 專注完成', 'Pomoland focus complete'),
          {
            body: localizedText('回到页面领取 Bonus，并继续建设岛屿。', '回到頁面領取 Bonus，並繼續建設島嶼。', 'Return to Pomoland to claim your bonus and keep building.')
          }
        );
      }
    }

    function syncTimerFromClock() {
      timerState = core.syncTimerState(timerState);
      if (timerState.completed && state.selectedTask && !state.focusCompleted) {
        finishFocus(true);
        return;
      }
      if (timerState.isRunning) {
        setFocusScene('growing', {
          progress: getFocusProgress(timerState),
          reason: 'running',
          reward: null,
          theme: null
        });
      }
      renderTimer();
      persistSession();
    }

    function startTicker() {
      stopTicker();
      timerId = window.setInterval(syncTimerFromClock, 250);
    }

    function setLanguage(nextLanguage) {
      language = core.getSupportedLanguages().includes(nextLanguage) ? nextLanguage : 'zh-CN';
      state.language = language;
      document.documentElement.lang = language;
      document.querySelectorAll('[data-i18n]').forEach((node) => {
        node.textContent = core.t(language, node.dataset.i18n);
      });
      document.querySelectorAll('[data-i18n-placeholder]').forEach((node) => {
        node.setAttribute('placeholder', core.t(language, node.dataset.i18nPlaceholder));
      });
      document.querySelectorAll('.language-button').forEach((button) => {
        button.classList.toggle('is-active', button.dataset.lang === language);
      });
      if (elements.goalInput && !elements.goalInput.dataset.changed) {
        elements.goalInput.value = core.t(language, 'defaultGoal');
      }
      if (state.tasks.length) {
        const selectedId = state.selectedTask ? state.selectedTask.id : null;
        state.tasks = core.translateTasks(state.tasks, language);
        if (selectedId) {
          state.selectedTask = state.tasks.find((task) => task.id === selectedId) || null;
        }
      }
      rewardReady = {
        ...rewardReady,
        decoration: core.t(language, 'rewardDecoration')
      };
      renderAll();
      persistSession();
    }

    function openWorkspace() {
      elements.home.hidden = true;
      elements.workspace.hidden = false;
      switchView('today');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function switchView(view) {
      state.currentView = view;
      document.querySelectorAll('.workspace-panel').forEach((panel) => {
        panel.hidden = panel.dataset.panel !== view;
      });
      document.querySelectorAll('.workspace-nav-button').forEach((button) => {
        button.classList.toggle('is-active', button.dataset.view === view);
      });
      renderAll();
    }

    function renderAll() {
      renderResources();
      renderJourneyGuide();
      renderTasks();
      renderCoachPanel();
      renderSelectedTask();
      renderDurationPicker();
      renderTimer();
      renderFocusScene();
      renderIsland();
      renderCheckIns();
      renderFriends();
      renderReport();
      renderAgentIdle();
    }

    function renderDurationPicker() {
      if (elements.focusModeGrid) {
        elements.focusModeGrid.innerHTML = FOCUS_MODES.map((mode) => {
          const copy = getModeCopy(mode.id);
          const isActive = selectedDuration === mode.seconds;
          return `
            <button class="focus-mode-card ${isActive ? 'is-active' : ''}" type="button" data-mode-seconds="${mode.seconds}" data-theme="${mode.theme}">
              <span class="mode-icon" aria-hidden="true"></span>
              <strong>${escapeHtml(copy.title)}</strong>
              <span>${escapeHtml(copy.description)}</span>
            </button>
          `;
        }).join('');
      }
      if (!elements.durationPresets) return;
      elements.durationPresets.innerHTML = DURATION_PRESETS.map((seconds) => `
        <button class="duration-button ${selectedDuration === seconds ? 'is-active' : ''}" type="button" data-duration-preset="${seconds}">
          ${escapeHtml(getDurationLabel(seconds))}
        </button>
      `).join('');

      if (elements.customDurationBadge) {
        elements.customDurationBadge.textContent = localizedText('Timer Studio', 'Timer Studio', 'Timer Studio');
      }
      if (elements.customDurationTitle) {
        elements.customDurationTitle.textContent = localizedText('自定义专注时间', '自訂專注時間', 'Custom focus duration');
      }
      if (elements.customDurationHint) {
        elements.customDurationHint.textContent = localizedText(
          '拖动滑块或输入分钟数，做一个更适合自己的番茄钟。',
          '拖動滑塊或輸入分鐘數，做一個更適合自己的番茄鐘。',
          'Use the slider or type in minutes to build a timer that fits your own rhythm.'
        );
      }
      if (elements.customDurationUnit) {
        elements.customDurationUnit.textContent = localizedText('分钟', '分鐘', 'min');
      }
      if (elements.applyCustomDuration) {
        elements.applyCustomDuration.textContent = localizedText('应用自定义时长', '套用自訂時長', 'Apply custom time');
      }
      if (elements.customDurationRange) {
        elements.customDurationRange.value = String(customDurationMinutes);
      }
      if (elements.customDurationInput) {
        elements.customDurationInput.value = String(customDurationMinutes);
      }
    }

    function renderJourneyGuide() {
      if (!elements.journeyGuide) return;
      const journey = getJourneyState();
      elements.journeyGuide.innerHTML = `
        <div class="journey-guide-main">
          <p class="eyebrow">Journey Coach</p>
          <h2>${escapeHtml(journey.title)}</h2>
          <p>${escapeHtml(journey.description)}</p>
          <div class="journey-guide-meta">
            ${journey.chips.map((chip) => `<span class="journey-chip">${escapeHtml(chip)}</span>`).join('')}
          </div>
        </div>
        <div class="journey-guide-actions">
          ${journey.actions.map((action) => `
            <button class="${action.style === 'primary' ? 'primary-button' : action.style === 'ghost' ? 'small-button ghost' : 'small-button secondary'}" type="button" data-journey-action="${action.id}">
              ${escapeHtml(action.label)}
            </button>
          `).join('')}
        </div>
      `;
    }

    function renderResources() {
      elements.resourceRows.forEach((node) => {
        const key = node.dataset.resource;
        node.textContent = state.resources[key];
      });
    }

    function renderTasks() {
      if (!elements.taskList) return;
      if (!state.tasks.length) {
        elements.taskList.innerHTML = `
          <div class="empty-state">
            <strong>${core.t(language, 'generatedPlan')}</strong>
            <span>${core.t(language, 'aiLoading').replace('...', '')}</span>
          </div>
        `;
        return;
      }
      const insights = getCoachInsights();
      const recommendedTaskId = insights.recommendedTask?.id;
      const completedCount = state.tasks.filter((task) => task.completed).length;
      elements.taskList.innerHTML = `
        <div class="task-board-bar">
          <div class="task-board-copy">
            <strong>${localizedText('计划工作台', '計劃工作台', 'Planning workspace')}</strong>
            <span>${localizedText(`已完成 ${completedCount}/${state.tasks.length} 项，可继续编辑、补充和排序任务。`, `已完成 ${completedCount}/${state.tasks.length} 項，可繼續編輯、補充和排序任務。`, `${completedCount}/${state.tasks.length} tasks complete. Keep editing, adding, and arranging.`)}</span>
          </div>
          <div class="task-board-actions">
            <button class="small-button secondary" type="button" data-add-custom-task="true">${localizedText('新增自定义任务', '新增自訂任務', 'Add custom task')}</button>
          </div>
        </div>
        ${state.tasks.map((task) => `
        <article class="task-card ${state.selectedTask && state.selectedTask.id === task.id ? 'is-selected' : ''} ${task.completed ? 'is-complete' : ''}" data-task-card="${task.id}">
          <div class="task-card-top">
            <div>
              <div class="task-chip-row">
                <span class="task-duration">${task.duration}m</span>
                <span class="task-chip gold">${escapeHtml(formatTaskReward(task))}</span>
                <span class="task-chip priority-${task.priority}">${escapeHtml(formatTaskPriority(task.priority))}</span>
                ${task.dueDate ? `<span class="task-chip due">${escapeHtml(formatTaskDueDate(task.dueDate))}</span>` : ''}
                ${recommendedTaskId === task.id ? `<span class="task-chip">${localizedText('AI 推荐', 'AI 推薦', 'AI pick')}</span>` : ''}
              </div>
              <h3>${escapeHtml(task.title)}</h3>
              <p>${escapeHtml(getTaskNotes(task))}</p>
            </div>
            <div class="task-card-actions">
              <button class="small-button" type="button" data-select-task="${task.id}" ${task.completed ? 'disabled' : ''}>${getTaskActionLabel(task)}</button>
              <button class="small-button secondary" type="button" data-edit-task="${task.id}" ${task.completed ? 'disabled' : ''}>${editingTaskId === task.id ? localizedText('收起编辑', '收起編輯', 'Close editor') : localizedText('自定义修改', '自訂修改', 'Customize')}</button>
            </div>
          </div>
          ${editingTaskId === task.id ? `
            <div class="task-editor">
              <div class="task-editor-grid">
                <label>
                  <span>${localizedText('任务标题', '任務標題', 'Task title')}</span>
                  <input type="text" data-task-title-input value="${escapeHtml(task.title)}" />
                </label>
                <label>
                  <span>${localizedText('专注时长', '專注時長', 'Focus duration')}</span>
                  <input type="number" min="5" max="120" step="5" data-task-duration-input value="${task.duration}" />
                </label>
              </div>
              <div class="task-editor-grid triple">
                <label>
                  <span>${localizedText('优先级', '優先級', 'Priority')}</span>
                  <select data-task-priority-input>
                    <option value="high" ${task.priority === 'high' ? 'selected' : ''}>${localizedText('高', '高', 'High')}</option>
                    <option value="medium" ${task.priority === 'medium' ? 'selected' : ''}>${localizedText('中', '中', 'Medium')}</option>
                    <option value="low" ${task.priority === 'low' ? 'selected' : ''}>${localizedText('低', '低', 'Low')}</option>
                  </select>
                </label>
                <label>
                  <span>${localizedText('截止时间', '截止時間', 'Due date')}</span>
                  <input type="date" data-task-due-input value="${task.dueDate || ''}" />
                </label>
                <label>
                  <span>${localizedText('语音输入', '語音輸入', 'Voice input')}</span>
                  <button class="small-button ghost voice-button" type="button" data-voice-task="${task.id}" data-voice-field="notes">${localizedText('录入说明', '錄入說明', 'Dictate note')}</button>
                </label>
              </div>
              <label>
                <span>${localizedText('任务说明', '任務說明', 'Task note')}</span>
                <textarea rows="3" data-task-notes-input>${escapeHtml(getTaskNotes(task))}</textarea>
              </label>
              <div class="task-editor-footer">
                <strong data-task-gold-preview="${task.id}">${escapeHtml(formatTaskReward(task))}</strong>
                <span>${localizedText('修改时长、标题或说明后，奖励金币会自动重新计算；优先级和截止时间会影响 AI 推荐。', '修改時長、標題或說明後，獎勵金幣會自動重新計算；優先級和截止時間會影響 AI 推薦。', 'Changing duration, title, or notes recalculates coins automatically; priority and due date also affect AI recommendations.')}</span>
              </div>
              <div class="task-card-actions">
                <button class="small-button secondary" type="button" data-save-task="${task.id}">${localizedText('保存修改', '保存修改', 'Save changes')}</button>
                <button class="small-button ghost" type="button" data-cancel-task="${task.id}">${localizedText('取消', '取消', 'Cancel')}</button>
              </div>
            </div>
          ` : ''}
        </article>
      `).join('')}
      `;
    }

    function renderCoachPanel() {
      if (!elements.coachPanel) return;
      if (!state.tasks.length) {
        elements.coachPanel.innerHTML = `
          <div class="coach-panel-empty">
            <strong>AI Coach</strong>
            <p>${localizedText('制定计划后，这里会根据你的任务、连胜和完成情况给出更个性化的下一步建议。', '制定計劃後，這裡會根據你的任務、連勝和完成情況給出更個人化的下一步建議。', 'Once your plan is ready, AI Coach will suggest your next best move based on tasks, streak, and completion behavior.')}</p>
          </div>
        `;
        return;
      }

      const insights = getCoachInsights();
      const recommendedTask = insights.recommendedTask;
      const difficultyTask = insights.difficultyTask;
      const acceptedRate = insights.metrics.shown ? Math.round((insights.metrics.accepted / insights.metrics.shown) * 100) : 0;
      const completedRate = insights.metrics.accepted ? Math.round((insights.metrics.completed / insights.metrics.accepted) * 100) : 0;

      elements.coachPanel.innerHTML = `
        <div class="coach-panel-shell">
          <div class="coach-panel-header">
            <div>
              <p class="eyebrow">AI Coach</p>
              <h3>${localizedText('个性化推荐与任务调节', '個人化推薦與任務調節', 'Personalized recommendations')}</h3>
              <p class="coach-goal-line">${localizedText(`当前会围绕你的目标「${state.goal}」动态调整推荐。`, `當前會圍繞你的目標「${state.goal}」動態調整推薦。`, `Recommendations now adapt around your goal: "${state.goal}".`)}</p>
            </div>
            <div class="coach-kpi">
              <span>${localizedText(`推荐点击率 ${acceptedRate}%`, `推薦點擊率 ${acceptedRate}%`, `CTR ${acceptedRate}%`)}</span>
              <span>${localizedText(`按推荐完成 ${completedRate}%`, `按推薦完成 ${completedRate}%`, `Completion ${completedRate}%`)}</span>
            </div>
          </div>
          <div class="coach-rationale">${escapeHtml(insights.rationale)}</div>
          <div class="coach-card-grid">
            <article class="coach-card">
              <span class="coach-badge">${localizedText('推荐起手', '推薦起手', 'Best next task')}</span>
              <strong>${recommendedTask ? escapeHtml(recommendedTask.title) : localizedText('暂无推荐', '暫無推薦', 'No recommendation')}</strong>
              <p>${recommendedTask ? localizedText(`你现在更适合先完成 ${getTaskDurationLabel(recommendedTask.duration)} 的任务，先建立完成感，再进入下一段 Focus Mode。`, `你現在更適合先完成 ${getTaskDurationLabel(recommendedTask.duration)} 的任務，先建立完成感，再進入下一段 Focus Mode。`, `A ${recommendedTask.duration}-minute task is your best next move. Build momentum first, then enter Focus Mode.`) : ''}</p>
              ${recommendedTask ? `<button class="small-button secondary" type="button" data-coach-action="pick-recommended">${localizedText('采用这条推荐', '採用這條推薦', 'Use this recommendation')}</button>` : ''}
            </article>
            <article class="coach-card">
              <span class="coach-badge">${localizedText('难度调节', '難度調節', 'Difficulty tuning')}</span>
              <strong>${difficultyTask ? escapeHtml(difficultyTask.title) : localizedText('暂无可调任务', '暫無可調任務', 'No task to tune')}</strong>
              <p>${difficultyTask ? (
                insights.difficultyDuration < difficultyTask.duration
                  ? localizedText(`如果最近容易分心，建议先把这项任务从 ${difficultyTask.duration} 分钟调到 ${insights.difficultyDuration} 分钟，降低启动压力。`, `如果最近容易分心，建議先把這項任務從 ${difficultyTask.duration} 分鐘調到 ${insights.difficultyDuration} 分鐘，降低啟動壓力。`, `If starting feels hard lately, shorten this task from ${difficultyTask.duration} to ${insights.difficultyDuration} minutes to lower the barrier.`)
                  : localizedText(`你的状态比较稳，可以把这项任务从 ${difficultyTask.duration} 分钟提升到 ${insights.difficultyDuration} 分钟，吃掉更完整的一块任务。`, `你的狀態比較穩，可以把這項任務從 ${difficultyTask.duration} 分鐘提升到 ${insights.difficultyDuration} 分鐘，吃掉更完整的一塊任務。`, `Your rhythm looks stable. Stretch this task from ${difficultyTask.duration} to ${insights.difficultyDuration} minutes for a fuller deep-work block.`)
              ) : ''}</p>
              ${difficultyTask ? `<button class="small-button ghost" type="button" data-coach-action="adjust-difficulty">${localizedText('一键应用调整', '一鍵套用調整', 'Apply adjustment')}</button>` : ''}
            </article>
            <article class="coach-card">
              <span class="coach-badge">${localizedText('行为建议', '行為建議', 'Behavior cue')}</span>
              <strong>${state.streak >= 7 ? localizedText('你适合进入挑战节奏', '你適合進入挑戰節奏', 'You are ready for a challenge') : localizedText('先把连续完成感养起来', '先把連續完成感養起來', 'Build a steady completion loop')}</strong>
              <p>${state.streak >= 7
                ? localizedText('连续打卡不错，建议把长任务放在前面，并保留 1 个短任务做收尾，形成“先难后易”的胜利感。', '連續打卡不錯，建議把長任務放在前面，並保留 1 個短任務做收尾，形成「先難後易」的勝利感。', 'Your streak is healthy. Put the hardest task first and keep one shorter task as a satisfying finish.')
                : localizedText('如果最近完成率一般，今天先用 20-30 分钟的任务把进入状态这件事做轻，晚一点再加深难度。', '如果最近完成率一般，今天先用 20-30 分鐘的任務把進入狀態這件事做輕，晚一點再加深難度。', 'If completion has felt shaky, start with a 20-30 minute task today and deepen the difficulty later.')}</p>
            </article>
          </div>
        </div>
      `;
    }

    function renderAgentIdle() {
      if (!elements.agentProgress || elements.agentProgress.dataset.running === 'true') return;
      elements.agentProgress.innerHTML = `
        <div class="agent-progress-header">
          <strong>${core.t(language, 'agentTitle')}</strong>
          <span>${core.t(language, 'agentIdle')}</span>
        </div>
      `;
    }

    function renderAgentSteps(steps, currentIndex, isComplete) {
      if (!elements.agentProgress) return;
      elements.agentProgress.dataset.running = isComplete ? 'false' : 'true';
      elements.agentProgress.innerHTML = `
        <div class="agent-progress-header">
          <strong>${core.t(language, 'agentTitle')}</strong>
          <span>${isComplete ? core.t(language, 'agentComplete') : steps[currentIndex].text}</span>
        </div>
        <div class="agent-step-list">
          ${steps.map((step, index) => {
            const status = isComplete || index < currentIndex ? 'is-done' : index === currentIndex ? 'is-current' : '';
            return `<div class="agent-step ${status}"><span></span><p>${escapeHtml(step.text)}</p></div>`;
          }).join('')}
        </div>
      `;
    }

    function renderSelectedTask() {
      if (!elements.selectedTask) return;
      if (!state.selectedTask) {
        elements.selectedTask.innerHTML = `<span>${core.t(language, 'noTask')}</span>`;
        return;
      }
      const taskStatus = state.selectedTask.completed
        ? localizedText('已完成，可以切换下一项任务。', '已完成，可以切換下一項任務。', 'Completed. You can move on to the next task.')
        : timerState.isRunning
          ? localizedText('倒计时进行中，切到后台也会继续。', '倒計時進行中，切到後台也會繼續。', 'The countdown is running and continues in the background.')
          : localizedText('选择时长后开始专注。', '選擇時長後開始專注。', 'Choose a duration and start focusing.');
      elements.selectedTask.innerHTML = `
        <strong>${escapeHtml(state.selectedTask.title)}</strong>
        <span>${escapeHtml(getTaskNotes(state.selectedTask))}</span>
        <small>${escapeHtml(`${getTaskDurationLabel(state.selectedTask.duration)} · ${formatTaskReward(state.selectedTask)}`)}</small>
        <small>${escapeHtml(taskStatus)}</small>
      `;
    }

    function renderTimer() {
      const timerTheme = getTimerTheme(timerState.totalSeconds || selectedDuration);
      const minutes = Math.floor(timerState.remainingSeconds / 60).toString().padStart(2, '0');
      const seconds = Math.floor(timerState.remainingSeconds % 60).toString().padStart(2, '0');
      elements.timerDisplay.textContent = `${minutes}:${seconds}`;
      const progress = timerState.totalSeconds > 0 ? 1 - timerState.remainingSeconds / timerState.totalSeconds : 0;
      elements.timerRing.style.setProperty('--progress', `${Math.max(0, Math.min(1, progress)) * 360}deg`);
      elements.timerRing.dataset.theme = timerTheme.key;
      elements.timerRing.classList.toggle('is-running', timerState.isRunning);
      if (elements.timerMoodLabel) {
        elements.timerMoodLabel.textContent = timerTheme.label;
      }
      document.querySelectorAll('.duration-button').forEach((button) => {
        button.classList.toggle('is-active', Number(button.dataset.durationPreset) === selectedDuration);
      });
      document.querySelectorAll('.focus-mode-card').forEach((card) => {
        card.classList.toggle('is-active', Number(card.dataset.modeSeconds) === selectedDuration);
      });
    }

    function renderIsland() {
      if (!elements.islandScene) return;
      const visual = core.getIslandVisualState(state);
      elements.islandScene.dataset.level = String(visual.level);
      elements.islandScene.dataset.growth = visual.growthStage;
      elements.islandScene.dataset.crop = visual.cropVisual;
      elements.islandScene.dataset.plants = String(visual.plantCount);
      elements.islandScene.dataset.hydration = visual.hydrationStage;
      elements.islandScene.dataset.pet = visual.petMood;
      elements.islandScene.dataset.petActivity = visual.petActivity;
      elements.islandScene.dataset.decoration = visual.decorationStage;
      elements.islandScene.dataset.decorItems = visual.decorationTokens.join(' ');
      elements.islandScene.classList.toggle('has-dock', visual.hasDock);
      elements.islandMessage.textContent = state.lastMessage[language] || state.lastMessage.en;
      const decorationNode = document.querySelector('#decorations');
      if (decorationNode) {
        decorationNode.innerHTML = state.decorations.length
          ? state.decorations.map((item) => `<span>${escapeHtml(item)}</span>`).join('')
          : `<span>${core.t(language, 'rewardDecoration')}</span>`;
      }
    }

    function renderCheckIns() {
      if (!elements.checkInGrid) return;
      const today = core.todayIso();
      const milestoneProgress = getMilestoneProgress();
      const base = new Date(`${today}T00:00:00`);
      const days = Array.from({ length: 14 }, (_, index) => {
        const date = new Date(base);
        date.setDate(base.getDate() - 10 + index);
        return date.toISOString().slice(0, 10);
      });
      elements.checkInGrid.innerHTML = days.map((date) => {
        const completed = state.checkIns.includes(date);
        const isToday = date === today;
        return `<div class="calendar-day ${completed ? 'is-complete' : ''} ${isToday ? 'is-today' : ''}">
          <span>${date.slice(5)}</span>
        </div>`;
      }).join('');
      const streakNode = document.querySelector('#streakValue');
      if (streakNode) streakNode.textContent = state.streak;
      if (elements.protectionValue) elements.protectionValue.textContent = state.streakProtection;
      if (elements.milestoneValue) {
        elements.milestoneValue.textContent = milestoneProgress.available.length
          ? milestoneProgress.available.map((value) => `${value}d`).join(' / ')
          : milestoneProgress.nextTarget
            ? localizedText(`下一档 ${milestoneProgress.nextTarget} 天`, `下一檔 ${milestoneProgress.nextTarget} 天`, `Next at ${milestoneProgress.nextTarget}d`)
            : localizedText('已全部领取', '已全部領取', 'All claimed');
      }
      if (elements.checkinActions) {
        const milestoneDescription = milestoneProgress.available.length
          ? localizedText(
            `你已达成 ${milestoneProgress.available.join(' / ')} 天连胜，可以立即领取奖励。`,
            `你已達成 ${milestoneProgress.available.join(' / ')} 天連勝，可以立即領取獎勵。`,
            `You reached ${milestoneProgress.available.join(' / ')}-day streak rewards and can claim them now.`
          )
          : milestoneProgress.nextTarget
            ? localizedText(
              `继续完成 ${milestoneProgress.nextTarget - state.streak} 天，就能解锁下一档连胜奖励。`,
              `繼續完成 ${milestoneProgress.nextTarget - state.streak} 天，就能解鎖下一檔連勝獎勵。`,
              `Complete ${milestoneProgress.nextTarget - state.streak} more days to unlock the next streak reward.`
            )
            : localizedText('所有里程碑奖励都已解锁完成。', '所有里程碑獎勵都已解鎖完成。', 'All milestone rewards have been unlocked.');
        const protectionDescription = state.streakShieldActive
          ? localizedText('当前保护卡已生效，下次错过打卡会优先保住连胜。', '當前保護卡已生效，下次錯過打卡會優先保住連勝。', 'A protection card is active and will protect your next missed check-in.')
          : state.streakProtection > 0
            ? localizedText(`你还有 ${state.streakProtection} 张保护卡，可提前开启保护。`, `你還有 ${state.streakProtection} 張保護卡，可提前開啟保護。`, `You have ${state.streakProtection} protection cards ready to activate.`)
            : localizedText('暂时没有保护卡，先通过里程碑奖励再获取。', '暫時沒有保護卡，先通過里程碑獎勵再獲取。', 'No protection card left. Earn one from your next milestone reward.');
        elements.checkinActions.innerHTML = `
          <article class="checkin-card">
            <strong>${localizedText('里程碑奖励', '里程碑獎勵', 'Milestone reward')}</strong>
            <p>${escapeHtml(milestoneDescription)}</p>
            <button class="small-button secondary" type="button" data-checkin-action="claim-milestone" ${milestoneProgress.available.length ? '' : 'disabled'}>
              ${localizedText('领取可用奖励', '領取可用獎勵', 'Claim available reward')}
            </button>
          </article>
          <article class="checkin-card">
            <strong>${localizedText('连胜保护卡', '連勝保護卡', 'Streak protection')}</strong>
            <p>${escapeHtml(protectionDescription)}</p>
            <button class="small-button ghost" type="button" data-checkin-action="use-protection" ${(state.streakProtection > 0 && !state.streakShieldActive) ? '' : 'disabled'}>
              ${state.streakShieldActive ? localizedText('保护已开启', '保護已開啟', 'Protection active') : localizedText('开启保护卡', '開啟保護卡', 'Activate protection')}
            </button>
          </article>
        `;
      }
    }

    function renderFriends() {
      if (!elements.friendGrid) return;
      elements.friendGrid.innerHTML = core.FRIENDS.map((friend) => {
        const message = state.friendMessages[friend.id];
        const visitDetails = core.getFriendVisitDetails(friend.id, language);
        return `
          <article class="friend-card">
            <div class="friend-island friend-${friend.color}"></div>
            <div>
              <h3>${friend.name}</h3>
              <p>${escapeHtml(visitDetails.mood)}</p>
              <span class="friend-message">${message ? (message[language] || message.en) : '&nbsp;'}</span>
            </div>
            <div class="friend-actions">
              <button type="button" class="small-button" data-friend="${friend.id}" data-action="help">${core.t(language, 'help')}</button>
              <button type="button" class="small-button secondary" data-friend="${friend.id}" data-action="visit">${core.t(language, 'visit')}</button>
              <button type="button" class="small-button ghost" data-friend="${friend.id}" data-action="steal">${core.t(language, 'steal')}</button>
            </div>
          </article>
        `;
      }).join('');
    }

    function renderReport() {
      if (!elements.reportBars) return;
      const report = core.buildReport(state, language);
      const max = Math.max(...report.days.map((day) => day.value));
      elements.reportBars.innerHTML = report.days.map((day) => `
        <div class="bar-item">
          <div class="bar-track"><span style="height:${Math.round((day.value / max) * 100)}%"></span></div>
          <small>${day.label}</small>
        </div>
      `).join('');
      elements.reportSummary.textContent = report.summary;
      const completionNode = document.querySelector('#completionRate');
      if (completionNode) completionNode.textContent = `${report.completionRate}%`;
      const reportStreak = document.querySelector('#reportStreak');
      if (reportStreak) reportStreak.textContent = report.streak;
    }

    async function generatePlan() {
      const goal = elements.goalInput.value.trim() || core.t(language, 'defaultGoal');
      state.goal = goal;
      state.tasks = [];
      renderTasks(); // Render empty tasks immediately
      if (elements.generatePlanButton) elements.generatePlanButton.disabled = true;

      elements.agentProgress.dataset.running = 'true';
      elements.agentProgress.innerHTML = `
        <div class="agent-progress-header">
          <strong>${core.t(language, 'agentTitle')}</strong>
          <span>${core.t(language, 'aiLoading')}</span>
        </div>
      `;

      try {
        const planningSteps = await core.getPlanningSteps(language);
        let index = 0;

        const advance = () => {
          renderAgentSteps(planningSteps, index, false);
          index += 1;
          if (index < planningSteps.length) {
            window.setTimeout(advance, 620);
          } else {
            // All planning steps rendered, now generate tasks
            core.generateTasks(goal, language)
              .then(response => { // 接收新的响应对象
                state.tasks = response.tasks;
                state.coachStats.shown += response.tasks.length ? 1 : 0;
                state.coachAcceptedTaskId = null;
                editingTaskId = null;
                // 显示鼓励语
                elements.agentProgress.innerHTML = `
                  <div class="agent-progress-header">
                    <strong>${core.t(language, 'agentTitle')}</strong>
                    <span>${response.encouragement}</span>
                  </div>
                `;
                renderAgentSteps(planningSteps, planningSteps.length - 1, true); // Mark last step complete
                renderTasks();
                if (elements.generatePlanButton) elements.generatePlanButton.disabled = false;
              })
              .catch(error => {
                console.error('Error generating tasks:', error);
                elements.agentProgress.dataset.running = 'false';
                elements.agentProgress.innerHTML = `
                  <div class="agent-progress-header">
                    <strong>${core.t(language, 'agentTitle')}</strong>
                    <span>Error: ${error.message || 'Failed to generate tasks.'}</span>
                  </div>
                `;
                if (elements.generatePlanButton) elements.generatePlanButton.disabled = false;
              });
          }
        };
        window.setTimeout(advance, 620); // Start the planning step animation

      } catch (error) {
        console.error('Error fetching planning steps:', error);
        elements.agentProgress.dataset.running = 'false';
        elements.agentProgress.innerHTML = `
          <div class="agent-progress-header">
            <strong>${core.t(language, 'agentTitle')}</strong>
            <span>Error: ${error.message || 'Failed to get planning steps.'}</span>
          </div>
        `;
        if (elements.generatePlanButton) elements.generatePlanButton.disabled = false;
      }
    }

    function setDuration(seconds) {
      const previousProgress = getFocusProgress(timerState);
      const changedDuration = selectedDuration !== seconds;
      if (!focusPreview && changedDuration && previousProgress > 0.08 && !timerState.completed) {
        setFocusScene('rotten', {
          progress: previousProgress,
          reason: 'changed-duration',
          reward: null,
          theme: null
        });
      }
      stopTicker();
      selectedDuration = seconds;
      if (seconds !== 20) {
        customDurationMinutes = normalizeCustomMinutes(seconds / 60);
      }
      timerState = core.createTimerState(seconds, state.selectedTask ? state.selectedTask.id : null);
      if (!focusPreview && previousProgress <= 0.08) {
        setFocusScene('idle', {
          progress: 0,
          reason: 'ready',
          reward: null,
          theme: null
        });
      }
      renderDurationPicker();
      renderTimer();
      persistSession();
    }

    function syncCustomDurationInputs(value) {
      customDurationMinutes = normalizeCustomMinutes(value);
      if (elements.customDurationRange) {
        elements.customDurationRange.value = String(customDurationMinutes);
      }
      if (elements.customDurationInput) {
        elements.customDurationInput.value = String(customDurationMinutes);
      }
    }

    function applyCustomDuration() {
      syncCustomDurationInputs(customDurationMinutes);
      setDuration(customDurationMinutes * 60);
    }

    function startTimer() {
      if (!state.selectedTask) {
        alert(localizedText('请先选择一个任务再开始 Focus Mode。', '請先選擇一個任務再開始 Focus Mode。', 'Select a task before starting Focus Mode.'));
        return;
      }
      if (state.selectedTask.completed) {
        alert(localizedText('这个任务已经完成，请选择新的任务。', '這個任務已經完成，請選擇新的任務。', 'This task is already complete. Please choose a new one.'));
        return;
      }
      if (typeof Notification !== 'undefined' && Notification.permission === 'default') {
        Notification.requestPermission().catch(() => {});
      }
      timerState = core.startTimerState({
        ...timerState,
        taskId: state.selectedTask.id,
        totalSeconds: selectedDuration,
        remainingSeconds: timerState.remainingSeconds > 0 ? timerState.remainingSeconds : selectedDuration
      });
      state.focusCompleted = false;
      setFocusScene('growing', {
        progress: getFocusProgress(timerState),
        reason: 'running',
        reward: null,
        theme: null
      });
      startTicker();
      syncTimerFromClock();
    }

    function stopTimer() {
      stopTicker();
      timerState = core.pauseTimerState(timerState);
      setFocusScene('idle', {
        progress: getFocusProgress(timerState),
        reason: 'paused',
        reward: null,
        theme: null
      });
      renderTimer();
      persistSession();
    }

    function resetTimer() {
      const progressBeforeReset = getFocusProgress(timerState);
      const abandoned = progressBeforeReset > 0.08 && !timerState.completed;
      stopTicker();
      timerState = core.resetTimerState({
        ...timerState,
        taskId: state.selectedTask ? state.selectedTask.id : timerState.taskId,
        totalSeconds: selectedDuration
      });
      state.focusCompleted = false;
      setFocusScene(abandoned ? 'rotten' : 'idle', {
        progress: abandoned ? progressBeforeReset : 0,
        reason: abandoned ? 'abandoned' : 'ready',
        reward: null,
        theme: null
      });
      renderTimer();
      persistSession();
    }

    function finishFocus(fromTimer = false) {
      if (!state.selectedTask || state.focusCompleted) return;
      stopTicker();
      timerState = core.syncTimerState(timerState);
      const result = core.completeFocusSession(state, {
        totalSeconds: timerState.totalSeconds || selectedDuration,
        remainingSeconds: timerState.remainingSeconds
      });
      state = result.state;
      timerState = {
        taskId: state.selectedTask.id,
        totalSeconds: result.timer.totalSeconds || selectedDuration,
        remainingSeconds: result.timer.remainingSeconds,
        isRunning: false,
        completed: true,
        endTime: null
      };
      rewardReady = core.buildRewardBundle(language, timerState.totalSeconds || selectedDuration);
      setFocusScene('happy', {
        progress: 1,
        reason: 'completed',
        reward: rewardReady,
        theme: null
      });
      renderTimer();
      renderTasks();
      renderSelectedTask();
      renderBonus();
      elements.bonusModal.hidden = false;
      if (fromTimer) {
        playCompletionCue();
      }
      persistSession();
    }

    function renderBonus() {
      elements.bonusList.innerHTML = [
        `${core.t(language, 'coins')} +${rewardReady.coins}`,
        `${core.t(language, 'seeds')} +${rewardReady.seeds}`,
        `${core.t(language, 'water')} +${rewardReady.water}`,
        `${core.t(language, 'chances')} +${rewardReady.chances}`,
        rewardReady.decoration
      ].filter(Boolean).map((item) => `<span>${escapeHtml(item)}</span>`).join('');
      if (elements.bonusActions) {
        elements.bonusActions.innerHTML = `
          <button class="small-button secondary" type="button" data-bonus-action="checkin">${localizedText('领完去打卡', '領完去打卡', 'Claim and check in')}</button>
          <button class="small-button secondary" type="button" data-bonus-action="plant">${localizedText('领完去种植', '領完去種植', 'Claim and plant')}</button>
          <button class="small-button secondary" type="button" data-bonus-action="decorate">${localizedText('领完去装饰', '領完去裝飾', 'Claim and decorate')}</button>
          <button class="small-button ghost" type="button" data-bonus-action="friends">${localizedText('领完看好友', '領完看好友', 'Claim and visit friends')}</button>
        `;
      }
    }

    function claimBonus(destination = 'checkin', islandAction = null) {
      state = core.claimReward(state, rewardReady);
      state = core.recordCheckIn(state, core.todayIso());
      const nextTask = core.getNextTask(state);
      timerState = core.resetTimerState({
        ...timerState,
        taskId: state.selectedTask ? state.selectedTask.id : null,
        totalSeconds: selectedDuration
      });
      rewardReady = core.buildRewardBundle(language, selectedDuration);
      setFocusScene('idle', {
        progress: 0,
        reason: 'ready',
        reward: null,
        theme: null
      });
      elements.bonusModal.hidden = true;
      if (islandAction) {
        state = core.applyIslandAction(state, islandAction);
      }
      if (destination === 'friends') {
        switchView('friends');
      } else if (destination === 'island') {
        switchView('island');
      } else if (destination === 'focus' && nextTask) {
        state = core.selectTask(state, nextTask);
        selectedDuration = nextTask.duration ? nextTask.duration * 60 : selectedDuration;
        timerState = core.createTimerState(selectedDuration, nextTask.id);
        switchView('focus');
      } else if (destination === 'today') {
        switchView('today');
      } else {
        switchView('checkin');
      }
      persistSession();
    }

    function handleJourneyAction(action) {
      if (action === 'generate-plan') {
        switchView('today');
        generatePlan();
        return;
      }
      if (action === 'select-next-task') {
        const nextTask = core.getNextTask(state);
        if (nextTask) {
          state = core.selectTask(state, nextTask);
          selectedDuration = nextTask.duration ? nextTask.duration * 60 : selectedDuration;
          timerState = core.createTimerState(selectedDuration, nextTask.id);
          switchView('focus');
          persistSession();
        }
        return;
      }
      if (action === 'open-focus') {
        switchView('focus');
        return;
      }
      if (action === 'pause-focus') {
        stopTimer();
        return;
      }
      if (action === 'open-checkin') {
        switchView('checkin');
        return;
      }
      if (action === 'open-island') {
        switchView('island');
        return;
      }
      if (action === 'open-friends') {
        switchView('friends');
        return;
      }
      if (action === 'open-today') {
        switchView('today');
        return;
      }
      if (action === 'prepare-tomorrow') {
        switchView('today');
        elements.goalInput.value = localizedText('明天继续完成剩余任务，并保持 1 次 25 分钟专注。', '明天繼續完成剩餘任務，並保持 1 次 25 分鐘專注。', 'Tomorrow: finish the remaining task list and keep one 25-minute focus block.');
        elements.goalInput.dataset.changed = 'true';
        generatePlan();
        return;
      }
      if (action === 'claim-milestone') {
        const available = getMilestoneProgress().available;
        if (available.length) {
          state = core.claimMilestoneReward(state, available[0]);
          renderAll();
          persistSession();
        }
        return;
      }
      if (action === 'use-protection') {
        state = core.useStreakProtection(state);
        renderAll();
        persistSession();
      }
    }

    function openVisitModal(friendId) {
      if (!elements.visitModal) return;
      const details = core.getFriendVisitDetails(friendId, language);
      elements.visitName.textContent = details.name;
      elements.visitIsland.className = `visit-island friend-${details.color}`;
      elements.visitFocus.textContent = `${details.focusMinutes}m`;
      elements.visitMood.textContent = details.mood;
      elements.visitResources.innerHTML = details.resources.map((item) => `<span>${escapeHtml(item)}</span>`).join('');
      elements.visitNote.textContent = details.note;
      elements.visitModal.hidden = false;
    }

    function closeVisitModal() {
      if (elements.visitModal) elements.visitModal.hidden = true;
    }

    function escapeHtml(value) {
      return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    }

    document.addEventListener('click', (event) => {
      const target = event.target.closest('button, a');
      if (!target) return;

      if (target.id === 'sendCodeBtn') {
        const phone = elements.phoneInput.value.trim();
        const phoneRegex = /^1[3-9]\d{9}$/;
        if (!phone) return alert('请输入手机号');
        if (!phoneRegex.test(phone)) return alert('请输入有效的 11 位手机号码（例如：13800000000）');

        elements.sendCodeBtn.textContent = '发送中...';
        elements.sendCodeBtn.disabled = true;

        fetch('http://localhost:5050/api/send-sms', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone })
        })
          .then((res) => res.json())
          .then((data) => {
            elements.sendCodeBtn.textContent = '发送验证码';
            elements.sendCodeBtn.disabled = false;
            if (data.success) {
              elements.loginStep1.hidden = true;
              elements.loginStep2.hidden = false;
              alert(`【演示用】验证码：${data.demo_code}`);
            } else {
              alert(data.message || '发送失败');
            }
          })
          .catch((err) => {
            elements.sendCodeBtn.textContent = '发送验证码';
            elements.sendCodeBtn.disabled = false;
            alert('SMS 后端未启动或请求失败。请先运行 server/app.py');
            console.error(err);
          });
        return;
      }

      if (target.id === 'confirmLoginBtn') {
        const phone = elements.phoneInput.value.trim();
        const code = elements.codeInput.value.trim();
        const nickname = elements.nicknameInput.value.trim();
        if (!code || !nickname) return alert('请输入验证码和昵称');

        fetch('http://localhost:5050/api/verify-code', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ phone, code })
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              writeStorage(STORAGE_KEYS.authState, {
                loggedIn: true,
                phone,
                nickname
              });
              elements.authShell.hidden = true;
              elements.homeShell.hidden = false;
            } else {
              alert(data.message || '验证码错误');
            }
          })
          .catch((err) => {
            alert('验证请求失败');
            console.error(err);
          });
        return;
      }

      if (target.matches('[data-lang]')) {
        setLanguage(target.dataset.lang);
      }

      if (target.matches('[data-open-demo]')) {
        openWorkspace();
      }

      if (target.matches('[data-scroll-target]')) {
        const section = document.querySelector(target.dataset.scrollTarget);
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (target.matches('[data-view]')) {
        switchView(target.dataset.view);
        persistSession();
      }

      if (target.matches('[data-duration-preset]')) {
        setDuration(Number(target.dataset.durationPreset));
      }

      if (target.matches('[data-mode-seconds]')) {
        setDuration(Number(target.dataset.modeSeconds));
      }

      if (target.matches('[data-journey-action]')) {
        handleJourneyAction(target.dataset.journeyAction);
      }

      if (target.id === 'generatePlan') {
        generatePlan();
      }

      if (target.matches('[data-add-custom-task]')) {
        addCustomTask();
        renderAll();
        persistSession();
        return;
      }

      if (target.matches('[data-select-task]')) {
        const task = state.tasks.find((item) => item.id === target.dataset.selectTask);
        if (task) {
          state = core.selectTask(state, task);
          setDuration((task.duration || Math.round(selectedDuration / 60) || 25) * 60);
          switchView('focus');
          persistSession();
        }
      }

      if (target.matches('[data-edit-task]')) {
        editingTaskId = editingTaskId === target.dataset.editTask ? null : target.dataset.editTask;
        renderTasks();
        return;
      }

      if (target.matches('[data-cancel-task]')) {
        editingTaskId = null;
        renderTasks();
        return;
      }

      if (target.matches('[data-save-task]')) {
        const card = target.closest('.task-card');
        if (!card) return;
        const taskId = target.dataset.saveTask;
        const titleInput = card.querySelector('[data-task-title-input]');
        const notesInput = card.querySelector('[data-task-notes-input]');
        const durationInput = card.querySelector('[data-task-duration-input]');
        const priorityInput = card.querySelector('[data-task-priority-input]');
        const dueDateInput = card.querySelector('[data-task-due-input]');
        const updatedTask = updateTaskById(taskId, {
          title: titleInput ? titleInput.value : '',
          notes: notesInput ? notesInput.value : '',
          duration: durationInput ? durationInput.value : 25,
          priority: priorityInput ? priorityInput.value : 'medium',
          dueDate: dueDateInput ? dueDateInput.value : ''
        });
        if (updatedTask && state.selectedTask && state.selectedTask.id === taskId && !timerState.isRunning) {
          setDuration(updatedTask.duration * 60);
        }
        editingTaskId = null;
        renderAll();
        persistSession();
        return;
      }

      if (target.matches('[data-coach-action]')) {
        const insights = getCoachInsights();
        if (target.dataset.coachAction === 'pick-recommended' && insights.recommendedTask) {
          state.coachStats.accepted += 1;
          state.coachAcceptedTaskId = insights.recommendedTask.id;
          state = core.selectTask(state, insights.recommendedTask);
          setDuration(insights.recommendedTask.duration * 60);
          switchView('focus');
          persistSession();
          return;
        }
        if (target.dataset.coachAction === 'adjust-difficulty' && insights.difficultyTask) {
          updateTaskById(insights.difficultyTask.id, {
            duration: insights.difficultyDuration
          });
          editingTaskId = insights.difficultyTask.id;
          renderAll();
          persistSession();
          return;
        }
      }

      if (target.matches('[data-voice-task]')) {
        startTaskVoiceInput(target.dataset.voiceTask, target.dataset.voiceField || 'notes');
        return;
      }

      if (target.matches('[data-seconds]')) {
        setDuration(Number(target.dataset.seconds));
      }

      if (target.id === 'applyCustomDuration') {
        applyCustomDuration();
      }

      if (target.id === 'decreaseCustomDuration') {
        syncCustomDurationInputs(customDurationMinutes - 5);
      }

      if (target.id === 'increaseCustomDuration') {
        syncCustomDurationInputs(customDurationMinutes + 5);
      }

      if (target.id === 'startTimer') startTimer();
      if (target.id === 'pauseTimer') stopTimer();
      if (target.id === 'resetTimer') resetTimer();
      if (target.id === 'finishFocus') finishFocus();
      if (target.id === 'claimBonus') claimBonus();
      if (target.matches('[data-bonus-action]')) {
        if (target.dataset.bonusAction === 'plant') claimBonus('island', 'plant');
        if (target.dataset.bonusAction === 'decorate') claimBonus('island', 'decorate');
        if (target.dataset.bonusAction === 'friends') claimBonus('friends');
        if (target.dataset.bonusAction === 'checkin') claimBonus('checkin');
      }
      if (target.id === 'closeBonus') {
        elements.bonusModal.hidden = true;
        persistSession();
      }
      if (target.id === 'closeVisit' || target.id === 'closeVisitAction') closeVisitModal();

      if (target.matches('[data-checkin-action]')) {
        if (target.dataset.checkinAction === 'claim-milestone') {
          handleJourneyAction('claim-milestone');
        }
        if (target.dataset.checkinAction === 'use-protection') {
          handleJourneyAction('use-protection');
        }
      }

      if (target.matches('[data-island-action]')) {
        state = core.applyIslandAction(state, target.dataset.islandAction);
        renderAll();
        persistSession();
      }

      if (target.matches('[data-friend]')) {
        state = core.performFriendAction(state, target.dataset.friend, target.dataset.action);
        if (target.dataset.action === 'visit') {
          openVisitModal(target.dataset.friend);
        }
        renderAll();
        persistSession();
      }
    });

    if (elements.goalInput) {
      elements.goalInput.addEventListener('input', () => {
        elements.goalInput.dataset.changed = 'true';
      });
    }

    if (elements.customDurationRange) {
      elements.customDurationRange.addEventListener('input', (event) => {
        syncCustomDurationInputs(event.target.value);
      });
    }

    if (elements.customDurationInput) {
      elements.customDurationInput.addEventListener('input', (event) => {
        syncCustomDurationInputs(event.target.value);
      });
      elements.customDurationInput.addEventListener('change', () => {
        syncCustomDurationInputs(elements.customDurationInput.value);
      });
    }

    if (elements.taskList) {
      elements.taskList.addEventListener('input', (event) => {
        const durationInput = event.target.closest('[data-task-duration-input]');
        const titleInput = event.target.closest('[data-task-title-input]');
        const notesInput = event.target.closest('[data-task-notes-input]');
        const card = event.target.closest('.task-card');
        if (!card) return;

        const preview = card.querySelector('[data-task-gold-preview]');
        if (!preview) return;

        const title = titleInput ? titleInput.value : card.querySelector('[data-task-title-input]')?.value || '';
        const notes = notesInput ? notesInput.value : card.querySelector('[data-task-notes-input]')?.value || '';
        const duration = normalizeTaskDurationValue(
          durationInput ? durationInput.value : card.querySelector('[data-task-duration-input]')?.value || 25,
          25
        );
        const gold = core.calculateTaskGold(duration, title, notes);
        preview.textContent = localizedText(`奖励金币 ${gold}`, `獎勵金幣 ${gold}`, `${gold} coins`);
      });
    }

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && timerState.isRunning) {
        syncTimerFromClock();
        if (timerState.isRunning && !timerId) startTicker();
      }
    });

    window.addEventListener('beforeunload', () => {
      if (timerState.isRunning) {
        timerState = core.syncTimerState(timerState);
      }
      persistSession();
    });

    restoreSession();
    setLanguage(language);
    if (focusPreview) {
      if (elements.home) elements.home.hidden = true;
      if (elements.workspace) elements.workspace.hidden = false;
      state.currentView = 'focus';
      document.querySelectorAll('.workspace-panel').forEach((panel) => {
        panel.hidden = panel.dataset.panel !== 'focus';
      });
      document.querySelectorAll('.workspace-nav-button').forEach((button) => {
        button.classList.toggle('is-active', button.dataset.view === 'focus');
      });
      setFocusScene(focusPreview.outcome, {
        progress: focusPreview.progress,
        reason: 'preview',
        reward: focusPreview.outcome === 'happy' ? rewardReady : null,
        theme: focusPreview.theme ?? null
      });
      renderAll();
      return;
    }
    if (state.selectedTask) {
      timerState = core.syncTimerState(timerState);
      selectedDuration = timerState.totalSeconds || selectedDuration;
      renderTimer();
    } else {
      setDuration(selectedDuration);
    }
    if (timerState.isRunning) {
      startTicker();
      syncTimerFromClock();
    } else if (timerState.completed && state.selectedTask && !state.focusCompleted) {
      finishFocus(true);
    } else {
      renderAll();
    }
  });
}
