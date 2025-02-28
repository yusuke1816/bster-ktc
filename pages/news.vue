<template>
  <div id="app">
    <div class="container">
      <h2 class="page-title">News</h2>

<!-- ローディング表示 -->
<p v-if="pending">Loading...</p>

<!-- エラー表示 -->
<p v-if="error">Failed to fetch news. Please try again later.</p>

<!-- ニュースリスト部分 -->
<ul v-if="!selectedNewsItem && !pending && !error" class="news-list">
  <li v-for="newsItem in news" :key="newsItem.id" class="news-item" @click="showDetails(newsItem)">
    <h2 class="news-title">{{ newsItem.title }}</h2>
    <small class="news-date">{{ newsItem.date }}</small>
    <img :src="newsItem.image?.url" alt="" class="news-image" v-if="newsItem.image" />
  </li>
</ul>

<!-- 詳細表示部分 -->
<div v-if="selectedNewsItem" class="news-detail">
  <h2 class="news-title">{{ selectedNewsItem.title }}</h2>
  <p class="news-description">{{ selectedNewsItem.content }}</p>
  <small class="news-date">{{ selectedNewsItem.date }}</small>
  <img :src="selectedNewsItem.image?.url" alt="" class="news-image" v-if="selectedNewsItem.image" />
  <button @click="closeDetails">Close</button>
</div>
    </div>

  </div>
</template>

<script setup>


// コンポーザブルを使用してデータを取得
const {
  news,
  selectedNewsItem,
  error,
  pending,
  showDetails,
  closeDetails
} = useNews();
</script>



  <style scoped>
#app {
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
  align-items: center;

}

  .page-title {
    font-size: 3em;
    text-align: center;
    margin-bottom: 30px;
    color: #ffffff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }

  .news-list {
    list-style-type: none;
    padding: 0;
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .news-item {
    background-color: rgba(255, 255, 255, 0.85);
    color: black;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer; /* カーソルをポインターに変更 */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 600px;
    margin: 10px auto; /* 中央配置 */
    margin-bottom: 20px;
  }

  .news-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }

  .news-title {
    font-size: 1.8em;
    font-weight: bold;
    margin: 0;
    color: #333;
  }

  .news-description {
    font-size: 1.1em;
    margin-top: 10px;
    color: #555;
    line-height: 1.6;
  }

  .news-date {
    font-size: 0.9em;
    color: gray;
    margin-top: 10px;
    text-align: left;
  }

  .news-image {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-top: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    max-height: 280px;
  }

  .news-detail {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 15px;
    max-width: 600px;
    margin: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .news-detail button {
    background-color: #e91eff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }

  .news-detail button:hover {
    background-color: #e91eff;
  }
/* スマホ向けにさらにコンパクトなCSS調整 */
.container{
  background-color: rgba(51, 51, 51, 0.384);
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  /* ニュースアイテム */
  .news-item {
    width: 100%;
    padding: 12px;
    margin-bottom: 12px;
  }

  /* 詳細部分 */
  .news-detail {
    width: 90%;
    padding: 15px;
    margin: 10px auto;
  }

  /* ボタン */
  .news-detail button {
    width: 100%;
    padding: 10px;
    font-size: 1.1em;
  }

  /* 画像の調整 */
  .news-image {
    width: 100%;
    height: auto;
    margin-top: 8px;
    margin-bottom: 15px;
  }

  /* 見出しフォントサイズ */
  .page-title {
    font-size: 1.8em; /* タイトルを少し大きくする */
    margin-top: 10px; /* タイトルの上部の余白調整 */
  }

  .news-title {
    font-size: 1.4em;
  }

  .news-description {
    font-size: 0.95em;
  }

  /* 日付の調整 */
  .news-date {
    font-size: 0.8em;
  }
}

@media (max-width: 480px) {
  /* ニュースアイテム */
  .news-item {
    padding: 8px;
    margin-bottom: 10px;
  }

  /* 詳細部分 */
  .news-detail {
    width: 85%;
    padding: 12px;
  }

  /* ボタン */
  .news-detail button {
    padding: 8px;
    font-size: 1em;
  }

  /* 見出しフォントサイズ */
  .page-title {
    font-size: 1.6em;
  }

  .news-title {
    font-size: 1.3em;
  }

  .news-description {
    font-size: 0.9em;
  }

  /* 日付の調整 */
  .news-date {
    font-size: 0.75em;
  }
}

  </style>
