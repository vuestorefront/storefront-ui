<template>
  <label>
    <span class="text-sm font-medium cursor-not-allowed text-disabled-500">Label</span>
    <VsfInput disabled wrapper-class="!bg-disabled-100 !ring-disabled-300 !ring-1" />
  </label>
  <div class="flex justify-between">
    <div>
      <p class="text-xs text-disabled-500 mt-0.5">Help Text</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { VsfInput } from '@storefront-ui/vue';
</script>
