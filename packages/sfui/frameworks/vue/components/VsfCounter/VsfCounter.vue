<script setup lang="ts">
import type { PropType } from 'vue';
import { VsfCounterSize } from './types';

defineProps({
  size: {
    type: String as PropType<`${VsfCounterSize}`>,
    default: VsfCounterSize.base,
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
    data-testid="counter"
  >
    <slot />
  </span>
</template>
