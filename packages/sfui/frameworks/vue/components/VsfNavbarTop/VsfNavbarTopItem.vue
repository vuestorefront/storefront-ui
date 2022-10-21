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

const classes = computed(() => {
  return props.filled ? 'vsf-navbar-top__item vsf-navbar-top__item--branded' : 'vsf-navbar-top__item';
});
</script>

<template>
  <li class="vsf-navbar-top__list-item">
    <component :is="componentTag" v-bind="$attrs" :href="link ? link : null" :class="classes" :aria-label="ariaLabel">
      <slot />
    </component>
  </li>
</template>
