// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv', // dotenv モジュールを追加して環境変数を読み込む
  ],
  axios: {
    baseURL: process.env.MICROCMS_API_URL, // 環境変数を利用
  },
  publicRuntimeConfig: {
    microcmsApiUrl: process.env.MICROCMS_API_URL, // クライアントサイド用の公開変数
  },
  privateRuntimeConfig: {
    microcmsApiKey: process.env.MICROCMS_API_KEY, // サーバーサイドのみ使用する変数
  },
});
