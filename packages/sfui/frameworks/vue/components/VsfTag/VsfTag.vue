<script setup lang="ts">
import type { PropType } from 'vue';
import { VsfTagSize, VsfTagVariant, VsfTagAriaLiveValue } from './types';

defineProps({
  label: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<`${VsfTagSize}`>,
    default: VsfTagSize.base,
  },
  variant: {
    type: String as PropType<`${VsfTagVariant}`>,
    default: VsfTagVariant.neutral,
  },
  strong: {
    type: Boolean,
    default: false,
  },
  ariaLive: {
    type: String as PropType<`${VsfTagAriaLiveValue}`>,
    default: VsfTagAriaLiveValue.polite,
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
