<script lang="ts" setup>
import { computed } from 'vue';
const props = defineProps({
  icon: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    default: null,
  },
  tag: {
    type: String,
    default: 'button',
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
  tabindex: componentTag.value === 'a' ? 0 : undefined,
  ...(props.link && { href: props.link }),
}));
</script>

<template>
  <component
    :is="componentTag"
    v-bind="attributes"
    :class="[
      'vsf-navbar-top-action',
      {
        'vsf-navbar-top-action--icon': icon,
        'vsf-navbar-top-action--active': active,
      },
    ]"
  >
    <span v-if="$slots.icon" class="vsf-navbar-top-action__icon">
      <slot name="icon"></slot>
    </span>

    <slot></slot>
  </component>
</template>
