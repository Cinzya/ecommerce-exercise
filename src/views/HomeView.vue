<script setup lang="ts">
import CategorySidebar from '@/components/CategorySidebar.vue'
import FilterModal from '@/components/FilterModal.vue'
</script>

<template>
  <div class="mx-auto flex max-w-screen-xl flex-col px-5 pt-4 lg:flex-row">
    <aside class="hidden lg:block">
      <CategorySidebar />
    </aside>
    <FilterModal class="lg:hidden" />
    <main>
      <router-view />
    </main>
  </div>
</template>
