<script lang="ts" setup>
defineProps({
  subtitle: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  titleTag: {
    type: String,
    default: 'h1',
  },
  description: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="vsf-display-content" data-testid="display-content">
    <p class="vsf-display-content__subtitle">{{ subtitle }}</p>
    <component :is="titleTag" class="vsf-display-content__title">{{ title }}</component>
    <p class="vsf-display-content__description">{{ description }}</p>
    <slot />
  </div>
</template>
