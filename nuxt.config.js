// nuxt.config.ts
export default defineNuxtConfig({
  // 必要なビルドモジュールを追加
  buildModules: ['@nuxt/http'],

  // 公開環境変数を設定
  publicRuntimeConfig: {
    newsApiKey: process.env.NEWS_API_KEY, // .envファイルの環境変数を使用
    membersApiKey: process.env.MEMBERS_API_KEY,
  },

  // 互換性の日付（任意で設定）
  compatibilityDate: '2025-01-30',
});
