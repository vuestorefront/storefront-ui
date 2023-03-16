<template>
  <label>
    <span class="text-sm font-medium">Label</span>
    <VsfInput invalid />
  </label>
  <div class="flex justify-between">
    <div>
      <p class="text-sm text-negative-700 font-medium mt-0.5">Error</p>
      <p class="text-xs text-neutral-500 mt-0.5">Help Text</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { VsfInput } from '@storefront-ui/vue';
</script>
