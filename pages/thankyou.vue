<template>
  <div id="app">
    <div class="container">
      <h1 class="thk-h1">ご送信ありがとうございました！</h1>
      <p>フォームの送信が完了しました。</p>
      <p>これで仮入隊手続きが完了しました。詳細については、メールでご案内いたしますので、今しばらくお待ちください。</p>
      <p>引き続きよろしくお願いいたします。</p>
      <img class="thankyou-img" src="/assets/wellcome.jpeg" alt="">
      <nuxt-link to="/" active-class="active">
      <button class="thk-button">ホームへ</button>
    </nuxt-link>
    </div>
  </div>
</template>

<script setup>
// 特に追加する内容はありません
</script>

<style>
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
  color: white; /* Text color to ensure readability */
}

.thankyou-img{
  width: 50rem; /* 任意のサイズに調整 */
  height: auto;
  margin-top: 20px; /* 上部の余白 */
  display: block; /* ブロック要素として表示 */
  margin-left: auto;
  margin-right: auto; /* 自動で左右にマージンを付けて中央に配置 */
  border-radius: 15px; /* 少し丸くする */
}
.thk-h1{margin-top: 3rem;}
.thk-button{
  margin-top: 2rem;
  background-color: #e91eff; /* 指定された色 */
  color: white; /* 白文字 */
  padding: 15px 32px; /* 上下の余白と左右の余白 */
  text-align: center; /* 文字を中央揃え */
  text-decoration: none; /* 下線を消す */
  display: inline-block; /* ボタンをインラインで表示 */
  font-size: 16px; /* フォントサイズ */
  border: none; /* ボーダーを削除 */
  border-radius: 8px; /* 角を丸くする */
  cursor: pointer; /* マウスカーソルを指に変える */
  transition: background-color 0.3s ease;
}



.thk-button:hover {
  background-color: #d500f9; /* ホバー時に少し暗く */
}

</style>
