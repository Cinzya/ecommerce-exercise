<script setup lang="ts">
import { useWishlistStore } from '@/stores/wishlist'
import { useShoppingCartStore } from '@/stores/shoppingcart'
import Button from '@/components/ButtonComponent.vue'
import Close from '@/components/CloseButton.vue'
const store = { wishlist: useWishlistStore(), cart: useShoppingCartStore() }
</script>
<template>
  <div
    class="mx-auto flex max-w-screen-xl flex-col overflow-hidden px-5 pt-4 lg:flex-row"
  >
    <table class="w-full table-auto rounded border border-gray-100 bg-white">
      <thead>
        <tr class="text-left">
          <th
            class="px-6 py-5 text-lg font-medium leading-normal text-gray-900"
          >
            Wishlist
          </th>
        </tr>
      </thead>
      <thead>
        <tr
          class="border-b border-t border-gray-100 bg-gray-50 text-left text-xs font-medium uppercase text-gray-700"
        >
          <th class="px-6 py-5">Products</th>
          <th>Price</th>
          <th>Stock Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="text-sm leading-tight">
        <tr v-for="product in store.wishlist.$state.wishlist" :key="product.id">
          <td class="flex items-center px-6 py-4 font-medium">
            <img :src="product.image" :alt="product.name" class="mr-4 w-16" />{{
              product.name
            }}
          </td>
          <td>€{{ product.actual_price }}</td>
          <td class="text-sm font-semibold leading-tight text-success-500">
            IN STOCK
          </td>
          <td class="py-4">
            <div class="flex">
              <Button variant="primary" @click="store.cart.add(product)">
                Add to Cart
                <PhShoppingCartSimple :size="20" class="ml-2" />
              </Button>
              <Close @click="store.wishlist.remove(product)" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
