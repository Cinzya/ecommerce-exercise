<script setup lang="ts">
import { useFilterStore } from '@/stores/filter'
const filterStore = useFilterStore()
</script>
<template>
  <div>
    <h2 class="mb-4 text-base font-medium uppercase text-gray-900">
      Price Range
    </h2>
    <div class="flex items-center justify-between">
      <input
        type="number"
        class="mr-3 w-1/2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
        placeholder="Min price"
        min="0"
        v-model="filterStore.$state.priceRange.min"
      />
      <input
        type="number"
        class="w-1/2 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
        placeholder="Max price"
        min="0"
        v-model="filterStore.$state.priceRange.max"
      />
    </div>
  </div>
</template>
