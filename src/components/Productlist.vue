<script setup lang="ts">
import fictionalArticles from '@/assets/fictional_articles.json'
import { useFilterStore } from '@/stores/filter'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'

const route = useRoute()
const filterStore = useFilterStore()
const filters = filterStore.$state

const filterArticlesByCategory = (articles: Article[], category: number) => {
  return articles.filter(
    article => article.category.toString() === category.toString(),
  )
}

const filterArticlesByPrice = (
  articles: Article[],
  priceRange: { min: number; max: number },
) => {
  return articles.filter(
    article => article.msrp >= priceRange.min && article.msrp <= priceRange.max,
  )
}

const filteredArticles = computed(() => {
  let articles

  // Category filter
  articles = filterArticlesByCategory(
    fictionalArticles,
    Number(route.params.category),
  )

  // Price filter
  if (
    typeof filters.priceRange.min === 'number' &&
    typeof filters.priceRange.max === 'number'
  ) {
    articles = filterArticlesByPrice(articles, {
      min: filters.priceRange.min,
      max: filters.priceRange.max,
    })
  }

  // Brand filter
  if (filters.brands.length > 0) {
    articles = articles.filter(article =>
      filters.brands.includes(article.brand),
    )
  }

  return articles
})

watch(
  () => route.params.category,
  () => {
    filterStore.$state.brands = []
  },
)
</script>
<template>
  <div
    class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
  >
    <ProductCard
      v-for="article in filteredArticles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>
