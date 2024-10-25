<script setup lang="ts">
import { ref } from 'vue'
import CategorySidebar from '@/components/CategorySidebar.vue'
const isFilterOpen = ref(false)
</script>

<template>
  <div class="mx-auto flex max-w-screen-xl flex-col px-5 lg:flex-row">
    <aside>
      <button
        @click="isFilterOpen = !isFilterOpen"
        class="rounded-3px border-2 border-primary-500 bg-white p-2 px-5 text-base font-bold uppercase text-primary-500 lg:hidden"
      >
        Filters
      </button>
      <CategorySidebar />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>
