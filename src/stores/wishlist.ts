import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', () => {
  const wishlist = ref<number[]>([])
  const count = computed(() => wishlist.value.length)

  return {
    wishlist,
    count,
  }
})
