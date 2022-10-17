<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { VsfNavbarTopVariants } from './types';

const props = defineProps({
  variant: {
    type: String as PropType<VsfNavbarTopVariants>,
    default: VsfNavbarTopVariants.default,
  },
  link: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'action',
  },
  label: {
    type: String,
    default: '',
  },
  ariaLabel: {
    type: String,
    default: '',
  },
});
const componentTag = computed(() => {
  if (props.link) {
    return 'a';
  }
  return 'button';
});

const attributes = computed(() => ({
  ...(props.link && { href: props.link }),
}));
const classes = computed(() => {
  if (props.type === 'action') {
    return props.variant === VsfNavbarTopVariants.branded
      ? 'vsf-navbar-top__action-item vsf-navbar-top__action-item--branded'
      : 'vsf-navbar-top__action-item';
  } else {
    return props.variant === VsfNavbarTopVariants.branded
      ? 'vsf-navbar-top__menu-item vsf-navbar-top__menu-item--branded'
      : 'vsf-navbar-top__menu-item';
  }
});
</script>

<template>
  <li>
    <component :is="componentTag" v-bind="attributes" :class="classes" :aria-label="ariaLabel">
      <span v-if="$slots.icon" class="vsf-navbar-top__item__icon"><slot name="icon"></slot></span>
      <span class="vsf-navbar-top__item__label">{{ label }}</span>
    </component>
  </li>
</template>
