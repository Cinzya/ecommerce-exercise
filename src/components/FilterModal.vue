<script setup lang="ts">
import { computed } from 'vue'
import { useModalStore } from '@/stores/modal'
import CategorySidebar from './CategorySidebar.vue'
import PriceFilter from './PriceFilter.vue'
import BrandFilter from './BrandFilter.vue'
const store = useModalStore()
const isMobileFilterOpen = computed(
  () => store.$state.isOpen && window.innerWidth < 1024,
)
const toggleModal = () => {
  if (store.isOpen) {
    store.close()
  } else {
    store.open()
  }
}
</script>
<template>
  <button
    @click="toggleModal"
    class="rounded-3px my-5 border-2 border-primary-500 bg-white p-2 px-5 text-base font-bold uppercase text-primary-500 lg:hidden"
  >
    Filters
  </button>
  <Teleport to="#modal">
    <!-- Modal Backdrop -->
    <div
      v-if="isMobileFilterOpen"
      @click.self="store.close()"
      class="modal pointer—events—none inset—0 cursor—pointer transition—att duration—20 ease—in—out translate—y-0 fixed left-0 top-0 z-50 flex h-screen w-screen items-end justify-center overflow-hidden overscroll-contain bg-slate-700/30"
    >
      <!-- Modal -->
      <div
        class="max-h-[calc(100vh-5rem)] w-screen overscroll-contain rounded-[3px] bg-white"
      >
        <div
          class="my-4 flex items-center justify-between border-b border-gray-100 px-5 pb-4"
        >
          Filter
          <button @click="store.close()"><PhX :size="20" /></button>
        </div>
        <div class="max-h-[calc(100vh-10rem)] overflow-y-scroll px-5">
          <CategorySidebar />
          <PriceFilter />
          <BrandFilter />
        </div>
      </div>
    </div>
  </Teleport>
</template>
