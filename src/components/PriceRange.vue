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

    <!-- Hidden Inputs to bind the Data -->
    <input
      type="range"
      step="1"
      v-model="filterStore.$state.priceRange.min"
      class="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
    />
    <input
      type="range"
      step="1"
      v-model="filterStore.$state.priceRange.max"
      class="pointer-events-none absolute z-20 h-2 w-full cursor-pointer appearance-none opacity-0"
    />

    <div class="mt-2 flex flex-col">
      <label
        v-for="range in predefinedRanges"
        :key="predefinedRanges.indexOf(range)"
        for=""
        class="mt-2"
      >
        <input type="radio" :id="range.label" name="range-radio" />
        <span class="ml-2 text-sm font-normal leading-tight">
          {{ range.label }}
        </span>
      </label>
    </div>
  </div>
</template>
