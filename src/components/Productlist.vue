<script setup lang="ts">
import fictionalArticles from '@/assets/fictional_articles.json'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const data = computed(() =>
  fictionalArticles.filter(
    article => article.category.toString() === route.params.category.toString(),
  ),
)
</script>
<template>
  <div class="grid grid-cols-4 gap-4">
    <!-- Card -->
    <div
      v-for="article in data"
      :key="data.indexOf(article)"
      class="w-full rounded-[3px] border-[2px] border-gray-100 bg-white p-4"
    >
      <!-- Thumbnail -->
      <img :src="article.image" :alt="article.name" class="mb-4" />
      <!-- Rating -->
      <div
        class="mb-2 flex items-center text-xs font-normal leading-none text-gray-500"
      >
        <span v-for="i in 5" :key="i" class="mr-1">
          <i v-if="i <= article.rating" class="text-primary-500">
            <PhStar :size="16" weight="fill" />
          </i>
          <i v-else class="text-gray-300">
            <PhStar :size="16" />
          </i>
        </span>
        <span> ({{ article.reviews }}) </span>
      </div>
      <!-- Name -->
      <p class="mb-2 text-sm font-normal leading-tight text-gray-900">
        {{ article.name }}
      </p>
      <!-- Price -->
      <span class="text-sm font-semibold leading-tight text-secondary-500"
        >€{{ article.msrp }}</span
      >
    </div>
  </div>
</template>
