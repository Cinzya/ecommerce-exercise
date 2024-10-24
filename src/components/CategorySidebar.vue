<script setup lang="ts">
import { useCategoryStore } from '@/stores/category'
const categoryStore = useCategoryStore()
</script>

<template>
  <h2 class="mb-4 text-base font-medium uppercase text-gray-900">Category</h2>

  <div
    v-for="category in categoryStore.$state.categories"
    :key="category.id"
    class="mb-3 flex items-center"
  >
    <input
      id="default-radio-1"
      type="radio"
      value=""
      name="default-radio"
      class="h-4 w-4 border-gray-300 bg-gray-100 accent-primary-500 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600"
    />
    <label
      for="default-radio-1"
      class="ms-2 text-sm font-medium text-gray-900"
      >{{ category.name }}</label
    >
  </div>
</template>
