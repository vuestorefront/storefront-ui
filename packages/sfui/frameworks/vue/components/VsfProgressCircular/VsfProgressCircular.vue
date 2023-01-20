<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed } from 'vue';
import { progressSvgSizes } from '@storefront-ui/shared';
import { VsfProgressCircularSize } from './types';

const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  size: {
    type: String as PropType<`${VsfProgressCircularSize}`>,
    default: VsfProgressCircularSize.base,
  },
  withValue: {
    type: Boolean,
    default: true,
  },
  svgAriaLabel: {
    type: String,
    default: 'Progress',
  },
});

const strokeWidth = computed(() => {
  switch (props.size) {
    case VsfProgressCircularSize['2xl']:
      return 3;

    case VsfProgressCircularSize['3xl']:
      return 4;

    case VsfProgressCircularSize['4xl']:
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
      :width="progressSvgSizes[size].icon"
      :height="progressSvgSizes[size].icon"
      :stroke-width="strokeWidth"
      class="vsf-progress-circular__icon"
      :viewBox="`0 0 ${progressSvgSizes[size].icon} ${progressSvgSizes[size].icon}`"
      :aria-label="svgAriaLabel"
    >
      <circle
        stroke="#e6e6e6"
        fill="none"
        :r="progressSvgSizes[size].r"
        :cx="progressSvgSizes[size].icon / 2"
        :cy="progressSvgSizes[size].icon / 2"
        :stroke-dasharray="`${progressSvgSizes[size].dash} ${progressSvgSizes[size].dash}`"
        class="vsf-progress-circular__circle"
      ></circle>
      <circle
        stroke="#16A34A"
        fill="none"
        :r="progressSvgSizes[size].r"
        :cx="progressSvgSizes[size].icon / 2"
        :cy="progressSvgSizes[size].icon / 2"
        :stroke-dasharray="`${progressSvgSizes[size].dash * (value / 100)}, ${progressSvgSizes[size].dash}`"
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
