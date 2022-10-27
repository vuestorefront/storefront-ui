<script setup lang="ts">
import { PropType } from 'vue';
import { VsfTagSizes, VsfTagVariants } from './types';

defineProps({
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
  <div :class="['vsf-tag', `vsf-tag--size-${size}`, `vsf-tag--variant-${variant}`, strong ? `vsf-tag--strong` : null]">
    <div v-if="$slots.icon" :class="['vsf-tag__icon', label ? 'ml-1 mr-0.5' : null]">
      <slot name="icon" />
    </div>
    <span v-if="label" class="vsf-tag__label">{{ label }}</span>
  </div>
</template>
