<script setup lang="ts">
import { computed, PropType } from 'vue';
import type { VsfCounterSizesKeys } from './types';

const props = defineProps({
  size: {
    type: String as PropType<VsfCounterSizesKeys>,
    default: 'base',
  },
  pill: {
    type: Boolean,
    default: false,
  },
});

</script>

<template>
  <span :class="[
  'vsf-counter',
  `vsf-counter--${props.size}`,
  {
    'vsf-counter--pill': props.pill,
  },
]">
    <slot />
  </span>
</template>
