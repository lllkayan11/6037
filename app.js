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
      aiButton: '生成 AI 任务',
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
      aiButton: '生成 AI 任務',
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
      aiButton: 'Generate AI Tasks',
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
      checkIns: [...state.checkIns],
      friendMessages: { ...state.friendMessages },
      lastMessage: { ...state.lastMessage },
      selectedTask: state.selectedTask ? { ...state.selectedTask } : null,
      tasks: state.tasks.map((task) => ({ ...task }))
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
      const tasks = apiResponse.tasks.map((task, index) => ({
        id: `task${index + 1}`, // 生成唯一 ID
        goal: cleanGoal,
        title: task.taskName,
        description: `奖励金币: ${task.goldReward}`,
        duration: task.duration,
        energy: task.duration >= 45 ? 'Deep' : 'Normal'
      }));
      // 将鼓励语也返回，以便在 UI 中显示
      return { tasks, encouragement: apiResponse.encouragement };
    } catch (error) {
      console.error('Error fetching tasks from AI:', error);
      // Fallback to local data if API fails
      return {
        tasks: TASK_IDS.map((id, index) => ({
          id,
          goal: cleanGoal,
          title: COPY[lang][id],
          description: COPY[lang][`${id}Desc`],
          duration: TASK_DURATIONS[index],
          energy: index === 2 ? 'Deep' : 'Normal'
        })),
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
      title: COPY[lang][task.id] || task.title,
      description: COPY[lang][`${task.id}Desc`] || task.description
    }));
  }

  function selectTask(state, task) {
    const next = copyState(state);
    next.selectedTask = { ...task };
    next.currentView = 'focus';
    return next;
  }

  function claimReward(state, reward) {
    const next = copyState(state);
    next.resources.coins += reward.coins || 0;
    next.resources.seeds += reward.seeds || 0;
    next.resources.water += reward.water || 0;
    next.resources.chances += reward.chances || 0;
    if (reward.decoration) {
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
    return {
      days: WEEKLY_FOCUS.map((value, index) => ({
        label: dayLabels[index],
        value
      })),
      completionRate: 86,
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
    recordCheckIn,
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
    let state = core.createInitialState();
    let language = 'zh-CN';
    let selectedDuration = 20;
    let remainingSeconds = 20;
    let totalSeconds = 20;
    let timerId = null;
    let rewardReady = {
      coins: 40,
      seeds: 1,
      water: 2,
      chances: 1,
      decoration: core.t(language, 'rewardDecoration')
    };

    const elements = {
      home: document.querySelector('.home-shell'),
      workspace: document.querySelector('.workspace-shell'),
      goalInput: document.querySelector('#goalInput'),
      generatePlanButton: document.querySelector('#generatePlan'),
      agentProgress: document.querySelector('#agentProgress'),
      taskList: document.querySelector('#taskList'),
      selectedTask: document.querySelector('#selectedTask'),
      timerDisplay: document.querySelector('#timerDisplay'),
      timerRing: document.querySelector('#timerRing'),
      bonusModal: document.querySelector('#bonusModal'),
      bonusList: document.querySelector('#bonusList'),
      resourceRows: document.querySelectorAll('[data-resource]'),
      islandScene: document.querySelector('#islandScene'),
      islandMessage: document.querySelector('#islandMessage'),
      checkInGrid: document.querySelector('#checkInGrid'),
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
      renderTasks();
      renderSelectedTask();
      renderTimer();
      renderIsland();
      renderCheckIns();
      renderFriends();
      renderReport();
      renderAgentIdle();
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
      elements.taskList.innerHTML = state.tasks.map((task) => `
        <article class="task-card ${state.selectedTask && state.selectedTask.id === task.id ? 'is-selected' : ''}">
          <div>
            <span class="task-duration">${task.duration}m</span>
            <h3>${escapeHtml(task.title)}</h3>
            <p>${escapeHtml(task.description)}</p>
          </div>
          <button class="small-button" type="button" data-select-task="${task.id}">${core.t(language, 'selectTask')}</button>
        </article>
      `).join('');
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
      elements.selectedTask.innerHTML = `
        <strong>${escapeHtml(state.selectedTask.title)}</strong>
        <span>${escapeHtml(state.selectedTask.description)}</span>
      `;
    }

    function renderTimer() {
      const minutes = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
      const seconds = Math.floor(remainingSeconds % 60).toString().padStart(2, '0');
      elements.timerDisplay.textContent = `${minutes}:${seconds}`;
      const progress = totalSeconds > 0 ? 1 - remainingSeconds / totalSeconds : 0;
      elements.timerRing.style.setProperty('--progress', `${Math.max(0, Math.min(1, progress)) * 360}deg`);
      document.querySelectorAll('.duration-button').forEach((button) => {
        button.classList.toggle('is-active', Number(button.dataset.seconds) === selectedDuration);
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
    }

    function renderFriends() {
      if (!elements.friendGrid) return;
      elements.friendGrid.innerHTML = core.FRIENDS.map((friend) => {
        const message = state.friendMessages[friend.id];
        return `
          <article class="friend-card">
            <div class="friend-island friend-${friend.color}"></div>
            <div>
              <h3>${friend.name}</h3>
              <p>${friend.statusKey}</p>
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
      stopTimer();
      selectedDuration = seconds;
      totalSeconds = seconds;
      remainingSeconds = seconds;
      renderTimer();
    }

    function startTimer() {
      if (!state.selectedTask) return;
      if (timerId) return;
      timerId = window.setInterval(() => {
        remainingSeconds -= 1;
        if (remainingSeconds <= 0) {
          remainingSeconds = 0;
          stopTimer();
          finishFocus();
        }
        renderTimer();
      }, 1000);
    }

    function stopTimer() {
      if (timerId) {
        window.clearInterval(timerId);
        timerId = null;
      }
    }

    function resetTimer() {
      stopTimer();
      remainingSeconds = selectedDuration;
      totalSeconds = selectedDuration;
      renderTimer();
    }

    function finishFocus() {
      if (!state.selectedTask) return;
      stopTimer();
      const result = core.completeFocusSession(state, { totalSeconds, remainingSeconds });
      state = result.state;
      remainingSeconds = result.timer.remainingSeconds;
      totalSeconds = result.timer.totalSeconds || selectedDuration;
      renderTimer();
      renderBonus();
      elements.bonusModal.hidden = false;
    }

    function renderBonus() {
      elements.bonusList.innerHTML = [
        `${core.t(language, 'coins')} +${rewardReady.coins}`,
        `${core.t(language, 'seeds')} +${rewardReady.seeds}`,
        `${core.t(language, 'water')} +${rewardReady.water}`,
        `${core.t(language, 'chances')} +${rewardReady.chances}`,
        rewardReady.decoration
      ].map((item) => `<span>${escapeHtml(item)}</span>`).join('');
    }

    function claimBonus() {
      state = core.claimReward(state, rewardReady);
      state = core.recordCheckIn(state, core.todayIso());
      elements.bonusModal.hidden = true;
      switchView('island');
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
      }

      if (target.id === 'generatePlan') {
        generatePlan();
      }

      if (target.matches('[data-select-task]')) {
        const task = state.tasks.find((item) => item.id === target.dataset.selectTask);
        if (task) {
          state = core.selectTask(state, task);
          setDuration(selectedDuration);
          switchView('focus');
        }
      }

      if (target.matches('[data-seconds]')) {
        setDuration(Number(target.dataset.seconds));
      }

      if (target.id === 'startTimer') startTimer();
      if (target.id === 'pauseTimer') stopTimer();
      if (target.id === 'resetTimer') resetTimer();
      if (target.id === 'finishFocus') finishFocus();
      if (target.id === 'claimBonus') claimBonus();
      if (target.id === 'closeBonus') elements.bonusModal.hidden = true;
      if (target.id === 'closeVisit' || target.id === 'closeVisitAction') closeVisitModal();

      if (target.matches('[data-island-action]')) {
        state = core.applyIslandAction(state, target.dataset.islandAction);
        renderAll();
      }

      if (target.matches('[data-friend]')) {
        state = core.performFriendAction(state, target.dataset.friend, target.dataset.action);
        if (target.dataset.action === 'visit') {
          openVisitModal(target.dataset.friend);
        }
        renderAll();
      }
    });

    if (elements.goalInput) {
      elements.goalInput.addEventListener('input', () => {
        elements.goalInput.dataset.changed = 'true';
      });
    }

    setLanguage(language);
    setDuration(20);
  });
}
