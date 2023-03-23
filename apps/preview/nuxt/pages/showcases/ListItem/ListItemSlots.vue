<template>
  <SfListItem class="max-w-sm">
    <template #prefix><SfIconTune /></template>
    <span class="break-words">
      Label
      <SfCounter class="ml-2">123</SfCounter>
    </span>
    <span class="text-xs break-words text-neutral-500">Secondary text</span>
    <template #suffix><SfIconChevronRight /></template>
  </SfListItem>
</template>

<script lang="ts" setup>
import { SfListItem, SfCounter, SfIconChevronRight, SfIconTune } from '@storefront-ui/vue';
</script>
