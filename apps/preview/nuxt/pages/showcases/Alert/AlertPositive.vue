<template>
  <div class="flex flex-col gap-4">
    <Alert variant="positive" class="w-full max-w-[640px]">
      <SfIconCheckCircle class="my-2 text-positive-700 shrink-0" />
      <p class="py-2">The product has been added to the cart.</p>
      <button
        type="button"
        class="ms-auto p-2 rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900 focus-visible:outline focus-visible:outline-offset"
        aria-label="Close positive alert"
      >
        <SfIconClose />
      </button>
    </Alert>

    <Alert variant="positive" class="w-full max-w-[320px]" size="sm">
      <SfIconCheckCircle size="sm" class="my-1.5 text-positive-700 shrink-0" />
      <p class="py-1.5">The product has been added to the cart.</p>
      <button
        type="button"
        class="ms-auto p-1.5 rounded-md text-positive-700 hover:bg-positive-200 active:bg-positive-300 hover:text-positive-800 active:text-positive-900 focus-visible:outline focus-visible:outline-offset"
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
