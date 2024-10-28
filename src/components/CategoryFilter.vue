<script setup lang="ts">
import { computed } from 'vue'
import { useFilterStore } from '@/stores/filter'
import { useRoute } from 'vue-router'
const store = useFilterStore()
const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>

<template>
  <h2 class="mb-4 text-base font-medium uppercase text-gray-900">Category</h2>

  <div class="mb-6 border-b border-gray-100 pb-6">
    <label class="mb-3 flex items-center text-sm font-medium text-gray-900">
      <input
        type="radio"
        @input="
          $router.push({
            name: 'home',
          })
        "
        :checked="currentRouteName === 'home' || $route.params.category === '0'"
        name="default-radio"
        class="mr-2 h-4 w-4 border-gray-300 bg-gray-100 accent-primary-500 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600"
      />
      All
    </label>
    <label
      v-for="category in store.$state.categories"
      :key="category.id"
      class="mb-3 flex items-center text-sm font-medium text-gray-900"
    >
      <input
        type="radio"
        @input="
          $router.push({
            name: 'category',
            params: { category: category.id.toString() },
          })
        "
        :checked="category.id === parseInt($route.params.category as string)"
        name="default-radio"
        class="mr-2 h-4 w-4 border-gray-300 bg-gray-100 accent-primary-500 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600"
      />
      {{ category.name }}
    </label>
  </div>
</template>
