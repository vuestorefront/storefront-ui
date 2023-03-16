<script lang="ts" setup>
import { type PropType, ConcreteComponent, computed, toRefs, useSlots } from 'vue';
import { VsfButtonSize, VsfButtonVariant } from '@storefront-ui/vue';

const props = defineProps({
  size: {
    type: String as PropType<`${VsfButtonSize}`>,
    default: VsfButtonSize.base,
  },
  variant: {
    type: String as PropType<`${VsfButtonVariant}`>,
    default: VsfButtonVariant.primary,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  square: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: [String, Object] as PropType<string | ConcreteComponent>,
    default: 'button',
  },
});

const { size, variant, square } = toRefs(props);
const slots = useSlots();

const sizeClasses = computed(() => {
  switch (size.value) {
    case VsfButtonSize.sm:
      return [
        square.value ? 'p-1.5' : 'leading-5 text-sm py-0.75 px-3',
        slots.prefix || slots.suffix ? 'gap-1.5' : null,
      ].join(' ');
    case VsfButtonSize.lg:
      return [square.value ? 'p-4' : 'py-3 leading-6 px-6', slots.prefix || slots.suffix ? 'gap-3' : null].join(' ');
    default:
      return [square.value ? 'p-2' : 'py-2 leading-6 px-4', slots.prefix || slots.suffix ? 'gap-2' : null].join(' ');
  }
});

const variantClasses = computed(() => {
  switch (variant.value) {
    case VsfButtonVariant.secondary:
      return 'text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-primary-700 hover:shadow-medium active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50';
    case VsfButtonVariant.tertiary:
      return 'text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 disabled:bg-transparent';
    default:
      return 'text-white hover:shadow-medium shadow-base bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300';
  }
});
</script>
<template>
  <component
    :is="tag"
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center font-medium text-base focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded-md disabled:text-disabled-500 disabled:bg-disabled-300 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed',

      sizeClasses,
      variantClasses,
    ]"
    data-testid="button"
  >
    <slot v-if="$slots.prefix" name="prefix"></slot>
    <slot />
    <slot v-if="$slots.suffix" name="suffix"></slot>
  </component>
</template>
