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
const classes = computed(() => [
  'vsf-counter',
  `vsf-counter--${props.size}`,
  {
    'vsf-counter--pill': props.pill,
  },
]);
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
