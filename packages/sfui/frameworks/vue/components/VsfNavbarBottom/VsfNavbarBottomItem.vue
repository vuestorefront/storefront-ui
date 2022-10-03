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
  badge: {
    type: String,
    default: null,
  },
  dotBadge: {
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
const classes = computed(() => [
  'vsf-navbar-bottom-item',
  {
    'vsf-navbar-bottom-item--active': props.active,
  },
]);
const badgeClass = computed(() => [
  'vsf-navbar-bottom-item-badge',
  {
    'vsf-navbar-bottom-item-badge--dot': props.dotBadge,
  },
]);
</script>

<template>
  <component :is="componentTag" v-bind="attributes" :class="classes">
    <span class="vsf-navbar-bottom-item__content">
      <div :class="badgeClass">
        <span class="vsf-navbar-bottom-item__icon">
          <slot name="icon"></slot>
        </span>

        <div v-if="badge" class="vsf-navbar-bottom-item-badge__wrapper">
          <div class="vsf-navbar-bottom-item-badge__badge">
            <span>{{ badge }}</span>
          </div>
        </div>
      </div>
      <span class="vsf-navbar-bottom-item__label">{{ label }}</span>
    </span>
  </component>
</template>
