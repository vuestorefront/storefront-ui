<script setup lang="ts">
import { PropType } from 'vue';
import type { VsfCounterSizes } from './types';

const props = defineProps({
  size: {
    type: String as PropType<VsfCounterSizes>,
    default: 'base',
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
      `vsf-counter--${props.size}`,
      {
        'vsf-counter--pill': props.pill,
      },
    ]"
  >
    <slot />
  </span>
</template>
