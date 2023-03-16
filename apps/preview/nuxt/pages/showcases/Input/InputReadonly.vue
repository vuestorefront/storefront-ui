<template>
  <label>
    <span class="text-sm font-medium">Label</span>
    <VsfInput model-value="value" wrapper-class="!bg-disabled-100 !ring-disabled-300 !ring-1" readonly />
  </label>
  <div class="flex justify-between">
    <div>
      <p class="text-xs text-neutral-500 mt-0.5">Help Text</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { VsfInput } from '@storefront-ui/vue';
</script>
