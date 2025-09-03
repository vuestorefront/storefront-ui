<template>
  <div
    role="alert"
    class="flex items-center max-w-[600px] shadow-md bg-primary-200 pr-2 pl-4 ring-1 ring-primary-200 typography-text-sm md:typography-text-base py-1 rounded-md"
  >
    <SfIconInfo class="mr-2 text-primary-700 shrink-0" />
    <p class="py-2">Your cart will soon be full.</p>
  </div>
</template>

<script lang="ts" setup>
import { SfIconInfo } from '@storefront-ui/vue';
</script>
