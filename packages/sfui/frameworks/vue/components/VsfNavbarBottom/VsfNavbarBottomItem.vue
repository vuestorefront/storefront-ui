<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true,
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
  ...(props.link && { href: props.link }),
}));
</script>

<template>
  <component
    :is="componentTag"
    v-bind="attributes"
    :class="[
      'vsf-navbar-bottom-item',
      {
        'vsf-navbar-bottom-item--active': active,
      },
    ]"
  >
    <span class="vsf-navbar-bottom-item__content">
      <span class="vsf-navbar-bottom-item__icon">
        <slot name="icon"></slot>
      </span>

      <span class="vsf-navbar-bottom-item__label">{{ label }}</span>
    </span>
  </component>
</template>
