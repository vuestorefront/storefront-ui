<script setup lang="ts">
import type { PropType } from 'vue';
import { computed, toRefs } from 'vue';
import { SfCounterSize, twMerge, useTwMergeRoot } from '@storefront-ui/vue';

const props = defineProps({
  size: {
    type: String as PropType<`${SfCounterSize}`>,
    default: SfCounterSize.base,
  },
  pill: {
    type: Boolean,
    default: false,
  },
});
defineOptions({
  inheritAttrs: false,
});
const { attrsWithoutClass } = useTwMergeRoot();
const { size, pill } = toRefs(props);

const sizeClasses = computed(() => {
  switch (size?.value) {
    case SfCounterSize['3xs']:
      return ['text-3xs', { 'px-1': pill.value }];
    case SfCounterSize['2xs']:
      return ['text-2xs', { 'px-1.5': pill.value }];
    case SfCounterSize.xs:
      return ['text-xs', { 'px-2': pill.value }];
    case SfCounterSize.sm:
      return ['text-sm', { 'px-2.5': pill.value }];
    case SfCounterSize.lg:
      return ['text-lg', { 'px-3.5': pill.value }];
    default:
      return ['text-base', { 'px-3': pill.value }];
  }
});
</script>

<template>
  <span
    :class="
      twMerge(
        `inline-flex items-center before:content-['('] after:content-[')']`,
        ...sizeClasses,
        {
          'rounded-full py-0.5 font-medium ring-1 ring-neutral-200 ring-inset text-neutral-900 before:content-none after:content-none':
            pill,
          'text-neutral-500': !pill,
        },
        $attrs.class,
      )
    "
    data-testid="counter"
    v-bind="attrsWithoutClass"
  >
    <slot />
  </span>
</template>
