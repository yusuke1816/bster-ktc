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
.container {
position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* 高さを100%に指定 */
  background-color: rgba(51, 51, 51, 0.384);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  z-index: 1;
}

/* Adjustments for the existing elements */
#app {
  background-image: url('/assets/back.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  font-family: 'Arial', sans-serif;
  margin: 0;
  height: 300vh; /* min-height から height に変更 */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Positionをrelativeに変更 */
  z-index: 0; /* 必要に応じて調整 */
}

.page-title {
  font-size: 3em;
  text-align: center;
  margin-bottom: 30px;
  color: #ffffff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  z-index: 2; /* Ensure it sits above the container */
}

.news-list {
  list-style-type: none;
  padding: 0;
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 2; /* Ensure it sits above the container */
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
  cursor: pointer; /* Cursor change */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 600px;
  margin: 10px auto; /* Center align */
  margin-bottom: 20px;
  z-index: 2; /* Ensure it sits above the container */
}
.news-detail{

}
/* Additional media query styles */
@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  .news-item {
    padding: 12px;
    margin-bottom: 12px;
  }

  .news-detail {
    width: 90%;
    padding: 15px;
    margin: 10px auto;
  }

  .news-detail button {
    width: 100%;
    padding: 10px;
    font-size: 1.1em;
  }

  .news-image {
    width: 100%;
    height: auto;
    margin-top: 8px;
    margin-bottom: 15px;
  }

  .page-title {
    font-size: 1.8em;
    margin-top: 10px;
  }

  .news-title {
    font-size: 1.4em;
  }

  .news-description {
    font-size: 0.95em;
  }

  .news-date {
    font-size: 0.8em;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 5px;
  }

  .news-item {
    padding: 8px;
    margin-bottom: 10px;
  }

  .news-detail {
    width: 85%;
    padding: 12px;
  }

  .news-detail button {
    padding: 8px;
    font-size: 1em;
  }

  .page-title {
    font-size: 1.6em;
  }

  .news-title {
    font-size: 1.3em;
  }

  .news-description {
    font-size: 0.9em;
  }

  .news-date {
    font-size: 0.75em;
  }
}

  </style>
