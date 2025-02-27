<template>
    <div class="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <img :src="article.image.url" :alt="article.title" class="w-full h-48 object-cover rounded-lg mb-2" />
      <h3 class="text-lg font-bold mb-2">{{ article.title }}</h3>
      <p class="text-gray-700 mb-4">{{ article.summary }}</p>
      <router-link :to="'/' + article.id" class="text-blue-600 underline">Read more</router-link>
    </div>
  </template>
  
  <script setup>
  defineProps({
    article: {
      type: Object,
      required: true,
    }
  })
  </script>
  