<template>
  <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
    <SfButton variant="primary" blank class="text-white bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900"> Hello </SfButton>

    <SfButton variant="secondary" blank class="text-neutral-700 hover:text-neutral-800 active:text-neutral-900 ring-current hover:bg-neutral-100 active:bg-neutral-200"> Hello </SfButton>

    <SfButton variant="tertiary" blank class="text-neutral-500 hover:text-neutral-600 active:text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200"> Hello </SfButton>
  </div>
  <div class="flex flex-col items-center space-y-4 xs:block xs:space-x-4">
    <SfButton variant="primary" blank class="text-white bg-negative-700 hover:bg-negative-800 active:bg-negative-900"> Hello </SfButton>

    <SfButton variant="secondary" blank class="text-negative-700 hover:text-negative-800 active:text-negative-900 ring-current hover:bg-negative-100 active:bg-negative-200"> Hello </SfButton>

    <SfButton variant="tertiary" blank class="text-negative-700 hover:text-negative-800 active:text-negative-900 hover:bg-negative-100 active:bg-negative-200"> Hello </SfButton>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';
</script>
