<template class="main">
  <div id="app">
    <!-- ヘッダー -->

<div class="container">
 <!-- メインコンテンツ -->
 <section id="about" class="about">
      <h2 class="title">チーム紹介</h2>
      <p>
        私たちはブロスタサークルです！！<br>ブロスタサークルは様々な専攻で構成されています
        学年専攻問わず大歓迎です！！<br>
        ブロスタに熱意のある方はぜひ一度下記ボタンから申請をして仮入隊してください！！
      </p>

   <img src='/assets/b-iconn.png' alt="aaa">
   <div class="enter-button-a">
    <a  href="">
    <button class="enter-button">入隊申請</button>
    </a>
  </div>

    </section>

    <section id="" class="">
      <h2 class="title">ブロスタとは？</h2>
      <p>
        私たちのチームは、最高のプレイヤーが集まった精鋭集団です。どんな戦いでも勝利を目指します。
      </p>

   <img src='/assets/b-iconn.png' alt="aaa">
    </section>

  <section  class="store">
    <h2  class="store-h2"> Store</h2>
    <a id="store" class="store-tag" href="https://brosterclub.base.shop/"><img class="store-img" src="/assets/store.jpeg" alt=""></a>
  </section>

</div>

  </div>
</template>

<script>export default {
  layout: 'default',  // 'default' レイアウトを使用
};</script>



<style scoped>

#about img {
width: 100%; /* 親要素の幅に合わせて画像をリサイズ */
max-width: 800px; /* 最大幅を800pxに設定 */
height: auto; /* 高さは自動調整 */
margin-top: 20px; /* 上のマージンを追加 */
border-radius: 15px; /* 角を丸くする */

}




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
  background-image: url('/assets/back.jpg'); /* パブリックアセットフォルダを使用 */
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
.container{
  background-color: rgba(51, 51, 51, 0.384);
}

h2 {
  font-size: 2.5em;
  margin-top: 20px;
  text-align: center;
}

/* メインコンテンツ */
.about,
.members {
  padding: 40px 20px;
  text-align: center;

}
.about{

}

.member-card {
  display: inline-block;
  width: 250px;
  margin: 20px;
  background-color: rgba(51, 51, 51, 0.8);
  padding: 10px;
  border-radius: 10px;
}
.members {
  padding: 40px 20px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 3列に設定 */
}

.enter-button-a{

}

.enter-button{
  background-color: #e91eff;
  color: #fff;
  display: block;
  margin: auto;
}

.store-h2 {
 margin-bottom: 1rem;
 margin-top: 5rem;
}
.store-tag {
  text-align: center;
}

.member-card img {
  width: 100%;

  object-fit: cover;
  border-radius: 10px;
}
.member-img {
  height: 200px;
}
.member-card h3 {
  font-size: 1.5em;
  margin-top: 10px;
}

.member-card a {
  display: block;
  margin-top: 10px;
}
.store{
text-align: center;
}
.store-img {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 3rem;
width: 50rem;
height: auto;
margin-top: 0px;
border-radius: 15px;
box-shadow: 0 50px 80px rgba(0, 0, 0, 0.5);
transition: transform 0.3s ease, box-shadow 0.1s ease;
margin-bottom: 3rem;
}

.store-img:hover {
transform: scale(1.05); /* Slight zoom effect */
box-shadow: 0 60px 120px rgba(0, 0, 0, 0.7); /* Enhanced shadow on hover */
}

/* SNSアイコンのスタイル */
/* SNSアイコンのスタイル */
.social-links {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  padding: 0; /* 親要素の余計なパディングを排除 */
}

.social-icon {
  width: 20px; /* アイコンサイズを小さくする */
  height: 20px;
  margin: 0 5px; /* アイコン間のスペースを少し広げる */
  flex-shrink: 0; /* アイコンが縮小しないようにする */
}

.social-icon:hover {
  transform: scale(1.1);
}


@media (max-width: 768px) {
    .news-item {
      width: 100%;
      padding: 15px;
    }
  }
/* スマホ版 */
@media (max-width: 768px) {

  .news-item {
      width: 100%;
      padding: 15px;
    }
  /* storeセクション */
  .store {
    padding: 15px; /* 余白を少なく */
  }

  .store-h2 {
    font-size: 1.8em; /* 見出しを少し小さく */
  }

  .store-tag {
    text-align: center;
    display: block; /* 画像リンクが中央に表示されるように */
    margin-top: 10px;
  }

  .store-img {
    width: 90%; /* 画像の幅を少し小さく */
    height: auto; /* 高さは自動調整 */
    padding: 1rem; /* 余白を少なく */
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3); /* シャドウを軽く */
    margin: 0 auto; /* 画像を中央に配置 */
  }

  .store-img:hover {
    transform: scale(1.03); /* ズーム効果をさらに軽く */
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4); /* シャドウも軽め */
  }
}
</style>
