<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { VsfButtonSizesKeys, VsfButtonSizes, VsfButtonVariantsKeys, VsfButtonVariants } from './types';
const props = defineProps({
  size: {
    type: String as PropType<VsfButtonSizesKeys>,
    default: VsfButtonSizes.base,
  },
  variant: {
    type: String as PropType<VsfButtonVariantsKeys>,
    default: VsfButtonVariants.primary,
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  tile: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: 'button',
  },
  href: {
    type: String,
    default: null,
  },
});

const componentTag = computed(() => {
  if (props.href && props.tag === 'button') {
    return 'a';
  }
  return props.tag;
});

const attributes = computed(() => ({
  role: componentTag.value === 'a' ? 'button' : undefined,
  ...(props.href && { href: props.href }),
  disabled: props.disabled,
}));
const buttonClasses = computed(() => [
  'vsf-button',
  {
    'vsf-button--disabled': props.disabled,
    'vsf-button--rounded': props.rounded,
    'vsf-button--tile': props.tile,
    'vsf-button--icon': props.icon,
    'vsf-button--block': props.block,

    'vsf-button--base': props.size === 'base',
    'vsf-button--sm': props.size === 'sm',
    'vsf-button--lg': props.size === 'lg',

    'vsf-button--variant-primary': props.variant === 'primary',
    'vsf-button--variant-secondary': props.variant === 'secondary',
    'vsf-button--variant-tertiary': props.variant === 'tertiary',
  },
]);
</script>

<template>
  <component :is="componentTag" v-bind="attributes" :class="buttonClasses">
    <slot name="prefix"></slot>
    <slot></slot>
    <slot name="suffix"></slot>
  </component>
</template>
