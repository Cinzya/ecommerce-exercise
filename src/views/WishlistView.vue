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
    <table
      class="w-full table-fixed rounded border border-gray-100 bg-white sm:table-auto"
    >
      <thead>
        <tr class="text-left">
          <th
            class="px-6 py-5 text-lg font-medium leading-normal text-gray-900"
          >
            Wishlist
          </th>
        </tr>
      </thead>
      <thead class="hidden sm:table-header-group">
        <tr
          class="border-b border-t border-gray-100 bg-gray-50 text-left text-xs font-medium uppercase text-gray-700"
        >
          <th class="px-6 py-5">Products</th>
          <th>Price</th>
          <th class="pl-6">Stock Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody class="text-sm leading-tight">
        <tr
          v-for="product in store.wishlist.$state.wishlist"
          :key="product.id"
          class="border-1 grid grid-cols-2 grid-rows-[min-content_min-content_min-content] border border-gray-100 px-6 sm:table-row sm:border-none"
        >
          <td
            class="col-start-1 col-end-3 flex items-center py-4 font-medium sm:px-6"
          >
            <img :src="product.image" :alt="product.name" class="mr-4 w-16" />{{
              product.name
            }}
          </td>
          <td class="flex flex-wrap uppercase sm:table-cell">
            <span class="mr-6 text-gray-700 sm:hidden">Price:</span>
            <span>€{{ product.actual_price }}</span>
          </td>
          <td
            class="flex flex-wrap text-sm font-semibold uppercase leading-tight sm:table-cell sm:pl-6"
          >
            <span class="mr-6 font-normal text-gray-700 sm:hidden"
              >Stock Status:</span
            >
            <span class="text-success-500">IN STOCK</span>
          </td>
          <td class="col-start-1 col-end-3 w-full py-4 sm:w-auto">
            <div class="flex">
              <Button
                variant="primary"
                @click="store.cart.add(product)"
                class="mr-1 w-1/2"
              >
                <span class="w-min sm:mx-5 lg:mx-0"> Add to Cart </span>
                <PhShoppingCartSimple
                  :size="20"
                  class="ml-2 hidden shrink-0 lg:block"
                />
              </Button>
              <Close
                @click="store.wishlist.remove(product)"
                class="hidden sm:block"
              />
              <Button
                variant="danger"
                :outline="true"
                @click="store.wishlist.remove(product)"
                class="ml-1 w-1/2 sm:hidden"
              >
                Remove
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
