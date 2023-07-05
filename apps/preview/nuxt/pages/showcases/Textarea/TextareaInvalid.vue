<template>
  <label>
    <span class="text-sm font-medium">Description</span>
    <SfTextarea invalid placeholder="Write something about yourself..." class="w-full" />
  </label>
  <div class="flex justify-between mt-0.5">
    <div>
      <p class="typography-text-sm text-negative-700 font-medium">The field cannot be empty</p>
      <p class="typography-text-xs text-neutral-500">Do not include personal or financial information.</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SfTextarea } from '@storefront-ui/vue';
</script>
