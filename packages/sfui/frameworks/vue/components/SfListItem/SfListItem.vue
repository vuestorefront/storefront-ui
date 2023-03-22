<script lang="ts">
export const sizeClasses = {
  [SfListItemSize.sm]: 'text-sm px-4 py-1',
  [SfListItemSize.base]: 'px-4 py-2',
  [SfListItemSize.lg]: 'p-4',
};
</script>

<script setup lang="ts">
import { type PropType } from 'vue';
import { SfListItemSize } from '@storefront-ui/vue';

defineProps({
  size: {
    type: String as PropType<`${SfListItemSize}`>,
    default: SfListItemSize.base,
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: undefined,
  },
});
</script>

<template>
  <component
    :is="tag || 'li'"
    :class="[
      'inline-flex items-center gap-2 w-full hover:bg-neutral-100 active:bg-neutral-200 cursor-pointer',
      sizeClasses[size],
      { 'cursor-not-allowed pointer-events-none text-disabled-900': disabled, 'font-medium': selected },
    ]"
    :disabled="disabled"
    data-testid="list-item"
  >
    <span v-if="$slots.prefix" :class="disabled ? 'text-disabled-500' : 'text-neutral-500'">
      <slot name="prefix" />
    </span>
    <span class="flex flex-col w-full min-w-0">
      <slot />
    </span>
    <span v-if="$slots.suffix" :class="disabled ? 'text-disabled-500' : 'text-neutral-500'">
      <slot name="suffix" />
    </span>
  </component>
</template>
