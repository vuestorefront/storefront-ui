<template>
  <label>
    <span class="text-sm font-medium">Description</span>
    <SfTextarea
      value="Hello! I'm a passionate shopper and a regular user of this ecommerce platform."
      class="w-full !bg-disabled-100 !ring-disabled-300 !ring-1"
      readonly
    />
  </label>
  <div class="flex justify-between">
    <div>
      <p class="text-xs text-neutral-500 mt-0.5">Do not include personal or financial information.</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SfTextarea } from '@storefront-ui/vue';
</script>
