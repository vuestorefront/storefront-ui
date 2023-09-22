<template>
  <div class="flex flex-col gap-4">
    <Alert variant="negative" class="w-full max-w-[640px] shadow-md">
      <p class="py-2 me-2">The password change was failed.</p>
      <button
        type="button"
        class="py-2 px-4 ms-auto me-2 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 font-medium focus-visible:outline focus-visible:outline-offset"
      >
        Retry
      </button>
      <button
        type="button"
        class="p-2 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 focus-visible:outline focus-visible:outline-offset"
        aria-label="Close error alert"
      >
        <SfIconClose />
      </button>
    </Alert>

    <Alert variant="negative" class="w-full max-w-[320px] shadow-md" size="sm">
      <p class="py-1.5 me-2">The password change was failed.</p>
      <button
        type="button"
        class="py-1.5 px-3 ms-auto me-2 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 font-medium focus-visible:outline focus-visible:outline-offset"
      >
        Retry
      </button>
      <button
        type="button"
        class="p-1.5 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 focus-visible:outline focus-visible:outline-offset"
        aria-label="Close error alert"
      >
        <SfIconClose size="sm" />
      </button>
    </Alert>
  </div>
</template>
<script lang="ts" setup>
import { SfIconClose } from '@storefront-ui/vue';
import Alert from './Alert.vue';
</script>
