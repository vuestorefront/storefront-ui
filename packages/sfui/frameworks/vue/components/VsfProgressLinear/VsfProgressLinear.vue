<script lang="ts">
const sizeClasses = {
  [VsfProgressLinearSize.minimal]: 'h-1',
  [VsfProgressSize.xs]: 'h-4',
  [VsfProgressSize.sm]: 'h-5',
  [VsfProgressSize.base]: 'h-6',
  [VsfProgressSize.lg]: 'h-7',
  [VsfProgressSize.xl]: 'h-10',
  [VsfProgressSize['2xl']]: 'h-14',
  [VsfProgressSize['3xl']]: 'h-24',
  [VsfProgressSize['4xl']]: 'h-48',
};
</script>

<script lang="ts" setup>
import { type PropType } from 'vue';
import { VsfProgressSize, VsfProgressLinearSize } from '@storefront-ui/vue';

defineProps({
  value: {
    type: Number,
    default: 0,
  },
  size: {
    type: String as PropType<`${VsfProgressSize | VsfProgressLinearSize}`>,
    default: VsfProgressSize.base,
  },
  ariaLabel: {
    type: String,
    default: 'Progress element',
  },
});
</script>

<template>
  <progress
    data-testid="progress-linear"
    max="100"
    class="bg-neutral-300 text-primary-700 [&::-webkit-progress-bar]:bg-inherit [&::-webkit-progress-value]:bg-current [&::-webkit-progress-value]:transition-[width] [&::-webkit-progress-value]:ease-in-out [&::-webkit-progress-value]:duration-200 [&::-moz-progress-bar]:bg-current"
    :class="sizeClasses[size]"
    :aria-label="ariaLabel"
    :value="value"
  />
</template>
