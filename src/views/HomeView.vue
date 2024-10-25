<script setup lang="ts">
import CategorySidebar from '@/components/CategorySidebar.vue'
import FilterModal from '@/components/FilterModal.vue'
</script>

<template>
  <div class="mx-auto flex max-w-screen-xl flex-col px-5 pt-4 lg:flex-row">
    <aside class="mr-6 hidden w-[312px] shrink-0 lg:block">
      <CategorySidebar />
    </aside>
    <FilterModal class="lg:hidden" />
    <main class="w-full">
      <router-view />
    </main>
  </div>
</template>
