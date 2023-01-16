<script lang="ts" setup>
defineProps({
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
</script>

<template>
  <nav
    :class="[
      'vsf-navbar-bottom',
      {
        'vsf-navbar-bottom--absolute': absolute,
        'vsf-navbar-bottom--no-labels': hideLabels,
        'vsf-navbar-bottom--filled': filled,
      },
    ]"
  >
    <slot />
  </nav>
</template>
