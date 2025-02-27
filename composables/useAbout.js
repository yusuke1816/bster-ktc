// composables/useMembers.js
import { ref, watch } from 'vue';

export const useMembers = () => {
  const news = ref([]);
  const { data, error, pending } = useFetch('https://tzbo429akz.microcms.io/api/v1/members', {
    headers: {
      'X-MICROCMS-API-KEY': 'g0l29UYCHSmmRpNLwIia2RqsVUxpqbZSdFKf', // APIキーをヘッダーに設定
    },
  });

  // `watch`でデータが更新されたときに`news`を更新
  watch(() => data.value, (newData) => {
    if (newData) {
      news.value = newData.contents; // APIから取得したデータを`news`に格納
    }
  });

  return {
    news,
    error,
    pending,
  };
};
