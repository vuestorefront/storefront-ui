<script setup lang="ts">
import { PropType } from 'vue';
import type { VsfTagSizes, VsfTagVariants } from './types';

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<VsfTagSizes>,
    default: 'base',
  },
  variant: {
    type: String as PropType<VsfTagVariants>,
    default: 'gray',
  },
  strong: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    :class="[
      'vsf-tag',
      `vsf-tag--size-${props.size}`,
      `vsf-tag--variant-${props.variant}`,
      props.strong ? `vsf-tag--strong` : null,
    ]"
  >
    <div v-if="$slots.icon" class="vsf-tag__icon">
      <slot name="icon" />
    </div>
    <span v-if="label" class="vsf-tag__label">{{ label }}</span>
  </div>
</template>
