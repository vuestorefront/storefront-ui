<script setup lang="ts">
import { PropType } from 'vue';
import { VsfTagSizes, VsfTagVariants, VsfTagAriaLiveValues } from './types';

defineProps({
  label: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<VsfTagSizes>,
    default: VsfTagSizes.base,
  },
  variant: {
    type: String as PropType<VsfTagVariants>,
    default: VsfTagVariants.gray,
  },
  strong: {
    type: Boolean,
    default: false,
  },
  ariaLive: {
    type: String as PropType<VsfTagAriaLiveValues>,
    default: VsfTagAriaLiveValues.polite,
  },
});
</script>

<template>
  <div
    :class="['vsf-tag', `vsf-tag--size-${size}`, `vsf-tag--variant-${variant}`, { 'vsf-tag--strong': strong }]"
    :aria-live="ariaLive"
  >
    <div v-if="$slots.icon" :class="['vsf-tag__icon', label && 'ml-1 mr-0.5']">
      <slot name="icon" />
    </div>
    <span v-if="label" class="vsf-tag__label">{{ label }}</span>
  </div>
</template>
