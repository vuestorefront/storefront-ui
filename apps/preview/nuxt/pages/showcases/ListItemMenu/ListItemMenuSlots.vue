<template>
  <div class="flex flex-col max-w-sm space-y-4 font-body">
    <VsfListItemMenu>
      <template #prefix>
        <VsfIconCircle />
      </template>
      <span class="inline-block break-words">
        Label
        <VsfCounter class="ml-2" size="xl">123</VsfCounter>
      </span>
      <span class="text-xs text-gray-500 break-words">Secondary text</span>
      <template #suffix>
        <VsfIconCheck />
      </template>
    </VsfListItemMenu>
  </div>
</template>

<script lang="ts" setup>
import { VsfListItemMenu, VsfCounter, VsfIconCheck, VsfIconCircle } from '@storefront-ui/vue';
</script>
