<script setup lang="ts">
import { computed, toRefs, type PropType } from 'vue';
import { VsfListItemMenuSize } from '@storefront-ui/vue';

const props = defineProps({
  size: {
    type: String as PropType<`${VsfListItemMenuSize}`>,
    default: VsfListItemMenuSize.base,
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
  active: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: 'li',
  },
});
const { tag, disabled, size } = toRefs(props);
const sizeClasses = computed(() => {
  switch (size.value) {
    case VsfListItemMenuSize.sm:
      return 'text-sm px-4 py-1';
    case VsfListItemMenuSize.lg:
      return 'px-4 py-4';
    default:
      return 'px-4 py-2';
  }
});
</script>

<template>
  <component
    :is="tag"
    :class="[
      'relative inline-flex items-center w-full hover:bg-neutral-100 cursor-pointer',
      sizeClasses,
      {
        'opacity-40 bg-white cursor-not-allowed pointer-events-none': disabled,
        'bg-neutral-200': active && !disabled,
      },
    ]"
    :disabled="disabled"
    data-testid="list-item-menu"
  >
    <span
      v-if="$slots.prefix"
      class="flex-grow-0 text-neutral-500 mr-2.5"
      :class="{ 'text-primary-700': active && !disabled, 'text-neutral-500': disabled }"
    >
      <slot name="prefix" />
    </span>
    <span class="flex flex-col w-full min-w-0">
      <slot />
    </span>
    <span v-if="$slots.suffix" class="flex-grow-0 text-neutral-500">
      <slot name="suffix" />
    </span>
  </component>
</template>
