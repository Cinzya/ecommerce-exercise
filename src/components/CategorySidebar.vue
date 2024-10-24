<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
</script>

<template>
  <h2 class="mb-4 text-base font-medium uppercase text-gray-900">Category</h2>

  <label
    v-for="category in categoryStore.$state.categories"
    :key="category.id"
    class="mb-3 flex items-center text-sm font-medium text-gray-900"
  >
    <input
      id="default-radio-1"
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
</template>
