const PomolandCore = (() => {
  const LANGUAGE_ORDER = ['zh-CN', 'zh-HK', 'en'];

  const COPY = {
    'zh-CN': {
      languageName: '简体中文',
      authWelcome: '欢迎回来',
      authLead: '使用 8 位数字 UID + 密码登录（或注册新账号）。',
      uidLabel: 'UID（8 位数字）',
      uidPlaceholder: '例如：12345678',
      passwordLabel: '密码',
      passwordPlaceholder: '至少 4 位',
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
      featureIslandDesc: '用水滴、阳光和金币种植、浇水、喂养和装饰。',
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
      profileCenter: '个人中心',
      logout: '退出登录',
      profileTitle: '个人中心',
      saveNickname: '保存昵称',
      clearLocal: '清空本地缓存',
      coachHide: '隐藏 Coach',
      coachShow: '开启 Coach',
      friendSearchPlaceholder: '输入 8 位 UID（例如：12345678）',
      customDurationTitle: '自定义专注时间',
      customDurationHint: '拖动滑块或输入分钟数，做一个更适合自己的番茄钟。',
      applyCustomDuration: '应用自定义时长',
      focusSceneTitle: '让番茄陪你一起长大',
      focusSceneMessage: '开始专注后，番茄会随着倒计时慢慢成熟。坚持完成，会收获超可爱的奖励时刻。',
      bonusPlusWater: '+水滴',
      bonusPlusCoins: '+金币',
      bonusPlusSunlight: '+阳光',
      visitMoodSample: '新码头刚建好，适合参观',
      goalLabel: '输入一个长期目标',
      goalPlaceholder: '例如：三个月准备雅思考试',
      aiButton: '帮你制定计划',
      aiLoading: 'AI 正在拆解目标...',
      agentIdle: '点击按钮后，Pomoland Agent 会展示规划过程。',
      agentTitle: 'Pomoland Agent 正在执行',
      agentComplete: '规划完成，已生成今日 Focus 任务。',
      agentSynthesizing: 'AI 正在生成今日计划...',
      encouragementLabel: 'AI 的鼓励语',
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
      sunlight: '阳光',
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
      islandGardenTitle: '我的岛屿花园',
      islandUpgradeKicker: 'Island Upgrade',
      islandUpgradeHint: '继续专注与建设，解锁更大的 Pomoland。',
      islandUpgradeBtn: '升级岛屿',
      islandFarmTitle: '农田',
      islandPetsTitle: '宠物',
      islandDecorTitle: '装饰',
      islandDecorHint: '拖动岛上的装饰物可自由摆放位置，点击装饰槽位可管理或替换。',
      islandDailyTasksTitle: '每日任务',
      islandOrdersTitle: '岛屿订单',
      islandOrdersStatusActive: '进行中',
      islandToolsFarm: '农场工具',
      islandToolPlant: '种植',
      islandToolWater: '浇水',
      islandToolSunlight: '阳光照射',
      islandToolHarvest: '收获',
      islandToolsPetCare: '宠物照料',
      islandToolFeed: '喂养',
      islandToolsShop: '商店',
      islandToolOpenShop: '打开商店',
      islandToolInventory: '查看背包',
      islandToolsSocial: '社交',
      islandToolVisitFriends: '参观好友',
      islandToolHelpWater: '帮助浇水',
      islandToolsBackpack: '背包',
      islandInvSeedsTitle: '种子',
      islandInvHarvestTitle: '收获',
      islandAiMoodTitle: 'AI 心情推荐',
      islandAiRecommendBtn: 'AI推荐',
      islandMessageInitial: '选择地块开始种植',
      petBonusLocked: '宠物加成待解锁',
      petMoodLabel: '心情',
      petHungerLabel: '饥饿',
      moodStressed: '压力大',
      moodTired: '疲惫',
      moodAnxious: '焦虑',
      moodHappy: '开心',
      seedTomato: '番茄种子',
      seedStrawberry: '草莓种子',
      seedCarrot: '胡萝卜种子',
      seedApple: '苹果种子',
      seedWatermelon: '西瓜种子',
      fruitTomato: '番茄',
      fruitStrawberry: '草莓',
      fruitCarrot: '胡萝卜',
      fruitApple: '苹果',
      fruitWatermelon: '西瓜',
      plantingTitle: '选择种子',
      plantingQuestion: '你要种植什么？',
      cropInfoTomato: '生长30分钟 | 收获1个',
      cropInfoStrawberry: '生长2小时 | 收获1个',
      cropInfoCarrot: '生长5分钟 | 收获1个',
      cropInfoApple: '生长6小时 | 收获1个',
      cropInfoWatermelon: '生长12小时 | 收获1个',
      shopTitle: '商店',
      shopBuyTitle: '购买装饰和种子',
      shopTabDecorations: '装饰品',
      shopTabSeeds: '种子',
      shopTabPets: '宠物',
      shopFilterAll: '全部',
      shopFilterNature: '自然',
      shopFilterFunctional: '功能',
      shopFilterLandmark: '地标',
      decorFence: '栅栏',
      decorFlower: '花草石礅',
      decorLamp: '路灯',
      decorBench: '长椅',
      decorFountain: '喷泉',
      decorStatue: '雕像',
      decorPond: '池塘',
      decorBridge: '小桥',
      buyBtn: '购买',
      petCat: '猫咪',
      petDog: '小狗',
      petBird: '小鸟',
      inventoryTitle: '我的背包',
      inventoryHeading: '种子和收获',
      islandUpgradeModalTitle: 'Pomoland 升级成功',
      islandUpgradeModalLead: '你的岛屿变得更繁荣了。',
      islandUpgradeSummaryTitle: '本次成长',
      islandUpgradeRewardsTitle: '新解锁内容',
      islandUpgradeContinue: '继续建设',
      decorManageTitle: '管理装饰位',
      decorManageLead: '你可以移除当前装饰，或者前往商店替换成新的风格。',
      decorManageCurrent: '当前装饰',
      decorManageActions: '可执行操作',
      decorFlip: '左右翻转',
      decorFlipReset: '恢复方向',
      decorRemove: '移除装饰',
      decorReplace: '去商店替换',
      petFeedEyebrow: '喂养宠物',
      petFeedTitle: '选择要喂养的宠物',
      islandGuideTitle: '欢迎来到 Pomoland Island',
      islandGuideLead: '先了解 3 个关键玩法，再开始建设你的岛屿。',
      islandGuideSkip: '跳过引导',
      islandGuideNext: '下一步',
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
      needSunlight: '阳光不足，先完成 Focus Mode 获得 Bonus。',
      needWater: '水滴不足，先完成 Focus Mode 获得 Bonus。',
      needCoins: '金币不足，先完成 Focus Mode 获得 Bonus。',
      aiFallbackEncouragement: 'AI 暂时无法使用，这里有一些默认任务！',
      friendsListTab: '好友列表',
      leaderboardTab: '排行榜',
      challengesTab: '挑战赛',
      achievementsTab: '成就墙',
      friendsListTitle: '我的好友',
      addFriendBtn: '添加好友',
      leaderboardFocus: '专注时长',
      leaderboardStreak: '连胜天数',
      leaderboardIsland: '岛屿等级',
      challengesTitle: '进行中的挑战',
      createChallengeBtn: '创建挑战',
      myAchievements: '我的成就',
      addFriendTitle: '添加好友',
      searchFriend: '搜索好友',
      searchBtn: '搜索',
      pendingRequests: '好友请求',
      createChallengeTitle: '创建挑战',
      newChallenge: '新建挑战赛',
      challengeName: '挑战名称',
      challengeType: '挑战类型',
      challengeTypeStreak: '连续打卡竞赛',
      challengeTypeFocus: '专注时长竞赛',
      challengeTypeIsland: '岛屿建设竞赛',
      challengeDuration: '挑战时长',
      durationWeek: '1周',
      durationTwoWeeks: '2周',
      durationMonth: '1个月',
      challengeInvite: '邀请好友',
      createChallengeSubmit: '创建并邀请',
      achievementTitle: '成就详情',
      noFriends: '还没有好友，去添加一些吧！',
      noChallenges: '暂无进行中的挑战',
      noAchievements: '还没有解锁成就，继续努力！',
      acceptRequest: '接受',
      declineRequest: '拒绝',
      joinChallenge: '加入挑战',
      viewProgress: '查看进度',
      challengeProgress: '挑战进度',
      challengeParticipants: '参与人数',
      challengeTimeLeft: '剩余时间',
      challengeYourRank: '你的排名',
      achievementsLocked: '成就锁定',
      achievementsUnlocked: '成就解锁',
      likeAchievement: '点赞',
      achievementLikesReceived: '收到的点赞',
      searchNoResults: '未找到匹配的用户',
      searchPlaceholder: '输入好友昵称或ID',
      challengeCreatedSuccess: '挑战创建成功！',
      friendRequestSent: '好友请求已发送',
      friendRequestAccepted: '已成为好友',
      friendRequestDeclined: '已拒绝好友请求',
      leaderboardTop3: '前三名',
      leaderboardYourPosition: '你的位置'
    },
    'zh-HK': {
      languageName: '繁體中文',
      authWelcome: '歡迎回來',
      authLead: '使用 8 位數字 UID + 密碼登入（或註冊新帳號）。',
      uidLabel: 'UID（8 位數字）',
      uidPlaceholder: '例如：12345678',
      passwordLabel: '密碼',
      passwordPlaceholder: '至少 4 位',
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
      featureIslandDesc: '用水滴、陽光和金幣種植、澆水、餵養和裝飾。',
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
      profileCenter: '個人中心',
      logout: '退出登入',
      profileTitle: '個人中心',
      saveNickname: '保存暱稱',
      clearLocal: '清空本地快取',
      coachHide: '隱藏 Coach',
      coachShow: '開啟 Coach',
      friendSearchPlaceholder: '輸入 8 位 UID（例如：12345678）',
      customDurationTitle: '自訂專注時間',
      customDurationHint: '拖動滑桿或輸入分鐘數，做一個更適合自己的番茄鐘。',
      applyCustomDuration: '套用自訂時長',
      focusSceneTitle: '讓番茄陪你一起長大',
      focusSceneMessage: '開始專注後，番茄會隨著倒計時慢慢成熟。堅持完成，會收穫超可愛的獎勵時刻。',
      bonusPlusWater: '+水滴',
      bonusPlusCoins: '+金幣',
      bonusPlusSunlight: '+陽光',
      visitMoodSample: '新碼頭剛建好，適合參觀',
      goalLabel: '輸入一個長期目標',
      goalPlaceholder: '例如：三個月準備雅思考試',
      aiButton: '幫你制定計劃',
      aiLoading: 'AI 正在拆解目標...',
      agentIdle: '點擊按鈕後，Pomoland Agent 會展示規劃過程。',
      agentTitle: 'Pomoland Agent 正在執行',
      agentComplete: '規劃完成，已生成今日 Focus 任務。',
      agentSynthesizing: 'AI 正在生成今日計劃...',
      encouragementLabel: 'AI 的鼓勵語',
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
      sunlight: '陽光',
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
      islandGardenTitle: '我的島嶼花園',
      islandUpgradeKicker: 'Island Upgrade',
      islandUpgradeHint: '繼續專注與建設，解鎖更大的 Pomoland。',
      islandUpgradeBtn: '升級島嶼',
      islandFarmTitle: '農田',
      islandPetsTitle: '寵物',
      islandDecorTitle: '裝飾',
      islandDecorHint: '拖動島上的裝飾物可自由擺放位置，點擊裝飾槽位可管理或替換。',
      islandDailyTasksTitle: '每日任務',
      islandOrdersTitle: '島嶼訂單',
      islandOrdersStatusActive: '進行中',
      islandToolsFarm: '農場工具',
      islandToolPlant: '種植',
      islandToolWater: '澆水',
      islandToolSunlight: '陽光照射',
      islandToolHarvest: '收穫',
      islandToolsPetCare: '寵物照料',
      islandToolFeed: '餵養',
      islandToolsShop: '商店',
      islandToolOpenShop: '打開商店',
      islandToolInventory: '查看背包',
      islandToolsSocial: '社交',
      islandToolVisitFriends: '參觀好友',
      islandToolHelpWater: '幫助澆水',
      islandToolsBackpack: '背包',
      islandInvSeedsTitle: '種子',
      islandInvHarvestTitle: '收穫',
      islandAiMoodTitle: 'AI 心情推薦',
      islandAiRecommendBtn: 'AI推薦',
      islandMessageInitial: '選擇地塊開始種植',
      petBonusLocked: '寵物加成待解鎖',
      petMoodLabel: '心情',
      petHungerLabel: '飢餓',
      moodStressed: '壓力大',
      moodTired: '疲憊',
      moodAnxious: '焦慮',
      moodHappy: '開心',
      seedTomato: '番茄種子',
      seedStrawberry: '草莓種子',
      seedCarrot: '胡蘿蔔種子',
      seedApple: '蘋果種子',
      seedWatermelon: '西瓜種子',
      fruitTomato: '番茄',
      fruitStrawberry: '草莓',
      fruitCarrot: '胡蘿蔔',
      fruitApple: '蘋果',
      fruitWatermelon: '西瓜',
      plantingTitle: '選擇種子',
      plantingQuestion: '你要種植什麼？',
      cropInfoTomato: '生長30分鐘 | 收穫1個',
      cropInfoStrawberry: '生長2小時 | 收穫1個',
      cropInfoCarrot: '生長5分鐘 | 收穫1個',
      cropInfoApple: '生長6小時 | 收穫1個',
      cropInfoWatermelon: '生長12小時 | 收穫1個',
      shopTitle: '商店',
      shopBuyTitle: '購買裝飾和種子',
      shopTabDecorations: '裝飾品',
      shopTabSeeds: '種子',
      shopTabPets: '寵物',
      shopFilterAll: '全部',
      shopFilterNature: '自然',
      shopFilterFunctional: '功能',
      shopFilterLandmark: '地標',
      decorFence: '柵欄',
      decorFlower: '花草石礅',
      decorLamp: '路燈',
      decorBench: '長椅',
      decorFountain: '噴泉',
      decorStatue: '雕像',
      decorPond: '池塘',
      decorBridge: '小橋',
      buyBtn: '購買',
      petCat: '貓咪',
      petDog: '小狗',
      petBird: '小鳥',
      inventoryTitle: '我的背包',
      inventoryHeading: '種子和收穫',
      islandUpgradeModalTitle: 'Pomoland 升級成功',
      islandUpgradeModalLead: '你的島嶼變得更繁榮了。',
      islandUpgradeSummaryTitle: '本次成長',
      islandUpgradeRewardsTitle: '新解鎖內容',
      islandUpgradeContinue: '繼續建設',
      decorManageTitle: '管理裝飾位',
      decorManageLead: '你可以移除當前裝飾，或者前往商店替換成新的風格。',
      decorManageCurrent: '當前裝飾',
      decorManageActions: '可執行操作',
      decorFlip: '左右翻轉',
      decorFlipReset: '恢復方向',
      decorRemove: '移除裝飾',
      decorReplace: '去商店替換',
      petFeedEyebrow: '餵養寵物',
      petFeedTitle: '選擇要餵養的寵物',
      islandGuideTitle: '歡迎來到 Pomoland Island',
      islandGuideLead: '先了解 3 個關鍵玩法，再開始建設你的島嶼。',
      islandGuideSkip: '跳過引導',
      islandGuideNext: '下一步',
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
      needSunlight: '陽光不足，先完成 Focus Mode 獲得 Bonus。',
      needWater: '水滴不足，先完成 Focus Mode 獲得 Bonus。',
      needCoins: '金幣不足，先完成 Focus Mode 獲得 Bonus。',
      aiFallbackEncouragement: 'AI 暫時無法使用，這裡有一些默認任務！',
      friendsListTab: '好友列表',
      leaderboardTab: '排行榜',
      challengesTab: '挑戰賽',
      achievementsTab: '成就牆',
      friendsListTitle: '我的好友',
      addFriendBtn: '添加好友',
      leaderboardFocus: '專注時長',
      leaderboardStreak: '連勝天數',
      leaderboardIsland: '島嶼等級',
      challengesTitle: '進行中的挑戰',
      createChallengeBtn: '創建挑戰',
      myAchievements: '我的成就',
      addFriendTitle: '添加好友',
      searchFriend: '搜索好友',
      searchBtn: '搜索',
      pendingRequests: '好友請求',
      createChallengeTitle: '創建挑戰',
      newChallenge: '新建挑戰賽',
      challengeName: '挑戰名稱',
      challengeType: '挑戰類型',
      challengeTypeStreak: '連續打卡競賽',
      challengeTypeFocus: '專注時長競賽',
      challengeTypeIsland: '島嶼建設競賽',
      challengeDuration: '挑戰時長',
      durationWeek: '1週',
      durationTwoWeeks: '2週',
      durationMonth: '1個月',
      challengeInvite: '邀請好友',
      createChallengeSubmit: '創建並邀請',
      achievementTitle: '成就詳情',
      noFriends: '還沒有好友，去添加一些吧！',
      noChallenges: '暫無進行中的挑戰',
      noAchievements: '還沒有解鎖成就，繼續努力！',
      acceptRequest: '接受',
      declineRequest: '拒絕',
      joinChallenge: '加入挑戰',
      viewProgress: '查看進度',
      challengeProgress: '挑戰進度',
      challengeParticipants: '參與人數',
      challengeTimeLeft: '剩餘時間',
      challengeYourRank: '你的排名',
      achievementsLocked: '成就鎖定',
      achievementsUnlocked: '成就解鎖',
      likeAchievement: '點讚',
      achievementLikesReceived: '收到的點讚',
      searchNoResults: '未找到匹配的用戶',
      searchPlaceholder: '輸入好友暱稱或ID',
      challengeCreatedSuccess: '挑戰創建成功！',
      friendRequestSent: '好友請求已發送',
      friendRequestAccepted: '已成為好友',
      friendRequestDeclined: '已拒絕好友請求',
      leaderboardTop3: '前三名',
      leaderboardYourPosition: '你的位置'
    },
    en: {
      languageName: 'English',
      authWelcome: 'Welcome back',
      authLead: 'Log in with an 8-digit UID + password (or register a new account).',
      uidLabel: 'UID (8 digits)',
      uidPlaceholder: 'e.g. 12345678',
      passwordLabel: 'Password',
      passwordPlaceholder: 'At least 4 characters',
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
      featureIslandDesc: 'Spend drops, sunlight, and coins to plant, water, feed, and decorate.',
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
      profileCenter: 'Profile',
      logout: 'Log out',
      profileTitle: 'Profile',
      saveNickname: 'Save nickname',
      clearLocal: 'Clear local cache',
      coachHide: 'Hide Coach',
      coachShow: 'Show Coach',
      friendSearchPlaceholder: 'Enter an 8-digit UID (e.g. 12345678)',
      customDurationTitle: 'Custom focus time',
      customDurationHint: 'Drag the slider or type minutes to create your own Pomodoro.',
      applyCustomDuration: 'Apply custom duration',
      focusSceneTitle: 'Grow with your tomato',
      focusSceneMessage: 'Once you start focusing, your tomato grows with the timer. Finish it to unlock a cute reward moment.',
      bonusPlusWater: '+Water',
      bonusPlusCoins: '+Coins',
      bonusPlusSunlight: '+Sunlight',
      visitMoodSample: 'A new dock is ready—perfect for a visit',
      goalLabel: 'Enter a long-term goal',
      goalPlaceholder: 'Example: Prepare for IELTS in 3 months',
      aiButton: 'Plan My Day',
      aiLoading: 'AI is breaking down the goal...',
      agentIdle: 'Click the button to watch Pomoland Agent plan step by step.',
      agentTitle: 'Pomoland Agent is working',
      agentComplete: 'Planning complete. Today\'s Focus tasks are ready.',
      agentSynthesizing: 'AI is composing today\'s plan...',
      encouragementLabel: 'From your AI companion',
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
      sunlight: 'Sunlight',
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
      islandGardenTitle: 'My island garden',
      islandUpgradeKicker: 'Island Upgrade',
      islandUpgradeHint: 'Keep focusing and building to unlock a bigger Pomoland.',
      islandUpgradeBtn: 'Upgrade island',
      islandFarmTitle: 'Farm',
      islandPetsTitle: 'Pets',
      islandDecorTitle: 'Decorations',
      islandDecorHint: 'Drag decorations to reposition. Click a slot to manage or replace.',
      islandDailyTasksTitle: 'Daily tasks',
      islandOrdersTitle: 'Island orders',
      islandOrdersStatusActive: 'Active',
      islandToolsFarm: 'Farm tools',
      islandToolPlant: 'Plant',
      islandToolWater: 'Water',
      islandToolSunlight: 'Sunlight boost',
      islandToolHarvest: 'Harvest',
      islandToolsPetCare: 'Pet care',
      islandToolFeed: 'Feed',
      islandToolsShop: 'Shop',
      islandToolOpenShop: 'Open shop',
      islandToolInventory: 'Backpack',
      islandToolsSocial: 'Social',
      islandToolVisitFriends: 'Visit friends',
      islandToolHelpWater: 'Help water',
      islandToolsBackpack: 'Inventory',
      islandInvSeedsTitle: 'Seeds',
      islandInvHarvestTitle: 'Harvest',
      islandAiMoodTitle: 'AI mood tips',
      islandAiRecommendBtn: 'AI Suggest',
      islandMessageInitial: 'Pick a plot to start planting',
      petBonusLocked: 'Pet bonus locked',
      petMoodLabel: 'Mood',
      petHungerLabel: 'Hunger',
      moodStressed: 'Stressed',
      moodTired: 'Tired',
      moodAnxious: 'Anxious',
      moodHappy: 'Happy',
      seedTomato: 'Tomato seed',
      seedStrawberry: 'Strawberry seed',
      seedCarrot: 'Carrot seed',
      seedApple: 'Apple seed',
      seedWatermelon: 'Watermelon seed',
      fruitTomato: 'Tomato',
      fruitStrawberry: 'Strawberry',
      fruitCarrot: 'Carrot',
      fruitApple: 'Apple',
      fruitWatermelon: 'Watermelon',
      plantingTitle: 'Pick a seed',
      plantingQuestion: 'What do you want to plant?',
      cropInfoTomato: '30 min | 1 harvest',
      cropInfoStrawberry: '2 hours | 1 harvest',
      cropInfoCarrot: '5 min | 1 harvest',
      cropInfoApple: '6 hours | 1 harvest',
      cropInfoWatermelon: '12 hours | 1 harvest',
      shopTitle: 'Shop',
      shopBuyTitle: 'Buy decor & seeds',
      shopTabDecorations: 'Decor',
      shopTabSeeds: 'Seeds',
      shopTabPets: 'Pets',
      shopFilterAll: 'All',
      shopFilterNature: 'Nature',
      shopFilterFunctional: 'Functional',
      shopFilterLandmark: 'Landmarks',
      decorFence: 'Fence',
      decorFlower: 'Flower stand',
      decorLamp: 'Street lamp',
      decorBench: 'Bench',
      decorFountain: 'Fountain',
      decorStatue: 'Statue',
      decorPond: 'Pond',
      decorBridge: 'Bridge',
      buyBtn: 'Buy',
      petCat: 'Cat',
      petDog: 'Dog',
      petBird: 'Bird',
      inventoryTitle: 'Backpack',
      inventoryHeading: 'Seeds & harvest',
      islandUpgradeModalTitle: 'Island upgrade complete',
      islandUpgradeModalLead: 'Your island is getting more prosperous.',
      islandUpgradeSummaryTitle: 'This upgrade',
      islandUpgradeRewardsTitle: 'New unlocks',
      islandUpgradeContinue: 'Continue',
      decorManageTitle: 'Manage decoration slot',
      decorManageLead: 'Remove the current decoration or replace it from the shop.',
      decorManageCurrent: 'Current decoration',
      decorManageActions: 'Actions',
      decorFlip: 'Flip left/right',
      decorFlipReset: 'Reset direction',
      decorRemove: 'Remove decoration',
      decorReplace: 'Replace in shop',
      petFeedEyebrow: 'Feed pet',
      petFeedTitle: 'Choose a pet to feed',
      islandGuideTitle: 'Welcome to Pomoland Island',
      islandGuideLead: 'Learn 3 key mechanics before you start building your island.',
      islandGuideSkip: 'Skip',
      islandGuideNext: 'Next',
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
      needSunlight: 'Not enough sunlight. Finish Focus Mode to earn a Bonus.',
      needWater: 'Not enough water. Finish Focus Mode to earn a Bonus.',
      needCoins: 'Not enough coins. Finish Focus Mode to earn a Bonus.',
      aiFallbackEncouragement: 'AI is currently unavailable, here are some default tasks!',
      friendsListTab: 'Friends List',
      leaderboardTab: 'Leaderboard',
      challengesTab: 'Challenges',
      achievementsTab: 'Achievements',
      friendsListTitle: 'My Friends',
      addFriendBtn: 'Add Friend',
      leaderboardFocus: 'Focus Time',
      leaderboardStreak: 'Streak Days',
      leaderboardIsland: 'Island Level',
      challengesTitle: 'Active Challenges',
      createChallengeBtn: 'Create Challenge',
      myAchievements: 'My Achievements',
      addFriendTitle: 'Add Friend',
      searchFriend: 'Search Friends',
      searchBtn: 'Search',
      pendingRequests: 'Friend Requests',
      createChallengeTitle: 'Create Challenge',
      newChallenge: 'New Challenge',
      challengeName: 'Challenge Name',
      challengeType: 'Challenge Type',
      challengeTypeStreak: 'Check-in Streak',
      challengeTypeFocus: 'Focus Time',
      challengeTypeIsland: 'Island Building',
      challengeDuration: 'Challenge Duration',
      durationWeek: '1 Week',
      durationTwoWeeks: '2 Weeks',
      durationMonth: '1 Month',
      challengeInvite: 'Invite Friends',
      createChallengeSubmit: 'Create & Invite',
      achievementTitle: 'Achievement Details',
      noFriends: 'No friends yet, add some!',
      noChallenges: 'No active challenges',
      noAchievements: 'No achievements yet, keep working!',
      acceptRequest: 'Accept',
      declineRequest: 'Decline',
      joinChallenge: 'Join Challenge',
      viewProgress: 'View Progress',
      challengeProgress: 'Challenge Progress',
      challengeParticipants: 'Participants',
      challengeTimeLeft: 'Time Left',
      challengeYourRank: 'Your Rank',
      achievementsLocked: 'Achievement Locked',
      achievementsUnlocked: 'Achievement Unlocked',
      likeAchievement: 'Like',
      achievementLikesReceived: 'Likes Received',
      searchNoResults: 'No matching users found',
      searchPlaceholder: 'Enter friend name or ID',
      challengeCreatedSuccess: 'Challenge created successfully!',
      friendRequestSent: 'Friend request sent',
      friendRequestAccepted: 'You are now friends',
      friendRequestDeclined: 'Friend request declined',
      leaderboardTop3: 'Top 3',
      leaderboardYourPosition: 'Your position'
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
    { id: 'mia', name: 'Mia', statusKey: 'Focus 42m', color: 'mint', focusMinutes: 42, streak: 8, islandLevel: 3, avatar: 'M' },
    { id: 'leo', name: 'Leo', statusKey: 'Streak 12d', color: 'tomato', focusMinutes: 35, streak: 12, islandLevel: 4, avatar: 'L' },
    { id: 'noah', name: 'Noah', statusKey: 'New dock', color: 'sun', focusMinutes: 58, streak: 5, islandLevel: 2, avatar: 'N' },
    { id: 'emma', name: 'Emma', statusKey: 'Focus 65m', color: 'leaf', focusMinutes: 65, streak: 18, islandLevel: 5, avatar: 'E' },
    { id: 'alex', name: 'Alex', statusKey: 'Streak 7d', color: 'teal', focusMinutes: 28, streak: 7, islandLevel: 3, avatar: 'A' }
  ];
  const FRIEND_DETAILS = {
    mia: { focusMinutes: 42, moodKey: 'friendMiaMood', noteKey: 'friendMiaNote', resources: ['Water +1', 'Coins +10'] },
    leo: { focusMinutes: 35, moodKey: 'friendLeoMood', noteKey: 'friendLeoNote', resources: ['Fruit +1', 'Chance -1'] },
    noah: { focusMinutes: 58, moodKey: 'friendNoahMood', noteKey: 'friendNoahNote', resources: ['Decor idea', 'Solar dock'] },
    emma: { focusMinutes: 65, moodKey: 'friendMiaMood', noteKey: 'friendMiaNote', resources: ['Water +1', 'Coins +10'] },
    alex: { focusMinutes: 28, moodKey: 'friendLeoMood', noteKey: 'friendLeoNote', resources: ['Fruit +1', 'Chance -1'] }
  };

  // Social module data structures
  const SOCIAL_DATA = {
    availableUsers: [
      { id: 'sarah', name: 'Sarah', nickname: 'Sarah', focusMinutes: 45, streak: 15, islandLevel: 4, avatar: 'S', status: 'online' },
      { id: 'mike', name: 'Mike', nickname: 'Mike', focusMinutes: 38, streak: 9, islandLevel: 3, avatar: 'M', status: 'offline' },
      { id: 'lisa', name: 'Lisa', nickname: 'Lisa', focusMinutes: 52, streak: 22, islandLevel: 5, avatar: 'L', status: 'online' },
      { id: 'david', name: 'David', nickname: 'David', focusMinutes: 41, streak: 6, islandLevel: 2, avatar: 'D', status: 'away' },
      { id: 'anna', name: 'Anna', nickname: 'Anna', focusMinutes: 33, streak: 11, islandLevel: 3, avatar: 'A', status: 'online' }
    ],
    friendRequests: [],
    challenges: [
      {
        id: 'challenge-1',
        name: '本周专注挑战',
        type: 'focus_time',
        duration: 7,
        startDate: '2026-05-10',
        endDate: '2026-05-17',
        participants: ['mia', 'leo', 'noah'],
        createdBy: 'mia',
        status: 'active',
        progress: {
          mia: { value: 320, unit: 'minutes' },
          leo: { value: 285, unit: 'minutes' },
          noah: { value: 198, unit: 'minutes' }
        }
      },
      {
        id: 'challenge-2',
        name: '连胜竞赛',
        type: 'checkin_streak',
        duration: 14,
        startDate: '2026-05-08',
        endDate: '2026-05-22',
        participants: ['emma', 'alex'],
        createdBy: 'emma',
        status: 'active',
        progress: {
          emma: { value: 18, unit: 'days' },
          alex: { value: 7, unit: 'days' }
        }
      }
    ],
    achievements: [
      { id: 'first-checkin', name: '初次打卡', icon: '🎯', description: '完成第一次打卡', unlocked: true, progress: 1, target: 1 },
      { id: 'streak-7', name: '一周连胜', icon: '🔥', description: '连续打卡7天', unlocked: true, progress: 5, target: 7 },
      { id: 'streak-30', name: '月度连胜', icon: '⭐', description: '连续打卡30天', unlocked: false, progress: 5, target: 30 },
      { id: 'focus-100', name: '专注大师', icon: '⏱️', description: '累计专注100分钟', unlocked: true, progress: 70, target: 100 },
      { id: 'focus-500', name: '专注达人', icon: '💎', description: '累计专注500分钟', unlocked: false, progress: 70, target: 500 },
      { id: 'island-lvl-5', name: '岛屿繁荣', icon: '🏝️', description: '岛屿达到5级', unlocked: false, progress: 1, target: 5 },
      { id: 'friends-10', name: '社交达人', icon: '👥', description: '添加10个好友', unlocked: false, progress: 3, target: 10 },
      { id: 'challenge-win', name: '挑战冠军', icon: '🏆', description: '赢得一个挑战赛', unlocked: false, progress: 0, target: 1 }
    ],
    likesReceived: [
      { from: 'mia', achievementId: 'streak-7', time: '2026-05-14T10:30:00Z' },
      { from: 'leo', achievementId: 'focus-100', time: '2026-05-13T15:45:00Z' }
    ],
    givenLikes: []
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
      // whether the demo workspace has been opened (controls landing vs workspace visibility)
      workspaceOpen: false,
      // whether Journey Coach UI is visible
      journeyCoachEnabled: true,
      currentView: 'today',
      goal: COPY['zh-CN'].defaultGoal,
      tasks: [],
      selectedTask: null,
      resources: {
        coins: 120,
        // Focus Mode 奖励的“阳光”（原 seeds 改名）
        sunlight: 2,
        water: 3,
        chances: 1
      },
      decorations: [],
      islandLevel: 1,
      cropStage: 1,
      islandHydration: 0,
      petMood: 'sleepy',
      streak: 0,
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
      },
      // Social module state
      myFriends: ['mia', 'leo', 'noah'],
      friendRequests: SOCIAL_DATA.friendRequests,
      myChallenges: [],
      myAchievements: SOCIAL_DATA.achievements.map(ach => ({ ...ach })),
      totalFocusMinutes: 70,
      likesReceived: SOCIAL_DATA.likesReceived,
      givenLikes: SOCIAL_DATA.givenLikes,
      activeTab: 'friends-list',
      activeLeaderboard: 'focus'
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
    if (/(ielts|exam|test|cert|certificate|study|学习|雅思|考试|复习|阅读|听力|写作|考证|证书|資格證|资格证|考取)/i.test(combined)) return 'study';
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

  function buildFallbackTasks(goal, language) {
    const lang = normalizeLanguage(language);
    const category = inferGoalCategory(goal);
    const target = String(goal || '').trim() || COPY[lang].defaultGoal;

    const templates = {
      study: {
        'zh-CN': [
          { title: '明确考试要求与里程碑', notes: `针对「${target}」，先确认考试/证书要求、报名条件、考试科目与通过标准，并把 3 个月拆成每周里程碑。`, duration: 25 },
          { title: '搭建资料与题库清单', notes: `收集官方大纲、教材/课程、真题与练习题，整理到一个清单里（按科目/章节分类）。`, duration: 30 },
          { title: '重点模块训练（今天先一章）', notes: `选择最关键或最薄弱的一个模块，完成“学习 + 练习题 + 错题记录”。`, duration: 45 },
          { title: '模拟与复盘（小步快跑）', notes: `做一套小测/模拟（可缩短到 30-45 分钟），复盘错题原因，并更新明天的训练重点。`, duration: 35 }
        ],
        'zh-HK': [
          { title: '確認考試要求與里程碑', notes: `針對「${target}」，先確認考試/證書要求、報名條件、考試科目與通過標準，並把 3 個月拆成每週里程碑。`, duration: 25 },
          { title: '建立資料與題庫清單', notes: `收集官方大綱、教材/課程、真題與練習題，整理成清單（按科目/章節分類）。`, duration: 30 },
          { title: '重點模組訓練（今天先一章）', notes: `選擇最關鍵或最薄弱的一個模組，完成「學習 + 練習題 + 錯題記錄」。`, duration: 45 },
          { title: '模擬與復盤（小步快跑）', notes: `做一套小測/模擬（可縮短到 30-45 分鐘），復盤錯題原因，並更新明天的訓練重點。`, duration: 35 }
        ],
        en: [
          { title: 'Confirm requirements & milestones', notes: `For "${target}", confirm exam/cert requirements, eligibility, subjects, and pass criteria. Turn 3 months into weekly milestones.`, duration: 25 },
          { title: 'Build materials & question bank', notes: 'Collect syllabus, textbooks/courses, past papers, and practice sets. Organize them by topic.', duration: 30 },
          { title: 'Train one key module today', notes: 'Pick the most important or weakest module and do: learn → practice → log mistakes.', duration: 45 },
          { title: 'Mock + review loop', notes: 'Do a short mock (30–45 min), review mistakes, and update tomorrow’s focus.', duration: 35 }
        ]
      },
      project: {
        'zh-CN': [
          { title: '定义交付物与验收标准', notes: `把「${target}」写成一句“可验收”的结果：交付什么、给谁、什么时候完成。`, duration: 20 },
          { title: '拆出 4 个里程碑', notes: '列出：准备/调研 → 产出草稿/原型 → 完成主干 → 打磨与交付，并标注每个里程碑日期。', duration: 30 },
          { title: '启动第一个可交付小块', notes: '今天先完成最小可交付的一步（例如：搭建框架、写大纲、做一个页面/模块）。', duration: 45 },
          { title: '风险清单与下一步', notes: '列出 3 个最大风险/阻塞点，并为每个风险写一个备选方案或下一步动作。', duration: 25 }
        ],
        'zh-HK': [
          { title: '定義交付物與驗收標準', notes: `把「${target}」寫成一句「可驗收」的結果：交付什麼、給誰、何時完成。`, duration: 20 },
          { title: '拆出 4 個里程碑', notes: '列出：準備/調研 → 產出草稿/原型 → 完成主幹 → 打磨與交付，並標註每個里程碑日期。', duration: 30 },
          { title: '啟動第一個可交付小塊', notes: '今天先完成最小可交付的一步（例如：搭建框架、寫大綱、做一個頁面/模組）。', duration: 45 },
          { title: '風險清單與下一步', notes: '列出 3 個最大風險/阻塞點，並為每個風險寫一個備選方案或下一步動作。', duration: 25 }
        ],
        en: [
          { title: 'Define deliverable & acceptance', notes: `Rewrite "${target}" into an outcome you can verify: what to ship, for whom, and by when.`, duration: 20 },
          { title: 'Break into 4 milestones', notes: 'Plan: research → draft/prototype → core build → polish & ship. Add dates.', duration: 30 },
          { title: 'Start the smallest shippable slice', notes: 'Finish one tiny deliverable today (scaffold, outline, first screen/module).', duration: 45 },
          { title: 'Risks & next actions', notes: 'List your top 3 blockers and define a fallback or next action for each.', duration: 25 }
        ]
      },
      habit: {
        'zh-CN': [
          { title: '把习惯变成可执行触发', notes: `针对「${target}」，写下：触发点（何时何地）+ 行为（做什么）+ 最小版本（2 分钟）。`, duration: 20 },
          { title: '准备环境与阻力清单', notes: '把需要的物品/场地准备好，并写下 3 个可能阻力与对应应对策略。', duration: 25 },
          { title: '完成一次最小行动', notes: '只做“最小版本”，把完成打卡下来（不要追求完美）。', duration: 25 },
          { title: '复盘并优化明天', notes: '记录今天最顺/最难的点，给明天设定更容易完成的版本。', duration: 15 }
        ],
        'zh-HK': [
          { title: '把習慣變成可執行觸發', notes: `針對「${target}」，寫下：觸發點（何時何地）+ 行為（做什麼）+ 最小版本（2 分鐘）。`, duration: 20 },
          { title: '準備環境與阻力清單', notes: '把需要的物品/場地準備好，並寫下 3 個可能阻力與對應策略。', duration: 25 },
          { title: '完成一次最小行動', notes: '只做「最小版本」，把完成打卡下來（不要追求完美）。', duration: 25 },
          { title: '復盤並優化明天', notes: '記錄今天最順/最難的點，給明天設定更容易完成的版本。', duration: 15 }
        ],
        en: [
          { title: 'Turn it into a trigger plan', notes: `For "${target}", write: when/where + what to do + a 2-minute minimum version.`, duration: 20 },
          { title: 'Prep environment & blockers', notes: 'Prepare tools/space and list 3 likely blockers with 대응 strategies.', duration: 25 },
          { title: 'Do one minimum action', notes: 'Only do the minimum version. Log it—no perfection required.', duration: 25 },
          { title: 'Review & make tomorrow easier', notes: 'Note what was easy/hard and set an even easier version for tomorrow.', duration: 15 }
        ]
      },
      general: {
        'zh-CN': [
          { title: '把目标写成一句可衡量的结果', notes: `把「${target}」改写成可衡量的句子：数量/标准/截止时间。`, duration: 20 },
          { title: '列出关键子模块（4 块即可）', notes: '写下完成目标必须包含的 4 个子模块，并选出最先做的一个。', duration: 25 },
          { title: '执行最先的一步', notes: '今天只完成“最先做的那个子模块”的第一步，并记录产出物。', duration: 40 },
          { title: '总结与调整', notes: '回顾进展，更新下一步清单，并给自己一句鼓励。', duration: 15 }
        ],
        'zh-HK': [
          { title: '把目標寫成一句可衡量的結果', notes: `把「${target}」改寫成可衡量的句子：數量/標準/截止時間。`, duration: 20 },
          { title: '列出關鍵子模組（4 塊即可）', notes: '寫下完成目標必須包含的 4 個子模組，並選出最先做的一個。', duration: 25 },
          { title: '執行最先的一步', notes: '今天只完成「最先做的那個子模組」的第一步，並記錄產出物。', duration: 40 },
          { title: '總結與調整', notes: '回顧進展，更新下一步清單，並給自己一句鼓勵。', duration: 15 }
        ],
        en: [
          { title: 'Make the goal measurable', notes: `Rewrite "${target}" into a measurable outcome: metric/quality bar/deadline.`, duration: 20 },
          { title: 'List 4 key components', notes: 'List 4 components needed to achieve it and pick the first one to start.', duration: 25 },
          { title: 'Execute the first step', notes: 'Finish the first step of that component today and record the output.', duration: 40 },
          { title: 'Review & adjust', notes: 'Review progress, update next actions, and write one line of encouragement.', duration: 15 }
        ]
      }
    };

    const group = templates[category] || templates.general;
    const list = group[lang] || group.en;
    const encouragement = lang === 'en'
      ? 'Nice work—small steps compound fast. Keep going!'
      : (lang === 'zh-HK'
        ? '你做得好！小步累積得很快，繼續加油！'
        : '你做得很好！小步积累得很快，继续加油！');

    const tasks = list.map((item, index) => normalizeTask({
      id: `task${index + 1}`,
      title: item.title,
      notes: item.notes,
      description: item.notes,
      duration: item.duration,
      customized: true
    }, index, target, lang));

    return { tasks, encouragement };
  }

  function normalizeApiBaseUrl(baseUrl = '') {
    return String(baseUrl || '').trim().replace(/\/+$/, '');
  }

  function resolveApiBaseUrl(runtime = {}) {
    const runtimeBaseUrl = normalizeApiBaseUrl(runtime.apiBaseUrl);
    if (runtimeBaseUrl) return runtimeBaseUrl;

    const config = runtime.config || (typeof window !== 'undefined' ? window.__POMOLAND_CONFIG__ : null);
    const configuredBaseUrl = normalizeApiBaseUrl(config && config.apiBaseUrl);
    if (configuredBaseUrl) return configuredBaseUrl;

    if (typeof window !== 'undefined' && window.location && /^https?:$/i.test(window.location.protocol)) {
      return normalizeApiBaseUrl(window.location.origin);
    }

    return '';
  }

  function reportApiError(message, error) {
    if (typeof window !== 'undefined') {
      console.error(message, error);
    }
  }

  async function fetchApi(endpoint, data) {
    const apiBaseUrl = resolveApiBaseUrl();
    if (!apiBaseUrl && typeof window === 'undefined') {
      throw new Error('API base URL is not configured for this runtime.');
    }
    const response = await fetch(`${apiBaseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const rawText = await response.text();
    let payload = {};
    if (rawText) {
      try {
        payload = JSON.parse(rawText);
      } catch (error) {
        if (!response.ok) {
          throw new Error(`API call failed with status ${response.status}`);
        }
        throw new Error('API returned a non-JSON response.');
      }
    }
    if (!response.ok) {
      throw new Error(payload.error || `API call failed with status ${response.status}`);
    }
    return payload;
  }

  async function generateTasks(goal, language) {
    const lang = normalizeLanguage(language);
    const cleanGoal = goal && goal.trim() ? goal.trim() : COPY[lang].defaultGoal;
    try {
      const apiResponse = await fetchApi('/api/generate-tasks', { goal: cleanGoal, language: lang });
      const tasks = apiResponse.tasks.map((task, index) => normalizeTask({
        ...task,
        id: `task${index + 1}`,
        // AI 生成内容不应被语言包（如 IELTS 示例文案）覆盖
        customized: true
      }, index, cleanGoal, lang));
      return { tasks, encouragement: apiResponse.encouragement };
    } catch (error) {
      reportApiError('Error fetching tasks from AI:', error);
      // 当后端不可用（GitHub Pages / 未启动本地服务）时，改用“基于输入目标”的本地拆解，
      // 避免永远回落到 IELTS 示例任务，造成“无论输入什么都显示雅思任务拆解”的体验。
      return buildFallbackTasks(cleanGoal, lang);
    }
  }

  async function getPlanningSteps(language) {
    const lang = normalizeLanguage(language);
    try {
      const steps = await fetchApi('/api/get-planning-steps', { language: lang });
      return steps;
    } catch (error) {
      reportApiError('Error fetching planning steps from AI:', error);
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
    next.resources.sunlight += reward.sunlight || 0;
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
    // 原 seeds 改名为 sunlight（数值保持不变）
    const sunlight = 1 + (randomValue() > 0.55 ? 1 : 0);
    const water = 1 + (randomValue() > 0.35 ? 1 : 0);
    const chances = effortMinutes >= 25 && randomValue() > 0.7 ? 1 : 0;
    const decoration = randomValue() > 0.72 ? t(language, 'rewardDecoration') : null;
    return {
      coins,
      sunlight,
      water,
      chances,
      decoration
    };
  }

  function applyIslandAction(state, action) {
    const next = copyState(state);

    if (action === 'plant') {
      if (next.resources.sunlight <= 0) return withMessage(next, 'needSunlight');
      next.resources.sunlight -= 1;
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
      7: { coins: 35, sunlight: 1, water: 1, chances: 0, streakProtection: 1 },
      30: { coins: 90, sunlight: 2, water: 2, chances: 1, streakProtection: 1 },
      100: { coins: 180, sunlight: 3, water: 3, chances: 1, streakProtection: 2 }
    }[normalizedMilestone] || { coins: 20, sunlight: 1, water: 1, chances: 0, streakProtection: 0 };

    next.resources.coins += milestoneReward.coins;
    next.resources.sunlight += milestoneReward.sunlight;
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
      // 统一奖励：帮助浇水获得 20 金币（与 Pomoland Island 逻辑一致）
      next.resources.coins += 20;
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
    resolveApiBaseUrl,
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
    todayIso,
    SOCIAL_DATA
  };
})();

// Social Module Functions (Extended)
const SocialModule = (() => {
  function addFriend(state, friendId) {
    const next = { ...state };
    if (!next.myFriends) next.myFriends = [];
    if (!next.myFriends.includes(friendId)) {
      next.myFriends.push(friendId);
    }
    return next;
  }

  function removeFriend(state, friendId) {
    const next = { ...state };
    next.myFriends = (next.myFriends || []).filter(id => id !== friendId);
    return next;
  }

  function sendFriendRequest(state, targetId) {
    const next = { ...state };
    if (!next.friendRequests) next.friendRequests = [];
    next.friendRequests.push({
      id: `req-${Date.now()}`,
      from: 'current-user',
      to: targetId,
      status: 'pending',
      timestamp: Date.now()
    });
    return next;
  }

  function acceptFriendRequest(state, requestId) {
    const next = { ...state };
    const request = (next.friendRequests || []).find(r => r.id === requestId);
    if (request) {
      next.friendRequests = next.friendRequests.filter(r => r.id !== requestId);
      if (!next.myFriends) next.myFriends = [];
      next.myFriends.push(request.from);
    }
    return next;
  }

  function declineFriendRequest(state, requestId) {
    const next = { ...state };
    next.friendRequests = (next.friendRequests || []).filter(r => r.id !== requestId);
    return next;
  }

  function createChallenge(state, challengeData) {
    const next = { ...state };
    if (!next.myChallenges) next.myChallenges = [];
    const newChallenge = {
      id: `challenge-${Date.now()}`,
      ...challengeData,
      status: 'active',
      createdBy: 'current-user',
      createdAt: new Date().toISOString(),
      progress: {
        'current-user': { value: 0, unit: getChallengeUnit(challengeData.type) }
      }
    };
    next.myChallenges.push(newChallenge);
    return next;
  }

  function joinChallenge(state, challengeId) {
    const next = { ...state };
    if (!next.myChallenges) next.myChallenges = [];
    const challenge = SOCIAL_DATA.challenges.find(c => c.id === challengeId);
    if (challenge) {
      const existing = next.myChallenges.find(c => c.id === challengeId);
      if (!existing) {
        next.myChallenges.push({
          ...challenge,
          joinedAt: new Date().toISOString()
        });
      }
    }
    return next;
  }

  function getChallengeUnit(type) {
    return type === 'checkin_streak' ? 'days' : type === 'focus_time' ? 'minutes' : 'points';
  }

  function likeAchievement(state, friendId, achievementId) {
    const next = { ...state };
    if (!next.givenLikes) next.givenLikes = [];
    next.givenLikes.push({
      to: friendId,
      achievementId,
      timestamp: Date.now()
    });
    return next;
  }

  function updateChallengeProgress(state, challengeId, value) {
    const next = { ...state };
    const challenge = next.myChallenges.find(c => c.id === challengeId);
    if (challenge && challenge.progress) {
      challenge.progress['current-user'] = {
        value: value,
        unit: getChallengeUnit(challenge.type)
      };
    }
    return next;
  }

  function getLeaderboard(type, state) {
    const users = [
      {
        id: 'current-user',
        name: '我',
        focusMinutes: state.totalFocusMinutes || 70,
        streak: state.streak ?? 0,
        islandLevel: state.islandLevel || 1,
        isCurrentUser: true,
        trend: 'up'
      },
      ...FRIENDS.filter(f => (state.myFriends || []).includes(f.id)).map(f => ({
        id: f.id,
        name: f.name,
        focusMinutes: f.focusMinutes,
        streak: f.streak,
        islandLevel: f.islandLevel,
        trend: ['up', 'down', 'same'][Math.floor(Math.random() * 3)]
      })),
      ...SOCIAL_DATA.availableUsers.slice(0, 3).map(u => ({
        id: u.id,
        name: u.name,
        focusMinutes: u.focusMinutes,
        streak: u.streak,
        islandLevel: u.islandLevel,
        trend: ['up', 'down', 'same'][Math.floor(Math.random() * 3)]
      }))
    ];

    const sortBy = {
      focus: (a, b) => b.focusMinutes - a.focusMinutes,
      streak: (a, b) => b.streak - a.streak,
      island: (a, b) => b.islandLevel - a.islandLevel
    };

    return users.sort(sortBy[type]).map((user, index) => ({
      ...user,
      rank: index + 1
    }));
  }

  function getChallenges(state) {
    const myChallengeIds = (state.myChallenges || []).map(c => c.id);
    return [
      ...(state.myChallenges || []),
      ...SOCIAL_DATA.challenges.filter(c => !myChallengeIds.includes(c.id))
    ];
  }

  function getAchievements(state) {
    return state.myAchievements || SOCIAL_DATA.achievements;
  }

  return {
    addFriend,
    removeFriend,
    sendFriendRequest,
    acceptFriendRequest,
    declineFriendRequest,
    createChallenge,
    joinChallenge,
    likeAchievement,
    updateChallengeProgress,
    getLeaderboard,
    getChallenges,
    getAchievements
  };
})();

// ==================== Island Garden Module ====================
const IslandGardenModule = (function() {
  // 定义作物类型和生长阶段
  const CROP_TYPES = {
    tomato: {
      name: '番茄',
      icon: '🍅',
      // 价格中等：约 30 分钟成熟
      // 注意：这里使用毫秒（ms）
      growthTime: 30 * 60 * 1000,
      stages: ['种子', '幼苗', '生长中', '开花', '结果'],
      rewards: { water: 2, sunlight: 2, coins: 50 },
      yield: 1
    },
    strawberry: {
      name: '草莓',
      icon: '🍓',
      // 价格更高：约 2 小时成熟
      growthTime: 2 * 60 * 60 * 1000,
      stages: ['种子', '幼苗', '生长中', '开花', '结果'],
      rewards: { water: 3, sunlight: 3, coins: 80 },
      yield: 1
    },
    apple: {
      name: '苹果',
      icon: '🍎',
      // 价格较高：约 6 小时成熟
      growthTime: 6 * 60 * 60 * 1000,
      stages: ['种子', '幼苗', '小树', '大树', '结果'],
      rewards: { water: 4, sunlight: 4, coins: 120 },
      yield: 1
    },
    orange: {
      name: '橘子',
      icon: '🍊',
      // 预留作物（当前商店未售卖）
      growthTime: 8 * 60 * 60 * 1000,
      stages: ['种子', '幼苗', '小树', '大树', '结果'],
      rewards: { water: 5, sunlight: 5, coins: 150 },
      yield: 1
    },
    watermelon: {
      name: '西瓜',
      icon: '🍉',
      // 最贵：约 12 小时成熟
      growthTime: 12 * 60 * 60 * 1000,
      stages: ['种子', '幼苗', '藤蔓', '开花', '结果'],
      rewards: { water: 6, sunlight: 6, coins: 200 },
      yield: 1
    },
    carrot: {
      name: '胡萝卜',
      icon: '🥕',
      // 最便宜：约 5 分钟成熟
      growthTime: 5 * 60 * 1000,
      stages: ['种子', '幼苗', '生长中', '成熟'],
      rewards: { water: 2, sunlight: 2, coins: 40 },
      yield: 1
    }
  };

  // 定义宠物类型
  const PET_TYPES = {
    rabbit: {
      name: '小兔子',
      icon: '🐰',
      cost: 500,
      happinessDecay: 2, // 每小时减少2点
      feedBonus: { coins: 30, focusBonus: 1.1 },
      islandBonus: { growthMultiplier: 0.88, label: '作物生长速度 +12%' },
      // 单位：毫秒（ms）
      feedInterval: 4 * 60 * 60 * 1000 // 4小时需要喂一次
    },
    cat: {
      name: '猫咪',
      icon: '🐱',
      cost: 500,
      happinessDecay: 1.5,
      feedBonus: { coins: 40, focusBonus: 1.15 },
      islandBonus: { coinMultiplier: 1.2, label: '收获金币 +20%' },
      // 单位：毫秒（ms）
      feedInterval: 6 * 60 * 60 * 1000
    },
    dog: {
      name: '小狗',
      icon: '🐶',
      cost: 500,
      happinessDecay: 2.5,
      feedBonus: { coins: 35, focusBonus: 1.12 },
      islandBonus: { friendCoinsBonus: 10, label: '好友互动额外 +10 金币' },
      // 单位：毫秒（ms）
      feedInterval: 5 * 60 * 60 * 1000
    },
    bird: {
      name: '小鸟',
      icon: '🐦',
      cost: 500,
      happinessDecay: 3,
      feedBonus: { coins: 25, focusBonus: 1.08 },
      islandBonus: { orderXpBonus: 8, label: '完成订单额外 +8 XP' },
      // 单位：毫秒（ms）
      feedInterval: 3 * 60 * 60 * 1000
    }
  };

  // 定义装饰品
  const DECORATION_TYPES = {
    fence: { name: '栅栏', icon: '🪵', cost: { coins: 100 }, effect: 'security', category: 'functional', maxCount: 2 },
    fountain: { name: '喷泉', icon: '⛲', cost: { coins: 500 }, effect: 'happiness', category: 'landmark', maxCount: 1 },
    bench: { name: '长椅', icon: '🪑', cost: { coins: 300 }, effect: 'rest', category: 'functional', maxCount: 2 },
    lamp: { name: '路灯', icon: '🪔', cost: { coins: 200 }, effect: 'night', category: 'functional', maxCount: 2 },
    flower: { name: '花朵', icon: '🌸', cost: { coins: 150 }, effect: 'beauty', category: 'nature', maxCount: 3 },
    statue: { name: '雕像', icon: '🗿', cost: { coins: 800 }, effect: 'prestige', category: 'landmark', maxCount: 1 },
    pond: { name: '池塘', icon: '🌊', cost: { coins: 600 }, effect: 'calm', category: 'nature', maxCount: 1 },
    bridge: { name: '小桥', icon: '🌉', cost: { coins: 700 }, effect: 'access', category: 'landmark', maxCount: 1 }
  };

  const LEVEL_UNLOCKS = {
    1: { plots: 2, decorationSlots: 1, seeds: ['tomato', 'carrot'] },
    2: { plots: 4, decorationSlots: 2, seeds: ['tomato', 'carrot'] },
    3: { plots: 5, decorationSlots: 3, seeds: ['tomato', 'carrot', 'strawberry'] },
    4: { plots: 6, decorationSlots: 4, seeds: ['tomato', 'carrot', 'strawberry', 'apple'] },
    5: { plots: 6, decorationSlots: 4, seeds: ['tomato', 'carrot', 'strawberry', 'apple', 'watermelon'] }
  };

  const ISLAND_LEVEL_RULES = {
    1: {
      requiredXp: 100,
      conditions: { plantCount: 2 },
      rewards: { coins: 60, water: 2, sunlight: 1 },
      unlockPreview: ['农田扩展到 4 格', '解锁第 2 个装饰位']
    },
    2: {
      requiredXp: 180,
      conditions: { harvestCount: 5 },
      rewards: { coins: 80, water: 2, sunlight: 2, seeds: { strawberry: 2 } },
      unlockPreview: ['解锁第 5 块农田', '解锁草莓种子', '解锁第 3 个装饰位']
    },
    3: {
      requiredXp: 280,
      conditions: { decorationCount: 1 },
      rewards: { coins: 120, water: 3, sunlight: 2, seeds: { apple: 1 } },
      unlockPreview: ['解锁第 6 块农田', '解锁苹果种子', '解锁第 4 个装饰位']
    },
    4: {
      requiredXp: 400,
      conditions: { friendHelpCount: 3 },
      rewards: { coins: 160, water: 3, sunlight: 3, seeds: { watermelon: 1 } },
      unlockPreview: ['解锁西瓜种子', '升级为成熟岛屿外观', '升级奖励资源包']
    }
  };

  const MAX_ISLAND_LEVEL = 5;
  const DEFAULT_DECORATION_POSITIONS = [
    { x: 50, y: 52 },
    { x: 38, y: 58 },
    { x: 62, y: 58 },
    { x: 44, y: 46 },
    { x: 56, y: 46 },
    { x: 50, y: 62 }
  ];

  function getTodayKey(timestamp = Date.now()) {
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  function createDailyTasks() {
    return [
      {
        id: 'plant-twice',
        title: '种植 2 次作物',
        description: '今天先让岛屿开始运转。',
        actionKey: 'plant',
        target: 2,
        progress: 0,
        claimed: false,
        rewards: { coins: 30, xp: 16 }
      },
      {
        id: 'harvest-once',
        title: '收获 1 次成熟作物',
        description: '亲手完成一次完整种植循环。',
        actionKey: 'harvest',
        target: 1,
        progress: 0,
        claimed: false,
        rewards: { water: 2, xp: 14 }
      },
      {
        id: 'social-once',
        title: '完成 1 次好友互动',
        description: '帮助好友或赠送礼物都算完成。',
        actionKey: 'social',
        target: 1,
        progress: 0,
        claimed: false,
        rewards: { sunlight: 2, xp: 14 }
      }
    ];
  }

  function createOrders() {
    return [
      {
        id: 'starter-order',
        title: '新鲜沙拉订单',
        description: '提交 1 个番茄和 1 个胡萝卜',
        needs: { tomato: 1, carrot: 1 },
        claimed: false,
        rewards: { coins: 80, xp: 18 }
      },
      {
        id: 'sweet-order',
        title: '甜点拼盘订单',
        description: '提交 2 个草莓，等级不足时会保留到解锁后再完成',
        needs: { strawberry: 2 },
        claimed: false,
        rewards: { coins: 120, water: 2, xp: 24 }
      }
    ];
  }

  function getDecorationCountByType(islandState, decorationType) {
    return (islandState.decorations || []).filter((item) => item && item.type === decorationType).length;
  }

  function normalizeDecorationPosition(position, index = 0) {
    const fallback = DEFAULT_DECORATION_POSITIONS[index] || DEFAULT_DECORATION_POSITIONS[0];
    const x = Number.isFinite(Number(position?.x)) ? Math.min(80, Math.max(20, Number(position.x))) : fallback.x;
    const y = Number.isFinite(Number(position?.y)) ? Math.min(70, Math.max(34, Number(position.y))) : fallback.y;
    return { x, y };
  }

  function normalizeDecorationFlip(flipped) {
    const value = Number(flipped || 0);
    if (!Number.isFinite(value)) return 0;
    return Math.abs(value) > 0 ? 1 : 0;
  }

  function getActivePet(islandState) {
    if (!islandState?.pets?.length) return null;
    const activePet = islandState.activePetId
      ? islandState.pets.find((pet) => pet.unlocked && pet.id === islandState.activePetId)
      : null;
    return activePet || islandState.pets.find((pet) => pet.unlocked) || null;
  }

  function getActivePetEffect(islandState) {
    const pet = getActivePet(islandState);
    if (!pet) return { label: '暂无宠物加成' };
    const petType = PET_TYPES[pet.type];
    const hungry = (Date.now() - pet.lastFedAt) > petType.feedInterval;
    if ((pet.happiness || 0) < 35 || hungry) {
      return { label: `${pet.name} 需要照料后才会提供加成` };
    }
    return { ...(petType.islandBonus || {}), label: petType.islandBonus?.label || '宠物加成已生效' };
  }

  function ensureDailySystems(islandState) {
    const todayKey = getTodayKey();
    islandState.dailyProgress = islandState.dailyProgress || {
      dayKey: todayKey,
      counters: { plant: 0, harvest: 0, social: 0, feed: 0 },
      tasks: createDailyTasks()
    };
    islandState.orderBoard = islandState.orderBoard || {
      dayKey: todayKey,
      orders: createOrders()
    };
    islandState.social = {
      friendship: {},
      ...(islandState.social || {})
    };

    if (islandState.dailyProgress.dayKey !== todayKey) {
      islandState.dailyProgress = {
        dayKey: todayKey,
        counters: { plant: 0, harvest: 0, social: 0, feed: 0 },
        tasks: createDailyTasks()
      };
    }

    if (islandState.orderBoard.dayKey !== todayKey) {
      islandState.orderBoard = {
        dayKey: todayKey,
        orders: createOrders()
      };
    }

    islandState.dailyProgress.tasks = (islandState.dailyProgress.tasks || createDailyTasks()).map((task) => ({
      ...task,
      progress: Number(task.progress || 0),
      claimed: Boolean(task.claimed)
    }));
    islandState.orderBoard.orders = (islandState.orderBoard.orders || createOrders()).map((order) => ({
      ...order,
      claimed: Boolean(order.claimed)
    }));
  }

  function registerDailyAction(islandState, actionKey, amount = 1) {
    ensureDailySystems(islandState);
    const counters = islandState.dailyProgress.counters;
    counters[actionKey] = Number(counters[actionKey] || 0) + amount;
    islandState.dailyProgress.tasks.forEach((task) => {
      if (task.actionKey === actionKey) {
        task.progress = Math.min(task.target, Number(task.progress || 0) + amount);
      }
    });
  }

  function getLevelRule(level) {
    return ISLAND_LEVEL_RULES[level] || null;
  }

  function getUnlockProfile(level) {
    const safeLevel = Math.max(1, Math.min(level, MAX_ISLAND_LEVEL));
    return LEVEL_UNLOCKS[safeLevel] || LEVEL_UNLOCKS[1];
  }

  function getCropUnlockLevel(cropType) {
    const match = Object.entries(LEVEL_UNLOCKS).find(([, unlocks]) => unlocks.seeds.includes(cropType));
    return match ? Number(match[0]) : 1;
  }

  function isSeedUnlocked(islandState, cropType) {
    return getUnlockProfile(islandState.level).seeds.includes(cropType);
  }

  function getUnlockedPlotCount(islandState) {
    return getUnlockProfile(islandState.level).plots;
  }

  function getUnlockedDecorationSlots(islandState) {
    return getUnlockProfile(islandState.level).decorationSlots;
  }

  function getConditionValue(islandState, key) {
    const stats = islandState.stats || {};
    return Number(stats[key] || 0);
  }

  function getConditionEntries(rule) {
    return Object.entries((rule && rule.conditions) || {});
  }

  function areUpgradeConditionsMet(islandState, rule) {
    return getConditionEntries(rule).every(([key, value]) => getConditionValue(islandState, key) >= value);
  }

  function getUpgradeRewards(rule) {
    const rewards = [];
    if (!rule) return rewards;
    if (rule.rewards?.coins) rewards.push(`💰 ${rule.rewards.coins} 金币`);
    if (rule.rewards?.water) rewards.push(`💧 ${rule.rewards.water} 水滴`);
    if (rule.rewards?.sunlight) rewards.push(`☀️ ${rule.rewards.sunlight} 阳光`);
    Object.entries(rule.rewards?.seeds || {}).forEach(([cropType, amount]) => {
      rewards.push(`${CROP_TYPES[cropType].icon} ${CROP_TYPES[cropType].name}种子 x${amount}`);
    });
    return [...rewards, ...(rule.unlockPreview || [])];
  }

  function ensureIslandProgress(islandState) {
    islandState.level = Math.max(1, Math.min(Number(islandState.level || 1), MAX_ISLAND_LEVEL));
    islandState.stats = {
      plantCount: 0,
      harvestCount: 0,
      decorationCount: 0,
      friendHelpCount: 0,
      ...(islandState.stats || {})
    };
    islandState.lastUpgrade = islandState.lastUpgrade || null;
    islandState.upgradeReady = false;
    islandState.stats.decorationCount = Math.max(
      Number(islandState.stats.decorationCount || 0),
      Array.isArray(islandState.decorations) ? islandState.decorations.filter(Boolean).length : 0
    );
    islandState.guideSeen = Boolean(islandState.guideSeen);
    islandState.decorationFilter = islandState.decorationFilter || 'all';
    islandState.decorations = (Array.isArray(islandState.decorations) ? islandState.decorations : []).map((decoration, index) => {
      if (!decoration) return decoration;
      const { rotation: legacyRotation, flipped: savedFlipped, ...rest } = decoration;
      return {
        ...rest,
        position: normalizeDecorationPosition(decoration.position, index),
        flipped: normalizeDecorationFlip(savedFlipped ?? legacyRotation)
      };
    });
    ensureDailySystems(islandState);

    if (islandState.level >= MAX_ISLAND_LEVEL) {
      islandState.exp = 0;
      islandState.maxExp = 1;
      return islandState;
    }

    const rule = getLevelRule(islandState.level);
    islandState.maxExp = rule ? rule.requiredXp : Math.max(100, Number(islandState.maxExp || 100));
    islandState.exp = Math.max(0, Math.min(Number(islandState.exp || 0), islandState.maxExp));
    islandState.upgradeReady = Boolean(rule) && islandState.exp >= islandState.maxExp && areUpgradeConditionsMet(islandState, rule);
    return islandState;
  }

  function applySeedRewards(islandState, seeds) {
    if (!seeds) return;
    Object.entries(seeds).forEach(([cropType, amount]) => {
      islandState.inventory.seeds[cropType] = Number(islandState.inventory.seeds[cropType] || 0) + Number(amount || 0);
    });
  }

  // 创建初始岛屿状态
  function createIslandState() {
    return ensureIslandProgress({
      level: 1,
      exp: 0,
      maxExp: 100,
      coins: 0,
      water: 10,
      sunlight: 10,
      dailyHelpCount: 5,
      plots: [
        { id: 'plot1', crop: null, plantedAt: null, growthStage: 0, needsWater: false, wateredAt: null },
        { id: 'plot2', crop: null, plantedAt: null, growthStage: 0, needsWater: false, wateredAt: null },
        { id: 'plot3', crop: null, plantedAt: null, growthStage: 0, needsWater: false, wateredAt: null },
        { id: 'plot4', crop: null, plantedAt: null, growthStage: 0, needsWater: false, wateredAt: null },
        { id: 'plot5', crop: null, plantedAt: null, growthStage: 0, needsWater: false, wateredAt: null },
        { id: 'plot6', crop: null, plantedAt: null, growthStage: 0, needsWater: false, wateredAt: null }
      ],
      pets: [
        { id: 'pet1', type: 'rabbit', name: '小白', happiness: 100, lastFedAt: Date.now(), unlocked: true }
      ],
      activePetId: 'pet1',
      decorations: [],
      inventory: {
        seeds: { tomato: 3, strawberry: 0, carrot: 1, apple: 0, watermelon: 0 },
        harvested: {}
      },
      lastVisitTime: Date.now(),
      islandName: '我的小岛',
      theme: 'sunny',
      stats: {
        plantCount: 0,
        harvestCount: 0,
        decorationCount: 0,
        friendHelpCount: 0
      },
      guideSeen: false,
      decorationFilter: 'all',
      dailyProgress: {
        dayKey: getTodayKey(),
        counters: { plant: 0, harvest: 0, social: 0, feed: 0 },
        tasks: createDailyTasks()
      },
      orderBoard: {
        dayKey: getTodayKey(),
        orders: createOrders()
      },
      social: {
        friendship: {}
      },
      upgradeReady: false,
      lastUpgrade: null,
      achievements: {
        firstHarvest: false,
        masterGardener: false,
        petLover: false,
        socialButterfly: false
      }
    });
  }

  // 种植作物
  function plantCrop(islandState, plotId, cropType) {
    ensureIslandProgress(islandState);
    const plotIndex = islandState.plots.findIndex(p => p.id === plotId);
    if (plotIndex === -1) return { success: false, message: '找不到地块' };

    const plot = islandState.plots[plotIndex];
    if (plot.crop) return { success: false, message: '这个地块已经有作物了' };

    const unlockedPlots = getUnlockedPlotCount(islandState);
    if (plotIndex >= unlockedPlots) {
      return { success: false, message: `当前等级只能使用前 ${unlockedPlots} 块农田` };
    }

    if (!isSeedUnlocked(islandState, cropType)) {
      return { success: false, message: `Lv.${getCropUnlockLevel(cropType)} 解锁 ${CROP_TYPES[cropType].name}种子` };
    }

    if (!islandState.inventory.seeds[cropType] || islandState.inventory.seeds[cropType] <= 0) {
      return { success: false, message: '没有这种种子' };
    }

    islandState.inventory.seeds[cropType]--;
    plot.crop = cropType;
    plot.plantedAt = Date.now();
    plot.growthStage = 0;
    plot.needsWater = false;
    plot.wateredAt = null;
    islandState.stats.plantCount += 1;
    registerDailyAction(islandState, 'plant', 1);
    addExp(islandState, 12);

    return { success: true, message: `成功种植了${CROP_TYPES[cropType].name}` };
  }

  // 浇水
  function waterCrop(islandState, plotId) {
    ensureIslandProgress(islandState);
    const plotIndex = islandState.plots.findIndex(p => p.id === plotId);
    if (plotIndex === -1) return { success: false, message: '找不到地块' };

    const plot = islandState.plots[plotIndex];
    if (!plot.crop) return { success: false, message: '这个地块没有作物' };

    // 成熟后不可继续浇水（避免浪费水滴）
    if (getGrowthProgress(plot, islandState) >= 100) {
      plot.needsWater = false;
      return { success: false, message: '作物已成熟，无需浇水，直接收获即可' };
    }

    if (islandState.water <= 0) return { success: false, message: '水滴不足' };

    islandState.water--;
    plot.needsWater = false;
    plot.wateredAt = Date.now();

    // 加速生长时间
    // 浇水：让“剩余时间减少 5 分钟”
    const cropType = CROP_TYPES[plot.crop];
    const minPlantedAt = Date.now() - cropType.growthTime; // 不会加速到“超过成熟”
    plot.plantedAt = Math.max(minPlantedAt, (plot.plantedAt || Date.now()) - 5 * 60 * 1000);
    addExp(islandState, 3);

    return { success: true, message: '浇水成功，作物生长时间减少 5 分钟' };
  }

  // 阳光照射（加速生长）
  function sunlightCrop(islandState, plotId) {
    ensureIslandProgress(islandState);
    const plotIndex = islandState.plots.findIndex(p => p.id === plotId);
    if (plotIndex === -1) return { success: false, message: '找不到地块' };

    const plot = islandState.plots[plotIndex];
    if (!plot.crop) return { success: false, message: '这个地块没有作物' };

    // 成熟后不可继续照射（避免浪费阳光）
    if (getGrowthProgress(plot, islandState) >= 100) {
      plot.needsWater = false;
      return { success: false, message: '作物已成熟，无需照射，直接收获即可' };
    }

    if ((islandState.sunlight || 0) <= 0) return { success: false, message: '阳光不足' };

    islandState.sunlight -= 1;
    // 每次阳光照射减少 10 分钟生长时间（不超过成熟上限）
    const cropType = CROP_TYPES[plot.crop];
    const minPlantedAt = Date.now() - cropType.growthTime; // 不会加速到“超过成熟”
    plot.plantedAt = Math.max(minPlantedAt, (plot.plantedAt || Date.now()) - 10 * 60 * 1000);
    addExp(islandState, 4);

    return { success: true, message: '阳光照射成功，作物生长时间减少 10 分钟' };
  }

  // 收获作物
  function harvestCrop(islandState, plotId) {
    ensureIslandProgress(islandState);
    const plotIndex = islandState.plots.findIndex(p => p.id === plotId);
    if (plotIndex === -1) return { success: false, message: '找不到地块' };

    const plot = islandState.plots[plotIndex];
    if (!plot.crop) return { success: false, message: '这个地块没有作物' };

    const cropType = CROP_TYPES[plot.crop];
    const growthProgress = getGrowthProgress(plot, islandState);
    if (growthProgress < 100) return { success: false, message: '作物还没成熟' };

    // 计算收获奖励
    const yieldAmount = calculateYield(plot, islandState);
    const petEffect = getActivePetEffect(islandState);
    const rewards = {
      water: cropType.rewards.water * yieldAmount,
      sunlight: cropType.rewards.sunlight * yieldAmount,
      coins: Math.round(cropType.rewards.coins * yieldAmount * Number(petEffect.coinMultiplier || 1))
    };

    // 添加到收获记录
    if (!islandState.inventory.harvested[plot.crop]) {
      islandState.inventory.harvested[plot.crop] = 0;
    }
    islandState.inventory.harvested[plot.crop] += yieldAmount;

    // 获取奖励
    islandState.water += rewards.water;
    islandState.sunlight += rewards.sunlight;
    islandState.coins += rewards.coins;

    // 增加经验
    addExp(islandState, 20);
    islandState.stats.harvestCount += 1;
    registerDailyAction(islandState, 'harvest', 1);

    // 重置地块
    plot.crop = null;
    plot.plantedAt = null;
    plot.growthStage = 0;
    plot.needsWater = false;
    plot.wateredAt = null;

    // 检查成就
    checkHarvestAchievements(islandState);

    return {
      success: true,
      message: `收获成功！获得${yieldAmount}个${cropType.name}`,
      rewards,
      yieldAmount
    };
  }

  // 获取生长进度
  function getGrowthProgress(plot, islandState = null) {
    if (!plot.crop) return 0;

    const cropType = CROP_TYPES[plot.crop];
    const petEffect = islandState ? getActivePetEffect(islandState) : {};
    const effectiveGrowthTime = cropType.growthTime * Number(petEffect.growthMultiplier || 1);
    const elapsedTime = Date.now() - plot.plantedAt;
    const progress = Math.min((elapsedTime / effectiveGrowthTime) * 100, 100);

    return progress;
  }

  // 计算产量
  function calculateYield(plot, islandState = null) {
    if (!plot.crop) return 0;

    const cropType = CROP_TYPES[plot.crop];
    const growthProgress = getGrowthProgress(plot, islandState);

    // 如果没及时浇水，产量减少
    let yieldMultiplier = 1.0;
    if (plot.needsWater) {
      yieldMultiplier = 0.5;
    }

    // 根据生长阶段计算产量
    let baseYield = Math.floor(cropType.yield * yieldMultiplier);
    if (growthProgress >= 100) {
      return baseYield;
    } else if (growthProgress >= 80) {
      return Math.floor(baseYield * 0.8);
    } else {
      return Math.floor(baseYield * 0.5);
    }
  }

  // 喂养宠物
  function feedPet(islandState, petId) {
    ensureIslandProgress(islandState);
    const petIndex = islandState.pets.findIndex(p => p.id === petId);
    if (petIndex === -1) return { success: false, message: '找不到宠物' };

    const pet = islandState.pets[petIndex];
    if (!pet.unlocked) return { success: false, message: '宠物未解锁' };

    const petType = PET_TYPES[pet.type];
    // 喂养消耗：游戏机会（而不是水滴）
    if ((islandState.dailyHelpCount || 0) <= 0) return { success: false, message: '游戏机会不足' };

    islandState.dailyHelpCount -= 1;
    pet.happiness = Math.min(pet.happiness + 30, 100);
    pet.lastFedAt = Date.now();
    registerDailyAction(islandState, 'feed', 1);

    const bonus = petType.feedBonus;
    islandState.coins += bonus.coins;
    addExp(islandState, 6);

    return {
      success: true,
      message: `喂养成功！消耗 1 次游戏机会，${pet.name}很开心，获得${bonus.coins}金币`,
      bonus
    };
  }

  // 解锁宠物
  function unlockPet(islandState, petType) {
    ensureIslandProgress(islandState);
    const cost = (PET_TYPES[petType] && PET_TYPES[petType].cost) ? PET_TYPES[petType].cost : 500;
    if (islandState.coins < cost) return { success: false, message: `金币不足${cost}` };

    const existingPet = islandState.pets.find(p => p.type === petType);
    if (existingPet && existingPet.unlocked) {
      return { success: false, message: '这个宠物已经解锁了' };
    }

    islandState.coins -= cost;
    const newPet = {
      id: `pet${Date.now()}`,
      type: petType,
      name: PET_TYPES[petType].name,
      happiness: 100,
      lastFedAt: Date.now(),
      unlocked: true
    };

    if (existingPet) {
      existingPet.unlocked = true;
      existingPet.lastFedAt = Date.now();
    } else {
      islandState.pets.push(newPet);
    }

    return { success: true, message: `成功解锁${PET_TYPES[petType].name}！` };
  }

  // 购买装饰品
  function buyDecoration(islandState, decorationType, slotIndex = null) {
    ensureIslandProgress(islandState);
    const decoration = DECORATION_TYPES[decorationType];
    const unlockedSlots = getUnlockedDecorationSlots(islandState);
    const decorations = Array.isArray(islandState.decorations) ? islandState.decorations : [];
    const occupiedCount = decorations.filter(Boolean).length;
    let targetSlot = Number.isInteger(slotIndex) ? slotIndex : decorations.findIndex((item, index) => index < unlockedSlots && !item);
    const isReplacing = Number.isInteger(slotIndex) && Boolean(decorations[slotIndex]);

    if (Number.isInteger(slotIndex) && slotIndex >= unlockedSlots) {
      return { success: false, message: '该装饰位尚未解锁' };
    }
    const typeCount = getDecorationCountByType(islandState, decorationType);
    if ((!isReplacing || decorations[slotIndex]?.type !== decorationType) && typeCount >= Number(decoration.maxCount || 99)) {
      return { success: false, message: `${decoration.name} 已达到可摆放上限` };
    }
    if (targetSlot === -1 && occupiedCount >= unlockedSlots) {
      return { success: false, message: '当前装饰位已满，升级岛屿可解锁更多位置' };
    }
    if (targetSlot === -1) {
      targetSlot = Math.min(occupiedCount, unlockedSlots - 1);
    }
    if (islandState.coins < decoration.cost.coins) {
      return { success: false, message: '金币不足' };
    }

    islandState.coins -= decoration.cost.coins;
    islandState.decorations[targetSlot] = {
      id: `deco${Date.now()}`,
      type: decorationType,
      placedAt: Date.now(),
      position: normalizeDecorationPosition(decorations[targetSlot]?.position, targetSlot),
      flipped: normalizeDecorationFlip(decorations[targetSlot]?.flipped ?? decorations[targetSlot]?.rotation)
    };
    islandState.stats.decorationCount = islandState.decorations.filter(Boolean).length;

    addExp(islandState, 12);

    return {
      success: true,
      message: `成功${isReplacing ? '替换' : '放置'}${decoration.name}！`,
      slotIndex: targetSlot
    };
  }

  function removeDecoration(islandState, slotIndex) {
    ensureIslandProgress(islandState);
    const decorations = Array.isArray(islandState.decorations) ? islandState.decorations : [];
    if (!Number.isInteger(slotIndex) || !decorations[slotIndex]) {
      return { success: false, message: '该装饰位没有可移除的装饰' };
    }
    const removed = decorations[slotIndex];
    islandState.decorations[slotIndex] = null;
    islandState.stats.decorationCount = islandState.decorations.filter(Boolean).length;
    return {
      success: true,
      message: `已移除${DECORATION_TYPES[removed.type]?.name || '装饰'}`,
      removed
    };
  }

  function moveDecoration(islandState, slotIndex, position) {
    ensureIslandProgress(islandState);
    const decorations = Array.isArray(islandState.decorations) ? islandState.decorations : [];
    if (!Number.isInteger(slotIndex) || !decorations[slotIndex]) {
      return { success: false, message: '没有可移动的装饰' };
    }
    decorations[slotIndex].position = normalizeDecorationPosition(position, slotIndex);
    return { success: true, message: '已更新装饰位置' };
  }

  function flipDecoration(islandState, slotIndex, nextState = null) {
    ensureIslandProgress(islandState);
    const decorations = Array.isArray(islandState.decorations) ? islandState.decorations : [];
    if (!Number.isInteger(slotIndex) || !decorations[slotIndex]) {
      return { success: false, message: '没有可翻转的装饰' };
    }
    const current = normalizeDecorationFlip(decorations[slotIndex].flipped ?? decorations[slotIndex].rotation);
    const targetState = nextState === null ? (current ? 0 : 1) : normalizeDecorationFlip(nextState);
    decorations[slotIndex].flipped = targetState;
    return {
      success: true,
      message: targetState ? '已切换为左右翻转' : '已恢复默认方向',
      flipped: decorations[slotIndex].flipped
    };
  }

  function claimDailyTask(islandState, taskId) {
    ensureIslandProgress(islandState);
    const task = (islandState.dailyProgress?.tasks || []).find((item) => item.id === taskId);
    if (!task) return { success: false, message: '找不到任务' };
    if (task.claimed) return { success: false, message: '该任务奖励已领取' };
    if (Number(task.progress || 0) < Number(task.target || 0)) return { success: false, message: '任务尚未完成' };
    task.claimed = true;
    islandState.coins += Number(task.rewards?.coins || 0);
    islandState.water += Number(task.rewards?.water || 0);
    islandState.sunlight += Number(task.rewards?.sunlight || 0);
    addExp(islandState, Number(task.rewards?.xp || 0));
    return { success: true, message: `已领取任务奖励：${task.title}` };
  }

  function claimOrder(islandState, orderId) {
    ensureIslandProgress(islandState);
    const order = (islandState.orderBoard?.orders || []).find((item) => item.id === orderId);
    if (!order) return { success: false, message: '找不到订单' };
    if (order.claimed) return { success: false, message: '该订单已完成' };
    const missingEntry = Object.entries(order.needs || {}).find(([cropType, amount]) => Number(islandState.inventory.harvested[cropType] || 0) < Number(amount));
    if (missingEntry) {
      return { success: false, message: `${CROP_TYPES[missingEntry[0]].name} 数量不足` };
    }
    Object.entries(order.needs || {}).forEach(([cropType, amount]) => {
      islandState.inventory.harvested[cropType] -= Number(amount || 0);
    });
    order.claimed = true;
    const petEffect = getActivePetEffect(islandState);
    islandState.coins += Number(order.rewards?.coins || 0);
    islandState.water += Number(order.rewards?.water || 0);
    islandState.sunlight += Number(order.rewards?.sunlight || 0);
    addExp(islandState, Number(order.rewards?.xp || 0) + Number(petEffect.orderXpBonus || 0));
    return { success: true, message: `订单完成：${order.title}` };
  }

  function giftFriendCrop(friendId, islandState, cropType = 'tomato') {
    ensureIslandProgress(islandState);
    if (islandState.dailyHelpCount <= 0) {
      return { success: false, message: '今日互动次数已用完' };
    }
    if (Number(islandState.inventory.harvested[cropType] || 0) <= 0) {
      return { success: false, message: `至少需要 1 个${CROP_TYPES[cropType].name}` };
    }
    islandState.dailyHelpCount -= 1;
    islandState.inventory.harvested[cropType] -= 1;
    islandState.social.friendship[friendId] = Number(islandState.social.friendship[friendId] || 0) + 1;
    registerDailyAction(islandState, 'social', 1);
    addExp(islandState, 10);
    islandState.coins += 24;
    return { success: true, message: `已送出 1 个${CROP_TYPES[cropType].name}，与好友的好感度提升了` };
  }

  // 增加经验
  function addExp(islandState, amount) {
    ensureIslandProgress(islandState);
    if (islandState.level >= MAX_ISLAND_LEVEL) return;
    islandState.exp = Math.min(islandState.maxExp, islandState.exp + amount);
    islandState.upgradeReady = canUpgradeIsland(islandState);
  }

  function canUpgradeIsland(islandState) {
    ensureIslandProgress(islandState);
    if (islandState.level >= MAX_ISLAND_LEVEL) return false;
    const rule = getLevelRule(islandState.level);
    if (!rule) return false;
    return islandState.exp >= rule.requiredXp && areUpgradeConditionsMet(islandState, rule);
  }

  function upgradeIsland(islandState) {
    ensureIslandProgress(islandState);
    if (!canUpgradeIsland(islandState)) {
      return { success: false, message: '升级条件尚未满足' };
    }

    const currentLevel = islandState.level;
    const rule = getLevelRule(currentLevel);
    const fromLevel = currentLevel;
    const toLevel = Math.min(MAX_ISLAND_LEVEL, currentLevel + 1);

    islandState.level = toLevel;
    islandState.exp = 0;
    islandState.coins += Number(rule.rewards?.coins || 0);
    islandState.water += Number(rule.rewards?.water || 0);
    islandState.sunlight += Number(rule.rewards?.sunlight || 0);
    applySeedRewards(islandState, rule.rewards?.seeds);
    islandState.dailyHelpCount += 1;
    islandState.lastUpgrade = {
      fromLevel,
      toLevel,
      rewards: getUpgradeRewards(rule),
      timestamp: Date.now()
    };

    ensureIslandProgress(islandState);

    return {
      success: true,
      message: `升级成功！Pomoland 已升到 Lv.${toLevel}`,
      fromLevel,
      toLevel,
      rewards: getUpgradeRewards(rule),
      rule
    };
  }

  // 更新岛屿状态
  function updateIslandState(islandState) {
    ensureIslandProgress(islandState);
    const now = Date.now();
    let hasChanges = false;

    // 检查作物状态
    islandState.plots.forEach(plot => {
      if (!plot.crop) return;

      const cropType = CROP_TYPES[plot.crop];
      const hoursSincePlanted = (now - plot.plantedAt) / (60 * 60 * 1000);

      // 如果超过2小时没有浇水，标记为需要浇水
      if (plot.wateredAt && (now - plot.wateredAt) > 2 * 60 * 60 * 1000) {
        if (!plot.needsWater) {
          plot.needsWater = true;
          hasChanges = true;
        }
      }

      // 根据生长时间更新生长阶段
      const growthProgress = getGrowthProgress(plot, islandState);
      const newStage = Math.floor((growthProgress / 100) * (cropType.stages.length - 1));
      if (newStage !== plot.growthStage) {
        plot.growthStage = newStage;
        hasChanges = true;
      }
    });

    // 检查宠物状态
    islandState.pets.forEach(pet => {
      if (!pet.unlocked) return;

      const petType = PET_TYPES[pet.type];
      // 以增量方式衰减快乐度，避免每次刷新都“从 100 重新计算”造成观感问题
      // 并且保证购买新宠物不会影响其他宠物的快乐度/饥饿进度。
      const lastMoodTick = typeof pet.lastMoodTick === 'number' ? pet.lastMoodTick : pet.lastFedAt;
      const elapsedHours = Math.max(0, (now - lastMoodTick) / (60 * 60 * 1000));
      if (elapsedHours > 0) {
        const decay = elapsedHours * petType.happinessDecay;
        const nextHappiness = Math.max(0, Math.round((pet.happiness || 100) - decay));
        if (nextHappiness !== pet.happiness) {
          pet.happiness = nextHappiness;
          hasChanges = true;
        }
        pet.lastMoodTick = now;
      }
    });

    // 每日重置帮助次数
    const lastVisit = new Date(islandState.lastVisitTime);
    const today = new Date(now);
    if (lastVisit.getDate() !== today.getDate() ||
        lastVisit.getMonth() !== today.getMonth() ||
        lastVisit.getFullYear() !== today.getFullYear()) {
      islandState.dailyHelpCount = 5 + (islandState.level - 1) * 2;
      islandState.lastVisitTime = now;
      ensureDailySystems(islandState);
      hasChanges = true;
    }

    const wasReady = islandState.upgradeReady;
    ensureIslandProgress(islandState);
    return hasChanges || wasReady !== islandState.upgradeReady;
  }

  // 检查收获成就
  function checkHarvestAchievements(islandState) {
    const totalHarvests = Object.values(islandState.inventory.harvested).reduce((sum, count) => sum + count, 0);

    if (totalHarvests >= 1 && !islandState.achievements.firstHarvest) {
      islandState.achievements.firstHarvest = true;
      islandState.coins += 100;
    }

    if (totalHarvests >= 50 && !islandState.achievements.masterGardener) {
      islandState.achievements.masterGardener = true;
      islandState.coins += 500;
    }
  }

  // 帮助好友浇水
  function helpFriendWater(friendId, plotId, islandState) {
    ensureIslandProgress(islandState);
    if (islandState.dailyHelpCount <= 0) {
      return { success: false, message: '今日帮助次数已用完' };
    }

    const petEffect = getActivePetEffect(islandState);
    islandState.dailyHelpCount--;
    islandState.coins += 20 + Number(petEffect.friendCoinsBonus || 0);
    islandState.stats.friendHelpCount += 1;
    registerDailyAction(islandState, 'social', 1);
    addExp(islandState, 12);

    return {
      success: true,
      message: `帮助好友浇水成功！获得 ${20 + Number(petEffect.friendCoinsBonus || 0)} 金币`,
      reward: { coins: 20 + Number(petEffect.friendCoinsBonus || 0) }
    };
  }

  // 偷取好友果实
  function stealFriendCrop(friendId, plotId, islandState) {
    ensureIslandProgress(islandState);
    if (islandState.dailyHelpCount <= 0) {
      return { success: false, message: '今日互动次数已用完' };
    }

    islandState.dailyHelpCount--;

    // 随机获得1-3个果实
    const stolenAmount = Math.floor(Math.random() * 3) + 1;
    const stolenTypes = Object.keys(CROP_TYPES);
    const stolenType = stolenTypes[Math.floor(Math.random() * stolenTypes.length)];

    if (!islandState.inventory.harvested[stolenType]) {
      islandState.inventory.harvested[stolenType] = 0;
    }
    islandState.inventory.harvested[stolenType] += stolenAmount;
    registerDailyAction(islandState, 'social', 1);
    addExp(islandState, 6);

    return {
      success: true,
      message: `成功偷取了${stolenAmount}个${CROP_TYPES[stolenType].name}！`,
      stolen: { type: stolenType, amount: stolenAmount }
    };
  }

  // 获取岛屿信息
  function getIslandInfo(islandState) {
    return {
      level: islandState.level,
      exp: islandState.exp,
      maxExp: islandState.maxExp,
      upgradeReady: islandState.upgradeReady,
      coins: islandState.coins,
      water: islandState.water,
      sunlight: islandState.sunlight,
      dailyHelpCount: islandState.dailyHelpCount,
      islandName: islandState.islandName,
      theme: islandState.theme,
      plotCount: islandState.plots.length,
      petCount: islandState.pets.filter(p => p.unlocked).length,
      decorationCount: islandState.decorations.length,
      dailyTasks: islandState.dailyProgress?.tasks || [],
      orders: islandState.orderBoard?.orders || [],
      petEffect: getActivePetEffect(islandState)
    };
  }

  // 获取作物状态
  function getCropsStatus(islandState) {
    return islandState.plots.map(plot => ({
      id: plot.id,
      crop: plot.crop,
      cropType: plot.crop ? CROP_TYPES[plot.crop] : null,
      growthStage: plot.growthStage,
      growthProgress: plot.crop ? getGrowthProgress(plot, islandState) : 0,
      needsWater: plot.needsWater,
      canHarvest: plot.crop && getGrowthProgress(plot, islandState) >= 100
    }));
  }

  // 获取宠物状态
  function getPetsStatus(islandState) {
    return islandState.pets.map(pet => ({
      id: pet.id,
      type: pet.type,
      petType: PET_TYPES[pet.type],
      name: pet.name,
      happiness: pet.happiness,
      unlocked: pet.unlocked,
      needsFeed: pet.unlocked && (Date.now() - pet.lastFedAt) > PET_TYPES[pet.type].feedInterval,
      islandBonus: PET_TYPES[pet.type].islandBonus || null
    }));
  }

  return {
    createIslandState,
    plantCrop,
    waterCrop,
    sunlightCrop,
    harvestCrop,
    getGrowthProgress,
    calculateYield,
    feedPet,
    unlockPet,
    buyDecoration,
    moveDecoration,
    flipDecoration,
    claimDailyTask,
    claimOrder,
    giftFriendCrop,
    updateIslandState,
    helpFriendWater,
    stealFriendCrop,
    removeDecoration,
    canUpgradeIsland,
    upgradeIsland,
    ensureIslandProgress,
    getLevelRule,
    getUpgradeRewards,
    getUnlockedPlotCount,
    getUnlockedDecorationSlots,
    isSeedUnlocked,
    getCropUnlockLevel,
    getIslandInfo,
    getCropsStatus,
    getPetsStatus,
    getActivePetEffect,
    normalizeDecorationFlip,
    CROP_TYPES,
    PET_TYPES,
    DECORATION_TYPES
  };
})();

// 主模块导出
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PomolandCore;
}

if (typeof window !== 'undefined') {
  window.PomolandCore = PomolandCore;
  window.IslandGardenModule = IslandGardenModule;
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

    // 岛屿花园状态
    let islandState = IslandGardenModule.createIslandState();
    let currentTool = null;
    let selectedPlot = null;
    let selectedDecorationSlot = null;
    let currentFriendId = null;
    let currentGuideStep = 0;
    let draggingDecoration = null;
    const DECORATION_IMAGE_ASSETS = {
      fence: { path: './栅栏.png', varName: '--fence-image' },
      fountain: { path: './喷泉.png', varName: '--fountain-image' },
      lamp: { path: './路灯.png', varName: '--lamp-image' },
      flower: { path: './花草石礅.png', varName: '--flower-image' }
    };
    const decorationVisualState = Object.fromEntries(
      Object.entries(DECORATION_IMAGE_ASSETS).map(([type, asset]) => [type, {
        src: asset.path,
        prepared: false,
        varName: asset.varName
      }])
    );

    const elements = {
      home: document.querySelector('.home-shell'),
      workspace: document.querySelector('.workspace-shell'),
      goalInput: document.querySelector('#goalInput'),
      generatePlanButton: document.querySelector('#generatePlan'),
      agentProgress: document.querySelector('#agentProgress'),
      agentEncouragement: document.querySelector('#agentEncouragement'),
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
      profileModal: document.querySelector('#profileModal'),
      profileBody: document.querySelector('#profileBody'),
      closeProfile: document.querySelector('#closeProfile'),
      openProfileTopbar: document.querySelector('#openProfileTopbar'),
      openProfileSidebar: document.querySelector('#openProfileSidebar'),
      toggleCoachBtn: document.querySelector('#toggleCoachBtn'),
      saveNicknameBtn: document.querySelector('#saveNicknameBtn'),
      logoutBtn: document.querySelector('#logoutBtn'),
      logoutSidebar: document.querySelector('#logoutSidebar'),
      clearLocalBtn: document.querySelector('#clearLocalBtn'),
      authShell: document.querySelector('#authShell'),
      homeShell: document.querySelector('#homeShell'),
      authTitle: document.querySelector('#authTitle'),
      uidInput: document.querySelector('#uidInput'),
      passwordInput: document.querySelector('#passwordInput'),
      authError: document.querySelector('#authError'),
      authSubmitBtn: document.querySelector('#authSubmitBtn'),
      toggleAuthMode: document.querySelector('#toggleAuthMode'),
      // Social module elements
      addFriendBtn: document.querySelector('#addFriendBtn'),
      createChallengeBtn: document.querySelector('#createChallengeBtn'),
      addFriendModal: document.querySelector('#addFriendModal'),
      closeAddFriend: document.querySelector('#closeAddFriend'),
      friendSearchInput: document.querySelector('#friendSearchInput'),
      searchFriendBtn: document.querySelector('#searchFriendBtn'),
      searchResults: document.querySelector('#searchResults'),
      requestsList: document.querySelector('#requestsList'),
      createChallengeModal: document.querySelector('#createChallengeModal'),
      closeCreateChallenge: document.querySelector('#closeCreateChallenge'),
      challengeNameInput: document.querySelector('#challengeNameInput'),
      challengeTypeSelect: document.querySelector('#challengeTypeSelect'),
      challengeDurationSelect: document.querySelector('#challengeDurationSelect'),
      challengeInviteList: document.querySelector('#challengeInviteList'),
      createChallengeSubmit: document.querySelector('#createChallengeSubmit'),
      achievementModal: document.querySelector('#achievementModal'),
      closeAchievement: document.querySelector('#closeAchievement'),
      achievementDetail: document.querySelector('#achievementDetail'),
      friendsListPanel: document.querySelector('#friendsListPanel'),
      leaderboardPanel: document.querySelector('#leaderboardPanel'),
      challengesPanel: document.querySelector('#challengesPanel'),
      achievementsPanel: document.querySelector('#achievementsPanel'),
      leaderboardContent: document.querySelector('#leaderboardContent'),
      challengesList: document.querySelector('#challengesList'),
      achievementsGrid: document.querySelector('#achievementsGrid'),
      achievementsLikes: document.querySelector('#achievementsLikes'),
      // Island garden elements
      islandLevel: document.querySelector('#islandLevel'),
      expFill: document.querySelector('#expFill'),
      islandUpgradePanel: document.querySelector('#islandUpgradePanel'),
      upgradeTitle: document.querySelector('#upgradeTitle'),
      upgradeHint: document.querySelector('#upgradeHint'),
      islandXpText: document.querySelector('#islandXpText'),
      upgradeRequirementList: document.querySelector('#upgradeRequirementList'),
      upgradeRewardPreview: document.querySelector('#upgradeRewardPreview'),
      upgradeIslandBtn: document.querySelector('#upgradeIslandBtn'),
      coinsCount: document.querySelector('#coinsCount'),
      waterCount: document.querySelector('#waterCount'),
      sunlightCount: document.querySelector('#sunlightCount'),
      helpCount: document.querySelector('#helpCount'),
      farmPlotsGrid: document.querySelector('#farmPlotsGrid'),
      petArea: document.querySelector('#petArea'),
      mainPet: document.querySelector('#mainPet'),
      petBubble: document.querySelector('#petBubble'),
      petHappinessFill: document.querySelector('#petHappinessFill'),
      inventoryGrid: document.querySelector('#inventoryGrid'),
      seedTomatoCount: document.querySelector('#seedTomatoCount'),
      seedStrawberryCount: document.querySelector('#seedStrawberryCount'),
      harvestTomatoCount: document.querySelector('#harvestTomatoCount'),
      plantingModal: document.querySelector('#plantingModal'),
      closePlanting: document.querySelector('#closePlanting'),
      seedsGrid: document.querySelector('#seedsGrid'),
      seedTomatoAmount: document.querySelector('#seedTomatoAmount'),
      seedStrawberryAmount: document.querySelector('#seedStrawberryAmount'),
      seedCarrotAmount: document.querySelector('#seedCarrotAmount'),
      seedAppleAmount: document.querySelector('#seedAppleAmount'),
      seedWatermelonAmount: document.querySelector('#seedWatermelonAmount'),
      shopModal: document.querySelector('#shopModal'),
      closeShop: document.querySelector('#closeShop'),
      shopContent: document.querySelector('#shopContent'),
      shopDecorations: document.querySelector('#shopDecorations'),
      shopSeeds: document.querySelector('#shopSeeds'),
      shopPets: document.querySelector('#shopPets'),
      inventoryModal: document.querySelector('#inventoryModal'),
      closeInventory: document.querySelector('#closeInventory'),
      decorationManageModal: document.querySelector('#decorationManageModal'),
      closeDecorationManage: document.querySelector('#closeDecorationManage'),
      decorationManageCurrent: document.querySelector('#decorationManageCurrent'),
      flipDecorationBtn: document.querySelector('#flipDecorationBtn'),
      resetDecorationFlipBtn: document.querySelector('#resetDecorationFlipBtn'),
      removeDecorationBtn: document.querySelector('#removeDecorationBtn'),
      replaceDecorationBtn: document.querySelector('#replaceDecorationBtn'),
      islandUpgradeModal: document.querySelector('#islandUpgradeModal'),
      closeIslandUpgrade: document.querySelector('#closeIslandUpgrade'),
      confirmIslandUpgrade: document.querySelector('#confirmIslandUpgrade'),
      islandUpgradeModalTitle: document.querySelector('#islandUpgradeModalTitle'),
      islandUpgradeModalLead: document.querySelector('#islandUpgradeModalLead'),
      islandUpgradeSummary: document.querySelector('#islandUpgradeSummary'),
      islandUpgradeRewards: document.querySelector('#islandUpgradeRewards'),
      petList: document.querySelector('#petList'),
      petFeedModal: document.querySelector('#petFeedModal'),
      closePetFeed: document.querySelector('#closePetFeed'),
      petFeedList: document.querySelector('#petFeedList'),
      friendInteractionModal: document.querySelector('#friendInteractionModal'),
      closeFriendInteraction: document.querySelector('#closeFriendInteraction'),
      friendIslandPreview: document.querySelector('#friendIslandPreview'),
      petBonusLabel: document.querySelector('#petBonusLabel'),
      dailyTaskList: document.querySelector('#dailyTaskList'),
      orderBoardList: document.querySelector('#orderBoardList'),
      dailyTaskProgress: document.querySelector('#dailyTaskProgress'),
      orderBoardStatus: document.querySelector('#orderBoardStatus'),
      decorationFilterRow: document.querySelector('#decorationFilterRow'),
      islandGuideModal: document.querySelector('#islandGuideModal'),
      closeIslandGuide: document.querySelector('#closeIslandGuide'),
      nextIslandGuide: document.querySelector('#nextIslandGuide'),
      skipIslandGuide: document.querySelector('#skipIslandGuide'),
      islandGuideCard: document.querySelector('#islandGuideCard'),
      islandGuideLead: document.querySelector('#islandGuideLead')
    };

    // Prefer direct event binding for critical controls (more robust than event delegation,
    // especially when the click target is a Text node or nested element).
    function bindDirectClick(node, handler) {
      if (!node) return;
      node.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        handler(e);
      });
    }

    bindDirectClick(elements.openProfileTopbar, () => {
      showMessage(localizedText('正在打开个人中心...', '正在打開個人中心...', 'Opening profile...'));
      Promise.resolve(openProfile()).catch((e) => {
        console.warn('open profile failed', e);
        showMessage(localizedText('打开失败，请稍后重试', '打開失敗，請稍後重試', 'Failed to open. Please try again.'));
      });
    });
    bindDirectClick(elements.openProfileSidebar, () => {
      showMessage(localizedText('正在打开个人中心...', '正在打開個人中心...', 'Opening profile...'));
      Promise.resolve(openProfile()).catch((e) => {
        console.warn('open profile failed', e);
        showMessage(localizedText('打开失败，请稍后重试', '打開失敗，請稍後重試', 'Failed to open. Please try again.'));
      });
    });
    bindDirectClick(elements.closeProfile, () => closeProfile());
    bindDirectClick(elements.logoutBtn, () => logout());
    bindDirectClick(elements.logoutSidebar, () => logout());
    bindDirectClick(elements.clearLocalBtn, () => {
      clearLocalCacheKeepAuth();
      renderProfileModal();
    });
    bindDirectClick(elements.saveNicknameBtn, async () => {
      const input = document.querySelector('#nicknameEdit');
      const nickname = validateNickname(input ? input.value : '');
      if (!nickname) {
        showMessage('昵称需为 2-12 个字符');
        return;
      }
      try {
        const resp = await fetchAuthedApi('/api/me/profile', { nickname });
        meProfile = { ...(meProfile || {}), nickname: resp.nickname };
        showMessage('昵称已更新');
        await refreshFriendsFromServer();
        renderFriends();
        renderProfileModal();
        if (currentVisitUid) {
          await openVisitModal(currentVisitUid);
        }
      } catch (error) {
        showMessage(error.message || '更新失败');
      }
    });

    const STORAGE_KEYS = {
      appState: 'pomoland-demo-state-v2',
      timerState: 'pomoland-demo-timer-v2',
      rewardState: 'pomoland-demo-reward-v1',
      authState: 'pomoland-demo-auth-v1',
      islandState: 'pomoland-demo-island-v1'
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

    function isImageDecorationType(type) {
      return Object.prototype.hasOwnProperty.call(decorationVisualState, type);
    }

    const normalizeDecorationFlip = IslandGardenModule.normalizeDecorationFlip;

    function getDecorationDirectionLabel(flipped) {
      const safeFlip = normalizeDecorationFlip(flipped);
      return safeFlip
        ? localizedText('左右翻转', '左右翻轉', 'Flipped')
        : localizedText('默认方向', '預設方向', 'Default');
    }

    function getDecorationVisualMarkup(type, info, className = '', flipped = 0) {
      if (isImageDecorationType(type)) {
        const visual = decorationVisualState[type];
        const scaleX = normalizeDecorationFlip(flipped) ? -1 : 1;
        return `<span class="${className} decoration-image-frame decoration-image-frame-${type}" style="--decoration-scale-x:${scaleX};"><img class="decoration-image decoration-image-${type}" data-decoration-image="${type}" src="${escapeHtml(visual?.src || DECORATION_IMAGE_ASSETS[type].path)}" alt="${escapeHtml(info?.name || type)}"></span>`;
      }
      return `<span class="${className}" title="${escapeHtml(info?.name || type)}">${escapeHtml(info?.icon || '✨')}</span>`;
    }

    function applyDecorationVisualToDom(type) {
      const visual = decorationVisualState[type];
      const asset = DECORATION_IMAGE_ASSETS[type];
      if (!visual || !asset) return;
      document.querySelectorAll(`[data-decoration-image="${type}"]`).forEach((img) => {
        if (img.getAttribute('src') !== visual.src) {
          img.setAttribute('src', visual.src);
        }
      });
      const cssSrc = String(visual.src).replace(/"/g, '\\"');
      document.documentElement.style.setProperty(asset.varName, `url("${cssSrc}")`);
    }

    function ensureTransparentDecorationVisual(type) {
      const visual = decorationVisualState[type];
      const asset = DECORATION_IMAGE_ASSETS[type];
      if (!visual || !asset || visual.prepared) return;
      visual.prepared = true;
      const source = new Image();
      source.decoding = 'async';
      source.onload = () => {
        try {
          const width = source.naturalWidth || source.width;
          const height = source.naturalHeight || source.height;
          if (!width || !height) {
            applyDecorationVisualToDom(type);
            return;
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const context = canvas.getContext('2d', { willReadFrequently: true });
          if (!context) {
            applyDecorationVisualToDom(type);
            return;
          }
          context.drawImage(source, 0, 0, width, height);
          const imageData = context.getImageData(0, 0, width, height);
          const data = imageData.data;
          const sampleRadius = Math.max(2, Math.floor(Math.min(width, height) * 0.06));
          const samplePoints = [
            [0, 0],
            [width - sampleRadius, 0],
            [0, height - sampleRadius],
            [width - sampleRadius, height - sampleRadius]
          ];
          let sumR = 0;
          let sumG = 0;
          let sumB = 0;
          let sampleCount = 0;
          samplePoints.forEach(([startX, startY]) => {
            for (let y = Math.max(0, startY); y < Math.min(height, startY + sampleRadius); y++) {
              for (let x = Math.max(0, startX); x < Math.min(width, startX + sampleRadius); x++) {
                const index = (y * width + x) * 4;
                sumR += data[index];
                sumG += data[index + 1];
                sumB += data[index + 2];
                sampleCount++;
              }
            }
          });
          if (!sampleCount) {
            applyDecorationVisualToDom(type);
            return;
          }
          const bgR = sumR / sampleCount;
          const bgG = sumG / sampleCount;
          const bgB = sumB / sampleCount;
          let minX = width;
          let minY = height;
          let maxX = 0;
          let maxY = 0;
          let hasOpaquePixel = false;
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const index = (y * width + x) * 4;
              const r = data[index];
              const g = data[index + 1];
              const b = data[index + 2];
              const colorDiff = Math.sqrt(((r - bgR) ** 2) + ((g - bgG) ** 2) + ((b - bgB) ** 2));
              let alpha = data[index + 3];
              if (colorDiff < 36) {
                alpha = 0;
              } else if (colorDiff < 68) {
                alpha = Math.round(alpha * ((colorDiff - 36) / (68 - 36)));
              }
              data[index + 3] = alpha;
              if (alpha > 14) {
                hasOpaquePixel = true;
                minX = Math.min(minX, x);
                minY = Math.min(minY, y);
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
              }
            }
          }
          context.putImageData(imageData, 0, 0);
          if (!hasOpaquePixel) {
            applyDecorationVisualToDom(type);
            return;
          }
          const padding = 2;
          const cropX = Math.max(0, minX - padding);
          const cropY = Math.max(0, minY - padding);
          const cropWidth = Math.min(width - cropX, (maxX - minX + 1) + padding * 2);
          const cropHeight = Math.min(height - cropY, (maxY - minY + 1) + padding * 2);
          const trimmedCanvas = document.createElement('canvas');
          trimmedCanvas.width = cropWidth;
          trimmedCanvas.height = cropHeight;
          const trimmedContext = trimmedCanvas.getContext('2d');
          if (!trimmedContext) {
            applyDecorationVisualToDom(type);
            return;
          }
          trimmedContext.drawImage(canvas, cropX, cropY, cropWidth, cropHeight, 0, 0, cropWidth, cropHeight);
          visual.src = trimmedCanvas.toDataURL('image/png');
          applyDecorationVisualToDom(type);
          updateDecorationsUI();
          if (!elements.decorationManageModal?.hidden && Number.isInteger(selectedDecorationSlot)) {
            openDecorationManageModal(selectedDecorationSlot);
          }
        } catch (error) {
          console.warn(`Failed to build transparent ${type} visual`, error);
          applyDecorationVisualToDom(type);
        }
      };
      source.onerror = () => {
        applyDecorationVisualToDom(type);
      };
      source.src = asset.path;
    }

    function ensureTransparentDecorationVisuals() {
      Object.keys(decorationVisualState).forEach((type) => ensureTransparentDecorationVisual(type));
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
          ...(savedState.resources || {}),
          // 兼容旧字段：seeds -> sunlight
          sunlight: (savedState.resources && typeof savedState.resources.sunlight === 'number')
            ? savedState.resources.sunlight
            : (savedState.resources && typeof savedState.resources.seeds === 'number')
              ? savedState.resources.seeds
              : base.resources.sunlight
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
      scheduleCloudSave();
    }

    // ===== Cloud save (every 15s + key actions) =====
    let cloudSaveTimer = null;
    let cloudSaveInFlight = false;
    let lastCloudSaveAt = 0;
    let remoteStateUpdatedAt = 0;

    function buildCloudStatePayload() {
      return {
        version: 1,
        savedAt: Date.now(),
        appState: state,
        timerState,
        rewardState: rewardReady,
        islandState
      };
    }

    async function saveCloudStateNow() {
      const auth = getAuth();
      if (!auth) return;
      if (cloudSaveInFlight) return;
      cloudSaveInFlight = true;
      try {
        const apiBaseUrl = core.resolveApiBaseUrl();
        const response = await fetch(`${apiBaseUrl}/api/state`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${auth.token}`
          },
          body: JSON.stringify({ state: buildCloudStatePayload(), baseUpdatedAt: remoteStateUpdatedAt })
        });
        const raw = await response.text();
        const payload = raw ? JSON.parse(raw) : {};
        if (response.status === 409 && payload && payload.state) {
          // Conflict: server has newer state (e.g. friend gifted you). Pull latest and refresh local.
          if (payload.state.appState) writeStorage(STORAGE_KEYS.appState, payload.state.appState);
          if (payload.state.timerState) writeStorage(STORAGE_KEYS.timerState, payload.state.timerState);
          if (payload.state.rewardState) writeStorage(STORAGE_KEYS.rewardState, payload.state.rewardState);
          if (payload.state.islandState) writeStorage(STORAGE_KEYS.islandState, payload.state.islandState);
          remoteStateUpdatedAt = Number(payload.updatedAt || 0);
          restoreSession(false);
          restoreIslandState();
          renderAll();
          updateIslandUI();
        } else if (!response.ok) {
          throw new Error(payload.error || `API call failed with status ${response.status}`);
        } else {
          remoteStateUpdatedAt = Number(payload.updatedAt || remoteStateUpdatedAt || 0);
          lastCloudSaveAt = Date.now();
        }
      } catch (error) {
        console.warn('Cloud save failed', error);
      } finally {
        cloudSaveInFlight = false;
      }
    }

    function scheduleCloudSave(delayMs = 900) {
      // avoid saving too frequently
      const now = Date.now();
      if (now - lastCloudSaveAt < 800) delayMs = Math.max(delayMs, 1200);
      if (cloudSaveTimer) window.clearTimeout(cloudSaveTimer);
      cloudSaveTimer = window.setTimeout(() => {
        cloudSaveTimer = null;
        saveCloudStateNow();
      }, delayMs);
    }

    let authMode = 'login'; // 'login' | 'register'
    function setAuthError(message = '') {
      if (elements.authError) elements.authError.textContent = message || '';
    }

    function setAuthMode(mode) {
      authMode = mode === 'register' ? 'register' : 'login';
      if (elements.authTitle) {
        elements.authTitle.textContent = authMode === 'register'
          ? localizedText('注册', '註冊', 'Register')
          : localizedText('登录', '登入', 'Log in');
      }
      if (elements.authSubmitBtn) {
        elements.authSubmitBtn.textContent = authMode === 'register'
          ? localizedText('注册并进入', '註冊並進入', 'Register & enter')
          : localizedText('登录并进入', '登入並進入', 'Log in & enter');
      }
      if (elements.toggleAuthMode) {
        elements.toggleAuthMode.textContent = authMode === 'register'
          ? localizedText('已有账号？登录', '已有帳號？登入', 'Already have an account? Log in')
          : localizedText('没有账号？注册', '沒有帳號？註冊', 'No account? Register');
      }
      setAuthError('');
    }

    function getAuth() {
      const auth = readStorage(STORAGE_KEYS.authState);
      return auth && auth.token && auth.uid ? auth : null;
    }

    function setAuth(auth) {
      writeStorage(STORAGE_KEYS.authState, auth);
    }

    function clearAuth() {
      writeStorage(STORAGE_KEYS.authState, null);
    }

    // ===== Profile (个人中心) =====
    let meProfile = null; // { uid, nickname, createdAt, lastLoginAt }

    function formatDateTime(ts) {
      const n = Number(ts || 0);
      if (!n) return '-';
      const d = new Date(n);
      const pad = (x) => String(x).padStart(2, '0');
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    function validateNickname(nickname) {
      const clean = String(nickname || '').trim();
      if (clean.length < 2 || clean.length > 12) return '';
      return clean;
    }

    async function loadMeProfile() {
      if (!getAuth()) {
        meProfile = null;
        return null;
      }
      try {
        const profile = await fetchAuthedGet('/api/me');
        meProfile = profile;
        return profile;
      } catch (error) {
        console.warn('load profile failed', error);
        meProfile = null;
        return null;
      }
    }

    function buildHarvestSummary() {
      const harvested = islandState?.inventory?.harvested || {};
      const order = ['tomato', 'strawberry', 'carrot', 'apple', 'watermelon'];
      const parts = order
        .filter((k) => Number(harvested[k] || 0) > 0)
        .map((k) => `${fruitDisplayLabel(k)}×${harvested[k]}`);
      return parts.length ? parts.join('、') : localizedText('暂无', '暫無', 'None');
    }

    function renderProfileModal() {
      if (!elements.profileBody) return;
      const auth = getAuth();
      if (!auth) {
        elements.profileBody.innerHTML = `<div class="empty-state" style="padding:12px;"><strong>${localizedText('请先登录', '請先登入', 'Please log in first')}</strong></div>`;
        return;
      }
      const nickname = (meProfile && meProfile.nickname) ? meProfile.nickname : `番茄${auth.uid.slice(-4)}`;
      const createdAt = meProfile ? formatDateTime(meProfile.createdAt) : '-';
      const lastLoginAt = meProfile ? formatDateTime(meProfile.lastLoginAt) : '-';
      const friendsCount = Array.isArray(serverFriends) ? serverFriends.length : 0;
      const incomingCount = Array.isArray(serverIncomingRequests) ? serverIncomingRequests.length : 0;
      const outgoingCount = Array.isArray(serverOutgoingRequests) ? serverOutgoingRequests.length : 0;
      const resources = state?.resources || {};
      const islandLevel = islandState?.level || islandState?.islandLevel || 1;
      elements.profileBody.innerHTML = `
        <div style="display:grid;gap:14px;">
          <div style="background:var(--bg-warm);border:1px solid var(--line);border-radius:12px;padding:14px;">
            <strong style="display:block;margin-bottom:10px;">${localizedText('基础信息', '基礎資訊', 'Basic info')}</strong>
            <div style="display:grid;gap:10px;">
              <div><span style="color:var(--muted);font-size:13px;">UID</span><div style="font-weight:800;font-size:18px;margin-top:4px;">${escapeHtml(auth.uid)}</div></div>
              <div>
                <span style="color:var(--muted);font-size:13px;">${localizedText('昵称（可修改）', '暱稱（可修改）', 'Nickname (editable)')}</span>
                <input id="nicknameEdit" type="text" value="${escapeHtml(nickname)}" maxlength="12" style="width:100%;margin-top:6px;padding:10px 12px;border:1px solid var(--line);border-radius:10px;font-size:14px;outline:none;">
                <div style="color:var(--muted);font-size:12px;margin-top:6px;">${localizedText('规则：2-12 个字符', '規則：2-12 個字符', 'Rule: 2–12 characters')}</div>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <div><span style="color:var(--muted);font-size:13px;">${localizedText('注册时间', '註冊時間', 'Registered')}</span><div style="font-weight:700;margin-top:4px;">${escapeHtml(createdAt)}</div></div>
                <div><span style="color:var(--muted);font-size:13px;">${localizedText('最近登录', '最近登入', 'Last login')}</span><div style="font-weight:700;margin-top:4px;">${escapeHtml(lastLoginAt)}</div></div>
              </div>
            </div>
          </div>

          <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px;">
            <strong style="display:block;margin-bottom:10px;">${localizedText('游戏数据', '遊戲數據', 'Game stats')}</strong>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              <span>🏝️ Lv.${escapeHtml(islandLevel)}</span>
              <span>💰 ${escapeHtml(resources.coins ?? 0)}</span>
              <span>💧 ${escapeHtml(resources.water ?? 0)}</span>
              <span>☀️ ${escapeHtml(resources.sunlight ?? 0)}</span>
              <span>🤝 ${escapeHtml(resources.chances ?? 0)}</span>
            </div>
            <div style="margin-top:10px;color:var(--ink-700);font-size:13px;">${localizedText('背包果实：', '背包果實：', 'Harvest: ')}${escapeHtml(buildHarvestSummary())}</div>
          </div>

          <div style="background:#fff;border:1px solid var(--line);border-radius:12px;padding:14px;">
            <strong style="display:block;margin-bottom:10px;">${localizedText('社交数据', '社交數據', 'Social')}</strong>
            <div style="display:flex;gap:10px;flex-wrap:wrap;">
              <span>👥 ${localizedText('好友', '好友', 'Friends')} ${friendsCount}</span>
              <span>📩 ${localizedText('待处理', '待處理', 'Incoming')} ${incomingCount}</span>
              <span>📤 ${localizedText('已发送', '已發送', 'Outgoing')} ${outgoingCount}</span>
            </div>
          </div>

          <div style="background:#fff;border:1px dashed var(--line-strong);border-radius:12px;padding:14px;">
            <strong style="display:block;margin-bottom:8px;">${localizedText('隐私与安全', '私隱與安全', 'Privacy & security')}</strong>
            <div style="color:var(--muted);font-size:13px;line-height:1.6;">
              ${localizedText('这里不提供找回密码功能；如需切换账号请点击「退出登录」。', '這裡不提供找回密碼功能；如需切換帳號請點擊「退出登入」。', 'Password recovery is not supported. Use “Log out” to switch accounts.')}
            </div>
          </div>
        </div>
      `;
    }

    async function openProfile() {
      if (!elements.profileModal) return;
      // Open first (even if network requests fail), so users always get feedback.
      elements.profileModal.hidden = false;
      if (elements.profileBody) {
        elements.profileBody.innerHTML = `<div class="empty-state" style="padding:12px;"><strong>${escapeHtml(localizedText('加载中...', '載入中...', 'Loading...'))}</strong></div>`;
      }
      try {
        await refreshFriendsFromServer();
        await loadMeProfile();
      } catch (error) {
        console.warn('open profile load failed', error);
      } finally {
        renderProfileModal();
      }
    }

    function closeProfile() {
      if (elements.profileModal) elements.profileModal.hidden = true;
    }

    function clearLocalCacheKeepAuth() {
      writeStorage(STORAGE_KEYS.appState, null);
      writeStorage(STORAGE_KEYS.timerState, null);
      writeStorage(STORAGE_KEYS.rewardState, null);
      writeStorage(STORAGE_KEYS.islandState, null);
      state = core.createInitialState();
      islandState = IslandGardenModule.createIslandState();
      timerState = core.createTimerState(selectedDuration);
      rewardReady = core.buildRewardBundle(language, selectedDuration);
      restoreSession();
      restoreIslandState();
      renderAll();
      updateIslandUI();
      showMessage('已清空本地缓存（云端存档不受影响）');
    }

    function logout() {
      clearAuth();
      // clear local progress to avoid mixing accounts
      writeStorage(STORAGE_KEYS.appState, null);
      writeStorage(STORAGE_KEYS.timerState, null);
      writeStorage(STORAGE_KEYS.rewardState, null);
      writeStorage(STORAGE_KEYS.islandState, null);
      meProfile = null;
      serverFriends = [];
      serverIncomingRequests = [];
      serverOutgoingRequests = [];
      friendsCacheLoaded = false;
      remoteStateUpdatedAt = 0;
      showHome();
      closeProfile();
      showMessage('已退出登录');
    }

    async function postApi(endpoint, data) {
      const apiBaseUrl = core.resolveApiBaseUrl();
      const response = await fetch(`${apiBaseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data || {})
      });
      const rawText = await response.text();
      let payload = {};
      if (rawText) {
        try {
          payload = JSON.parse(rawText);
        } catch (error) {
          if (!response.ok) throw new Error(`API call failed with status ${response.status}`);
          throw new Error('API returned a non-JSON response.');
        }
      }
      if (!response.ok) {
        throw new Error(payload.error || `API call failed with status ${response.status}`);
      }
      return payload;
    }

    async function fetchAuthedApi(endpoint, data) {
      const auth = getAuth();
      if (!auth) throw new Error('Not logged in');
      const apiBaseUrl = core.resolveApiBaseUrl();
      const response = await fetch(`${apiBaseUrl}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`
        },
        body: JSON.stringify(data || {})
      });
      const rawText = await response.text();
      let payload = {};
      if (rawText) {
        try {
          payload = JSON.parse(rawText);
        } catch (error) {
          if (!response.ok) throw new Error(`API call failed with status ${response.status}`);
          throw new Error('API returned a non-JSON response.');
        }
      }
      if (!response.ok) {
        throw new Error(payload.error || `API call failed with status ${response.status}`);
      }
      return payload;
    }

    async function fetchAuthedGet(endpoint) {
      const auth = getAuth();
      if (!auth) throw new Error('Not logged in');
      const apiBaseUrl = core.resolveApiBaseUrl();
      const response = await fetch(`${apiBaseUrl}${endpoint}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      });
      const rawText = await response.text();
      let payload = {};
      if (rawText) {
        try {
          payload = JSON.parse(rawText);
        } catch (error) {
          if (!response.ok) throw new Error(`API call failed with status ${response.status}`);
          throw new Error('API returned a non-JSON response.');
        }
      }
      if (!response.ok) {
        throw new Error(payload.error || `API call failed with status ${response.status}`);
      }
      return payload;
    }

    async function restoreFromServerIfAny() {
      try {
        const response = await fetchAuthedGet('/api/state');
        if (!response || !response.state) return false;
        const remote = response.state;
        if (remote.appState) writeStorage(STORAGE_KEYS.appState, remote.appState);
        if (remote.timerState) writeStorage(STORAGE_KEYS.timerState, remote.timerState);
        if (remote.rewardState) writeStorage(STORAGE_KEYS.rewardState, remote.rewardState);
        if (remote.islandState) writeStorage(STORAGE_KEYS.islandState, remote.islandState);
        remoteStateUpdatedAt = Number(response.updatedAt || 0);
        return true;
      } catch (error) {
        console.warn('Failed to restore from server', error);
        return false;
      }
    }

    function restoreSession(bootstrap = false) {
      state = mergeState(readStorage(STORAGE_KEYS.appState));
      language = state.language || language;
      timerState = core.syncTimerState(readStorage(STORAGE_KEYS.timerState) || core.createTimerState(selectedDuration));
      selectedDuration = timerState.totalSeconds || selectedDuration;
      rewardReady = readStorage(STORAGE_KEYS.rewardState) || core.buildRewardBundle(language, selectedDuration);
      // 兼容旧字段：rewardReady.seeds -> rewardReady.sunlight
      if (rewardReady && typeof rewardReady.sunlight !== 'number' && typeof rewardReady.seeds === 'number') {
        rewardReady = { ...rewardReady, sunlight: rewardReady.seeds };
        delete rewardReady.seeds;
      }

      // Navigation rule (bootstrap only):
      // - Always show the marketing landing page on first load/refresh.
      // - "Launch Demo" -> show login (if not logged in) -> after login show workspace.
      // - Logout -> back to marketing landing page.
      //
      // IMPORTANT: restoreSession() is also used as an internal "state refresh" after
      // cloud sync / friend interactions. In those cases we must NOT jump back to home.
      if (bootstrap) {
        state.workspaceOpen = false;
        showHome();
      }
    }

    function showHome() {
      state.workspaceOpen = false;
      if (elements.homeShell) elements.homeShell.hidden = false;
      if (elements.authShell) elements.authShell.hidden = true;
      if (elements.workspace) elements.workspace.hidden = true;
    }

    function showAuth() {
      state.workspaceOpen = false;
      if (elements.homeShell) elements.homeShell.hidden = true;
      if (elements.authShell) elements.authShell.hidden = false;
      if (elements.workspace) elements.workspace.hidden = true;
      setAuthError('');
      // keep current authMode (login/register) so the UI matches
      setAuthMode(authMode);
    }

    function showWorkspace() {
      state.workspaceOpen = true;
      if (elements.homeShell) elements.homeShell.hidden = true;
      if (elements.authShell) elements.authShell.hidden = true;
      if (elements.workspace) elements.workspace.hidden = false;
      switchView('today');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      persistSession();
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
            `专注成功收官，番茄已经笑开花。奖励掉落：${reward.water} 水滴、${reward.coins} 金币，还有 ${reward.sunlight} 点阳光在等你去照亮小岛。`,
            `專注成功收官，番茄已經笑開花。獎勵掉落：${reward.water} 水滴、${reward.coins} 金幣，還有 ${reward.sunlight} 點陽光等你去照亮小島。`,
            `You finished strong and your tomato is glowing. Rewards are ready: ${reward.water} water, ${reward.coins} coins, and ${reward.sunlight} sunlight for your island.`
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
            `+${rewardReady.sunlight}${localizedText(' 阳光', ' 陽光', ' sunlight')}`
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
          description: localizedText('从一个长期目标开始，生成今天的 to-do list，再进入专注模式。完成一次 Focus Mode 后领取奖励，即自动完成今日打卡。', '從一個長期目標開始，生成今天的 to-do list，再進入專注模式。完成一次 Focus Mode 後領取獎勵，即自動完成今日打卡。', 'Start with one long-term goal, generate today’s to-do list, and move into focus mode. Completing one Focus Mode and claiming the bonus checks you in automatically for today.'),
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
          description: localizedText('奖励已经准备好。点击下方任意「领完去…」按钮即可领取奖励，同时今天的打卡会自动完成。', '獎勵已經準備好。點擊下方任意「領完去…」按鈕即可領取獎勵，同時今天的打卡會自動完成。', 'Your reward is ready. Clicking any of the "Claim and…" buttons below will claim the bonus and automatically check you in for today.'),
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
      updateCoachToggleButton();
      // Update auth UI texts (login/register) according to the current language
      setAuthMode(authMode);
      persistSession();
    }

    function updateCoachToggleButton() {
      if (!elements.toggleCoachBtn) return;
      const key = state.journeyCoachEnabled ? 'coachHide' : 'coachShow';
      elements.toggleCoachBtn.dataset.i18n = key;
      elements.toggleCoachBtn.textContent = core.t(language, key);
    }

    function openWorkspace() {
      // "Launch Demo" entry
      if (getAuth()) {
        showWorkspace();
      } else {
        showAuth();
      }
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
      updateCoachToggleButton();
      // Update island garden UI
      updateIslandUI();
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
      if (!state.journeyCoachEnabled) {
        elements.journeyGuide.hidden = true;
        return;
      }
      elements.journeyGuide.hidden = false;
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
          <button class="small-button ghost" type="button" id="closeCoachInline">
            ${localizedText('隐藏 Coach', '隱藏 Coach', 'Hide Coach')}
          </button>
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
      if (!state.journeyCoachEnabled) {
        elements.coachPanel.hidden = true;
        return;
      }
      elements.coachPanel.hidden = false;
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

    function renderAgentSteps(steps, currentIndex, isComplete, headerText) {
      if (!elements.agentProgress) return;
      elements.agentProgress.dataset.running = isComplete ? 'false' : 'true';
      const defaultHeader = isComplete
        ? core.t(language, 'agentComplete')
        : (steps[currentIndex] ? steps[currentIndex].text : '');
      const header = headerText || defaultHeader;
      elements.agentProgress.innerHTML = `
        <div class="agent-progress-header">
          <strong>${core.t(language, 'agentTitle')}</strong>
          <span>${header}</span>
        </div>
        <div class="agent-step-list">
          ${steps.map((step, index) => {
            const status = isComplete || index < currentIndex ? 'is-done' : index === currentIndex ? 'is-active' : '';
            return `<div class="agent-step ${status}"><span class="step-dot"></span><p>${escapeHtml(step.text)}</p></div>`;
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
      // If the garden module is active (has tools panel), skip old visual state
      if (document.querySelector('.island-tools')) return;
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
      if (!getAuth()) {
        elements.friendGrid.innerHTML = `
          <div class="empty-state">
            <strong>${localizedText('请先登录', '請先登入', 'Please log in first')}</strong>
            <span>${localizedText('登录后可通过 UID 添加真实好友并互动', '登入後可透過 UID 添加真實好友並互動', 'After login, add real friends via UID and interact.')}</span>
          </div>
        `;
        return;
      }

      if (!friendsCacheLoaded) {
        elements.friendGrid.innerHTML = `
          <div class="empty-state">
            <strong>${localizedText('正在加载好友列表...', '正在載入好友列表...', 'Loading friends...')}</strong>
            <span>${localizedText('如果你刚打开网站，这通常只需要 1 秒', '如果你剛打開網站，這通常只需要 1 秒', 'This usually takes about 1 second on first load.')}</span>
          </div>
        `;
        // lazy load once
        window.setTimeout(async () => {
          await refreshFriendsFromServer();
          renderFriends();
        }, 0);
        return;
      }

      const friendsData = Array.isArray(serverFriends) ? serverFriends : [];
      if (!friendsData.length) {
        elements.friendGrid.innerHTML = `
          <div class="empty-state">
            <strong>${localizedText('还没有好友', '還沒有好友', 'No friends yet')}</strong>
            <span>${localizedText('点击右上角「添加好友」，用 UID 搜索并发送申请', '點擊右上角「添加好友」，用 UID 搜索並發送申請', 'Click “Add friend” to search by UID and send a request.')}</span>
          </div>
        `;
        return;
      }

      elements.friendGrid.innerHTML = friendsData.map((friend) => {
        const uid = friend.uid;
        const nickname = friend.nickname ? String(friend.nickname) : '';
        const displayName = nickname ? `${escapeHtml(nickname)}（${escapeHtml(uid)}）` : `UID ${escapeHtml(uid)}`;
        const level = friend.island?.level ? `Lv.${friend.island.level}` : 'Lv.?';
        return `
          <article class="friend-card">
            <div class="friend-card-header">
              <div class="friend-avatar">${escapeHtml(String(uid).slice(-2))}</div>
              <div class="friend-info">
                <h4>${displayName}</h4>
                <span>${escapeHtml(level)}</span>
              </div>
            </div>
            <div class="friend-stats">
              <div class="friend-stat">
                <small>${escapeHtml(localizedText('岛屿等级', '島嶼等級', 'Island level'))}</small>
                <strong>${escapeHtml(level)}</strong>
              </div>
              <div class="friend-stat">
                <small>${escapeHtml(localizedText('状态', '狀態', 'Status'))}</small>
                <strong style="color: var(--leaf-500)">${escapeHtml(localizedText('可参观', '可參觀', 'Available'))}</strong>
              </div>
            </div>
            <div class="friend-card-actions">
              <button type="button" class="small-button secondary" data-friend-visit="${escapeHtml(uid)}">${escapeHtml(localizedText('互动 / 参观', '互動 / 參觀', 'Interact / visit'))}</button>
            </div>
          </article>
        `;
      }).join('');
    }

    function renderSocialTabs() {
      document.querySelectorAll('.friends-tab-button').forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.friendsTab === (state.activeTab || 'friends-list'));
      });

      ['friendsListPanel', 'leaderboardPanel', 'challengesPanel', 'achievementsPanel'].forEach(panelId => {
        const panel = document.getElementById(panelId);
        if (panel) {
          const isActive = (state.activeTab || 'friends-list') === panelId.replace('Panel', '').toLowerCase().replace('friendslist', 'friends-list');
          panel.hidden = !isActive;
        }
      });
    }

    function renderLeaderboard() {
      if (!elements.leaderboardContent) return;
      const type = state.activeLeaderboard || 'focus';
      const leaderboard = SocialModule.getLeaderboard(type, state);

      const unitLabel = type === 'focus' ? '分钟' : type === 'streak' ? '天' : '级';
      const valueKey = type === 'focus' ? 'focusMinutes' : type === 'streak' ? 'streak' : 'islandLevel';

      elements.leaderboardContent.innerHTML = leaderboard.map((user, index) => `
        <div class="leaderboard-item ${user.isCurrentUser ? 'current-user' : ''}">
          <div class="leaderboard-rank">${user.rank}</div>
          <div class="leaderboard-user">
            <div class="leaderboard-user-avatar" style="width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--${user.rank <= 3 ? 'sun' : 'teal'}-500),var(--${user.rank <= 3 ? 'tomato' : 'leaf'}-500));display:flex;align-items:center;justify-content:center;font-weight:700;color:#fff;font-size:14px;">
              ${user.isCurrentUser ? '我' : (user.avatar || user.name[0])}
            </div>
            <div class="leaderboard-user-info">
              <strong>${escapeHtml(user.name)}</strong>
              <span>${user.trend === 'up' ? '↑ 上升' : user.trend === 'down' ? '↓ 下降' : '→ 持平'}</span>
            </div>
          </div>
          <div class="leaderboard-value">${user[valueKey]}${unitLabel}</div>
        </div>
      `).join('');
    }

    function renderChallenges() {
      if (!elements.challengesList) return;
      const challenges = SocialModule.getChallenges(state);

      if (challenges.length === 0) {
        elements.challengesList.innerHTML = `
          <div class="empty-state">
            <strong>${core.t(language, 'noChallenges')}</strong>
            <span>${core.t(language, 'createChallengeBtn')}</span>
          </div>
        `;
        return;
      }

      elements.challengesList.innerHTML = challenges.map(challenge => {
        const typeLabel = challenge.type === 'checkin_streak' ? core.t(language, 'challengeTypeStreak') :
                          challenge.type === 'focus_time' ? core.t(language, 'challengeTypeFocus') :
                          core.t(language, 'challengeTypeIsland');
        const durationLabel = `${challenge.duration}天`;

        const participants = challenge.participants.map(id => {
          const friend = core.FRIENDS.find(f => f.id === id);
          return friend ? friend.name : id;
        }).join(', ');

        const myProgress = challenge.progress['current-user'] || { value: 0, unit: 'minutes' };
        const maxProgress = Math.max(...Object.values(challenge.progress).map(p => p.value), myProgress.value + 50);

        return `
          <article class="challenge-card ${challenge.status === 'active' ? 'active' : ''}">
            <div class="challenge-card-header">
              <div class="challenge-title">
                <h4>${escapeHtml(challenge.name)}</h4>
                <span>${typeLabel} · ${durationLabel}</span>
              </div>
              <span class="challenge-badge ${challenge.status === 'completed' ? 'completed' : ''}">
                ${challenge.status === 'active' ? '进行中' : '已完成'}
              </span>
            </div>
            <div class="challenge-card-content">
              <div class="challenge-stat">
                <small>${core.t(language, 'challengeParticipants')}</small>
                <strong>${challenge.participants.length}</strong>
              </div>
              <div class="challenge-stat">
                <small>${core.t(language, 'challengeYourRank')}</small>
                <strong>#${Object.entries(challenge.progress).sort((a, b) => b[1].value - a[1].value).findIndex(([id]) => id === 'current-user') + 1}</strong>
              </div>
              <div class="challenge-stat">
                <small>我的进度</small>
                <strong>${myProgress.value} ${myProgress.unit === 'minutes' ? '分钟' : myProgress.unit === 'days' ? '天' : '分'}</strong>
              </div>
            </div>
            <div class="challenge-card-footer">
              <div class="challenge-progress">
                <div class="challenge-progress-bar">
                  <div class="challenge-progress-fill" style="width:${(myProgress.value / maxProgress) * 100}%"></div>
                </div>
                <span class="challenge-progress-text">进度: ${Math.round((myProgress.value / maxProgress) * 100)}%</span>
              </div>
              <button class="small-button secondary" type="button" data-challenge-id="${challenge.id}">${core.t(language, 'viewProgress')}</button>
            </div>
          </article>
        `;
      }).join('');
    }

    function renderAchievements() {
      if (!elements.achievementsGrid) return;
      const achievements = SocialModule.getAchievements(state);

      elements.achievementsGrid.innerHTML = achievements.map(ach => `
        <article class="achievement-item ${ach.unlocked ? '' : 'locked'}" data-achievement-id="${ach.id}">
          <div class="achievement-icon">${ach.icon}</div>
          <h5>${escapeHtml(ach.name)}</h5>
          <p>${escapeHtml(ach.description)}</p>
          ${ach.unlocked ? '' : `<small style="color:var(--ink-400)">进度: ${ach.progress}/${ach.target}</small>`}
        </article>
      `).join('');

      // Render likes received
      if (elements.achievementsLikes) {
        const likes = (state.likesReceived || []);
        if (likes.length === 0) {
          elements.achievementsLikes.innerHTML = `
            <h4>${core.t(language, 'achievementLikesReceived')}</h4>
            <div class="empty-state" style="padding:20px;">
              <span>还没有收到点赞</span>
            </div>
          `;
        } else {
          elements.achievementsLikes.innerHTML = `
            <h4>${core.t(language, 'achievementLikesReceived')}</h4>
            <div class="achievement-likes-list">
              ${likes.map(like => {
                const friend = core.FRIENDS.find(f => f.id === like.from) || { name: like.from, avatar: like.from[0] };
                const achievement = achievements.find(a => a.id === like.achievementId) || { name: '成就', icon: '🏆' };
                const timeAgo = Math.floor((Date.now() - new Date(like.time).getTime()) / 86400000);
                return `
                  <div class="achievement-like-item">
                    <div class="achievement-like-avatar">${friend.avatar || friend.name[0]}</div>
                    <div class="achievement-like-info">
                      <strong>${escapeHtml(friend.name)}</strong>
                      <span>点赞了 ${achievement.icon} ${escapeHtml(achievement.name)}</span>
                      <span style="font-size:10px;color:var(--ink-400);">${timeAgo}天前</span>
                    </div>
                    <button class="achievement-like-btn" data-like-id="${like.from}-${like.achievementId}">
                      <span class="icon">❤️</span>
                      ${core.t(language, 'likeAchievement')}
                    </button>
                  </div>
                `;
              }).join('')}
            </div>
          `;
        }
      }
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
      if (elements.agentEncouragement) {
        elements.agentEncouragement.hidden = true;
        elements.agentEncouragement.innerHTML = '';
      }

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
            // 5 步动画跑完，进入等待 API 返回的过渡状态：steps 全部置为 done，header 显示合成中
            renderAgentSteps(planningSteps, planningSteps.length, false, core.t(language, 'agentSynthesizing'));
            elements.agentProgress.dataset.running = 'true';
            // All planning steps rendered, now generate tasks
            core.generateTasks(goal, language)
              .then(response => { // 接收新的响应对象
                state.tasks = response.tasks;
                state.coachStats.shown += response.tasks.length ? 1 : 0;
                state.coachAcceptedTaskId = null;
                editingTaskId = null;
                // steps 标记为全部完成
                renderAgentSteps(planningSteps, planningSteps.length - 1, true);
                // 鼓励语写入独立区域，常驻显示
                if (elements.agentEncouragement && response.encouragement) {
                  elements.agentEncouragement.innerHTML = `
                    <span class="agent-encouragement-label">${escapeHtml(core.t(language, 'encouragementLabel'))}</span>
                    <span class="agent-encouragement-text">${escapeHtml(response.encouragement)}</span>
                  `;
                  elements.agentEncouragement.hidden = false;
                }
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
                if (elements.agentEncouragement) {
                  elements.agentEncouragement.hidden = true;
                  elements.agentEncouragement.innerHTML = '';
                }
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
        if (elements.agentEncouragement) {
          elements.agentEncouragement.hidden = true;
          elements.agentEncouragement.innerHTML = '';
        }
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
        `${core.t(language, 'sunlight')} +${rewardReady.sunlight}`,
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

      // 奖励先进入左下角资源；岛屿金币/水滴/机会与资源保持一致（即时反映）
      syncMainToIslandResources();

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
        updateIslandUI();
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
      persistIslandState();
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

    function fruitDisplayLabel(key) {
      const map = {
        tomato: `🍅 ${core.t(language, 'fruitTomato')}`,
        strawberry: `🍓 ${core.t(language, 'fruitStrawberry')}`,
        carrot: `🥕 ${core.t(language, 'fruitCarrot')}`,
        apple: `🍎 ${core.t(language, 'fruitApple')}`,
        watermelon: `🍉 ${core.t(language, 'fruitWatermelon')}`
      };
      return map[key] || key;
    }

    function getMyHarvestedOptions() {
      const harvested = islandState?.inventory?.harvested || {};
      const order = ['tomato', 'strawberry', 'carrot', 'apple', 'watermelon'];
      return order
        .filter((key) => Number(harvested[key] || 0) > 0)
        .map((key) => ({ key, label: `${fruitDisplayLabel(key)} ×${harvested[key]}` }));
    }

    let currentVisitUid = null;
    async function openVisitModal(friendUid) {
      if (!elements.visitModal) return;
      currentVisitUid = friendUid;
      elements.visitName.textContent = friendUid;
      elements.visitIsland.className = 'visit-island friend-sun';
      elements.visitFocus.textContent = localizedText('加载中...', '載入中...', 'Loading...');
      elements.visitMood.textContent = localizedText('加载中...', '載入中...', 'Loading...');
      elements.visitResources.innerHTML = '';
      elements.visitNote.textContent = '';
      elements.visitModal.hidden = false;

      try {
        const response = await fetchAuthedGet(`/api/friends/${friendUid}/island`);
        if (response && response.nickname) {
          elements.visitName.textContent = `${response.nickname}（${friendUid}）`;
        } else {
          elements.visitName.textContent = `UID ${friendUid}`;
        }
        const island = response?.island;
        if (!island) {
          elements.visitFocus.textContent = localizedText('暂无岛屿数据', '暫無島嶼數據', 'No island data');
          elements.visitMood.textContent = localizedText('对方还没有保存过进度', '對方還沒有保存過進度', 'They have not saved any progress yet.');
          return;
        }
        const plantedCount = (island.plots || []).filter(p => p.crop).length;
        const petCount = (island.pets || []).length;
        const decoCount = (island.decorations || []).length;
        elements.visitFocus.textContent = `Lv.${island.level}`;
        elements.visitMood.textContent = localizedText(
          `农田${plantedCount}块 · 宠物${petCount}只 · 装饰${decoCount}个`,
          `農田${plantedCount}塊 · 寵物${petCount}隻 · 裝飾${decoCount}個`,
          `Farm ${plantedCount} · Pets ${petCount} · Decor ${decoCount}`
        );

        const myGiftOptions = getMyHarvestedOptions();
        const giftSelectHtml = myGiftOptions.length
          ? `<select id="giftSelect" style="width:100%;padding:10px;border:1px solid var(--line);border-radius:10px;margin-top:10px;">
              ${myGiftOptions.map(opt => `<option value="${opt.key}">${escapeHtml(opt.label)}</option>`).join('')}
            </select>`
          : `<div style="margin-top:10px;color:var(--muted);font-size:13px;">${escapeHtml(localizedText('你的背包里没有可赠送的果实', '你的背包裡沒有可贈送的果實', 'You have no fruit to gift.'))}</div>`;

        elements.visitResources.innerHTML = `
          <div style="display:flex;gap:10px;flex-wrap:wrap;margin:6px 0 12px 0;">
            <span>💰 ${island.resources?.coins ?? 0}</span>
            <span>💧 ${island.resources?.water ?? 0}</span>
            <span>☀️ ${island.resources?.sunlight ?? 0}</span>
            <span>🤝 ${island.resources?.chances ?? 0}</span>
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <button class="small-button" type="button" data-visit-action="help">💧 ${escapeHtml(localizedText('帮助浇水', '幫助澆水', 'Help water'))}</button>
            <button class="small-button secondary" type="button" data-visit-action="steal">🍎 ${escapeHtml(localizedText('偷取果实', '偷取果實', 'Steal fruit'))}</button>
            <button class="small-button ghost" type="button" data-visit-action="gift">🎁 ${escapeHtml(localizedText('赠送礼物', '贈送禮物', 'Gift'))}</button>
          </div>
          ${giftSelectHtml}
        `;
        elements.visitNote.textContent = localizedText(
          '互动会消耗你自己的 🤝 游戏机会，并且会真实影响双方的云端存档。',
          '互動會消耗你自己的 🤝 遊戲機會，並且會真實影響雙方的雲端存檔。',
          'Interactions consume your 🤝 chances and will update both cloud saves for real.'
        );
      } catch (error) {
        elements.visitFocus.textContent = localizedText('加载失败', '載入失敗', 'Load failed');
        elements.visitMood.textContent = error.message || '无法读取好友岛屿';
      }
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

    // ===== Friends: real system via backend =====
    let serverFriends = [];
    let serverIncomingRequests = [];
    let serverOutgoingRequests = [];
    let lastSearchResultUid = null;
    let friendsCacheLoaded = false;
    let friendsCacheLoading = false;

    async function refreshFriendsFromServer() {
      if (!getAuth()) {
        serverFriends = [];
        serverIncomingRequests = [];
        serverOutgoingRequests = [];
        friendsCacheLoaded = false;
        friendsCacheLoading = false;
        return;
      }
      if (friendsCacheLoading) return;
      friendsCacheLoading = true;
      try {
        const [friendsResp, reqResp] = await Promise.all([
          fetchAuthedGet('/api/friends'),
          fetchAuthedGet('/api/friends/requests')
        ]);
        serverFriends = Array.isArray(friendsResp?.friends) ? friendsResp.friends : [];
        serverIncomingRequests = Array.isArray(reqResp?.incoming) ? reqResp.incoming : [];
        serverOutgoingRequests = Array.isArray(reqResp?.outgoing) ? reqResp.outgoing : [];
        friendsCacheLoaded = true;
      } catch (error) {
        console.warn('refresh friends error', error);
        friendsCacheLoaded = true; // avoid blocking UI forever
      } finally {
        friendsCacheLoading = false;
      }
    }

    function renderSearchUsers() {
      if (!elements.searchResults) return;
      elements.searchResults.innerHTML = `
        <div class="empty-state" style="padding:16px;">
          <strong>${escapeHtml(localizedText('输入 8 位 UID 搜索好友', '輸入 8 位 UID 搜索好友', 'Search friends by 8-digit UID'))}</strong>
          <span style="margin-top:6px;display:block;color:var(--muted);">${escapeHtml(localizedText('例如：12345678', '例如：12345678', 'e.g. 12345678'))}</span>
        </div>
      `;
    }

    async function renderSearchResults(searchTerm) {
      if (!elements.searchResults) return;
      const uid = String(searchTerm || '').trim();
      lastSearchResultUid = null;
      if (!uid) {
        renderSearchUsers();
        return;
      }
      if (!/^\d{8}$/.test(uid)) {
        elements.searchResults.innerHTML = `
          <div class="empty-state" style="padding:16px;">
            <strong>${escapeHtml(localizedText('请输入 8 位数字 UID', '請輸入 8 位數字 UID', 'Please enter an 8-digit UID'))}</strong>
          </div>
        `;
        return;
      }
      try {
        const result = await fetchAuthedGet(`/api/users/${uid}`);
        lastSearchResultUid = result.uid;
        const alreadyFriend = serverFriends.some(f => f.uid === uid);
        const isMe = getAuth()?.uid === uid;
        const nicknameLine = result.nickname
          ? `<span style="color:var(--ink-700)">${escapeHtml(localizedText('昵称：', '暱稱：', 'Nickname: '))}${escapeHtml(result.nickname)}</span>`
          : `<span style="color:var(--muted)">${escapeHtml(localizedText('暂未设置昵称', '暫未設定暱稱', 'No nickname yet'))}</span>`;
        elements.searchResults.innerHTML = `
          <div class="search-result-item">
            <div class="result-avatar">${escapeHtml(uid.slice(-2))}</div>
            <div class="result-info">
              <strong>UID ${escapeHtml(uid)}</strong>
              ${nicknameLine}
            </div>
            <button class="small-button secondary" type="button" data-send-friend-request="${escapeHtml(uid)}" ${alreadyFriend || isMe ? 'disabled' : ''}>
              ${isMe ? escapeHtml(localizedText('这是你自己', '這是你自己', "That's you")) : (alreadyFriend ? escapeHtml(localizedText('已是好友', '已是好友', 'Already friends')) : escapeHtml(localizedText('发送申请', '發送申請', 'Send request')))}
            </button>
          </div>
        `;
      } catch (error) {
        elements.searchResults.innerHTML = `
          <div class="empty-state" style="padding:16px;">
            <strong>${escapeHtml(localizedText('未找到该用户', '未找到該用戶', 'User not found'))}</strong>
          </div>
        `;
      }
    }

    function renderPendingRequests() {
      if (!elements.requestsList) return;
      const incoming = serverIncomingRequests || [];
      const outgoing = serverOutgoingRequests || [];
      if (!incoming.length && !outgoing.length) {
        elements.requestsList.innerHTML = `
          <div class="empty-state" style="padding:12px;">
            <span>${escapeHtml(localizedText('暂无好友申请', '暫無好友申請', 'No friend requests'))}</span>
          </div>
        `;
        return;
      }
      const incomingHtml = incoming.length
        ? `
          <div style="margin-bottom:12px;">
            <strong style="display:block;margin:6px 0;">${escapeHtml(localizedText('收到的申请', '收到的申請', 'Incoming'))}</strong>
            ${incoming.map(req => `
              <div class="request-item">
                <div class="request-item-avatar">${escapeHtml(String(req.fromUid).slice(-2))}</div>
                <div class="request-item-info">
                  <strong>UID ${escapeHtml(req.fromUid)}</strong>
                  <span>${escapeHtml(localizedText('请求添加你为好友', '請求添加你為好友', 'Wants to add you'))}</span>
                </div>
                <div class="request-item-actions">
                  <button class="small-button secondary" type="button" data-accept-request="${req.id}">${escapeHtml(localizedText('同意', '同意', 'Accept'))}</button>
                  <button class="small-button ghost" type="button" data-decline-request="${req.id}">${escapeHtml(localizedText('拒绝', '拒絕', 'Decline'))}</button>
                </div>
              </div>
            `).join('')}
          </div>
        `
        : '';
      const outgoingHtml = outgoing.length
        ? `
          <div>
            <strong style="display:block;margin:6px 0;">${escapeHtml(localizedText('已发送的申请', '已發送的申請', 'Outgoing'))}</strong>
            ${outgoing.map(req => `
              <div class="request-item">
                <div class="request-item-avatar">${escapeHtml(String(req.toUid).slice(-2))}</div>
                <div class="request-item-info">
                  <strong>UID ${escapeHtml(req.toUid)}</strong>
                  <span style="color:var(--muted)">${escapeHtml(localizedText('等待对方同意', '等待對方同意', 'Waiting for approval'))}</span>
                </div>
              </div>
            `).join('')}
          </div>
        `
        : '';
      elements.requestsList.innerHTML = incomingHtml + outgoingHtml;
    }

    function renderChallengeInviteList() {
      if (!elements.challengeInviteList) return;
      const friends = core.FRIENDS.filter(f => (state.myFriends || []).includes(f.id));

      if (friends.length === 0) {
        elements.challengeInviteList.innerHTML = `
          <div class="empty-state" style="padding:12px;">
            <span>还没有好友，先添加好友</span>
          </div>
        `;
        return;
      }

      elements.challengeInviteList.innerHTML = friends.map(friend => `
        <label class="invite-checkbox">
          <input type="checkbox" value="${friend.id}" data-invite-checkbox>
          <span>${escapeHtml(friend.name)}</span>
        </label>
      `).join('');
    }

    function renderAchievementDetail(achievement) {
      if (!elements.achievementDetail) return;

      const progressPercent = achievement.unlocked ? 100 : Math.round((achievement.progress / achievement.target) * 100);

      elements.achievementDetail.innerHTML = `
        <div class="achievement-detail-header">
          <div class="achievement-detail-icon" style="font-size:48px;">${achievement.icon}</div>
          <div class="achievement-detail-info">
            <h3>${escapeHtml(achievement.name)}</h3>
            <p>${escapeHtml(achievement.description)}</p>
          </div>
        </div>
        ${achievement.unlocked ? `
          <div style="background:linear-gradient(135deg,var(--leaf-500),var(--sun-500));color:#fff;padding:12px;border-radius:8px;text-align:center;">
            <strong style="font-size:18px;">已解锁！</strong>
          </div>
        ` : `
          <div class="achievement-detail-stats">
            <div class="achievement-detail-stat">
              <small>当前进度</small>
              <strong>${achievement.progress}/${achievement.target}</strong>
            </div>
            <div class="achievement-detail-stat">
              <small>完成度</small>
              <strong>${progressPercent}%</strong>
            </div>
          </div>
          <div style="margin-top:12px;background:var(--teal-100);border-radius:8px;padding:8px;">
            <div style="height:8px;background:var(--teal-500);border-radius:4px;width:${progressPercent}%"></div>
          </div>
        `}
      `;
    }

    document.addEventListener('click', async (event) => {
      // IMPORTANT: island interactions use <div> (plots, seed options, etc.).
      // We still want button shortcuts, but must not ignore non-button clicks.
      const rawTarget = event.target;
      // Some browsers can report Text nodes as event.target when clicking button labels.
      const normalizedTarget = rawTarget && rawTarget.nodeType === 3 ? rawTarget.parentElement : rawTarget;
      const target = normalizedTarget && normalizedTarget.closest
        ? (normalizedTarget.closest('button, a') || normalizedTarget)
        : normalizedTarget;
      if (!target) return;

      if (target.id === 'toggleAuthMode') {
        setAuthMode(authMode === 'login' ? 'register' : 'login');
        return;
      }

      if (target.id === 'toggleCoachBtn' || target.id === 'closeCoachInline') {
        state.journeyCoachEnabled = !state.journeyCoachEnabled;
        renderAll();
        persistSession();
        return;
      }

      if (target.id === 'authSubmitBtn') {
        const uid = (elements.uidInput?.value || '').trim();
        const password = elements.passwordInput?.value || '';
        if (!/^\d{8}$/.test(uid)) {
          setAuthError('UID 必须是 8 位数字');
          return;
        }
        if (!password || password.length < 4) {
          setAuthError('密码至少 4 位');
          return;
        }
        setAuthError('');
        if (elements.authSubmitBtn) elements.authSubmitBtn.disabled = true;
        try {
          const endpoint = authMode === 'register' ? '/api/auth/register' : '/api/auth/login';
          const response = await postApi(endpoint, { uid, password });
          setAuth({ uid: response.uid, token: response.token });
          // 拉取该账号的云端存档（如有），再恢复
          await restoreFromServerIfAny();
          await loadMeProfile();
          await refreshFriendsFromServer();
          restoreSession(false);
          restoreIslandState();
          renderAll();
          updateIslandUI();
          showWorkspace();
        } catch (error) {
          setAuthError(error.message || '登录/注册失败');
        } finally {
          if (elements.authSubmitBtn) elements.authSubmitBtn.disabled = false;
        }
        return;
      }

      if (target.id === 'openProfileTopbar' || target.id === 'openProfileSidebar') {
        await openProfile();
        return;
      }
      if (target.id === 'closeProfile') {
        closeProfile();
        return;
      }
      if (target.id === 'saveNicknameBtn') {
        const input = document.querySelector('#nicknameEdit');
        const nickname = validateNickname(input ? input.value : '');
        if (!nickname) {
          showMessage('昵称需为 2-12 个字符');
          return;
        }
        try {
          const resp = await fetchAuthedApi('/api/me/profile', { nickname });
          meProfile = { ...(meProfile || {}), nickname: resp.nickname };
          showMessage('昵称已更新');
          await refreshFriendsFromServer();
          renderFriends();
          renderProfileModal();
          if (currentVisitUid) {
            await openVisitModal(currentVisitUid);
          }
        } catch (error) {
          showMessage(error.message || '更新失败');
        }
        return;
      }
      if (target.id === 'logoutBtn' || target.id === 'logoutSidebar') {
        logout();
        return;
      }
      if (target.id === 'clearLocalBtn') {
        clearLocalCacheKeepAuth();
        renderProfileModal();
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
        if (target.dataset.view === 'friends') {
          await refreshFriendsFromServer();
          renderFriends();
        }
        if (target.dataset.view === 'island') {
          window.setTimeout(() => {
            updateIslandUI();
            maybeOpenIslandGuide();
          }, 0);
        }
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

      if (target.id === 'closePlanting') {
        if (elements.plantingModal) elements.plantingModal.hidden = true;
      }
      if (target.id === 'closeShop' || (target.closest && target.closest('#closeShop'))) {
        if (elements.shopModal) elements.shopModal.hidden = true;
      }
      if (target.id === 'closeInventory') {
        if (elements.inventoryModal) elements.inventoryModal.hidden = true;
      }

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

      if (target.matches('[data-friend-visit]')) {
        const friendUid = target.dataset.friendVisit;
        await openVisitModal(friendUid);
        return;
      }

      if (target.matches('[data-visit-action]')) {
        const action = target.dataset.visitAction;
        if (!currentVisitUid) return;
        try {
          if (action === 'gift') {
            const select = document.querySelector('#giftSelect');
            const itemType = select ? select.value : '';
            await fetchAuthedApi(`/api/friends/${currentVisitUid}/interact`, { type: 'gift', itemType });
            showMessage('已赠送礼物');
          } else {
            await fetchAuthedApi(`/api/friends/${currentVisitUid}/interact`, { type: action });
            showMessage(action === 'help' ? '已帮助浇水 +1' : '已尝试偷取果实');
          }
          // 刷新自己的云端存档，避免自动保存覆盖他人对你的修改
          await restoreFromServerIfAny();
          restoreSession(false);
          restoreIslandState();
          renderAll();
          updateIslandUI();
          // 刷新好友岛屿展示
          await openVisitModal(currentVisitUid);
          await refreshFriendsFromServer();
          renderFriends();
        } catch (error) {
          showMessage(error.message || '互动失败');
        }
        return;
      }

      // Social module event handlers
      if (target.matches('[data-friends-tab]')) {
        state.activeTab = target.dataset.friendsTab;
        renderAll();
        persistSession();
      }

      if (target.id === 'addFriendBtn') {
        if (elements.addFriendModal) {
          elements.addFriendModal.hidden = false;
          await refreshFriendsFromServer();
          renderSearchUsers();
          renderPendingRequests();
        }
      }

      if (target.id === 'closeAddFriend') {
        if (elements.addFriendModal) {
          elements.addFriendModal.hidden = true;
        }
      }

      if (target.id === 'searchFriendBtn') {
        const searchTerm = elements.friendSearchInput ? elements.friendSearchInput.value.trim() : '';
        await refreshFriendsFromServer();
        await renderSearchResults(searchTerm);
      }

      if (target.matches('[data-send-friend-request]')) {
        const toUid = target.dataset.sendFriendRequest;
        try {
          await fetchAuthedApi('/api/friends/request', { toUid });
          showMessage('好友申请已发送');
          await refreshFriendsFromServer();
          renderPendingRequests();
          await renderSearchResults(String(toUid));
        } catch (error) {
          showMessage(error.message || '发送好友申请失败');
        }
        return;
      }

      if (target.matches('[data-accept-request]')) {
        const requestId = target.dataset.acceptRequest;
        try {
          await fetchAuthedApi(`/api/friends/requests/${requestId}/accept`, {});
          showMessage('已添加为好友');
          await refreshFriendsFromServer();
          renderPendingRequests();
          renderFriends();
        } catch (error) {
          showMessage(error.message || '处理失败');
        }
        return;
      }

      if (target.matches('[data-decline-request]')) {
        const requestId = target.dataset.declineRequest;
        try {
          await fetchAuthedApi(`/api/friends/requests/${requestId}/reject`, {});
          showMessage('已拒绝');
          await refreshFriendsFromServer();
          renderPendingRequests();
        } catch (error) {
          showMessage(error.message || '处理失败');
        }
        return;
      }

      if (target.id === 'createChallengeBtn') {
        if (elements.createChallengeModal) {
          elements.createChallengeModal.hidden = false;
          renderChallengeInviteList();
        }
      }

      if (target.id === 'closeCreateChallenge') {
        if (elements.createChallengeModal) {
          elements.createChallengeModal.hidden = true;
        }
      }

      if (target.id === 'createChallengeSubmit') {
        const challengeName = elements.challengeNameInput ? elements.challengeNameInput.value.trim() : '';
        const challengeType = elements.challengeTypeSelect ? elements.challengeTypeSelect.value : 'checkin_streak';
        const challengeDuration = elements.challengeDurationSelect ? parseInt(elements.challengeDurationSelect.value) : 7;

        if (!challengeName) {
          alert('请输入挑战名称');
          return;
        }

        const invitedFriends = Array.from(document.querySelectorAll('[data-invite-checkbox]:checked'))
          .map(cb => cb.value);

        state = SocialModule.createChallenge(state, {
          name: challengeName,
          type: challengeType,
          duration: challengeDuration,
          participants: invitedFriends
        });

        state.lastMessage = {
          'zh-CN': core.t(language, 'challengeCreatedSuccess'),
          'zh-HK': core.t(language, 'challengeCreatedSuccess'),
          en: core.t(language, 'challengeCreatedSuccess')
        };

        if (elements.createChallengeModal) {
          elements.createChallengeModal.hidden = true;
        }
        if (elements.challengeNameInput) elements.challengeNameInput.value = '';
        renderAll();
        persistSession();
      }

      if (target.matches('[data-leaderboard-type]')) {
        state.activeLeaderboard = target.dataset.leaderboardType;
        document.querySelectorAll('.leaderboard-tab').forEach(tab => {
          tab.classList.toggle('is-active', tab.dataset.leaderboardType === state.activeLeaderboard);
        });
        renderLeaderboard();
        persistSession();
      }

      if (target.matches('[data-challenge-id]')) {
        const challengeId = target.dataset.challengeId;
        const challenge = SocialModule.getChallenges(state).find(c => c.id === challengeId);
        if (challenge) {
          alert(`挑战详情：\n名称: ${challenge.name}\n类型: ${challenge.type}\n参与人数: ${challenge.participants.length}`);
        }
      }

      if (target.matches('[data-achievement-id]')) {
        const achievementId = target.dataset.achievementId;
        const achievements = SocialModule.getAchievements(state);
        const achievement = achievements.find(a => a.id === achievementId);
        if (achievement && elements.achievementModal) {
          renderAchievementDetail(achievement);
          elements.achievementModal.hidden = false;
        }
      }

      if (target.id === 'closeAchievement') {
        if (elements.achievementModal) {
          elements.achievementModal.hidden = true;
        }
      }

      if (target.matches('[data-like-id]')) {
        // Like button clicked - just show feedback for now
        alert('感谢点赞！');
      }

      // AI mood recommendation
      if (target.closest && target.closest('#aiRecommendBtn')) {
        runMoodRecommendation();
      }

      if (target.id === 'closePlanting') {
        if (elements.plantingModal) {
          elements.plantingModal.hidden = true;
        }
      }

      const seedOption = (rawTarget && rawTarget.closest) ? rawTarget.closest('.seed-option:not(.locked)') : null;
      if (seedOption) {
        const cropType = seedOption.dataset.crop;
        plantSelectedCrop(cropType);
      }

      if (target.id === 'closeShop' || (target.closest && target.closest('#closeShop'))) {
        if (elements.shopModal) {
          elements.shopModal.hidden = true;
        }
        selectedDecorationSlot = null;
      }

      const shopTab = (rawTarget && rawTarget.closest) ? rawTarget.closest('.shop-tab') : null;
      if (shopTab) {
        handleShopTabChange(shopTab);
      }

      const buyButton = (rawTarget && rawTarget.closest) ? rawTarget.closest('.buy-btn') : null;
      if (buyButton) {
        const shopItem = buyButton.closest('.shop-item');
        if (shopItem) handleShopPurchase(shopItem);
      }

      const decorationFilterButton = (rawTarget && rawTarget.closest) ? rawTarget.closest('[data-decoration-filter]') : null;
      if (decorationFilterButton) {
        islandState.decorationFilter = decorationFilterButton.dataset.decorationFilter || 'all';
        updateShopAvailability();
        renderDecorationFilters();
        persistIslandState();
      }

      if (target.id === 'closeInventory') {
        if (elements.inventoryModal) {
          elements.inventoryModal.hidden = true;
        }
      }
      if (target.id === 'closeDecorationManage') {
        if (elements.decorationManageModal) {
          elements.decorationManageModal.hidden = true;
        }
        selectedDecorationSlot = null;
      }
      if (target.id === 'upgradeIslandBtn') {
        handleIslandUpgrade();
      }
      if (target.id === 'closeIslandUpgrade' || target.id === 'confirmIslandUpgrade') {
        if (elements.islandUpgradeModal) {
          elements.islandUpgradeModal.hidden = true;
        }
      }

      if (target.id === 'closePetFeed') {
        if (elements.petFeedModal) elements.petFeedModal.hidden = true;
      }

      const feedPetButton = (rawTarget && rawTarget.closest) ? rawTarget.closest('[data-feed-pet]') : null;
      if (feedPetButton) {
        const petId = feedPetButton.dataset.feedPet;
        const result = IslandGardenModule.feedPet(islandState, petId);
        showMessage(result.message);
        if (result.success) {
          islandState.activePetId = petId;
          if (elements.petFeedModal) elements.petFeedModal.hidden = true;
          syncIslandToMainResources();
          updateIslandUI();
          persistIslandState();
        }
      }

      const petSelectButton = (rawTarget && rawTarget.closest) ? rawTarget.closest('[data-pet-select]') : null;
      if (petSelectButton) {
        islandState.activePetId = petSelectButton.dataset.petSelect;
        updateIslandUI();
        persistIslandState();
      }

      const decorationSlot = (rawTarget && rawTarget.closest) ? rawTarget.closest('.decoration-slot') : null;
      if (decorationSlot && !decorationSlot.classList.contains('locked')) {
        const slotIndex = Number(decorationSlot.dataset.slot) - 1;
        openDecorationManageModal(slotIndex);
      }

      if (target.id === 'removeDecorationBtn') {
        const result = IslandGardenModule.removeDecoration(islandState, selectedDecorationSlot);
        showMessage(result.message);
        if (result.success) {
          if (elements.decorationManageModal) elements.decorationManageModal.hidden = true;
          selectedDecorationSlot = null;
          updateIslandUI();
          persistIslandState();
        }
      }

      if (target.id === 'flipDecorationBtn' || target.id === 'resetDecorationFlipBtn') {
        const nextState = target.id === 'flipDecorationBtn' ? 1 : 0;
        handleDecorationFlip(nextState);
      }

      if (target.id === 'replaceDecorationBtn') {
        if (elements.decorationManageModal) elements.decorationManageModal.hidden = true;
        openShopModal('decorations');
      }

      const quickAction = (rawTarget && rawTarget.closest) ? rawTarget.closest('[data-action]') : null;
      if (quickAction) {
        handleQuickAction(quickAction.dataset.action);
      }

      if (target.id === 'closeFriendInteraction') {
        if (elements.friendInteractionModal) {
          elements.friendInteractionModal.hidden = true;
        }
      }

      if (target.id === 'closeIslandGuide' || target.id === 'skipIslandGuide') {
        closeIslandGuide(true);
      }
      if (target.id === 'nextIslandGuide') {
        if (currentGuideStep >= GUIDE_STEPS.length - 1) {
          closeIslandGuide(true);
        } else {
          renderGuideStep(currentGuideStep + 1);
        }
      }

      if (target.matches('.interaction-btn')) {
        const option = target.closest('.interaction-option');
        if (option) {
          handleFriendInteraction(option.dataset.action);
        }
      }

      if (target.matches('[data-claim-task]')) {
        const result = IslandGardenModule.claimDailyTask(islandState, target.dataset.claimTask);
        showMessage(result.message);
        if (result.success) {
          syncIslandToMainResources();
          updateIslandUI();
          persistIslandState();
        }
      }

      if (target.matches('[data-claim-order]')) {
        const result = IslandGardenModule.claimOrder(islandState, target.dataset.claimOrder);
        showMessage(result.message);
        if (result.success) {
          syncIslandToMainResources();
          updateIslandUI();
          persistIslandState();
        }
      }

      const plotEl = (rawTarget && rawTarget.closest) ? rawTarget.closest('[data-plot]') : null;
      if (plotEl) {
        handlePlotClick(plotEl);
      }

      const toolButton = (rawTarget && rawTarget.closest) ? rawTarget.closest('[data-tool]') : null;
      if (toolButton) {
        const tool = toolButton.dataset.tool;
        // Farm tools are handled by direct listeners to prevent double toggles.
        if ((tool === 'plant' || tool === 'water' || tool === 'sunlight' || tool === 'harvest') && toolButton.dataset && toolButton.dataset.boundClick === '1') {
          return;
        }
        if (tool === 'plant' || tool === 'water' || tool === 'sunlight' || tool === 'harvest') {
          currentTool = currentTool === tool ? null : tool;
          document.querySelectorAll('.tool-btn[data-tool="plant"], .tool-btn[data-tool="water"], .tool-btn[data-tool="sunlight"], .tool-btn[data-tool="harvest"]').forEach(btn => btn.classList.remove('active'));
          if (currentTool) {
            toolButton.classList.add('active');
            showMessage(localizedText(`已选择${tool}工具，点击地块操作`, `已選擇${tool}工具，點擊地塊操作`, `Tool: ${tool}. Click a plot to use it.`));
          } else {
            showMessage(localizedText('已取消工具选择', '已取消工具選擇', 'Tool deselected.'));
          }
        }
        if (tool === 'feed') {
          const unlockedPets = islandState.pets.filter(p => p.unlocked);
          if (!unlockedPets.length) {
            showMessage('暂无可喂养的宠物');
            return;
          }
          if (unlockedPets.length === 1) {
            const result = IslandGardenModule.feedPet(islandState, unlockedPets[0].id);
            showMessage(result.message);
            if (result.success) {
              islandState.activePetId = unlockedPets[0].id;
              syncIslandToMainResources();
              updateIslandUI();
              persistIslandState();
            }
            return;
          }
          openPetFeedModal();
        }
        if (tool === 'visit') {
          document.querySelectorAll('.workspace-panel').forEach(panel => {
            panel.hidden = panel.dataset.panel !== 'friends';
          });
          state.currentView = 'friends';
        }
        if (tool === 'shop') {
          openShopModal('decorations');
        }
        if (tool === 'help') {
          if (islandState.dailyHelpCount > 0) {
            const friends = core.FRIENDS || [];
            if (friends.length) {
              const result = IslandGardenModule.helpFriendWater(friends[0].id, 'plot1', islandState);
              showMessage(result.message);
              updateIslandUI();
              persistIslandState();
            }
          } else {
            showMessage(localizedText('今日帮助次数已用完', '今日幫助次數已用完', 'No help actions left today.'));
          }
        }
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

    setAuthMode('login');
    restoreSession(true);
    // If already logged in, prefer restoring the latest cloud state.
    if (getAuth()) {
      window.setTimeout(async () => {
        await loadMeProfile();
        await refreshFriendsFromServer();
        const restored = await restoreFromServerIfAny();
        if (restored) {
          restoreSession(false);
          restoreIslandState();
          renderAll();
          updateIslandUI();
        }
      }, 0);
    }
    // Auto-save strategy B: every 15s + key actions (debounced via scheduleCloudSave())
    window.setInterval(() => {
      if (!getAuth()) return;
      saveCloudStateNow();
    }, 15000);
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

    // Island garden functions
    let lastIslandAlertAt = 0;

    // ===== Shared resources sync (coins / water / sunlight / chances) =====
    // 目标：Pomoland Island 与左下角资源始终一致（不需要手动同步）。
    function syncMainToIslandResources() {
      if (!state || !state.resources) return;
      islandState.coins = Number(state.resources.coins || 0);
      islandState.water = Number(state.resources.water || 0);
      islandState.sunlight = Number(state.resources.sunlight || 0);
      islandState.dailyHelpCount = Number(state.resources.chances || 0);
    }

    function syncIslandToMainResources() {
      if (!state || !state.resources) return;
      state.resources.coins = Number(islandState.coins || 0);
      state.resources.water = Number(islandState.water || 0);
      state.resources.sunlight = Number(islandState.sunlight || 0);
      state.resources.chances = Number(islandState.dailyHelpCount || 0);
      // 实时刷新左下角资源，不需要切换栏目
      renderAll();
      persistSession();
    }

    function getConditionLabel(key, target) {
      if (key === 'plantCount') return localizedText(`累计种植 ${target} 次`, `累計種植 ${target} 次`, `Plant ${target} times total`);
      if (key === 'harvestCount') return localizedText(`累计收获 ${target} 次`, `累計收穫 ${target} 次`, `Harvest ${target} times total`);
      if (key === 'decorationCount') return localizedText(`放置装饰 ${target} 个`, `放置裝飾 ${target} 個`, `Place ${target} decoration(s)`);
      if (key === 'friendHelpCount') return localizedText(`帮助好友 ${target} 次`, `幫助好友 ${target} 次`, `Help friends ${target} time(s)`);
      return `${key} ${target}`;
    }

    function translateUpgradeRewardItem(itemText) {
      const text = String(itemText || '');
      // resources
      let m = text.match(/^💰\s*(\d+)\s*金币$/);
      if (m) return localizedText(`💰 ${m[1]} 金币`, `💰 ${m[1]} 金幣`, `💰 ${m[1]} coins`);
      m = text.match(/^💧\s*(\d+)\s*水滴$/);
      if (m) return localizedText(`💧 ${m[1]} 水滴`, `💧 ${m[1]} 水滴`, `💧 ${m[1]} water`);
      m = text.match(/^☀️\s*(\d+)\s*阳光$/);
      if (m) return localizedText(`☀️ ${m[1]} 阳光`, `☀️ ${m[1]} 陽光`, `☀️ ${m[1]} sunlight`);

      // seeds: "🍓 草莓种子 x2"
      m = text.match(/^(🍅|🍓|🥕|🍎|🍉)\s*([^\s]+)种子\s*x(\d+)$/);
      if (m) {
        const icon = m[1];
        const amount = m[3];
        const nameMap = {
          '🍅': core.t(language, 'seedTomato'),
          '🍓': core.t(language, 'seedStrawberry'),
          '🥕': core.t(language, 'seedCarrot'),
          '🍎': core.t(language, 'seedApple'),
          '🍉': core.t(language, 'seedWatermelon')
        };
        const seedName = nameMap[icon] || `${m[2]} seed`;
        return `${icon} ${seedName} x${amount}`;
      }

      // unlock previews
      m = text.match(/^农田扩展到\s*(\d+)\s*格$/);
      if (m) return localizedText(`农田扩展到 ${m[1]} 格`, `農田擴展到 ${m[1]} 格`, `Farm expands to ${m[1]} plots`);
      m = text.match(/^解锁第\s*(\d+)\s*块农田$/);
      if (m) return localizedText(`解锁第 ${m[1]} 块农田`, `解鎖第 ${m[1]} 塊農田`, `Unlock farm plot #${m[1]}`);
      m = text.match(/^解锁第\s*(\d+)\s*个装饰位$/);
      if (m) return localizedText(`解锁第 ${m[1]} 个装饰位`, `解鎖第 ${m[1]} 個裝飾位`, `Unlock decoration slot #${m[1]}`);
      m = text.match(/^解锁(.+)种子$/);
      if (m) {
        const cropMap = {
          '番茄': core.t(language, 'fruitTomato'),
          '草莓': core.t(language, 'fruitStrawberry'),
          '胡萝卜': core.t(language, 'fruitCarrot'),
          '苹果': core.t(language, 'fruitApple'),
          '西瓜': core.t(language, 'fruitWatermelon')
        };
        const crop = cropMap[m[1]] || m[1];
        return localizedText(`解锁${crop}种子`, `解鎖${crop}種子`, `Unlock ${crop} seeds`);
      }
      if (text === '升级为成熟岛屿外观') return localizedText('升级为成熟岛屿外观', '升級為成熟島嶼外觀', 'Unlock mature island look');
      if (text === '升级奖励资源包') return localizedText('升级奖励资源包', '升級獎勵資源包', 'Upgrade reward bundle');

      return text;
    }

    function getPlotUnlockLevel(index) {
      if (index < 2) return 1;
      if (index < 4) return 2;
      if (index < 5) return 3;
      return 4;
    }

    function getDecorationUnlockLevel(index) {
      return Math.min(4, index + 1);
    }

    function openShopModal(defaultTab = 'decorations') {
      if (!elements.shopModal) return;
      elements.shopModal.hidden = false;
      const tab = document.querySelector(`[data-shop-tab="${defaultTab}"]`) || document.querySelector('[data-shop-tab="decorations"]');
      if (tab) handleShopTabChange(tab);
    }

    function getCropStageMeta(plot) {
      if (!plot || !plot.crop) return null;
      const cropType = IslandGardenModule.CROP_TYPES[plot.crop];
      const progress = IslandGardenModule.getGrowthProgress(plot, islandState);
      if (progress >= 100) return { className: 'stage-ripe', label: localizedText('成熟期', '成熟期', 'Ripe') };
      if (cropType.name === '苹果' && progress >= 65) return { className: 'stage-bloom', label: localizedText('挂果期', '掛果期', 'Fruiting') };
      if (progress >= 70) return { className: 'stage-bloom', label: localizedText('开花期', '開花期', 'Blooming') };
      if (progress >= 40) return { className: 'stage-grow', label: localizedText('生长期', '生長期', 'Growing') };
      if (progress >= 10) return { className: 'stage-sprout', label: localizedText('幼苗期', '幼苗期', 'Sprouting') };
      return { className: 'stage-seed', label: localizedText('播种期', '播種期', 'Seeded') };
    }

    function renderCropVisual(plot) {
      if (!plot || !plot.crop) return '🌱';
      const stage = getCropStageMeta(plot);
      return `
        <div class="crop-visual ${escapeHtml(plot.crop)} ${escapeHtml(stage.className)}">
          <span class="crop-stem"></span>
          <span class="crop-leaf left"></span>
          <span class="crop-leaf right"></span>
          <span class="crop-bud"></span>
          <span class="crop-fruit"></span>
          <span class="crop-vine"></span>
          <span class="crop-canopy"></span>
          <span class="crop-root"></span>
        </div>
      `;
    }

    function renderDailyTasks() {
      const tasks = islandState.dailyProgress?.tasks || [];
      const completedCount = tasks.filter((task) => task.claimed).length;
      if (elements.dailyTaskProgress) {
        elements.dailyTaskProgress.textContent = `${completedCount}/${tasks.length}`;
      }
      if (!elements.dailyTaskList) return;

      const dailyTextMap = {
        'plant-twice': {
          title: localizedText('种植 2 次作物', '種植 2 次作物', 'Plant 2 crops'),
          desc: localizedText('今天先让岛屿开始运转。', '今天先讓島嶼開始運轉。', 'Get your island running today.')
        },
        'harvest-once': {
          title: localizedText('收获 1 次成熟作物', '收穫 1 次成熟作物', 'Harvest 1 ripe crop'),
          desc: localizedText('亲手完成一次完整种植循环。', '親手完成一次完整種植循環。', 'Complete a full plant→grow→harvest loop.')
        },
        'social-once': {
          title: localizedText('完成 1 次好友互动', '完成 1 次好友互動', 'Do 1 friend interaction'),
          desc: localizedText('帮助好友或赠送礼物都算完成。', '幫助好友或贈送禮物都算完成。', 'Help water, steal, or gift.')
        }
      };
      const rewardLabel = localizedText('奖励：', '獎勵：', 'Rewards: ');
      const claimText = localizedText('领取', '領取', 'Claim');
      const claimedText = localizedText('已领取', '已領取', 'Claimed');

      elements.dailyTaskList.innerHTML = tasks.map((task) => {
        const progress = Math.min(100, Math.round((Number(task.progress || 0) / Number(task.target || 1)) * 100));
        const isComplete = Number(task.progress || 0) >= Number(task.target || 0);
        const mapped = dailyTextMap[task.id];
        const title = mapped ? mapped.title : task.title;
        const desc = mapped ? mapped.desc : task.description;
        return `
          <article class="system-item ${isComplete ? 'is-complete' : ''} ${task.claimed ? 'is-claimed' : ''}">
            <div class="system-item-top">
              <span class="system-item-title">${escapeHtml(title)}</span>
              <span class="gift-chip">${task.progress}/${task.target}</span>
            </div>
            <div class="system-item-meta">${escapeHtml(desc)}</div>
            <div class="system-progress"><div class="system-progress-fill" style="width:${progress}%"></div></div>
            <div class="system-action-row">
              <span class="system-reward">${escapeHtml(rewardLabel)}${task.rewards?.coins ? `💰${task.rewards.coins} ` : ''}${task.rewards?.water ? `💧${task.rewards.water} ` : ''}${task.rewards?.sunlight ? `☀️${task.rewards.sunlight} ` : ''}+${task.rewards?.xp || 0} XP</span>
              <button class="system-small-btn" type="button" data-claim-task="${task.id}" ${(!isComplete || task.claimed) ? 'disabled' : ''}>${escapeHtml(task.claimed ? claimedText : claimText)}</button>
            </div>
          </article>
        `;
      }).join('');
    }

    function renderOrderBoard() {
      const orders = islandState.orderBoard?.orders || [];
      const pendingCount = orders.filter((order) => !order.claimed).length;
      if (elements.orderBoardStatus) {
        elements.orderBoardStatus.textContent = pendingCount
          ? localizedText(`${pendingCount} 单进行中`, `${pendingCount} 單進行中`, `${pendingCount} active`)
          : localizedText('已清空', '已清空', 'Cleared');
      }
      if (!elements.orderBoardList) return;

      const orderTextMap = {
        'starter-order': {
          title: localizedText('新鲜沙拉订单', '新鮮沙拉訂單', 'Fresh salad order'),
          desc: localizedText('提交 1 个番茄和 1 个胡萝卜', '提交 1 個番茄和 1 個胡蘿蔔', 'Submit 1 tomato and 1 carrot')
        },
        'sweet-order': {
          title: localizedText('甜点拼盘订单', '甜點拼盤訂單', 'Dessert platter order'),
          desc: localizedText('提交 2 个草莓，等级不足时会保留到解锁后再完成', '提交 2 個草莓，等級不足時會保留到解鎖後再完成', 'Submit 2 strawberries (kept until you unlock them)')
        }
      };
      const cropNameKeyMap = {
        tomato: 'fruitTomato',
        strawberry: 'fruitStrawberry',
        carrot: 'fruitCarrot',
        apple: 'fruitApple',
        watermelon: 'fruitWatermelon'
      };
      const rewardLabel = localizedText('奖励：', '獎勵：', 'Rewards: ');
      const badgeDone = localizedText('完成', '完成', 'Done');
      const badgeOrder = localizedText('订单', '訂單', 'Order');
      const submitText = localizedText('提交', '提交', 'Submit');
      const doneText = localizedText('已完成', '已完成', 'Done');

      elements.orderBoardList.innerHTML = orders.map((order) => {
        const canClaim = Object.entries(order.needs || {}).every(([cropType, amount]) => Number(islandState.inventory.harvested[cropType] || 0) >= Number(amount));
        const requirementText = Object.entries(order.needs || {}).map(([cropType, amount]) => {
          const crop = IslandGardenModule.CROP_TYPES[cropType];
          const cropName = core.t(language, cropNameKeyMap[cropType] || 'fruitTomato') || crop.name;
          const current = Number(islandState.inventory.harvested[cropType] || 0);
          return `${crop.icon} ${cropName} ${current}/${amount}`;
        }).join(' · ');
        const mapped = orderTextMap[order.id];
        const title = mapped ? mapped.title : order.title;
        const desc = mapped ? mapped.desc : order.description;
        return `
          <article class="system-item ${canClaim ? 'is-complete' : ''} ${order.claimed ? 'is-claimed' : ''}">
            <div class="system-item-top">
              <span class="system-item-title">${escapeHtml(title)}</span>
              <span class="gift-chip">${escapeHtml(order.claimed ? badgeDone : badgeOrder)}</span>
            </div>
            <div class="system-item-meta">${escapeHtml(desc)}</div>
            <div class="system-item-meta">${escapeHtml(requirementText)}</div>
            <div class="system-action-row">
              <span class="system-reward">${escapeHtml(rewardLabel)}💰${order.rewards?.coins || 0} ${order.rewards?.water ? `· 💧${order.rewards.water}` : ''} +${order.rewards?.xp || 0} XP</span>
              <button class="system-small-btn" type="button" data-claim-order="${order.id}" ${(!canClaim || order.claimed) ? 'disabled' : ''}>${escapeHtml(order.claimed ? doneText : submitText)}</button>
            </div>
          </article>
        `;
      }).join('');
    }

    function renderDecorationFilters() {
      if (!elements.decorationFilterRow) return;
      elements.decorationFilterRow.querySelectorAll('[data-decoration-filter]').forEach((button) => {
        button.classList.toggle('active', button.dataset.decorationFilter === (islandState.decorationFilter || 'all'));
      });
    }

    function updateFriendPreview() {
      if (!elements.friendIslandPreview || !currentFriendId) return;
      const friend = (core.FRIENDS || []).find((item) => item.id === currentFriendId);
      const friendship = Number(islandState.social?.friendship?.[currentFriendId] || 0);
      elements.friendIslandPreview.innerHTML = `
        <div class="upgrade-modal-card">
          <strong>${escapeHtml(friend?.name || '好友')}</strong>
          <div class="system-item-meta">当前岛屿等级：Lv.${friend?.islandLevel || 1}</div>
          <div class="system-item-meta">友谊值：${friendship}</div>
          <div class="friend-bonus-chip">赠礼可提升友谊值并获得额外 XP</div>
        </div>
      `;
    }

    const GUIDE_STEPS = [
      {
        title: localizedText('先种下第一块地', '先種下第一塊地', 'Plant your first plot'),
        body: localizedText('选择右侧的“种植”工具，再点击农田地块。每次种植都会推进每日任务，也会让岛屿开始积累成长节奏。', '選擇右側的「種植」工具，再點擊農田地塊。每次種植都會推進每日任務，也會讓島嶼開始累積成長節奏。', 'Select “Plant”, then click a farm plot. Planting advances daily tasks and starts your growth loop.'),
        note: localizedText('提示：从番茄或胡萝卜开始最容易快速看到成果。', '提示：從番茄或胡蘿蔔開始最容易快速看到成果。', 'Tip: tomato or carrot is the quickest to see results.')
      },
      {
        title: localizedText('通过建设推动升级', '透過建設推動升級', 'Build to upgrade'),
        body: localizedText('浇水、阳光照射、收获和装饰都会积累 Island XP。达到经验和条件后，再手动点击“升级岛屿”完成扩张。', '澆水、陽光照射、收穫和裝飾都會累積 Island XP。達到經驗和條件後，再手動點擊「升級島嶼」完成擴張。', 'Watering, sunlight, harvesting, and decorating all grant Island XP. When requirements are met, click “Upgrade island”.'),
        note: localizedText('提示：升级不仅涨等级，还会解锁新地块、装饰位和更高级种子。', '提示：升級不僅漲等級，還會解鎖新地塊、裝飾位和更高級種子。', 'Tip: upgrades unlock more plots, decoration slots, and better seeds.')
      },
      {
        title: localizedText('每天回来完成循环', '每天回來完成循環', 'Come back daily'),
        body: localizedText('每日任务、岛屿订单、宠物加成和好友互动会形成一条完整成长线。先把今天的任务做完，再决定下一步扩建方向。', '每日任務、島嶼訂單、寵物加成和好友互動會形成一條完整成長線。先把今天的任務做完，再決定下一步擴建方向。', 'Daily tasks, orders, pet bonuses, and friend interactions form a growth loop. Finish today’s tasks, then decide your next build.'),
        note: localizedText('提示：订单能消耗收获物，好友互动和宠物状态会影响经营收益。', '提示：訂單能消耗收穫物，好友互動和寵物狀態會影響經營收益。', 'Tip: orders consume harvest items; friend and pet status affect rewards.')
      }
    ];

    function renderGuideStep(stepIndex) {
      const step = GUIDE_STEPS[stepIndex] || GUIDE_STEPS[0];
      currentGuideStep = stepIndex;
      if (elements.islandGuideLead) {
        elements.islandGuideLead.textContent = localizedText(
          `第 ${stepIndex + 1} 步，共 ${GUIDE_STEPS.length} 步。`,
          `第 ${stepIndex + 1} 步，共 ${GUIDE_STEPS.length} 步。`,
          `Step ${stepIndex + 1} of ${GUIDE_STEPS.length}`
        );
      }
      if (elements.islandGuideCard) {
        elements.islandGuideCard.innerHTML = `
          <h3>${escapeHtml(step.title)}</h3>
          <p>${escapeHtml(step.body)}</p>
          <div class="guide-note">${escapeHtml(step.note)}</div>
        `;
      }
      if (elements.nextIslandGuide) {
        elements.nextIslandGuide.textContent = stepIndex === GUIDE_STEPS.length - 1
          ? localizedText('开始建设', '開始建設', 'Start building')
          : localizedText('下一步', '下一步', 'Next');
      }
      document.querySelectorAll('.guide-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === stepIndex);
      });
    }

    function maybeOpenIslandGuide() {
      const islandPanel = document.querySelector('[data-panel="island"]');
      if (!islandPanel || islandPanel.hidden || islandState.guideSeen || !elements.islandGuideModal) return;
      elements.islandGuideModal.hidden = false;
      renderGuideStep(0);
    }

    function closeIslandGuide(markSeen = true) {
      if (markSeen) islandState.guideSeen = true;
      if (elements.islandGuideModal) elements.islandGuideModal.hidden = true;
      persistIslandState();
    }

    function renderIslandScene() {
      if (!elements.islandScene) return;
      elements.islandScene.dataset.level = String(islandState.level || 1);
    }

    function openDecorationManageModal(slotIndex) {
      const decoration = (islandState.decorations || [])[slotIndex];
      if (!decoration) {
        selectedDecorationSlot = slotIndex;
        openShopModal('decorations');
        return;
      }
      selectedDecorationSlot = slotIndex;
      const info = IslandGardenModule.DECORATION_TYPES[decoration.type];
      const flipped = normalizeDecorationFlip(decoration.flipped ?? decoration.rotation);
      const decorationNameMap = {
        fence: core.t(language, 'decorFence'),
        fountain: core.t(language, 'decorFountain'),
        bench: core.t(language, 'decorBench'),
        lamp: core.t(language, 'decorLamp'),
        flower: core.t(language, 'decorFlower'),
        statue: core.t(language, 'decorStatue'),
        pond: core.t(language, 'decorPond'),
        bridge: core.t(language, 'decorBridge')
      };
      const decorationName = decorationNameMap[decoration.type] || info?.name || decoration.type;
      if (elements.decorationManageCurrent) {
        elements.decorationManageCurrent.innerHTML = `
          <div class="decoration-current-card">
            <div class="decoration-current-icon">${getDecorationVisualMarkup(decoration.type, info, 'decoration-current-visual', flipped)}</div>
            <div class="decoration-current-name">${escapeHtml(decorationName)}</div>
            <div class="decoration-direction-meta">${escapeHtml(localizedText('当前方向：', '當前方向：', 'Direction: '))}${escapeHtml(getDecorationDirectionLabel(flipped))}</div>
            <div class="decoration-current-meta">${escapeHtml(localizedText('点击“去商店替换”后，新的装饰会直接覆盖当前槽位，不需要先手动清空。', '點擊「去商店替換」後，新的裝飾會直接覆蓋當前槽位，不需要先手動清空。', 'When you choose “Replace in shop”, the new decoration will overwrite this slot directly.'))}</div>
          </div>
        `;
      }
      if (elements.decorationManageModal) {
        elements.decorationManageModal.hidden = false;
      }
    }

    function handleDecorationFlip(nextState) {
      const result = IslandGardenModule.flipDecoration(islandState, selectedDecorationSlot, nextState);
      showMessage(result.message);
      if (!result.success) return;
      updateIslandUI();
      persistIslandState();
      openDecorationManageModal(selectedDecorationSlot);
    }

    function renderUpgradePanel() {
      IslandGardenModule.ensureIslandProgress(islandState);
      const currentLevel = islandState.level;
      const rule = IslandGardenModule.getLevelRule(currentLevel);
      const isReady = IslandGardenModule.canUpgradeIsland(islandState);

      if (!rule) {
        if (elements.upgradeTitle) {
          elements.upgradeTitle.textContent = localizedText(
            `Lv.${currentLevel} · 已达到最高等级`,
            `Lv.${currentLevel} · 已達到最高等級`,
            `Lv.${currentLevel} · Max level reached`
          );
        }
        if (elements.upgradeHint) {
          elements.upgradeHint.textContent = localizedText(
            '你的 Pomoland 已经成长为完整岛屿，可以继续经营与收集资源。',
            '你的 Pomoland 已經成長為完整島嶼，可以繼續經營與收集資源。',
            'Your Pomoland is fully grown. Keep managing and collecting resources!'
          );
        }
        if (elements.islandXpText) elements.islandXpText.textContent = 'MAX';
        if (elements.upgradeRequirementList) {
          elements.upgradeRequirementList.innerHTML = `<span class="upgrade-chip is-met">${escapeHtml(localizedText('已解锁全部等级内容', '已解鎖全部等級內容', 'All levels unlocked'))}</span>`;
        }
        if (elements.upgradeRewardPreview) {
        elements.upgradeRewardPreview.innerHTML = `<span class="reward-chip">${escapeHtml(localizedText('继续专注可获得更多经营资源', '繼續專注可獲得更多經營資源', 'Keep focusing to earn more building resources.'))}</span>`;
        }
        if (elements.upgradeIslandBtn) {
          elements.upgradeIslandBtn.disabled = true;
        elements.upgradeIslandBtn.textContent = localizedText('已满级', '已滿級', 'Max level');
        }
        if (elements.islandUpgradePanel) {
          elements.islandUpgradePanel.classList.remove('is-ready');
        }
        return;
      }

      if (elements.upgradeTitle) {
        elements.upgradeTitle.textContent = `Lv.${currentLevel} -> Lv.${currentLevel + 1}`;
      }
      if (elements.upgradeHint) {
        elements.upgradeHint.textContent = isReady
          ? localizedText('升级条件已满足，点击按钮让岛屿扩张并领取新解锁内容。', '升級條件已滿足，點擊按鈕讓島嶼擴張並領取新解鎖內容。', 'Upgrade is ready. Click to expand the island and claim new unlocks.')
          : localizedText('先积累经验并完成建设条件，再触发岛屿升级。', '先累積經驗並完成建設條件，再觸發島嶼升級。', 'Earn XP and meet the requirements to unlock the next upgrade.');
      }
      if (elements.islandXpText) {
        elements.islandXpText.textContent = `${islandState.exp} / ${rule.requiredXp} XP`;
      }
      if (elements.upgradeRequirementList) {
        elements.upgradeRequirementList.innerHTML = IslandGardenModule
          .getLevelRule(currentLevel)
          ? Object.entries(rule.conditions || {}).map(([key, target]) => {
            const value = Number((islandState.stats && islandState.stats[key]) || 0);
            const met = value >= target;
            return `<span class="upgrade-chip ${met ? 'is-met' : ''}">${met ? '✓' : '•'} ${escapeHtml(getConditionLabel(key, target))} (${value}/${target})</span>`;
          }).join('')
          : '';
      }
      if (elements.upgradeRewardPreview) {
        elements.upgradeRewardPreview.innerHTML = IslandGardenModule.getUpgradeRewards(rule)
          .map((item) => `<span class="reward-chip">${escapeHtml(translateUpgradeRewardItem(item))}</span>`)
          .join('');
      }
      if (elements.upgradeIslandBtn) {
        elements.upgradeIslandBtn.disabled = !isReady;
        elements.upgradeIslandBtn.textContent = isReady
          ? core.t(language, 'islandUpgradeBtn')
          : localizedText('继续建设', '繼續建設', 'Keep building');
      }
      if (elements.islandUpgradePanel) {
        elements.islandUpgradePanel.classList.toggle('is-ready', isReady);
      }
    }

    function openIslandUpgradeModal(result) {
      if (elements.islandUpgradeModalTitle) {
        elements.islandUpgradeModalTitle.textContent = localizedText(
          `Pomoland 升到 Lv.${result.toLevel}`,
          `Pomoland 升到 Lv.${result.toLevel}`,
          `Pomoland reached Lv.${result.toLevel}`
        );
      }
      if (elements.islandUpgradeModalLead) {
        elements.islandUpgradeModalLead.textContent = localizedText(
          `岛屿从 Lv.${result.fromLevel} 升级到 Lv.${result.toLevel}，新的区域和资源已经解锁。`,
          `島嶼從 Lv.${result.fromLevel} 升級到 Lv.${result.toLevel}，新的區域和資源已經解鎖。`,
          `Island upgraded from Lv.${result.fromLevel} to Lv.${result.toLevel}. New areas and rewards unlocked.`
        );
      }
      if (elements.islandUpgradeSummary) {
        const summaryItems = [
          localizedText('Island XP 已达成升级阈值', 'Island XP 已達成升級門檻', 'Island XP requirement met'),
          ...Object.entries((result.rule && result.rule.conditions) || {}).map(([key, target]) => getConditionLabel(key, target))
        ];
        elements.islandUpgradeSummary.innerHTML = `<div class="upgrade-modal-list">${summaryItems.map((item) => `<div class="upgrade-modal-item">${escapeHtml(item)}</div>`).join('')}</div>`;
      }
      if (elements.islandUpgradeRewards) {
        elements.islandUpgradeRewards.innerHTML = `<div class="upgrade-modal-list">${(result.rewards || []).map((item) => `<div class="upgrade-modal-item">${escapeHtml(translateUpgradeRewardItem(item))}</div>`).join('')}</div>`;
      }
      if (elements.islandUpgradePanel) {
        elements.islandUpgradePanel.classList.add('is-celebrating');
        window.setTimeout(() => elements.islandUpgradePanel && elements.islandUpgradePanel.classList.remove('is-celebrating'), 900);
      }
      if (elements.islandScene) {
        elements.islandScene.classList.add('level-up-scene');
        window.setTimeout(() => elements.islandScene && elements.islandScene.classList.remove('level-up-scene'), 900);
      }
      if (elements.islandUpgradeModal) {
        elements.islandUpgradeModal.hidden = false;
      }
    }

    function handleIslandUpgrade() {
      const result = IslandGardenModule.upgradeIsland(islandState);
      showMessage(result.message);
      if (!result.success) return;
      syncIslandToMainResources();
      updateIslandUI();
      persistIslandState();
      openIslandUpgradeModal(result);
    }

    function updateIslandUI() {
      // 始终先把主资源同步进岛屿，保证展示一致
      syncMainToIslandResources();
      IslandGardenModule.ensureIslandProgress(islandState);
      const changed = IslandGardenModule.updateIslandState(islandState);
      // 如果 island 内部有“时间驱动”的变化（比如每日刷新游戏机会），同步回左下角
      if (changed) {
        syncIslandToMainResources();
      }


      // Update header stats
      if (elements.islandLevel) {
        elements.islandLevel.textContent = `Lv.${islandState.level}`;
      }
      if (elements.expFill) {
        const expPercent = islandState.level >= 5 ? 100 : (islandState.exp / islandState.maxExp) * 100;
        elements.expFill.style.width = `${expPercent}%`;
      }
      if (elements.coinsCount) {
        elements.coinsCount.textContent = islandState.coins;
      }
      if (elements.waterCount) {
        elements.waterCount.textContent = islandState.water;
      }
      if (elements.sunlightCount) {
        elements.sunlightCount.textContent = islandState.sunlight;
      }
      if (elements.helpCount) {
        elements.helpCount.textContent = islandState.dailyHelpCount;
      }

      renderUpgradePanel();
      renderIslandScene();

      // Update plots with new structure
      updatePlotsUI();

      // Update pet
      updatePetUI();

      // Update inventory
      updateInventoryUI();

      // Update quick inventory
      updateQuickInventoryUI();

      // Update decorations
      updateDecorationsUI();

      renderDailyTasks();
      renderOrderBoard();
      renderDecorationFilters();
      maybeOpenIslandGuide();

      // Reminders (needs water / needs feed)
      updateIslandAlerts();
    }

    function updateDecorationsUI() {
      const grid = document.querySelector('#decorationsGrid');
      if (!grid) return;
      const slots = Array.from(grid.querySelectorAll('.decoration-slot'));
      if (!slots.length) return;

      const decorationTypes = IslandGardenModule.DECORATION_TYPES || {};
      const decorations = Array.isArray(islandState.decorations) ? islandState.decorations : [];
      const unlockedSlots = IslandGardenModule.getUnlockedDecorationSlots(islandState);

      slots.forEach((slot, index) => {
        const requiredLevel = getDecorationUnlockLevel(index);
        if (index >= unlockedSlots) {
          slot.classList.remove('empty');
          slot.classList.add('locked');
          slot.innerHTML = `<span class="slot-lock">Lv.${requiredLevel} 解锁</span>`;
          return;
        }
        const deco = decorations[index];
        if (!deco) {
          slot.classList.remove('locked');
          slot.classList.add('empty');
          slot.innerHTML = '<span class="slot-plus">+</span>';
          return;
        }
        const info = decorationTypes[deco.type];
        const name = info?.name || deco.type;
        const iconMarkup = getDecorationVisualMarkup(deco.type, info, 'slot-decoration-icon', deco.flipped ?? deco.rotation);
        slot.classList.remove('locked');
        slot.classList.remove('empty');
        slot.innerHTML = `
          <div class="slot-decoration">
            ${iconMarkup}
            <span class="slot-decoration-name">${escapeHtml(name)}</span>
          </div>
          <span class="slot-action">管理</span>
        `;
      });

      updateDecorationsOnIsland();
    }

    function updateDecorationsOnIsland() {
      const layer = document.querySelector('#islandDecorationsLayer');
      if (!layer) return;
      const decorationTypes = IslandGardenModule.DECORATION_TYPES || {};
      const decorations = Array.isArray(islandState.decorations) ? islandState.decorations : [];
      layer.innerHTML = '';
      if (!decorations.length) return;
      decorations.forEach((deco, idx) => {
        if (!deco) return;
        const info = decorationTypes[deco.type];
        const pos = deco.position || { x: 50, y: 52 };
        const node = document.createElement('div');
        node.className = `island-deco deco-${deco.type}`;
        node.style.left = `${pos.x}%`;
        node.style.top = `${pos.y}%`;
        node.style.setProperty('--decoration-scale-x', normalizeDecorationFlip(deco.flipped ?? deco.rotation) ? '-1' : '1');
        node.dataset.decoIndex = String(idx);
        node.setAttribute('aria-label', info?.name || deco.type);
        node.addEventListener('pointerdown', (event) => startDecorationDrag(node, idx, event));
        layer.appendChild(node);
      });
    }

    function updatePlotsUI() {
      const unlockedPlots = IslandGardenModule.getUnlockedPlotCount(islandState);
      islandState.plots.forEach((plot, index) => {
        const plotElement = document.querySelector(`[data-plot="${plot.id}"]`);
        if (!plotElement) return;

        const plotIcon = document.querySelector(`#${plot.id}Icon`);
        const plotName = document.querySelector(`#${plot.id}Name`);
        const plotStatus = document.querySelector(`#${plot.id}Status`);
        const plotProgress = document.querySelector(`#${plot.id}Progress .progress-bar`);
        const plotNeed = document.querySelector(`#${plot.id}Need`);

        if (index >= unlockedPlots) {
          const unlockLevel = getPlotUnlockLevel(index);
          plotElement.classList.add('locked');
          if (plotIcon) plotIcon.textContent = '🔒';
          if (plotName) plotName.textContent = localizedText(`Lv.${unlockLevel} 解锁`, `Lv.${unlockLevel} 解鎖`, `Unlock at Lv.${unlockLevel}`);
          if (plotStatus) plotStatus.textContent = localizedText('升级岛屿后开放', '升級島嶼後開放', 'Unlock by upgrading the island');
          if (plotProgress) plotProgress.style.width = '0%';
          if (plotNeed) plotNeed.style.opacity = '0';
          return;
        }

        plotElement.classList.remove('locked');
        if (plot.crop) {
          const cropType = IslandGardenModule.CROP_TYPES[plot.crop];
          const cropNameKeyMap = {
            tomato: 'fruitTomato',
            strawberry: 'fruitStrawberry',
            carrot: 'fruitCarrot',
            apple: 'fruitApple',
            watermelon: 'fruitWatermelon'
          };
          const cropDisplayName = core.t(language, cropNameKeyMap[plot.crop] || 'fruitTomato') || cropType.name;
          const growthProgress = IslandGardenModule.getGrowthProgress(plot, islandState);
          const stageMeta = getCropStageMeta(plot);
          plotElement.classList.toggle('is-harvestable', growthProgress >= 100);

          if (plotIcon) {
            plotIcon.innerHTML = renderCropVisual(plot);
            if (plotName) plotName.textContent = cropDisplayName;
            if (plotStatus) {
              plotStatus.innerHTML = growthProgress >= 100
                ? localizedText('可收获', '可收穫', 'Ready')
                : `${Math.floor(growthProgress)}% <span class="plot-stage-badge">${escapeHtml(stageMeta.label)}</span>`;
            }
          }

          // Update progress bar
          if (plotProgress) {
            plotProgress.style.width = `${growthProgress}%`;
          }

          // Update water need indicator
          if (plotNeed) {
            if (plot.needsWater) {
              plotNeed.style.opacity = '1';
              plotElement.classList.add('needs-water');
            } else {
              plotNeed.style.opacity = '0';
              plotElement.classList.remove('needs-water');
            }
          }
        } else {
          if (plotIcon) plotIcon.textContent = '🌱';
          if (plotName) plotName.textContent = localizedText('空地块', '空地塊', 'Empty plot');
          if (plotStatus) plotStatus.textContent = localizedText('点击种植', '點擊種植', 'Click to plant');
          if (plotProgress) plotProgress.style.width = '0%';
          if (plotNeed) plotNeed.style.opacity = '0';
          plotElement.classList.remove('needs-water');
          plotElement.classList.remove('is-harvestable');
        }
      });
    }

    function updatePetUI() {
      const activePet = islandState.activePetId
        ? islandState.pets.find(p => p.unlocked && p.id === islandState.activePetId)
        : null;
      const petToShow = activePet || islandState.pets.find(p => p.unlocked);
      if (!petToShow) return;
      const petType = IslandGardenModule.PET_TYPES[petToShow.type];
      const petHappiness = document.querySelector('#petHappiness');
      const petHunger = document.querySelector('#petHunger');
      const petIcon = document.querySelector('#petIcon');
      const petName = document.querySelector('#petName');

      const petNameMap = {
        rabbit: localizedText('小兔子', '小兔子', 'Rabbit'),
        cat: localizedText('猫咪', '貓咪', 'Cat'),
        dog: localizedText('小狗', '小狗', 'Dog'),
        bird: localizedText('小鸟', '小鳥', 'Bird')
      };
      const petEffectMap = {
        rabbit: localizedText('作物生长速度 +12%', '作物生長速度 +12%', 'Crop growth +12%'),
        cat: localizedText('收获金币 +20%', '收穫金幣 +20%', 'Harvest coins +20%'),
        dog: localizedText('好友互动额外 +10 金币', '好友互動額外 +10 金幣', 'Friend interactions +10 coins'),
        bird: localizedText('完成订单额外 +8 XP', '完成訂單額外 +8 XP', 'Orders +8 XP')
      };
      const hoursSinceFed = (Date.now() - petToShow.lastFedAt) / (60 * 60 * 1000);
      const feedIntervalHours = petType.feedInterval / (60 * 60 * 1000);
      const hungry = hoursSinceFed > feedIntervalHours;
      const needsCare = (petToShow.happiness || 0) < 35 || hungry;


      // Update pet sprite and name
      if (petIcon) {
        petIcon.textContent = petType.icon;
      }
      if (petName) {
        petName.textContent = petNameMap[petToShow.type] || petToShow.name;
      }
      if (elements.petBonusLabel) {
        elements.petBonusLabel.textContent = needsCare
          ? localizedText('需要照料后才会提供加成', '需要照料後才會提供加成', 'Needs care to activate bonuses')
          : (petEffectMap[petToShow.type] || core.t(language, 'petBonusLocked'));
      }

      // Update happiness bar
      if (petHappiness) {
        petHappiness.style.width = `${petToShow.happiness}%`;
      }

      // Update hunger bar
      if (petHunger) {
        const hungerPercent = Math.min(100, (hoursSinceFed / feedIntervalHours) * 100);
        petHunger.style.width = `${hungerPercent}%`;
      }

      updatePetListUI();
    }

    function updatePetListUI() {
      if (!elements.petList) return;
      const unlockedPets = islandState.pets.filter(p => p.unlocked);
      if (!unlockedPets.length) {
        elements.petList.innerHTML = '';
        return;
      }
      const activeId = islandState.activePetId || unlockedPets[0].id;
      elements.petList.innerHTML = unlockedPets.map(pet => {
        const info = IslandGardenModule.PET_TYPES[pet.type];
        const isActive = pet.id === activeId;
        return `
          <button class="pet-chip ${isActive ? 'is-active' : ''}" type="button" data-pet-select="${pet.id}">
            <span class="pet-chip-icon">${info.icon}</span>
            <span class="pet-chip-name">${escapeHtml(pet.name)}</span>
          </button>
        `;
      }).join('');
    }

    function openPetFeedModal() {
      if (!elements.petFeedModal || !elements.petFeedList) return;
      const unlockedPets = islandState.pets.filter(p => p.unlocked);
      if (!unlockedPets.length) {
        showMessage('暂无可喂养的宠物');
        return;
      }

      const chanceLeft = islandState.dailyHelpCount || 0;
      elements.petFeedList.innerHTML = unlockedPets.map((pet) => {
        const info = IslandGardenModule.PET_TYPES[pet.type];
        const canFeed = chanceLeft > 0;
        return `
          <div class="pet-feed-item">
            <div>
              <strong>${info.icon} ${escapeHtml(pet.name)}</strong>
              <div class="pet-feed-meta">消耗 1 次游戏机会（剩余 ${chanceLeft}）</div>
            </div>
            <button class="primary-button" type="button" data-feed-pet="${pet.id}" ${canFeed ? '' : 'disabled'}>喂养</button>
          </div>
        `;
      }).join('');
      elements.petFeedModal.hidden = false;
    }

    function updateInventoryUI() {
      // Update quick bag counts (right panel)
      const seedKeys = ['tomato', 'strawberry', 'carrot', 'apple', 'watermelon'];
      const seedIdMap = {
        tomato: '#invTomatoSeed',
        strawberry: '#invStrawberrySeed',
        carrot: '#invCarrotSeed',
        apple: '#invAppleSeed',
        watermelon: '#invWatermelonSeed'
      };
      const cropIdMap = {
        tomato: '#invTomato',
        strawberry: '#invStrawberry',
        carrot: '#invCarrot',
        apple: '#invApple',
        watermelon: '#invWatermelon'
      };

      seedKeys.forEach((key) => {
        const seedNode = document.querySelector(seedIdMap[key]);
        if (seedNode) seedNode.textContent = islandState.inventory.seeds[key] || 0;
        const cropNode = document.querySelector(cropIdMap[key]);
        if (cropNode) cropNode.textContent = islandState.inventory.harvested[key] || 0;
      });

      // Update planting modal seed amounts + lock/unlock
      if (elements.seedTomatoAmount) {
        elements.seedTomatoAmount.textContent = islandState.inventory.seeds.tomato || 0;
      }
      if (elements.seedStrawberryAmount) {
        elements.seedStrawberryAmount.textContent = islandState.inventory.seeds.strawberry || 0;
      }
      if (elements.seedCarrotAmount) {
        elements.seedCarrotAmount.textContent = islandState.inventory.seeds.carrot || 0;
      }
      if (elements.seedAppleAmount) {
        elements.seedAppleAmount.textContent = islandState.inventory.seeds.apple || 0;
      }
      if (elements.seedWatermelonAmount) {
        elements.seedWatermelonAmount.textContent = islandState.inventory.seeds.watermelon || 0;
      }

      // Lock seed options when count is 0
      document.querySelectorAll('.seed-option').forEach((node) => {
        const crop = node.dataset.crop;
        const count = islandState.inventory.seeds[crop] || 0;
        const unlocked = IslandGardenModule.isSeedUnlocked(islandState, crop);
        node.classList.toggle('locked', count <= 0 || !unlocked);
        node.title = unlocked ? '' : `Lv.${IslandGardenModule.getCropUnlockLevel(crop)} 解锁`;
      });

      // Update inventory modal counts (if opened)
      const modalSeedIdMap = {
        tomato: '#invSeedTomato',
        strawberry: '#invSeedStrawberry',
        carrot: '#invSeedCarrot',
        apple: '#invSeedApple',
        watermelon: '#invSeedWatermelon'
      };
      const modalHarvestIdMap = {
        tomato: '#invHarvestTomato',
        strawberry: '#invHarvestStrawberry',
        carrot: '#invHarvestCarrot',
        apple: '#invHarvestApple',
        watermelon: '#invHarvestWatermelon'
      };

      seedKeys.forEach((key) => {
        const seedNode = document.querySelector(modalSeedIdMap[key]);
        if (seedNode) seedNode.textContent = islandState.inventory.seeds[key] || 0;
        const cropNode = document.querySelector(modalHarvestIdMap[key]);
        if (cropNode) cropNode.textContent = islandState.inventory.harvested[key] || 0;
      });

      updateShopAvailability();
    }

    function updateQuickInventoryUI() {
      // Alias to keep old calls safe (inventory UI now handles quick bag too)
      updateInventoryUI();
    }

    function updateShopAvailability() {
      const shopItems = document.querySelectorAll('#shopSeeds .shop-item');
      shopItems.forEach((item) => {
        const crop = item.dataset.item;
        const unlocked = IslandGardenModule.isSeedUnlocked(islandState, crop);
        const button = item.querySelector('.buy-btn');
        item.classList.toggle('locked', !unlocked);
        if (button) {
          button.disabled = !unlocked;
          button.textContent = unlocked ? '购买' : `Lv.${IslandGardenModule.getCropUnlockLevel(crop)} 解锁`;
        }
      });

      document.querySelectorAll('#shopDecorations .shop-item').forEach((item) => {
        const itemType = item.dataset.item;
        const info = IslandGardenModule.DECORATION_TYPES[itemType];
        const button = item.querySelector('.buy-btn');
        const meta = item.querySelector('.shop-meta') || document.createElement('span');
        meta.className = 'shop-meta';
        meta.textContent = `${info?.category || 'all'} · 上限 ${info?.maxCount || 99}`;
        if (!item.querySelector('.shop-meta')) item.appendChild(meta);
        const currentCount = (islandState.decorations || []).filter((decoration) => decoration && decoration.type === itemType).length;
        const overLimit = currentCount >= Number(info?.maxCount || 99) && (!Number.isInteger(selectedDecorationSlot) || (islandState.decorations[selectedDecorationSlot]?.type !== itemType));
        item.classList.toggle('locked', overLimit);
        item.classList.toggle('hidden-by-filter', islandState.decorationFilter !== 'all' && info?.category !== islandState.decorationFilter);
        if (button) {
          button.textContent = overLimit
            ? '已达上限'
            : (Number.isInteger(selectedDecorationSlot) ? '替换' : '购买');
          button.disabled = overLimit;
        }
      });
    }

    function startDecorationDrag(node, index, event) {
      const islandBackground = document.querySelector('.island-background');
      if (!islandBackground) return;
      draggingDecoration = { index, node, islandBackground };
      node.classList.add('is-dragging');
      if (event?.preventDefault) event.preventDefault();
    }

    document.addEventListener('pointermove', (event) => {
      if (!draggingDecoration) return;
      const rect = draggingDecoration.islandBackground.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      draggingDecoration.node.style.left = `${Math.min(80, Math.max(20, x))}%`;
      draggingDecoration.node.style.top = `${Math.min(70, Math.max(34, y))}%`;
    });

    document.addEventListener('pointerup', () => {
      if (!draggingDecoration) return;
      const left = parseFloat(draggingDecoration.node.style.left);
      const top = parseFloat(draggingDecoration.node.style.top);
      draggingDecoration.node.classList.remove('is-dragging');
      IslandGardenModule.moveDecoration(islandState, draggingDecoration.index, { x: left, y: top });
      draggingDecoration = null;
      persistIslandState();
    });

    function handlePlotClick(plotElement) {
      const plotId = plotElement.dataset.plot;
      if (!plotId) return;
      const plot = islandState.plots.find((item) => item.id === plotId);
      if (plot && plot.crop && IslandGardenModule.getGrowthProgress(plot, islandState) >= 100) {
        const result = IslandGardenModule.harvestCrop(islandState, plotId);
        showMessage(result.message);
        if (result.success) {
          syncIslandToMainResources();
          updateIslandUI();
          persistIslandState();
        }
        return;
      }
      handlePlotInteraction(plotId);
    }

    function handlePlotInteraction(plotId) {
      if (!currentTool) {
        showMessage('请先选择右侧「农场工具」中的：种植 / 浇水 / 阳光照射 / 收获');
        return;
      }

      const plot = islandState.plots.find(p => p.id === plotId);
      if (!plot) return;
      const plotIndex = islandState.plots.findIndex((item) => item.id === plotId);
      if (plotIndex >= IslandGardenModule.getUnlockedPlotCount(islandState)) {
        showMessage(`该地块需要 Lv.${getPlotUnlockLevel(plotIndex)} 才能解锁`);
        return;
      }

      switch (currentTool) {
        case 'plant':
          if (plot.crop) {
            showMessage('这个地块已经有作物了');
            return;
          }
          if (elements.plantingModal) {
            elements.plantingModal.hidden = false;
            selectedPlot = plotId;
            updateInventoryUI();
          }
          break;
        case 'water':
          if (plot.crop) {
            const result = IslandGardenModule.waterCrop(islandState, plotId);
            showMessage(result.message);
            if (result.success) syncIslandToMainResources();
            updateIslandUI();
            persistIslandState();
          } else {
            showMessage('这个地块没有作物');
          }
          break;
        case 'sunlight':
          if (plot.crop) {
            const result = IslandGardenModule.sunlightCrop(islandState, plotId);
            showMessage(result.message);
            if (result.success) syncIslandToMainResources();
            updateIslandUI();
            persistIslandState();
          } else {
            showMessage('这个地块没有作物');
          }
          break;
        case 'harvest':
          if (!plot.crop) {
            showMessage('这个地块没有作物');
            return;
          }
          if (IslandGardenModule.getGrowthProgress(plot, islandState) >= 100) {
            const result = IslandGardenModule.harvestCrop(islandState, plotId);
            showMessage(result.message);
            if (result.success) syncIslandToMainResources();
            updateIslandUI();
            persistIslandState();
          } else {
            const cropType = IslandGardenModule.CROP_TYPES[plot.crop];
            const remainingMs = Math.max(0, cropType.growthTime - (Date.now() - plot.plantedAt));
            const remainingMin = Math.ceil(remainingMs / (60 * 1000));
            showMessage(`作物还没成熟，预计还需 ${remainingMin} 分钟`);
          }
          break;
        default:
          showMessage('请选择有效的工具');
      }
    }

    function plantSelectedCrop(cropType) {
      if (!selectedPlot) return;

      const result = IslandGardenModule.plantCrop(islandState, selectedPlot, cropType);
      if (result.success) {
        showMessage(result.message);
        if (elements.plantingModal) {
          elements.plantingModal.hidden = true;
        }
        updateIslandUI();
        persistIslandState();
      } else {
        showMessage(result.message);
      }
    }

    function handleShopTabChange(tabElement) {
      if (!tabElement) return;
      document.querySelectorAll('.shop-tab').forEach(tab => {
        tab.classList.remove('active');
      });
      tabElement.classList.add('active');

      const tabName = tabElement.dataset.shopTab;
      document.querySelectorAll('.shop-section').forEach(section => {
        section.classList.add('hidden');
      });

      switch (tabName) {
        case 'decorations':
          if (elements.shopDecorations) elements.shopDecorations.classList.remove('hidden');
          updateShopAvailability();
          break;
        case 'seeds':
          if (elements.shopSeeds) elements.shopSeeds.classList.remove('hidden');
          updateShopAvailability();
          break;
        case 'pets':
          if (elements.shopPets) elements.shopPets.classList.remove('hidden');
          break;
      }
    }

    function handleShopPurchase(shopItem) {
      const itemType = shopItem.dataset.item;
      const cost = parseInt(shopItem.dataset.cost);

      if (islandState.coins < cost) {
        showMessage(`金币不足：需要 ${cost}，当前 ${islandState.coins}`);
        return;
      }

      // Handle different item types
      const parentSection = shopItem.closest('.shop-section');
      if (parentSection === elements.shopDecorations) {
        const hasSlotSelection = Number.isInteger(selectedDecorationSlot);
        const result = IslandGardenModule.buyDecoration(islandState, itemType, selectedDecorationSlot);
        showMessage(result.message);
        if (result.success) {
          selectedDecorationSlot = null;
          if (elements.decorationManageModal) elements.decorationManageModal.hidden = true;
          if (hasSlotSelection && elements.shopModal) elements.shopModal.hidden = true;
        }
      } else if (parentSection === elements.shopSeeds) {
        if (!IslandGardenModule.isSeedUnlocked(islandState, itemType)) {
          showMessage(`Lv.${IslandGardenModule.getCropUnlockLevel(itemType)} 解锁 ${IslandGardenModule.CROP_TYPES[itemType].name}种子`);
          return;
        }
        // Purchase seeds
        islandState.coins -= cost;
        if (!islandState.inventory.seeds[itemType]) {
          islandState.inventory.seeds[itemType] = 0;
        }
        islandState.inventory.seeds[itemType] += 1;
        showMessage(`购买成功：+1 ${IslandGardenModule.CROP_TYPES[itemType].name}种子`);
      } else if (parentSection === elements.shopPets) {
        const result = IslandGardenModule.unlockPet(islandState, itemType);
        showMessage(result.message);
        if (result.success) {
          const newest = [...islandState.pets].reverse().find(p => p.unlocked && p.type === itemType);
          if (newest) islandState.activePetId = newest.id;
        }
      }

      // 购买会改变岛屿金币：同步回左下角资源
      syncIslandToMainResources();
      updateIslandUI();
      persistIslandState();
    }

    function handleQuickAction(action) {
      switch (action) {
        case 'inventory':
          if (elements.inventoryModal) {
            elements.inventoryModal.hidden = false;
            updateInventoryUI();
          }
          break;
        case 'shop':
          openShopModal('decorations');
          break;
        case 'achievements':
          state.activeView = 'friends';
          state.activeTab = 'achievements';
          document.querySelectorAll('.workspace-panel').forEach(panel => {
            panel.hidden = panel.dataset.panel !== 'friends';
          });
          document.querySelectorAll('.workspace-nav-button').forEach(button => {
            button.classList.toggle('is-active', button.dataset.view === 'friends');
          });
          renderAll();
          break;
      }
    }

    function handleFriendInteraction(action) {
      if (!currentFriendId) {
        showMessage('请先选择好友');
        return;
      }

      if (islandState.dailyHelpCount <= 0) {
        showMessage('今日互动次数已用完');
        return;
      }

      let result;
      if (action === 'water') {
        result = IslandGardenModule.helpFriendWater(currentFriendId, 'plot1', islandState);
      } else if (action === 'steal') {
        result = IslandGardenModule.stealFriendCrop(currentFriendId, 'plot1', islandState);
      } else if (action === 'gift') {
        result = IslandGardenModule.giftFriendCrop(currentFriendId, islandState, 'tomato');
      }

      if (result.success) {
        showMessage(result.message);
        if (elements.friendInteractionModal) {
          elements.friendInteractionModal.hidden = true;
        }
        syncIslandToMainResources();
        updateIslandUI();
        persistIslandState();
      } else {
        showMessage(result.message);
      }
    }

    function updateIslandAlerts() {
      const needsWaterCount = islandState.plots.filter(p => p.crop && p.needsWater).length;
      const activePet = islandState.pets.find(p => p.unlocked);
      let petNeedsFeed = false;
      if (activePet) {
        const petType = IslandGardenModule.PET_TYPES[activePet.type];
        petNeedsFeed = (Date.now() - activePet.lastFedAt) > petType.feedInterval;
      }

      if (!needsWaterCount && !petNeedsFeed) return;
      const now = Date.now();
      if (now - lastIslandAlertAt < 10 * 60 * 1000) return; // 10分钟提醒一次
      lastIslandAlertAt = now;

      const message = needsWaterCount && petNeedsFeed
        ? localizedText(
          `⏰ 提醒：${needsWaterCount} 块农田需要浇水，宠物也饿了。`,
          `⏰ 提醒：${needsWaterCount} 塊農田需要澆水，寵物也餓了。`,
          `⏰ Reminder: ${needsWaterCount} farm plot(s) need watering, and your pet is hungry.`
        )
        : needsWaterCount
          ? localizedText(
            `⏰ 提醒：${needsWaterCount} 块农田需要浇水。`,
            `⏰ 提醒：${needsWaterCount} 塊農田需要澆水。`,
            `⏰ Reminder: ${needsWaterCount} farm plot(s) need watering.`
          )
          : localizedText('⏰ 提醒：宠物需要喂养。', '⏰ 提醒：寵物需要餵養。', '⏰ Reminder: your pet needs food.');

      showMessage(message);
      try {
        if (navigator.vibrate) navigator.vibrate([80, 40, 80]);
      } catch (e) {}
      try {
        if ('Notification' in window && Notification.permission === 'granted') {
          new Notification(localizedText('Pomoland 提醒', 'Pomoland 提醒', 'Pomoland Reminder'), { body: message });
        }
      } catch (e) {}
    }

    function runMoodRecommendation() {
      const mood = document.querySelector('#moodSelect')?.value || 'stressed';
      const output = document.querySelector('#aiRecommendOutput');

      const plans = {
        stressed: { title: '压力大', decoration: 'pond', cost: 600, action: '去「社交/帮助浇水」或先做一个 20-25 分钟短专注，拿到 Bonus 再建设。' },
        tired: { title: '疲惫', decoration: 'bench', cost: 300, action: '建议做一个 20 分钟轻专注 + 喂养宠物，优先恢复节奏。' },
        anxious: { title: '焦虑', decoration: 'lamp', cost: 200, action: '建议先完成一个最小任务块（20-25 分钟），再用装饰把岛变“更可控”。' },
        happy: { title: '开心', decoration: 'flower', cost: 150, action: '适合扩张：种植 + 装饰，顺便挑战 30 分钟专注。' }
      };

      const plan = plans[mood] || plans.stressed;
      const decoName = IslandGardenModule.DECORATION_TYPES[plan.decoration]?.name || plan.decoration;
      const canAfford = islandState.coins >= plan.cost;

      const text = `心情：${plan.title}｜推荐装饰：${decoName}（💰${plan.cost}）｜${canAfford ? '你现在就买得起，可直接去商店购买。' : '金币不足，先完成一次 Focus Mode 或同步资源。'}\n建议动作：${plan.action}`;
      if (output) output.textContent = text;
      else showMessage(text);

      if (elements.shopModal) {
        elements.shopModal.hidden = false;
        const decoTab = document.querySelector('[data-shop-tab="decorations"]');
        if (decoTab) handleShopTabChange(decoTab);
        const item = elements.shopModal.querySelector(`.shop-item[data-item="${plan.decoration}"]`);
        if (item) {
          item.classList.add('is-recommended');
          try { item.scrollIntoView({ block: 'center', behavior: 'smooth' }); } catch (e) {}
          window.setTimeout(() => item.classList.remove('is-recommended'), 4000);
        }
      }
    }

    let toastTimer = null;
    function translateToastText(rawText) {
      const text = String(rawText ?? '');
      if (language === 'zh-CN') return text;

      const exactMap = {
        '水滴不足': localizedText('水滴不足', '水滴不足', 'Not enough water.'),
        '阳光不足': localizedText('阳光不足', '陽光不足', 'Not enough sunlight.'),
        '作物还没成熟': localizedText('作物还没成熟', '作物還未成熟', 'Not ripe yet.'),
        '作物已成熟，无需浇水，直接收获即可': localizedText('作物已成熟，无需浇水，直接收获即可', '作物已成熟，無需澆水，直接收穫即可', 'Crop is ripe—harvest it instead of watering.'),
        '作物已成熟，无需照射，直接收获即可': localizedText('作物已成熟，无需照射，直接收获即可', '作物已成熟，無需照射，直接收穫即可', 'Crop is ripe—harvest it instead of using sunlight.'),
        '浇水成功，作物生长时间减少 5 分钟': localizedText('浇水成功，作物生长时间减少 5 分钟', '澆水成功，作物生長時間減少 5 分鐘', 'Watered! Growth time -5 min.'),
        '阳光照射成功，作物生长时间减少 10 分钟': localizedText('阳光照射成功，作物生长时间减少 10 分钟', '陽光照射成功，作物生長時間減少 10 分鐘', 'Sunlight boost! Growth time -10 min.'),
        '已帮助浇水 +1': localizedText('已帮助浇水 +1', '已幫助澆水 +1', 'Helped water +1'),
        '已尝试偷取果实': localizedText('已尝试偷取果实', '已嘗試偷取果實', 'Tried to steal a fruit.'),
        '已赠送礼物': localizedText('已赠送礼物', '已贈送禮物', 'Gift sent.'),
        '好友申请已发送': localizedText('好友申请已发送', '好友申請已發送', 'Friend request sent.'),
        '已添加为好友': localizedText('已添加为好友', '已添加為好友', 'Friend request accepted.'),
        '已拒绝': localizedText('已拒绝', '已拒絕', 'Request rejected.'),
        '已退出登录': localizedText('已退出登录', '已退出登入', 'Logged out.'),
        '昵称已更新': localizedText('昵称已更新', '暱稱已更新', 'Nickname updated.'),
        '已清空本地缓存（云端存档不受影响）': localizedText('已清空本地缓存（云端存档不受影响）', '已清空本地快取（雲端存檔不受影響）', 'Local cache cleared (cloud save unchanged).'),
        '已切换为左右翻转': localizedText('已切换为左右翻转', '已切換為左右翻轉', 'Switched to flipped direction.'),
        '已恢复默认方向': localizedText('已恢复默认方向', '已恢復預設方向', 'Restored default direction.'),
        '该装饰位尚未解锁': localizedText('该装饰位尚未解锁', '該裝飾位尚未解鎖', 'This decoration slot is locked.'),
        '当前装饰位已满，升级岛屿可解锁更多位置': localizedText('当前装饰位已满，升级岛屿可解锁更多位置', '當前裝飾位已滿，升級島嶼可解鎖更多位置', 'Decoration slots are full. Upgrade the island to unlock more.'),
        '该装饰位没有可移除的装饰': localizedText('该装饰位没有可移除的装饰', '該裝飾位沒有可移除的裝飾', 'Nothing to remove in this slot.'),
        '已更新装饰位置': localizedText('已更新装饰位置', '已更新裝飾位置', 'Decoration position updated.'),
        '找不到订单': localizedText('找不到订单', '找不到訂單', 'Order not found.'),
        '该订单已完成': localizedText('该订单已完成', '該訂單已完成', 'This order is already completed.')
      };
      if (exactMap[text]) return exactMap[text];

      // Patterns
      // e.g. "金币不足：需要 200，当前 50"
      const coinMatch = text.match(/^金币不足：需要\s*(\d+)\s*，当前\s*(\d+)\s*$/);
      if (coinMatch) {
        const need = coinMatch[1];
        const have = coinMatch[2];
        return localizedText(
          `金币不足：需要 ${need}，当前 ${have}`,
          `金幣不足：需要 ${need}，當前 ${have}`,
          `Not enough coins: need ${need}, you have ${have}.`
        );
      }

      // e.g. "作物还没成熟，预计还需 12 分钟"
      const growMatch = text.match(/^作物还没成熟，预计还需\s*(\d+)\s*分钟$/);
      if (growMatch) {
        const mins = growMatch[1];
        return localizedText(
          `作物还没成熟，预计还需 ${mins} 分钟`,
          `作物還未成熟，預計還需 ${mins} 分鐘`,
          `Not ripe yet—about ${mins} min left.`
        );
      }

      // e.g. "金币不足200"
      const coinShort = text.match(/^金币不足(\d+)$/);
      if (coinShort) {
        const need = coinShort[1];
        return localizedText(
          `金币不足${need}`,
          `金幣不足${need}`,
          `Not enough coins: need ${need}.`
        );
      }

      // e.g. "升级成功！Pomoland 已升到 Lv.3"
      const upgradeMatch = text.match(/^升级成功！Pomoland 已升到 Lv\.(\d+)$/);
      if (upgradeMatch) {
        const lv = upgradeMatch[1];
        return localizedText(
          `升级成功！Pomoland 已升到 Lv.${lv}`,
          `升級成功！Pomoland 已升到 Lv.${lv}`,
          `Upgrade complete! Pomoland is now Lv.${lv}.`
        );
      }

      // e.g. "当前等级只能使用前 4 块农田"
      const plotLimit = text.match(/^当前等级只能使用前\s*(\d+)\s*块农田$/);
      if (plotLimit) {
        const n = plotLimit[1];
        return localizedText(
          `当前等级只能使用前 ${n} 块农田`,
          `當前等級只能使用前 ${n} 塊農田`,
          `At your current level, you can only use the first ${n} plot(s).`
        );
      }

      // e.g. "订单完成：新鲜沙拉订单"
      const orderDone = text.match(/^订单完成：(.*)$/);
      if (orderDone) {
        const title = orderDone[1];
        return localizedText(
          `订单完成：${title}`,
          `訂單完成：${title}`,
          `Order completed: ${title}`
        );
      }

      // e.g. "收获成功！获得2个番茄"
      const harvestMatch = text.match(/^收获成功！获得(\d+)个(.+)$/);
      if (harvestMatch) {
        const count = harvestMatch[1];
        const name = harvestMatch[2];
        const enNameMap = {
          '番茄': 'Tomato',
          '草莓': 'Strawberry',
          '胡萝卜': 'Carrot',
          '蘋果': 'Apple',
          '苹果': 'Apple',
          '西瓜': 'Watermelon'
        };
        const enName = enNameMap[name] || name;
        return localizedText(
          `收获成功！获得${count}个${name}`,
          `收穫成功！獲得${count}個${name}`,
          `Harvested! Got ${count} ${enName}.`
        );
      }

      return text;
    }

    function showMessage(message) {
      const text = translateToastText(message);
      if (elements.islandMessage) {
        elements.islandMessage.textContent = text;
        setTimeout(() => {
          if (elements.islandMessage && elements.islandMessage.textContent === text) {
            elements.islandMessage.textContent = '';
          }
        }, 3000);
      }

      const toast = document.querySelector('#toast');
      if (toast) {
        toast.textContent = text;
        toast.hidden = false;
        toast.classList.add('show');
        if (toastTimer) window.clearTimeout(toastTimer);
        toastTimer = window.setTimeout(() => {
          toast.classList.remove('show');
          toast.hidden = true;
        }, 2600);
      }
    }

    function persistIslandState() {
      writeStorage(STORAGE_KEYS.islandState, islandState);
      scheduleCloudSave();
    }

    function restoreIslandState() {
      const savedIslandState = readStorage(STORAGE_KEYS.islandState);
      if (savedIslandState) {
        islandState = { ...islandState, ...savedIslandState };
        islandState.plots = savedIslandState.plots || islandState.plots;
        islandState.pets = savedIslandState.pets || islandState.pets;
        islandState.decorations = savedIslandState.decorations || islandState.decorations;
        islandState.inventory = {
          ...islandState.inventory,
          ...(savedIslandState.inventory || {}),
          seeds: { ...islandState.inventory.seeds, ...((savedIslandState.inventory || {}).seeds || {}) },
          harvested: { ...islandState.inventory.harvested, ...((savedIslandState.inventory || {}).harvested || {}) }
        };
        islandState.achievements = { ...islandState.achievements, ...(savedIslandState.achievements || {}) };
        islandState.stats = { ...(islandState.stats || {}), ...((savedIslandState.stats) || {}) };
        islandState.social = { ...(islandState.social || {}), ...((savedIslandState.social) || {}) };
        islandState.dailyProgress = { ...(islandState.dailyProgress || {}), ...((savedIslandState.dailyProgress) || {}) };
        islandState.orderBoard = { ...(islandState.orderBoard || {}), ...((savedIslandState.orderBoard) || {}) };
        islandState.guideSeen = Boolean(savedIslandState.guideSeen);
        islandState.decorationFilter = savedIslandState.decorationFilter || islandState.decorationFilter;
        islandState.lastUpgrade = savedIslandState.lastUpgrade || null;
      }
      IslandGardenModule.ensureIslandProgress(islandState);
      updateIslandUI();
    }

    function bindIslandDirectClicks() {
      const toolLabel = (tool) => {
        if (tool === 'plant') return '种植';
        if (tool === 'water') return '浇水';
        if (tool === 'sunlight') return '阳光照射';
        if (tool === 'harvest') return '收获';
        return tool;
      };

      // Some environments click on nested elements may not bubble as expected;
      // bind directly to plots/tools to guarantee interaction works.
      document.querySelectorAll('.plot[data-plot]').forEach((plot) => {
        if (plot.dataset.boundClick === '1') return;
        plot.dataset.boundClick = '1';
        plot.addEventListener('click', (event) => {
          // Avoid the global document click handler from interfering.
          if (event) {
            event.preventDefault();
            event.stopPropagation();
          }
          handlePlotClick(plot);
        });
      });

      document.querySelectorAll('.tool-btn[data-tool="plant"], .tool-btn[data-tool="water"], .tool-btn[data-tool="sunlight"], .tool-btn[data-tool="harvest"]').forEach((btn) => {
        if (btn.dataset.boundClick === '1') return;
        btn.dataset.boundClick = '1';
        btn.addEventListener('click', (event) => {
          // Avoid the global document click handler from double-toggling the tool.
          if (event) {
            event.preventDefault();
            event.stopPropagation();
          }
          const tool = btn.dataset.tool;
          currentTool = currentTool === tool ? null : tool;
          document.querySelectorAll('.tool-btn[data-tool="plant"], .tool-btn[data-tool="water"], .tool-btn[data-tool="sunlight"], .tool-btn[data-tool="harvest"]').forEach(b => b.classList.remove('active'));
          if (currentTool) {
            btn.classList.add('active');
            showMessage(`已选择「${toolLabel(tool)}」，点击地块操作`);
          } else {
            showMessage('已取消工具选择');
          }
        });
      });

      [elements.flipDecorationBtn, elements.resetDecorationFlipBtn].forEach((btn) => {
        if (!btn || btn.dataset.boundClick === '1') return;
        btn.dataset.boundClick = '1';
        btn.addEventListener('click', (event) => {
          if (event) {
            event.preventDefault();
            event.stopPropagation();
          }
          handleDecorationFlip(btn.id === 'flipDecorationBtn' ? 1 : 0);
        });
      });
    }

    // Initialize island state
    restoreIslandState();
    ensureTransparentDecorationVisuals();
    bindIslandDirectClicks();

    // Update island state periodically
    setInterval(() => {
      IslandGardenModule.updateIslandState(islandState);
      updateIslandUI();
      persistIslandState();
      bindIslandDirectClicks();
    }, 60000); // Update every minute
  });
}
