<template>
  <VsfListItem class="max-w-sm">
    <template #prefix><VsfIconTune /></template>
    <span class="break-words">
      Label
      <VsfCounter class="ml-2" size="xl">123</VsfCounter>
    </span>
    <span class="text-xs text-neutral-500 break-words">Secondary text</span>
    <template #suffix><VsfIconChevronRight /></template>
  </VsfListItem>
</template>

<script lang="ts" setup>
import { VsfListItem, VsfCounter, VsfIconChevronRight, VsfIconTune } from '@storefront-ui/vue';
</script>
