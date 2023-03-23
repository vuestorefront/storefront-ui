<template>
  <label>
    <span class="text-sm font-medium">Label</span>
    <SfInput>
      <template #prefix><SfIconPerson /></template>
      <template #suffix><SfIconLockOpen /></template>
    </SfInput>
  </label>
</template>
<script lang="ts" setup>
import { SfInput, SfIconPerson, SfIconLockOpen } from '@storefront-ui/vue';
</script>
