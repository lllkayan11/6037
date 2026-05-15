require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// DeepSeek API configuration
const openai = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: process.env.DEEPSEEK_BASE_URL, // 使用环境变量
});

// API Endpoint for generating tasks
app.post('/api/generate-tasks', async (req, res) => {
  try {
    const { goal, language } = req.body;

    if (!goal || !language) {
      return res.status(400).json({ error: 'Goal and language are required.' });
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

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
