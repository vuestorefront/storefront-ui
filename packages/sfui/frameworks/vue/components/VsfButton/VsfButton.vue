<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed, toRefs } from 'vue';
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
  greyscale: {
    type: Boolean,
    default: false,
  },
  tile: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    default: undefined,
  },
  type: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button',
  },
});
const { link } = toRefs(props);
// TODO: add VsfLink when done, then we can add link object and linkTag prop
const componentTag = computed(() => (link?.value ? 'a' : 'button'));
</script>

<template>
  <component
    :is="componentTag"
    :href="link ? link : undefined"
    :disabled="link ? undefined : disabled ?? undefined"
    :type="componentTag === 'button' ? type : undefined"
    :class="[
      'vsf-button',
      `vsf-button--${size}`,
      `vsf-button--${variant}`,
      {
        'vsf-button--disabled': disabled,
        'vsf-button--rounded': rounded,
        'vsf-button--tile': tile,
        'vsf-button--block': block,
        'vsf-button--greyscale': greyscale,
        'vsf-button--has-prefix': $slots.prefix,
        'vsf-button--has-suffix': $slots.suffix,
        'vsf-button--no-content': !$slots.default,
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
