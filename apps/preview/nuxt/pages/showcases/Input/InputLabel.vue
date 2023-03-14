<template>
  <div class="flex flex-col">
    <label>
      <span class="text-sm font-medium">Label</span>
      <VsfInput size="sm" />
    </label>
    <br />
    <label>
      <span class="text-sm font-medium">Label</span>
      <VsfInput />
    </label>
    <br />
    <label>
      <span class="text-sm font-medium">Label</span>
      <VsfInput size="lg" />
    </label>
  </div>
</template>
<script lang="ts" setup>
import { VsfInput } from '@storefront-ui/vue/components/VsfInput/index';
</script>
