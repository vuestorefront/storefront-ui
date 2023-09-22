<template>
  <div class="flex flex-col gap-4">
    <Alert variant="secondary" class="w-full max-w-[640px] shadow-md">
      <SfIconInfo class="mt-2 me-2 text-secondary-700 shrink-0" />
      <p class="py-2">Your cart will soon be full.</p>
    </Alert>

    <Alert variant="secondary" class="w-full max-w-[320px] shadow-md" size="sm">
      <SfIconInfo size="sm" class="mt-1.5 me-2 text-secondary-700 shrink-0" />
      <p class="py-1.5">Your cart will soon be full.</p>
    </Alert>
  </div>
</template>

<script lang="ts" setup>
import { SfIconInfo } from '@storefront-ui/vue';
import Alert from './Alert.vue';
</script>
