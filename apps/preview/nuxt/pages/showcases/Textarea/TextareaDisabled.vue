<template>
  <label>
    <span class="text-sm font-medium cursor-not-allowed text-disabled-900">Description</span>
    <SfTextarea
      disabled
      placeholder="Write something about yourself..."
      class="w-full !bg-disabled-100 !ring-disabled-300 !ring-1"
    />
  </label>
  <div class="flex justify-between">
    <div>
      <p class="text-xs text-disabled-500 mt-0.5">Do not include personal or financial information.</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SfTextarea } from '@storefront-ui/vue';
</script>
