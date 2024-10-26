<script setup lang="ts">
import { computed } from 'vue'
import { useFilterStore } from '@/stores/filter'
import fictionalArticles from '@/assets/fictional_articles.json'
import { useRoute } from 'vue-router'
const route = useRoute()

const filterArticlesByCategory = (articles: Article[], category: number) => {
  return articles.filter(
    article => article.category.toString() === category.toString(),
  )
}

const filteredArticles = computed(() => {
  let articles = fictionalArticles
  // Category filter
  articles = filterArticlesByCategory(articles, Number(route.params.category))
  return articles
})

const uniqueBrands = computed(() =>
  Array.from(
    new Set(
      filteredArticles.value.map((item: { brand: string }) => item.brand),
    ),
  ),
)
</script>
<template>
  <h2 class="mb-4 text-base font-medium uppercase text-gray-900">
    Popular Brands
  </h2>

  <div class="mb-6 grid grid-cols-2 border-b border-gray-100 pb-6">
    <label
      v-for="brand in uniqueBrands"
      :key="uniqueBrands.indexOf(brand)"
      class="mb-3 flex items-center text-sm font-normal leading-tight"
    >
      <input type="checkbox" class="mr-2 h-5 w-5 accent-primary-500" />
      {{ brand }}
    </label>
  </div>
</template>
