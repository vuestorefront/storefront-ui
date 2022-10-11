<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  absolute: {
    type: Boolean,
    default: false,
  },
  hideLabels: {
    type: Boolean,
    default: false,
  },
  filled: {
    type: Boolean,
    default: false,
  },
});

const classes = computed(() => [
  'vsf-navbar-bottom',
  {
    'vsf-navbar-bottom--absolute': props.absolute,
    'vsf-navbar-bottom--no-labels': props.hideLabels,
    'vsf-navbar-bottom--filled': props.filled,
  },
]);
</script>

<template>
  <nav :class="classes">
    <div class="vsf-navbar-bottom__root"><slot></slot></div>
  </nav>
</template>
