<template>
  <label>
    <span class="typography-text-sm font-medium cursor-not-allowed text-disabled-900">Description</span>
    <SfTextarea
      disabled
      placeholder="Write something about yourself..."
      class="w-full !bg-disabled-100 !ring-disabled-300 !ring-1"
    />
  </label>
  <div class="flex justify-between mt-0.5">
    <div>
      <p class="typography-text-xs text-disabled-500">Do not include personal or financial information.</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SfTextarea } from '@storefront-ui/vue';
</script>
