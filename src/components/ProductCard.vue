<script setup lang="ts">
import { useWishlistStore } from '@/stores/wishlist'
import { useShoppingCartStore } from '@/stores/shoppingcart'
import Button from '@/components/ButtonComponent.vue'
import { defineProps, computed } from 'vue'
const props = defineProps<{
  article: Article
}>()
const store = { wishlist: useWishlistStore(), cart: useShoppingCartStore() }

const isOnWishlist = computed(() => {
  return store.wishlist.$state.wishlist.includes(props.article)
})

const toggleWishlist = () => {
  if (isOnWishlist.value) {
    store.wishlist.remove(props.article)
  } else {
    store.wishlist.add(props.article)
  }
}
</script>
<template>
  <!-- TODO: Modal to visually confirm that product was added to basket after clicking on the Cart button -->
  <div
    class="h-full w-full rounded-[3px] border-[2px] border-gray-100 bg-white p-4 transition-all duration-200 ease-in-out hover:shadow-card"
  >
    <!-- Thumbnail -->
    <div class="group relative">
      <img
        :src="props.article.image"
        :alt="props.article.name"
        class="mb-4 w-full"
      />
      <div
        class="absolute right-0 top-0 hidden h-full w-full items-center justify-between bg-black/20 px-4 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100 lg:flex"
      >
        <!-- Add to Wishlist -->
        <button
          class="group/heart flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-primary-500"
          @click="toggleWishlist"
        >
          <PhHeart
            :size="24"
            :weight="isOnWishlist ? 'fill' : 'regular'"
            class="group-hover/heart:text-white"
          />
        </button>
        <!-- Add to Shopping Card -->
        <button
          class="group/cart flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-primary-500"
          @click="store.cart.add(props.article)"
        >
          <PhShoppingCartSimple
            :size="24"
            class="group-hover/cart:text-white"
          />
        </button>
        <!-- Go To Product Page -->
        <button
          class="group/view flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-primary-500"
        >
          <PhEye :size="24" class="group-hover/view:text-white" />
        </button>
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
    <div class="mt-5 lg:hidden">
      <Button
        class="w-full"
        variant="danger"
        :outline="true"
        @click="toggleWishlist"
      >
        <PhHeart :size="24" :weight="isOnWishlist ? 'fill' : 'regular'" />
      </Button>
      <Button
        variant="primary"
        @click="store.cart.add(props.article)"
        class="mt-3 w-full"
      >
        Add to Cart
        <PhShoppingCartSimple :size="20" class="ml-2" />
      </Button>
    </div>
  </div>
</template>
