<template>
  <label>
    <span class="text-sm font-medium cursor-not-allowed text-disabled-900">Label</span>
    <SfInput disabled wrapper-class="!bg-disabled-100 !ring-disabled-300 !ring-1" />
  </label>
  <div class="flex justify-between">
    <div>
      <p class="text-xs text-disabled-500 mt-0.5">Help Text</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SfInput } from '@storefront-ui/vue';
</script>
