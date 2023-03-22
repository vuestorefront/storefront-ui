<template>
  <div class="flex flex-col gap-2">
    <div class="font-medium typography-text-xs">
      <SfIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
      {{ value }}
    </div>
    <div class="font-medium typography-text-sm">
      <SfIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
      {{ value }}
    </div>
    <div class="font-medium">
      <SfIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
      {{ value }}
    </div>
    <div class="font-medium typography-text-lg">
      <SfIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfIconStarFilled } from '@storefront-ui/vue';

const value = ref(4.5);
</script>
