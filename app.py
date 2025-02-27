from flask import Flask, request, jsonify
from flask_mail import Mail, Message
from flask_cors import CORS
import os
from dotenv import load_dotenv

# .envファイルの読み込み
load_dotenv()

# Flaskアプリケーションの設定
app = Flask(__name__)
CORS(app)  # CORSを有効化

# メール設定（環境変数を使用）
app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # 使用するSMTPサーバー
app.config['MAIL_PORT'] = 587  # メールサーバーのポート（Gmailの場合は587）
app.config['MAIL_USE_TLS'] = True  # TLS暗号化を使用する
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')  # 送信元のメールアドレス
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')  # 送信元のメールアドレスのパスワード
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')  # 送信者アドレス（同じにすることが多い）

# Mailオブジェクトの作成
mail = Mail(app)

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()

    # 受け取ったデータをログに出力
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')

    # メール作成
    subject = "新しいお問い合わせ"
    body = f"""
    お名前: {name}
    メールアドレス: {email}
    お問い合わせ内容:
    {message}
    """

    # メール送信
    try:
        msg = Message(subject, recipients=['recipient_email@example.com'])  # 宛先のメールアドレスを指定
        msg.body = body
        mail.send(msg)
        return jsonify({"message": "お問い合わせありがとうございました！"})
    except Exception as e:
        print(f"メール送信エラー: {e}")
        return jsonify({"error": "メール送信に失敗しました。後ほど再試行してください。"}), 500

if __name__ == '__main__':
    app.run(debug=True)
