<template>
  <div id="app">
    <div class="container">
      <h2>仮入隊申請</h2>

      <section id="contact" class="contact">
        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">お名前</label>
            <input type="text" id="name" v-model="form.name" required placeholder="山田太郎：スーパーITエンジニア専攻・学年" />
          </div>

          <div class="form-group">
            <label for="email">メールアドレス</label>
            <input type="email" id="email" v-model="form.email" required placeholder="メールアドレス" />
          </div>

          <div class="form-group">
            <label for="message">詳細</label>
            <textarea id="message" v-model="form.message" required placeholder="総合トロ〇〇 決意・目標"></textarea>
          </div>

          <button type="submit" class="submit-btn">送信する</button>
        </form>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from 'emailjs-com';
import { useRouter } from 'vue-router'; // useRouter フックをインポート

// フォームのデータ
const form = ref({
  name: '',
  email: '',
  message: ''
});

// useRouter を使用して、ページ遷移を行う
const router = useRouter();

const handleSubmit = async () => {
  const formData = {
    name: form.value.name,
    email: form.value.email,
    message: form.value.message
  };

  try {
    // EmailJS を使ってメール送信
    const response = await emailjs.send(
      'service_49jrbwf',    // サービスID（Gmailなどの設定時に作成したもの）
      'template_yxrt96p',   // 作成したテンプレートID
      formData,             // フォームのデータ
      'R_fswn6SpvTPknVa6'     // EmailJSのパブリックキー
    );

    if (response.status === 200) {
      alert('お問い合わせありがとうございました！');

      // フォームをリセット
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';

      // フォーム送信後にページ遷移
      router.push({ name: 'thankyou' }); // 'thankyou' は遷移先のページ名（ルート名）
    } else {
      alert('メール送信に失敗しました。再試行してください。');
    }
  } catch (error) {
    console.error('エラー:', error);
    alert('メール送信に失敗しました。再試行してください。');
  }
};
</script>

<style scoped>
/* グローバル設定 */
a {
  color: #1e90ff;
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
}

#app {
  position: relative;
  background-image: url('/assets/back.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  font-family: 'Arial', sans-serif;
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 2.5em;
  margin-top: 3rem;
  text-align: center;
  padding-bottom: 20px;
}

/* お問い合わせフォーム */
.contact {
  padding: 20px;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin: 15px 0;
  text-align: left;
  width: 100%;
}

label {
  display: block;
  font-size: 1.1em;
  margin-bottom: 8px;
}

input, textarea {
  width: 100%;
  padding: 12px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #ccc;
}

textarea {
  min-height: 150px;
  min-width: 500px;
  resize: vertical;
}

button.submit-btn {
  background-color: #e91eff;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  cursor: pointer;
  margin-top: 20px;
}

button.submit-btn:hover {
  background-color: #e91effb4;
}

.container {
  position: absolute; /* Overlay it over the app */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(51, 51, 51, 0.384); /* Semi-transparent background */
  z-index: 1; /* Ensure the container sits above the background */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align content to the top */
  padding: 20px;
}

/* スマホ対応（レスポンシブ） */
@media (max-width: 768px) {
  h2 {
    font-size: 2em;
  }

  .form-group {
    margin: 12px 0;
  }

  input, textarea, button.submit-btn {
    padding: 10px;
    font-size: 1em;
  }

  button.submit-btn {
    width: 100%;
  }
}
</style>
