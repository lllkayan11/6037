from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import re

app = Flask(__name__)
CORS(app)  # 允许前端跨域访问

# 模拟数据库：用来临时存储手机号对应的验证码
memory_store = {}

@app.route('/api/send-sms', methods=['POST'])
def send_sms():
    data = request.get_json()
    phone = data.get('phone', '')

    # 验证手机号格式
    if not re.match(r'^1[3-9]\d{9}$', phone):
        return jsonify({"success": False, "message": "无效的手机号码"}), 400

    # 生成真实的 4 位随机验证码
    code = str(random.randint(1000, 9999))
    
    # 存入"数据库"
    memory_store[phone] = code

    # TODO: 这里未来会替换成真实的阿里云/Twilio短信发送代码
    print(f"\n[阿里云API模拟] 向手机号 {phone} 发送了验证码: {code}\n")

    # 注意：在真实的生产环境中，这里绝对不会把 code 返回给前端！
    # 为了你在本地能弹窗看到，我们这里特意把它塞在 message 里
    return jsonify({
        "success": True, 
        "message": f"短信发送成功",
        "demo_code": code  # 仅供本地开发测试使用
    })

@app.route('/api/verify-code', methods=['POST'])
def verify_code():
    data = request.get_json()
    phone = data.get('phone', '')
    code = data.get('code', '')

    # 对比服务器里存的验证码
    if phone in memory_store and memory_store[phone] == code:
        # 验证成功后，清除该验证码
        del memory_store[phone]
        return jsonify({"success": True, "message": "验证成功"})
    else:
        return jsonify({"success": False, "message": "验证码错误"}), 400

if __name__ == '__main__':
    print("🚀 Pomoland 后端服务器已启动，运行在 http://localhost:3000")
    app.run(port=3000, debug=True)
