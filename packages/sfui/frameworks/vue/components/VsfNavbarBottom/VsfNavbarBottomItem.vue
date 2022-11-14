<script lang="ts" setup>
import { computed, toRefs } from 'vue';

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
const { link, tag } = toRefs(props);
const componentTag = computed(() => {
  if (link.value && tag.value === 'button') {
    return 'a';
  }
  return tag.value;
});
</script>

<template>
  <component
    :is="componentTag"
    v-bind="{
      role: componentTag === 'a' ? 'button' : null,
      ...(link && { href: link }),
    }"
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
