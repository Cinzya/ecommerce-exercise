<script setup lang="ts">
const props = defineProps<{
  class?: string
}>()
</script>
<template>
  <button class="ml-6 text-gray-400" :class="props.class">
    <PhXCircle :size="24" />
  </button>
</template>
