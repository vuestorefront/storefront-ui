<script lang="ts" setup>
import type { PropType } from 'vue';
import { VsfLoaderLinearSize, VsfLoaderSizes } from './types';

defineProps({
  size: {
    type: String as PropType<VsfLoaderLinearSize | VsfLoaderSizes>,
    default: VsfLoaderLinearSize.minimal,
  },
  screenReaderText: {
    type: String,
    default: 'loading',
  },
});
</script>

<template>
  <span :class="`vsf-loader-linear vsf-loader-linear--${size}`" aria-live="polite" data-testid="loader-linear">
    <span class="vsf-loader-linear__sr-only" data-testid="loader-sr">{{ screenReaderText }}</span>
    <span class="vsf-loader-linear-main" aria-hidden="true" />
    <span class="vsf-loader-linear-animated" aria-hidden="true" />
  </span>
</template>
