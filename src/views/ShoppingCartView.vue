<script setup lang="ts">
import Close from '@/components/CloseButton.vue'
import Button from '@/components/ButtonComponent.vue'
import { useShoppingCartStore } from '@/stores/shoppingcart'
const store = useShoppingCartStore()
</script>
<template>
  <div
    class="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 overflow-hidden px-5 pt-4 lg:grid-cols-[3fr_1fr]"
  >
    <table
      class="h-min grow table-auto rounded border border-gray-100 bg-white"
    >
      <thead>
        <tr class="text-left">
          <th
            class="border-gray-100 px-6 py-5 text-lg font-medium leading-normal text-gray-900"
          >
            <h1>Shopping Cart</h1>
          </th>
        </tr>
      </thead>
      <thead>
        <tr
          class="hidden border-b border-t border-gray-100 bg-gray-50 text-left text-xs font-medium uppercase text-gray-700 sm:table-row"
        >
          <th class="px-6 py-5">Products</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody class="text-sm leading-tight">
        <tr
          v-for="product in store.$state.shoppingCart"
          :key="product.id"
          class="grid-rows-[repeat(4, min-content)] grid grid-cols-2 border border-gray-100 sm:table-row sm:border-none"
        >
          <!-- Product -->
          <td class="flex w-full items-center py-4 font-medium">
            <Close @click="store.deleteItem(product)" class="hidden sm:block" />
            <img :src="product.image" :alt="product.name" class="mx-4 w-16" />
            {{ product.name }}
          </td>
          <!-- Price -->
          <td class="mx-4 flex items-center uppercase sm:table-cell">
            <span class="mr-6 text-gray-700 sm:hidden">Price:</span>
            <span> €{{ product.actual_price }} </span>
          </td>
          <!-- Quantity -->
          <td
            class="col-start-2 col-end-3 row-start-1 row-end-2 flex justify-end text-sm font-semibold leading-tight sm:table-cell"
          >
            <div
              class="m-4 inline-flex h-12 w-[148px] items-center justify-between rounded-[3px] border border-gray-100 bg-white px-5 py-3"
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
          <td
            class="col-start-2 col-end-3 row-start-2 row-end-3 h-full py-4 uppercase"
          >
            <span class="mr-6 text-gray-700 sm:hidden">Sub Total:</span>€{{
              (product.actual_price * product.quantity).toFixed(2)
            }}
          </td>
        </tr>
        <tr class="border-1 border-t border-gray-100">
          <td class="p-6">
            <RouterLink to="/0">
              <Button
                text="Return to shop"
                variant="secondary"
                type="link"
                :outline="true"
                class="w-min"
              >
                <PhArrowLeft :size="20" class="mr-2" />
                Return to shop
              </Button>
            </RouterLink>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <aside class="grow">
      <div
        class="flex w-full flex-col justify-center rounded border border-[#e4e7e9] bg-white p-5 pb-6"
      >
        <h2 class="mb-5 text-lg font-medium leading-normal">Card Totals</h2>
        <div class="mb-3 flex justify-between">
          <span class="text-sm font-normal leading-tight text-gray-600">
            Sub Total
          </span>
          <span class="text-sm font-medium leading-tight text-gray-900">
            €{{ (store.totalPrice * 0.79).toFixed(2) }}
          </span>
        </div>
        <div class="mb-3 flex justify-between">
          <span class="text-sm font-normal leading-tight text-gray-600">
            Shipping
          </span>
          <span class="text-sm font-medium leading-tight text-gray-900">
            Free
          </span>
        </div>
        <div class="mb-3 flex justify-between">
          <span class="text-sm font-normal leading-tight text-gray-600">
            Tax
          </span>
          <span class="text-sm font-medium leading-tight text-gray-900">
            €{{ (store.totalPrice * 0.21).toFixed(2) }}
          </span>
        </div>
        <div class="mb-4 flex justify-between border-t border-gray-100 pt-4">
          <span class="text-base font-normal leading-tight text-gray-900">
            Total
          </span>
          <span class="text-base font-semibold leading-tight text-gray-900">
            €{{ store.totalPrice.toFixed(2) }}
          </span>
        </div>
        <div>
          <Button variant="primary" type="link" :outline="false" to="/checkout">
            <PhArrowRight :size="20" class="mr-2" />
            Proceed to checkout
          </Button>
        </div>
      </div>
    </aside>
  </div>
</template>
