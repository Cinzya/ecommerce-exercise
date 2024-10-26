<script setup lang="ts">
import CategorySidebar from '@/components/CategorySidebar.vue'
import FilterModal from '@/components/FilterModal.vue'
import PriceRange from '@/components/PriceRange.vue'
</script>

<template>
  <div
    class="mx-auto flex max-w-screen-xl flex-col overflow-hidden px-5 pt-4 lg:flex-row"
  >
    <aside class="mr-6 hidden w-[300px] shrink-0 lg:block">
      <CategorySidebar />
      <PriceRange />
    </aside>
    <FilterModal class="lg:hidden" />
    <main class="w-full">
      <router-view />
    </main>
  </div>
</template>
