import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', () => {
  const wishlist = ref<Article[]>([])
  const count = computed(() => wishlist.value.length)

  function add(item: Article) {
    wishlist.value.push(item)
  }

  function remove(item: Article) {
    const index = wishlist.value.indexOf(item)
    if (index !== -1) {
      wishlist.value.splice(index, 1)
    }
  }

  return {
    wishlist,
    count,
    add,
    remove,
  }
})
