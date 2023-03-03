<script setup lang="ts">
import { PropType, computed, toRefs } from 'vue';
import { VsfCounterSize } from './types';

const props = defineProps({
  size: {
    type: String as PropType<`${VsfCounterSize}`>,
    default: VsfCounterSize.base,
  },
  pill: {
    type: Boolean,
    default: false,
  },
});
const { size, pill } = toRefs(props);

const sizeClasses = computed(() => {
  switch (size.value) {
    case VsfCounterSize.xs:
      return ['text-3xs', { 'px-1': pill.value }];
    case VsfCounterSize.sm:
      return ['text-2xs', { 'px-1': pill.value }];
    case VsfCounterSize.lg:
      return ['text-sm', { 'px-2.5': pill.value }];
    case VsfCounterSize.xl:
      return ['text-base', { 'px-3': pill.value }];
    case VsfCounterSize['2xl']:
      return ['text-lg', { 'px-3': pill.value }];
    default:
      return ['text-xs', { 'px-2': pill.value }];
  }
});
</script>

<template>
  <span
    class="inline-flex items-center font-body before:content-['('] after:content-[')'] text-gray-500"
    :class="[
      sizeClasses,
      {
        'rounded-full py-0.5 text-gray-900 font-medium ring-1 ring-gray-200 ring-inset before:content-none after:content-none':
          pill,
      },
    ]"
    data-testid="counter"
  >
    <slot />
  </span>
</template>
