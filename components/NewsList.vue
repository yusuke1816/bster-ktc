<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <NewsCard v-for="article in articles" :key="article.id" :article="article" />
    </div>
  </template>
  
  <script setup>
  import NewsCard from './NewsCard.vue'
  
  defineProps({
    articles: {
      type: Array,
      required: true,
    }
  })
  </script>
  