from flask import Flask, request, jsonify
from flask_cors import CORS
import random
import re

app = Flask(__name__)
CORS(app)

memory_store = {}

@app.route('/api/send-sms', methods=['POST'])
def send_sms():
    data = request.get_json()
    phone = data.get('phone', '')

    if not re.match(r'^1[3-9]\d{9}$', phone):
        return jsonify({"success": False, "message": "无效的手机号码"}), 400

    code = str(random.randint(1000, 9999))
    memory_store[phone] = code

    print(f"\n[阿里云API模拟] 向手机号 {phone} 发送了验证码: {code}\n")

    return jsonify({
        "success": True,
        "message": "短信发送成功",
        "demo_code": code
    })

@app.route('/api/verify-code', methods=['POST'])
def verify_code():
    data = request.get_json()
    phone = data.get('phone', '')
    code = data.get('code', '')

    if phone in memory_store and memory_store[phone] == code:
        del memory_store[phone]
        return jsonify({"success": True, "message": "验证成功"})
    else:
        return jsonify({"success": False, "message": "验证码错误"}), 400

if __name__ == '__main__':
    print("Pomoland SMS 后端启动: http://localhost:5050")
    app.run(port=5050, debug=True)
