const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3000;

// CORSを有効にする
app.use(cors());

// リクエストボディをJSON形式で解析する
app.use(express.json());

// Gmailを使ってメール送信の設定
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ktc24a31g0014@edu.kyoto-tech.ac.jp',  // 自分のGmailアドレス
    pass: 'nebi ujkx evjd qzrv'    // Gmailのパスワード（またはアプリパスワード）
  }
});

// メール送信のAPIエンドポイント
app.post('/send-email', (req, res) => {
  const { name, email, toro, idname, message } = req.body;

  const mailOptions = {
    from: email,  // 送信元メールアドレス
    to: 'ktc24a31g0014@edu.kyoto-tech.ac.jp',  // 送信先のGmailアドレス
    subject: `仮入隊申請 from ${name}`,
    text: `
      名前: ${name}
      メールアドレス: ${email}
      総合トロフィー: ${toro}
      ブロスタ名+id: ${idname}
      決意: ${message}
    `
  };

  // メールを送信
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('メール送信エラー:', error);
      return res.status(500).json({ message: 'メール送信に失敗しました', error });
    }
    console.log('送信成功:', info);
    res.status(200).json({ message: 'メールが正常に送信されました', info });
  });
});

// サーバーを起動
app.listen(port, () => {
  console.log(`サーバーは http://localhost:${port} で動作中`);
});
