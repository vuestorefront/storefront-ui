<template>
  <div
    tabindex="0"
    class="relative first-letter:flex flex-col w-[280px] outline-none justify-center overflow-hidden group focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
  >
    <SfLink class="absolute z-10 w-full h-full" href="#" />
    <img
      class="rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none"
      :src="card"
      alt="smartwatch"
      :width="280"
      :height="280"
    />
    <div class="flex justify-center">
      <span
        class="mt-4 typography-text-base group-hover:underline group-hover:text-primary-800 group-active:text-primary-800"
      >
        Category
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfLink } from '@storefront-ui/vue';
import card from '@assets/smartwatch.png';
</script>
