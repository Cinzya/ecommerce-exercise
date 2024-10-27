<script setup lang="ts">
import Close from '@/components/CloseButton.vue'
import { useShoppingCartStore } from '@/stores/shoppingcart'
const store = useShoppingCartStore()
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
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody class="text-sm leading-tight">
        <tr v-for="product in store.$state.shoppingCart" :key="product.id">
          <!-- Product -->
          <td class="flex items-center py-4 font-medium">
            <Close @click="store.remove(product)" />
            <img :src="product.image" :alt="product.name" class="mx-4 w-16" />{{
              product.name
            }}
          </td>
          <!-- Price -->
          <td>€{{ product.actual_price }}</td>
          <!-- Quantity -->
          <td class="text-sm font-semibold leading-tight">
            <div
              class="inline-flex h-12 w-[148px] items-center justify-between rounded-[3px] border border-gray-100 bg-white px-5 py-3"
            >
              <button @click="store.remove(product)">
                <PhMinus :size="16" />
              </button>
              <div
                class="font-['Public Sans'] text-base font-normal leading-normal text-gray-700"
              >
                {{ product.quantity }}
              </div>
              <button @click="store.add(product)">
                <PhPlus :size="16" />
              </button>
            </div>
          </td>
          <!-- Subtotal -->
          <td class="h-full py-4">
            €{{ product.actual_price * product.quantity }}
          </td>
        </tr>
      </tbody>
    </table>
    <aside></aside>
  </div>
</template>
