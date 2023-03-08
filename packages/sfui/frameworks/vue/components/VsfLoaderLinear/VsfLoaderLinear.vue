<script lang="ts">
const sizeClasses = {
  [VsfLoaderLinearSize.minimal]: 'h-1',
  [VsfLoaderSize.xs]: 'h-4',
  [VsfLoaderSize.sm]: 'h-5',
  [VsfLoaderSize.base]: 'h-6',
  [VsfLoaderSize.lg]: 'h-7',
  [VsfLoaderSize.xl]: 'h-10',
  [VsfLoaderSize['2xl']]: 'h-14',
  [VsfLoaderSize['3xl']]: 'h-24',
  [VsfLoaderSize['4xl']]: 'h-48',
};
</script>

<script lang="ts" setup>
import { type PropType } from 'vue';
import { VsfLoaderLinearSize, VsfLoaderSize } from './types';

defineProps({
  size: {
    type: String as PropType<`${VsfLoaderLinearSize | VsfLoaderSize}`>,
    default: VsfLoaderLinearSize.minimal,
  },
  ariaLabel: {
    type: String,
    default: 'loading',
  },
});
</script>

<template>
  <span
    class="relative inline-block overflow-hidden bg-neutral-200 text-primary-700"
    :class="sizeClasses[size]"
    aria-live="polite"
    :aria-label="ariaLabel"
    data-testid="loader-linear"
  >
    <span class="absolute w-2.5 h-full animate-line bg-current" aria-hidden="true" />
  </span>
</template>
