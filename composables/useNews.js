// composables/useNews.js
import { ref, watch } from 'vue';

export const useNews = () => {
  const news = ref([]);
  const selectedNewsItem = ref(null); // 初期状態では詳細は非表示（null）

  // `useFetch`を使ってデータを取得
  const { data, error, pending } = useFetch('https://tzbo429akz.microcms.io/api/v1/news', {
    headers: {
      'X-MICROCMS-API-KEY': 'g0l29UYCHSmmRpNLwIia2RqsVUxpqbZSdFKf',
    },
  });

  // `watch`でデータが更新されたら`news`をセット
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

  return {
    news,
    selectedNewsItem,
    error,
    pending,
    showDetails,
    closeDetails,
  };
};
