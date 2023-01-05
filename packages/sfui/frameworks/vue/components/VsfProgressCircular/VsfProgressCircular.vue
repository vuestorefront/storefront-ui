<script lang="ts" setup>
import { computed } from 'vue';
import { svgSizes } from '@storefront-ui/shared/progress';
import { VsfProgressCircularSizes } from './types';
const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  size: {
    type: String,
    default: VsfProgressCircularSizes.base,
  },
  withValue: {
    type: Boolean,
    default: true,
  },
});

const strokeWidth = computed(() => {
  switch (props.size) {
    case VsfProgressCircularSizes['2xl']:
      return 3;

    case VsfProgressCircularSizes['3xl']:
      return 4;

    case VsfProgressCircularSizes['4xl']:
      return 8;

    default:
      return 2;
  }
});
</script>

<template>
  <div
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    :aria-valuenow="value"
    class="vsf-progress-circular"
    data-testid="progress"
  >
    <svg
      role="img"
      :width="svgSizes[size].icon"
      :height="svgSizes[size].icon"
      :stroke-width="strokeWidth"
      class="vsf-progress-circular__icon"
      :viewBox="`0 0 ${svgSizes[size].icon} ${svgSizes[size].icon}`"
    >
      <circle
        stroke="#e6e6e6"
        fill="none"
        :r="svgSizes[size].r"
        :cx="svgSizes[size].icon / 2"
        :cy="svgSizes[size].icon / 2"
        :stroke-dasharray="`${svgSizes[size].dash} ${svgSizes[size].dash}`"
        class="vsf-progress-circular__circle"
      ></circle>
      <circle
        stroke="#16A34A"
        fill="none"
        :r="svgSizes[size].r"
        :cx="svgSizes[size].icon / 2"
        :cy="svgSizes[size].icon / 2"
        :stroke-dasharray="`${svgSizes[size].dash * (value / 100)}, ${svgSizes[size].dash}`"
        class="vsf-progress-circular__circle"
      ></circle>
      <text
        text-anchor="middle"
        alignment-baseline="central"
        x="50%"
        y="50%"
        :class="['vsf-progress-circular__label', `vsf-progress-circular__label--${size}`]"
        data-testid="progress-value"
      >
        {{ withValue ? `${value}%` : '' }}
      </text>
    </svg>
  </div>
</template>
