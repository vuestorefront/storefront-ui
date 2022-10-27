<script lang="ts" setup>
defineProps({
  filled: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <header
    :class="[
      'vsf-navbar-top',
      {
        'vsf-navbar-top--branded': filled,
      },
    ]"
  >
    <div class="vsf-navbar-top__container">
      <slot></slot>
    </div>
  </header>
</template>
