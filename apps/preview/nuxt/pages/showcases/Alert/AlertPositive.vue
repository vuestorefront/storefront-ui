<template>
  <div class="flex flex-col gap-4">
    <Alert variant="positive" class="w-full max-w-[640px] shadow-md">
      <SfIconCheckCircle class="mt-2 me-2 text-positive-700 shrink-0" />
      <p class="py-2 me-2">The product has been added to the cart.</p>
      <button
        type="button"
        class="p-2 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900 focus-visible:outline focus-visible:outline-offset"
        aria-label="Close positive alert"
      >
        <SfIconClose />
      </button>
    </Alert>

    <Alert variant="positive" class="w-full max-w-[320px] shadow-md" size="sm">
      <SfIconCheckCircle size="sm" class="mt-1.5 me-2 text-positive-700 shrink-0" />
      <p class="py-1.5 me-2">The product has been added to the cart.</p>
      <button
        type="button"
        class="p-1.5 ml-auto rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900 focus-visible:outline focus-visible:outline-offset"
        aria-label="Close positive alert"
      >
        <SfIconClose size="sm" />
      </button>
    </Alert>
  </div>
</template>

<script lang="ts" setup>
import { SfIconCheckCircle, SfIconClose } from '@storefront-ui/vue';
import Alert from './Alert.vue';
</script>
