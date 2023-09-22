<template>
  <div :class="['inline-flex items-start border py-1 ps-4 pe-2', sizeClasses[size], classes]" role="alert">
    <slot />
  </div>
</template>

<script lang="ts">
const sizeClasses = {
  sm: 'typography-text-sm',
  base: 'typography-text-base',
};
</script>

<script setup lang="ts">
import { type PropType, computed } from 'vue';

const props = defineProps({
  size: {
    type: String as PropType<'sm' | 'base'>,
    default: 'base',
  },
  strong: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String as PropType<'primary' | 'secondary' | 'positive' | 'warning' | 'negative' | 'neutral'>,
    default: 'primary',
  },
});

const classes = computed(() => {
  switch (props.variant) {
    case 'primary':
      return `border-primary-200 ${props.strong ? 'bg-primary-600' : 'bg-primary-100'}`;
    case 'secondary':
      return `border-secondary-200 ${props.strong ? 'bg-secondary-800' : 'bg-secondary-100'}`;
    case 'positive':
      return `border-positive-200 ${props.strong ? 'bg-positive-600' : 'bg-positive-100'}`;
    case 'warning':
      return `border-warning-200 ${props.strong ? 'bg-warning-600' : 'bg-warning-100'}`;
    case 'negative':
      return `border-negative-200 ${props.strong ? 'bg-negative-600' : 'bg-negative-100'}`;
    default:
      return `border-neutral-200 ${props.strong ? 'bg-neutral-600' : 'bg-neutral-100'}`;
  }
});
</script>
