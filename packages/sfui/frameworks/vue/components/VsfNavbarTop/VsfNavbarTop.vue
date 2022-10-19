<script lang="ts" setup>
defineProps({
  filled: {
    type: Boolean,
    default: true,
  },
});
</script>
<template>
  <header
    class="vsf-navbar-top"
    :class="{
      'vsf-navbar-top--branded': filled,
    }"
  >
    <slot />
  </header>
</template>
