<template>
  <div class="flex flex-col max-w-sm space-y-4 font-body">
    <VsfListItemMenu size="sm">
      <span class="inline-block break-words">Label</span>
    </VsfListItemMenu>
    <VsfListItemMenu size="base">
      <span class="inline-block break-words">Label</span>
    </VsfListItemMenu>
    <VsfListItemMenu size="lg">
      <span class="inline-block break-words">Label</span>
    </VsfListItemMenu>
  </div>
</template>

<script lang="ts" setup>
import { VsfListItemMenu } from '@storefront-ui/vue';
</script>
