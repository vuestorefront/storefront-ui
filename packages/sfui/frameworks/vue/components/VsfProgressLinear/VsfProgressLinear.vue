<script lang="ts" setup>
import { VsfProgressLinearSizes } from './types';
defineProps({
  value: {
    type: Number,
    default: 0,
  },
  size: {
    type: String,
    default: VsfProgressLinearSizes.base,
  },
  withValue: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <label
    :class="[
      'vsf-progress-linear',
      { 'vsf-progress-linear--no-value': !withValue },
      `vsf-progress-linear--size--${size}`,
    ]"
    data-testid="progress"
  >
    <progress id="progressbar" max="100" class="vsf-progress-linear__progress" :value="value"></progress>
    <span
      v-if="withValue && size !== VsfProgressLinearSizes.minimal"
      class="vsf-progress-linear__label"
      data-testid="progress-value"
      >{{ value }}%</span
    >
  </label>
</template>
