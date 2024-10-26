<script setup lang="ts">
import { computed, ref } from 'vue'
import CategorySidebar from './CategorySidebar.vue'
import PriceFilter from './PriceFilter.vue'
const isFilterOpen = ref(false)
const isMobileFilterOpen = computed(
  () => isFilterOpen.value && window.innerWidth < 1024,
)
</script>
<template>
  <button
    @click="isFilterOpen = !isFilterOpen"
    class="rounded-3px mt-5 border-2 border-primary-500 bg-white p-2 px-5 text-base font-bold uppercase text-primary-500 lg:hidden"
  >
    Filters
  </button>
  <!-- Modal Backdrop -->
  <div
    v-if="isMobileFilterOpen"
    @click.self="isFilterOpen = false"
    class="pointer—events—none inset—0 cursor—pointer transition—att duration—20 ease—in—out translate—y-0 fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center overflow-hidden overscroll-contain bg-slate-700/30"
  >
    <!-- Modal -->
    <div
      class="max-h-[calc(100vh-5rem)] w-screen overscroll-contain rounded-[3px] bg-white px-5"
    >
      <div class="my-4 flex items-center justify-between">
        Filter
        <button @click="isFilterOpen = false"><PhX :size="20" /></button>
      </div>
      <CategorySidebar />
      <PriceFilter />
    </div>
  </div>
</template>
