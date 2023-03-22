<template>
  <SfListItem class="max-w-sm">
    <template #prefix><SfIconTune /></template>
    <span class="break-words">
      Label
      <SfCounter class="ml-2" size="xl">123</SfCounter>
    </span>
    <span class="text-xs text-neutral-500 break-words">Secondary text</span>
    <template #suffix><SfIconChevronRight /></template>
  </SfListItem>
</template>

<script lang="ts" setup>
import { SfListItem, SfCounter, SfIconChevronRight, SfIconTune } from '@storefront-ui/vue';
</script>
