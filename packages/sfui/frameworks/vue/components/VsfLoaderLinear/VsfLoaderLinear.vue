<script lang="ts" setup>
import { PropType } from 'vue';
import { VsfLoaderLinearSize } from './types';
import { VsfLoaderSizes } from '@sfui/shared/types';
defineProps({
  size: {
    type: String as PropType<VsfLoaderSizes | VsfLoaderLinearSize>,
    default: VsfLoaderLinearSize['2xs'],
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
