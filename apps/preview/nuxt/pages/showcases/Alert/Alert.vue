<template>
  <div
    :class="[
      'border inline-flex items-start py-1 ps-4 pe-2 gap-2 rounded-md shadow-md',
      sizeClasses[size],
      variantClasses[variant],
    ]"
    role="alert"
  >
    <slot />
  </div>
</template>

<script lang="ts">
const sizeClasses = {
  sm: 'typography-text-sm',
  base: 'typography-text-base',
};
const variantClasses = {
  primary: 'border-primary-200 bg-primary-100',
  secondary: 'border-secondary-200 bg-secondary-100',
  positive: 'border-positive-200 bg-positive-100',
  warning: 'border-warning-200 bg-warning-100',
  negative: 'border-negative-200 bg-negative-100',
  neutral: 'border-neutral-200 bg-neutral-100',
};
</script>

<script setup lang="ts">
import { type PropType } from 'vue';

defineProps({
  size: {
    type: String as PropType<'sm' | 'base'>,
    default: 'base',
  },
  variant: {
    type: String as PropType<'primary' | 'secondary' | 'positive' | 'warning' | 'negative' | 'neutral'>,
    default: 'neutral',
  },
});
</script>
