<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { VsfButtonSizes, VsfButtonVariants } from './types';
const props = defineProps({
  size: {
    type: String as PropType<VsfButtonSizes>,
    default: VsfButtonSizes.base,
  },
  variant: {
    type: String as PropType<VsfButtonVariants>,
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
  link: {
    type: [String, Object],
    default: null,
  },
});

const componentTag = computed(() => {
  if (props.link && props.tag === 'button') {
    return 'a';
  }
  return props.tag;
});

const attributes = computed(() => ({
  role: componentTag.value === 'a' ? 'button' : undefined,
  ...(props.link && { href: props.link }),
  disabled: props.disabled,
}));
// TODO: remove tag prop, why its needed? when link exists should be <a> in any other case button
</script>

<template>
  <component
    :is="componentTag"
    v-bind="attributes"
    :class="[
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
    ]"
    data-testid="button"
  >
    <span v-if="$slots.prefix" class="vsf-button__prefix">
      <slot name="prefix"></slot>
    </span>
    <slot></slot>
    <span v-if="$slots.suffix" class="vsf-button__suffix">
      <slot name="suffix"></slot>
    </span>
  </component>
</template>
