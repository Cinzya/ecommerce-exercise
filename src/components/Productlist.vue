<script setup lang="ts">
import fictionalArticles from '@/assets/fictional_articles.json'
import { useFilterStore } from '@/stores/filter'
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

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
    <!-- Card -->
    <div
      v-for="article in filteredArticles"
      :key="filteredArticles.indexOf(article)"
      class="w-full rounded-[3px] border-[2px] border-gray-100 bg-white p-4 transition-all duration-200 ease-in-out hover:shadow-card"
    >
      <!-- Thumbnail -->
      <div class="group relative">
        <img :src="article.image" :alt="article.name" class="mb-4" />
        <div
          class="absolute right-0 top-0 flex h-full w-full items-center justify-between bg-black/20 px-4 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
        >
          <button
            class="group/heart flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-primary-500"
          >
            <PhHeart :size="24" class="group-hover/heart:text-white" />
          </button>
          <button
            class="group/cart flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-primary-500"
          >
            <PhShoppingCartSimple
              :size="24"
              class="group-hover/cart:text-white"
            />
          </button>
          <button
            class="group/view flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-primary-500"
          >
            <PhEye :size="24" class="group-hover/view:text-white" />
          </button>
          <!-- TODO: Add onClick event to each button + components / routes for each action -->
        </div>
      </div>
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
      <span class="text-sm font-semibold leading-tight text-secondary-500">
        €{{ article.msrp }}
      </span>
    </div>
  </div>
</template>
