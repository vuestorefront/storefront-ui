<script lang="ts" setup>
import type { PropType } from 'vue';
import { VsfLoaderSize } from './types';

defineProps({
  size: {
    type: String as PropType<`${VsfLoaderSize}`>,
    default: VsfLoaderSize.lg,
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
    <span :class="['vsf-loader-circular__main', `vsf-loader-circular--${size}`]" aria-hidden="true" />
    <svg
      :class="['vsf-loader-circular__circle', `vsf-loader-circular--${size}`]"
      viewBox="25 25 50 50"
      data-testid="loader-circular-circle"
    >
      <circle class="vsf-loader-circular__circle-path" cx="50" cy="50" r="24"></circle>
    </svg>
  </span>
</template>
