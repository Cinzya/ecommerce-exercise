<script setup lang="ts"></script>
<template>
  <div class="relative h-12">
    <input
      type="text"
      class="h-full w-full rounded-sm border py-4 pl-5 pr-10 text-sm font-normal leading-tight text-black"
      placeholder="Search for anything..."
    />
    <div
      class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-5"
    >
      <PhMagnifyingGlass :size="20" color="black" />
    </div>
  </div>
</template>
