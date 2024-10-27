<script setup lang="ts">
const props = defineProps<{
  product: Article
}>()
</script>
<template>
  <button
    class="flex h-12 items-center bg-primary-500 px-6 text-sm font-bold uppercase leading-[48px] tracking-tight text-white"
  >
    Add to cart
    <PhShoppingCartSimple :size="20" class="ml-2" />
  </button>
</template>
