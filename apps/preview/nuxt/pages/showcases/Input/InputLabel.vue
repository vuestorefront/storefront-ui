<template>
  <div class="flex flex-col gap-y-5">
    <label>
      <span class="text-sm font-medium">Label</span>
      <VsfInput size="sm" />
    </label>
    <label>
      <span class="text-sm font-medium">Label</span>
      <VsfInput />
    </label>
    <label>
      <span class="text-sm font-medium">Label</span>
      <VsfInput size="lg" />
    </label>
  </div>
</template>
<script lang="ts" setup>
import { VsfInput } from '@storefront-ui/vue';
</script>
