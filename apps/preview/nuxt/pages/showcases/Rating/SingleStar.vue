<template>
  <div class="flex flex-col gap-2">
    <div class="font-medium typography-text-xs">
      <VsfIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
      {{ value }}
    </div>
    <div class="font-medium typography-text-sm">
      <VsfIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
      {{ value }}
    </div>
    <div class="font-medium">
      <VsfIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
      {{ value }}
    </div>
    <div class="font-medium typography-text-lg">
      <VsfIconStarFilled class="text-warning-500 w-[1.5em] h-[1.5em]" />
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfIconStarFilled } from '@storefront-ui/vue/components/VsfIcons/index';

const value = ref(4.5);
</script>
