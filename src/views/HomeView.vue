<script setup lang="ts">
import CategorySidebar from '@/components/CategorySidebar.vue'
</script>

<template>
  <div class="mx-auto flex max-w-screen-xl px-5">
    <aside>
      <CategorySidebar />
    </aside>
    <main>
      <router-view />
    </main>
  </div>
</template>
