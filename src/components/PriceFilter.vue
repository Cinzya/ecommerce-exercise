<script setup lang="ts">
import { useFilterStore } from '@/stores/filter'
const filterStore = useFilterStore()
const predefinedRanges = [
  { label: 'Under €20', min: 0, max: 20 },
  { label: '€25 to €100', min: 25, max: 100 },
  { label: '€100 to €300', min: 100, max: 300 },
  { label: '€300 to €500', min: 200, max: 500 },
  { label: '€500 to €1000', min: 500, max: 1000 },
  { label: '€1,000 to €10,000', min: 1000, max: 10000 },
]

function setPriceRange(min: number, max: number) {
  filterStore.$state.priceRange.min = min
  filterStore.$state.priceRange.max = max
}
</script>
<template>
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

  <div class="mb-6 mt-3 flex flex-col border-b border-gray-100 pb-6">
    <label
      v-for="range in predefinedRanges"
      :key="predefinedRanges.indexOf(range)"
      class="mt-2"
    >
      <input
        class="mr-2 h-4 w-4 border-gray-300 bg-gray-100 accent-primary-500 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600"
        type="radio"
        :id="range.label"
        name="range-radio"
        @input="setPriceRange(range.min, range.max)"
        :checked="
          filterStore.$state.priceRange.min === range.min &&
          filterStore.$state.priceRange.max === range.max
        "
      />
      <span class="text-sm font-normal leading-tight">
        {{ range.label }}
      </span>
    </label>
  </div>
</template>
