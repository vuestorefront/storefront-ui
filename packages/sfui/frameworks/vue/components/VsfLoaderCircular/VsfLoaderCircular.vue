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
    <span class="vsf-loader-circular-main" aria-hidden="true" />
    <span
      :class="['vsf-loader-circular-circle', `vsf-loader-circular--${size}`]"
      aria-hidden="true"
      data-testid="loader-circular-circle"
    />
  </span>
</template>
