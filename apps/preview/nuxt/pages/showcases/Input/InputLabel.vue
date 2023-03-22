<template>
  <div class="flex flex-col gap-y-5">
    <label>
      <span class="text-sm font-medium">Label</span>
      <SfInput size="sm" />
    </label>
    <label>
      <span class="text-sm font-medium">Label</span>
      <SfInput />
    </label>
    <label>
      <span class="text-sm font-medium">Label</span>
      <SfInput size="lg" />
    </label>
  </div>
</template>
<script lang="ts" setup>
import { SfInput } from '@storefront-ui/vue';
</script>
