<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  filled: {
    type: Boolean,
    default: true,
  },
  link: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'action',
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
    return props.filled
      ? 'vsf-navbar-top__action-item vsf-navbar-top__action-item--branded'
      : 'vsf-navbar-top__action-item';
  } else {
    return props.filled ? 'vsf-navbar-top__menu-item vsf-navbar-top__menu-item--branded' : 'vsf-navbar-top__menu-item';
  }
});
</script>

<template>
  <component :is="componentTag" v-bind="attributes" :class="classes" :aria-label="ariaLabel">
    <slot />
  </component>
</template>
