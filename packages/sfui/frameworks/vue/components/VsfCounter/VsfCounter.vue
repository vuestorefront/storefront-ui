<script setup lang="ts">
import { PropType } from 'vue';
import { VsfCounterSizes } from './types';

defineProps({
  size: {
    type: String as PropType<VsfCounterSizes>,
    default: VsfCounterSizes.base,
  },
  pill: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <span
    :class="[
      'vsf-counter',
      `vsf-counter--${size}`,
      {
        'vsf-counter--pill': pill,
      },
    ]"
  >
    <slot />
  </span>
</template>
