<template>
  <div
    role="alert"
    class="flex items-start md:items-center max-w-[600px] shadow-md bg-positive-100 pr-2 pl-4 ring-1 ring-positive-200 typography-text-sm md:typography-text-base py-1 rounded-md"
  >
    <SfIconCheckCircle class="mr-2 my-2 text-positive-700" />
    <p class="py-2 mr-2">The product has been added to the cart.</p>
    <button
      type="button"
      class="p-1.5 md:p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900"
      aria-label="Close positive alert"
    >
      <SfIconClose class="hidden md:block" />
      <SfIconClose size="sm" class="md:hidden block" />
    </button>
  </div>
</template>

<script lang="ts" setup>
import { SfIconCheckCircle, SfIconClose } from '@storefront-ui/vue';
</script>
