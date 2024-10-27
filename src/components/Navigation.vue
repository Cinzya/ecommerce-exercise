<script setup lang="ts">
import SearchBar from './SearchBar.vue'
</script>
<template>
  <header class="bg-secondary-700 text-white">
    <!-- Top Nav -->
    <nav
      class="hidden h-[52px] w-full items-center border-b-2 border-white/10 lg:flex"
    >
      <div class="mx-auto w-full max-w-screen-xl px-5">
        <p class="text-sm font-normal leading-tight text-white">
          Welcome to the Clicon online eCommerce store.
        </p>
        <!-- TODO: Social media links, language dropdown & currency dropdown -->
      </div>
    </nav>
    <!-- Middle Nav -->
    <nav
      class="mx-auto flex h-[176px] max-w-screen-xl flex-wrap items-center justify-between px-5 sm:h-[88px] sm:flex-nowrap"
    >
      <div class="flex items-center">
        <PhList :size="28" class="mr-5 w-7 shrink-0 lg:hidden" />
        <img
          src="@/assets/logo.svg"
          alt="Clicon Logo"
          class="max-w-[177px] grow"
        />
      </div>
      <SearchBar
        text="Search for anything..."
        class="order-3 flex-grow sm:order-none sm:mx-10 sm:max-w-[578px]"
      />
      <div class="inline-flex flex-row items-start justify-start gap-6">
        <div class="relative">
          <!-- Shopping Card -->
          <RouterLink to="cart">
            <PhShoppingCartSimple :size="32" />
          </RouterLink>
          <div
            class="absolute -right-2 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-secondary-700 bg-white"
          >
            <span class="text-xs font-semibold leading-none text-secondary-700"
              >3</span
            >
          </div>
        </div>
        <!-- Wishlist  -->
        <RouterLink to="wishlist">
          <PhHeart :size="32" />
        </RouterLink>
        <!-- User Profile -->
        <PhUser :size="32" />
      </div>
    </nav>
    <!-- Bottom Nav -->
    <nav class="hidden h-20 items-center bg-white text-gray-600 lg:flex">
      <div class="mx-auto flex w-full max-w-screen-xl justify-between px-5">
        <ul class="flex h-full items-center justify-start">
          <li
            class="mr-6 flex items-center bg-gray-50 px-6 py-3 text-sm font-semibold text-gray-900"
          >
            All Categories <PhCaretDown :size="16" class="ml-1.5" />
          </li>
          <li class="mr-6 flex items-center text-sm font-normal">
            <PhMapPinLine :size="24" class="mr-1.5" /> Track Order
          </li>
          <li class="mr-6 flex items-center text-sm font-normal">
            <PhArrowsCounterClockwise :size="24" class="mr-1.5" /> Compare
          </li>
          <li class="mr-6 flex items-center text-sm font-normal">
            <PhHeadphones :size="24" class="mr-1.5" /> Customer Support
          </li>
          <li class="mr-6 flex items-center text-sm font-normal">
            <PhInfo :size="24" class="mr-1.5" /> Need Help
          </li>
        </ul>
        <a href="tel:12025550104" class="flex items-center text-gray-900">
          <PhPhoneCall :size="28" class="mr-2.5" /> +1-202-555-0104
        </a>
      </div>
    </nav>
  </header>
</template>
