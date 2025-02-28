<template>
  <div id="app">
    <div class="container">
    <div v-if="member" class="member-container">
    <div class="member-image">
      <img :src="member.image" alt="{{ member.name }}の画像" class="member-img">
    </div>
    <div class="member-info">
      <h1>{{ member.name }}選手</h1>
      <p class="member-p"><strong>得意キャラ:</strong> {{ member.favorite }}</p>
      <p class="member-p"><strong>総合トロフィー:</strong> {{ member.toro }}</p>
      <div class="social-links">
        <a :href="member.instagram" target="_blank">
          <img src="../../public/assets/icon-ig.png" alt="{{ member.name }}のInstagram" class="social-icon">
        </a>
        <a :href="member.x" target="_blank">
          <img src="../../public/assets/icon-x.png" alt="{{ member.name }}のTwitter" class="social-icon">
        </a>
        <a :href="member.youtube" target="_blank">
          <img src="../../public/assets/icon-you.png" alt="{{ member.name }}のYouTube" class="social-icon">
        </a>
        <a :href="member.tiktok" target="_blank">
          <img src="../../public/assets/icon-tiktok.png" alt="{{ member.name }}のTikTok" class="social-icon">
        </a>
      </div>

    </div>

  </div>


  <div v-else>
    <p>メンバーが見つかりません。</p>
  </div>
  <div class="center-container">
    <nuxt-link to="/about">
      <button class="center-button">一覧へ</button>
    </nuxt-link>
  </div>
  </div>
  </div>


</template>
<script setup>

import membersData from '~/data/members.json'

// ルートパラメータからIDを取得（string型として扱う）
const route = useRoute()
const memberId = route.params.id // そのままstring型として取得
const member = ref(null)

// コンポーネントのマウント後にメンバー情報を取得
onMounted(() => {
  // メンバーIDに基づいてデータをフィルタリング
  member.value = membersData.find((m) => m.id === memberId)
})
</script>


<style>

#app {
  position: relative;
  background-image: url('/assets/back.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  font-family: 'Arial', sans-serif;
  margin: 0;
  min-height: 100vh; /* 画面の高さに合わせる */
  display: flex;
  flex-direction: column;
  height: 300vh; /* min-height から height に変更 */
}


h1{


font-size: 42px;


}

.member-p{
  font-size: 28px;
}
.member-container {
  display: flex;
  align-items: center; /* 縦方向の中央揃え */
  justify-content: center; /* 横方向の中央揃え */
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto; /* 左右中央揃え */
  margin-bottom: 2rem; /* 下の余白も調整 */
}



.member-image {
  flex-shrink: 0;
  margin-right: 20px;
}

.member-img {
  width: 500px;
  height: 500px;
  object-fit: cover;
}

.member-info {
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.6); /* 背景を少し暗くして可読性向上 */
  border-radius: 10px; /* 角を丸くする */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3); /* 少し影をつける */
  width: 1000px; /* 'rem'から'px'に変更（意図的かどうか不明） */
  height: auto; /* 高さを自動に調整 */
  padding: 20px; /* 内側の余白を調整 */
  text-align: center; /* テキストを中央揃え */
}

.center-button{
      background-color: #e91eff;
}




a {
    color: #1e90ff;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  p{
    color: white;

  }

a {
    color: #1e90ff;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  p{
    color: white;
  }

  .center-container {
  display: flex;
  justify-content: center; /* 水平中央 */
  align-items: center;     /* 垂直中央 */
margin-bottom: 3rem;
}

.center-button {
  padding: 10px 20px; /* ボタンのサイズ調整 */
  font-size: 16px;    /* ボタンのフォントサイズ */
  cursor: pointer;
  border: none;
  background-color: #e91eff;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.center-button:hover {
  background-color: #e91eff; /* ボタンホバー時の色 */
}

/* フッター */
footer {
  background-color: rgba(17, 17, 17, 0.8);
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-links {
  margin-top: 10px;
}

.social-links a {
  margin: 0 10px;
  font-size: 1.2em;
}

.social-links a:hover {
  color: #e91eff;
}
</style>
