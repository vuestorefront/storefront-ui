<script lang="ts" setup>
import { computed, toRefs } from 'vue';
const props = defineProps({
  link: {
    type: String,
    default: null,
  },
  tag: {
    type: String,
    default: 'button',
  },
  icon: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
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
      tabindex: componentTag === 'a' ? 0 : null,
      ...(link && { href: link }),
    }"
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
