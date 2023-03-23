<script lang="ts">
const sizeClasses = {
  [SfLoaderSize.xs]: 'h-4 w-4 ring-2',
  [SfLoaderSize.sm]: 'h-5 w-5 ring-2',
  [SfLoaderSize.base]: 'h-6 w-6 ring-2',
  [SfLoaderSize.lg]: 'h-8 w-8 ring-2',
  [SfLoaderSize.xl]: 'h-10 w-10 ring-2',
  [SfLoaderSize['2xl']]: 'h-14 w-14 ring-[3px]',
  [SfLoaderSize['3xl']]: 'h-24 w-24 ring-4',
  [SfLoaderSize['4xl']]: 'h-48 w-48 ring-8',
};
const strokeSizeClass = {
  [SfLoaderSize.xs]: 'stroke-[10px]',
  [SfLoaderSize.sm]: 'stroke-[8px]',
  [SfLoaderSize.base]: 'stroke-[6px]',
  [SfLoaderSize.lg]: 'stroke-[4px]',
  [SfLoaderSize.xl]: 'stroke-[3px]',
  [SfLoaderSize['2xl']]: 'stroke-[3px]',
  [SfLoaderSize['3xl']]: 'stroke-2',
  [SfLoaderSize['4xl']]: 'stroke-2',
};
</script>

<script lang="ts" setup>
import { type PropType } from 'vue';
import { SfLoaderSize } from '@storefront-ui/vue';

defineProps({
  size: {
    type: String as PropType<`${SfLoaderSize}`>,
    default: SfLoaderSize.base,
  },
  ariaLabel: {
    type: String,
    default: 'loading',
  },
});
</script>

<template>
  <svg
    class="inline-block rounded-full ring-inset ring-neutral-300 text-primary-700 animate-spin-slow"
    :class="sizeClasses[size]"
    viewBox="25 25 50 50"
    aria-live="polite"
    :aria-label="ariaLabel"
    data-testid="loader-circular"
  >
    <circle
      :class="strokeSizeClass[size]"
      class="stroke-current stroke-2 fill-none animate-stroke-loader-circular"
      cx="50"
      cy="50"
      r="24"
    />
  </svg>
</template>
