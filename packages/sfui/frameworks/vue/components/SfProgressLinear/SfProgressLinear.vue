<script lang="ts">
const sizeClasses = {
  [SfProgressLinearSize.minimal]: 'h-1',
  [SfProgressSize.xs]: 'h-4',
  [SfProgressSize.sm]: 'h-5',
  [SfProgressSize.base]: 'h-6',
  [SfProgressSize.lg]: 'h-7',
  [SfProgressSize.xl]: 'h-10',
  [SfProgressSize['2xl']]: 'h-14',
  [SfProgressSize['3xl']]: 'h-24',
  [SfProgressSize['4xl']]: 'h-48',
};
</script>

<script lang="ts" setup>
import { type PropType } from 'vue';
import { SfProgressSize, SfProgressLinearSize } from '@storefront-ui/vue';

defineProps({
  value: {
    type: Number,
    default: 0,
  },
  size: {
    type: String as PropType<`${SfProgressSize | SfProgressLinearSize}`>,
    default: SfProgressSize.base,
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
