<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfLoaderSizes } from '@sfui/shared/types';
defineProps({
  size: {
    type: String as PropType<VsfLoaderSizes>,
    default: VsfLoaderSizes.lg,
  },
  screenReaderText: {
    type: String,
    default: 'loading',
  },
});
</script>

<template>
  <span class="vsf-loader-circular" aria-live="polite" data-testid="loader-circular">
    <span class="vsf-loader-circular__sr-only" data-testid="loader-sr">{{ screenReaderText }}</span>
    <span class="vsf-loader-circular-main" aria-hidden="true" />
    <span :class="`vsf-loader-circular-circle vsf-loader-circular--${size}`" aria-hidden="true" />
  </span>
</template>
