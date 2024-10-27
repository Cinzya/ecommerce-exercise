<script setup lang="ts">
import Close from '@/components/CloseButton.vue'
import Button from '@/components/ButtonComponent.vue'
import { useShoppingCartStore } from '@/stores/shoppingcart'
const store = useShoppingCartStore()
</script>
<template>
  <div
    class="mx-auto grid max-w-screen-xl grid-cols-[3fr_1fr] gap-6 overflow-hidden px-5 pt-4"
  >
    <table
      class="h-min grow table-auto rounded border border-gray-100 bg-white"
    >
      <thead>
        <tr class="text-left">
          <th
            class="px-6 py-5 text-lg font-medium leading-normal text-gray-900"
          >
            <h1>Shopping Cart</h1>
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
            <Close @click="store.deleteItem(product)" />
            <img :src="product.image" :alt="product.name" class="mx-4 w-16" />
            {{ product.name }}
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
            €{{ (product.actual_price * product.quantity).toFixed(2) }}
          </td>
        </tr>
        <tr class="border-1 border-t border-gray-100">
          <td class="p-6">
            <RouterLink to="/home">
              <Button
                text="Return to shop"
                variant="secondary"
                type="link"
                :outline="true"
                to="/home"
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
