import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useShoppingCartStore = defineStore('shoppingCart', () => {
  const shoppingCart = ref<CartItem[]>([])
  const count = computed(() => shoppingCart.value.length)
  const totalPrice = computed(() =>
    shoppingCart.value.reduce(
      (total, item) => total + item.actual_price * item.quantity,
      0,
    ),
  )

  function findItem(articleId: string): CartItem | undefined {
    return shoppingCart.value.find(item => item.id === articleId)
  }

  function updateItemQuantity(articleId: string, quantity: number) {
    shoppingCart.value = shoppingCart.value.map(item => {
      if (item.id === articleId) {
        return { ...item, quantity }
      }
      return item
    })
  }

  function add(article: Article) {
    const item = findItem(article.id)
    if (item) {
      updateItemQuantity(article.id, item.quantity + 1)
    } else {
      shoppingCart.value.push({ ...article, quantity: 1 })
    }
  }

  function remove(article: Article) {
    const item = findItem(article.id)
    if (item) {
      if (item.quantity > 1) {
        updateItemQuantity(article.id, item.quantity - 1)
      } else {
        shoppingCart.value = shoppingCart.value.filter(
          item => item.id !== article.id,
        )
      }
    }
  }

  function deleteItem(article: Article) {
    shoppingCart.value = shoppingCart.value.filter(
      item => item.id !== article.id,
    )
  }

  return { shoppingCart, count, totalPrice, add, remove, deleteItem }
})
