<script setup lang="ts">
const props = defineProps<{
  article: Article
}>()
</script>
<template>
  <!-- Card -->
  <div
    class="w-full rounded-[3px] border-[2px] border-gray-100 bg-white p-4 transition-all duration-200 ease-in-out hover:shadow-card"
  >
    <!-- Thumbnail -->
    <div class="group relative">
      <img :src="props.article.image" :alt="props.article.name" class="mb-4" />
      <div
        class="absolute right-0 top-0 flex h-full w-full items-center justify-between bg-black/20 px-4 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100"
      >
        <button
          class="group/heart flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-primary-500"
        >
          <PhHeart :size="24" class="group-hover/heart:text-white" />
        </button>
        <button
          class="group/cart flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-primary-500"
        >
          <PhShoppingCartSimple
            :size="24"
            class="group-hover/cart:text-white"
          />
        </button>
        <button
          class="group/view flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-primary-500"
        >
          <PhEye :size="24" class="group-hover/view:text-white" />
        </button>
        <!-- TODO: Add onClick event to each button + components / routes for each action -->
      </div>
    </div>
    <!-- Rating -->
    <div
      class="mb-2 flex items-center text-xs font-normal leading-none text-gray-500"
    >
      <span v-for="i in 5" :key="i" class="mr-1">
        <i v-if="i <= props.article.rating" class="text-primary-500">
          <PhStar :size="16" weight="fill" />
        </i>
        <i v-else class="text-gray-300">
          <PhStar :size="16" />
        </i>
      </span>
      <span> ({{ props.article.reviews }}) </span>
    </div>
    <!-- Name -->
    <p class="mb-2 text-sm font-normal leading-tight text-gray-900">
      {{ props.article.name }}
    </p>
    <!-- Price -->
    <span class="text-sm font-semibold leading-tight text-secondary-500">
      €{{ props.article.msrp }}
    </span>
  </div>
</template>
