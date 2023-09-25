<template>
  <div class="flex flex-col gap-4">
    <Alert variant="secondary" class="w-full max-w-[640px]">
      <SfIconInfo class="my-2 text-secondary-700 shrink-0" />
      <p class="py-2">Your cart will soon be full.</p>
    </Alert>

    <Alert variant="secondary" size="sm" class="w-full max-w-[320px]">
      <SfIconInfo size="sm" class="my-1.5 text-secondary-700 shrink-0" />
      <p class="py-1.5">Your cart will soon be full.</p>
    </Alert>
  </div>
</template>

<script lang="ts" setup>
import { SfIconInfo } from '@storefront-ui/vue';
import Alert from './Alert.vue';
</script>
