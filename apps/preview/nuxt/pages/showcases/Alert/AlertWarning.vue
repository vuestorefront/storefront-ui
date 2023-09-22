<template>
  <div class="flex flex-col gap-4">
    <Alert variant="warning" class="w-full max-w-[640px] shadow-md">
      <SfIconWarning class="mt-2 me-2 text-warning-700 shrink-0" />
      <div class="py-2 me-2">
        <p class="font-medium">Your account</p>
        <p>Your shipping details need to be updated.</p>
      </div>
      <button
        type="button"
        class="py-2 px-4 rounded-md text-warning-700 hover:bg-warning-200 active:bg-warning-300 hover:text-warning-800 active:text-warning-900 ml-auto font-medium focus-visible:outline focus-visible:outline-offset"
      >
        Update
      </button>
    </Alert>

    <Alert variant="warning" class="w-full max-w-[320px] shadow-md" size="sm">
      <SfIconWarning size="sm" class="mt-1.5 me-2 text-warning-700 shrink-0" />
      <div class="py-1.5 me-2">
        <p class="font-medium">Your account</p>
        <p>Your shipping details need to be updated.</p>
      </div>
      <button
        type="button"
        class="py-1.5 px-3 rounded-md text-warning-700 hover:bg-warning-200 active:bg-warning-300 hover:text-warning-800 active:text-warning-900 ml-auto font-medium focus-visible:outline focus-visible:outline-offset"
      >
        Update
      </button>
    </Alert>
  </div>
</template>

<script lang="ts" setup>
import { SfIconWarning } from '@storefront-ui/vue';
import Alert from './Alert.vue';
</script>
