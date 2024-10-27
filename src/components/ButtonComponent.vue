<script setup lang="ts">
import { defineProps, computed } from 'vue'
const props = defineProps<{
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'gray'
  outline?: boolean
  type?: 'button' | 'link'
}>()
const color = computed(() => {
  switch (props.variant) {
    case 'primary':
      return props.outline
        ? 'border-primary-500 text-primary-500'
        : 'bg-primary-500'
    case 'secondary':
      return props.outline
        ? 'border-secondary-500 text-secondary-500'
        : 'bg-secondary-500'
    case 'success':
      return props.outline
        ? 'border-success-500 text-success-500'
        : 'bg-success-500'
    case 'danger':
      return props.outline
        ? 'border-danger-500 text-danger-500'
        : 'bg-danger-500'
    case 'warning':
      return props.outline
        ? 'border-warning-500 text-warning-500'
        : 'bg-warning-500'
    case 'gray':
      return props.outline ? 'border-gray-500 text-gray-500' : 'bg-gray-500'
    default:
      return props.outline ? 'border-gray-500 text-gray-500' : 'bg-gray-500'
  }
})
</script>
<template>
  <component
    :is="props.type === 'link' ? 'div' : 'button'"
    class="flex h-12 items-center px-6 text-sm font-bold uppercase leading-[48px] tracking-tight"
    :class="[
      color,
      {
        'border-2': props.outline,
        'text-white': !props.outline,
        'max-w-[203px]': props.type === 'link',
      },
    ]"
  >
    <slot />
  </component>
</template>
