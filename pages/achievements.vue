<template>
    <div id="app">
      <div class="container">
        <h2 class="page-title">活動</h2>

<!-- ニュースリスト部分 -->

<ul v-if="!selectedNewsItem" class="news-list">
  <li v-for="newsItem in news" :key="newsItem.id" class="news-item" @click="showDetails(newsItem)">
   <!--<h2 class="news-title">{{ newsItem.title }}</h2>
    <small class="news-date">{{ newsItem.date }}</small>-->
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


  const news = ref([]); // ニュースアイテムを格納する配列
  const selectedNewsItem = ref(null); // 初期状態では詳細は非表示（null）

  const { data, error, pending } = useFetch('https://tzbo429akz.microcms.io/api/v1/achievements', {
    headers: {
      'X-MICROCMS-API-KEY': 'g0l29UYCHSmmRpNLwIia2RqsVUxpqbZSdFKf',
    },
  });

  // watchでデータが更新されるたびにnewsをセット
  watch(() => data.value, (newData) => {
    if (newData) {
      news.value = newData.contents; // APIから取得したニュースデータをセット
    }
  });

  // ニュースアイテムをクリックした時に詳細を表示
  const showDetails = (newsItem) => {
    selectedNewsItem.value = newsItem;
  };

  // 詳細を閉じる
  const closeDetails = () => {
    selectedNewsItem.value = null;
  };
  </script>
  <style>


  .page-title {
    font-size: 3em;
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 3.5rem;
    color: #ffffff;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  }

  .news-list {
    list-style-type: none;
    padding: 0;
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 100px;
  }

  .news-item {
    background-color: rgba(255, 255, 255, 0.9);

    color: black;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    cursor: pointer; /* カーソルをポインターに変更 */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    max-width: 800px;
    margin: 10px auto; /* 中央配置 */
  }

  .news-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.68);
    background-color: rgba(252, 251, 251, 0.772);
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
    margin-bottom: 30px;
  }

  .news-image {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-top: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    max-height: 580px;
    margin-bottom: 15px;
  }

  .news-detail {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 30px;
    border-radius: 15px;
   width: 41rem;
    margin: 20px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
     margin: 0 auto;
    margin-bottom: 25px;
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
/* スマホ向けの更にコンパクトなCSS調整 */
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

  /* ニュース詳細 */
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
    font-size: 1.8em;
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
