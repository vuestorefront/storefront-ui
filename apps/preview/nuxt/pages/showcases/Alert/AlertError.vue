<template>
  <div class="flex flex-col gap-4">
    <Alert variant="negative" class="w-full max-w-[640px]">
      <SfIconError class="my-2 text-negative-700 shrink-0" />
      <p class="py-2">The password change was failed.</p>
      <button
        type="button"
        class="ms-auto py-2 px-4 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 font-medium focus-visible:outline focus-visible:outline-offset"
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

    <Alert variant="negative" size="sm" class="w-full max-w-[320px]">
      <SfIconError class="my-1.5 text-negative-700 shrink-0" size="sm" />
      <p class="py-2">The password change was failed.</p>
      <button
        type="button"
        class="ms-auto py-1.5 px-3 rounded-md text-negative-700 hover:bg-negative-200 active:bg-negative-300 hover:text-negative-800 active:text-negative-900 font-medium focus-visible:outline focus-visible:outline-offset"
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
import { SfIconClose, SfIconError } from '@storefront-ui/vue';
import Alert from './Alert.vue';
</script>
