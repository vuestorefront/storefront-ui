<script lang="ts" setup>
import { computed, PropType, toRefs } from 'vue';
import { VsfRatingSizes, VsfRatingVariants } from './types';
import { VsfIconStar, VsfIconStarOutline, VsfIconStarPartiallyFilled } from '../../components/VsfIcons';
import { clamp, roundToNearest } from '@sfui/sfui/shared/utils/index';

const props = defineProps({
  size: {
    type: String as PropType<VsfRatingSizes>,
    default: VsfRatingSizes.base,
  },
  variant: {
    type: String as PropType<VsfRatingVariants>,
    default: VsfRatingVariants.base,
  },
  max: {
    type: Number,
    default: 5,
  },
  value: {
    type: Number,
    default: 0,
  },
  halfIncrement: {
    type: Boolean,
    default: false,
  },
});
const precision = computed(() => (props.halfIncrement ? 0.5 : 1));
const { value, max } = toRefs(props);

const ratingValue = computed(() => clamp(roundToNearest(value.value, precision.value), 0, max.value));
const partiallyFilled = computed(() => Number(!Number.isInteger(ratingValue.value)));
const filled = computed(() => Math.ceil(ratingValue.value - partiallyFilled.value));
const empty = computed(() => max.value - filled.value - partiallyFilled.value);
const title = computed(() => `${value.value} out of ${max.value}`);
const classes = computed(() => [
  'vsf-rating',
  {
    'vsf-rating--xs': props.size === VsfRatingSizes.xs,
    'vsf-rating--sm': props.size === VsfRatingSizes.sm,
    'vsf-rating--base': props.size === VsfRatingSizes.base,
    'vsf-rating--lg': props.size === VsfRatingSizes.lg,
    'vsf-rating--xl': props.size === VsfRatingSizes.xl,
  },
]);
</script>

<template>
  <div role="img" :ariaLabel="title" :title="title" :class="classes">
    <template v-if="variant === 'withValue'">
      <VsfIconStar aria-hidden="true" class="vsf-rating__star-filled" />
      <span class="vsf-rating__value">{{ value }}</span>
    </template>
    <template v-else>
      <VsfIconStar v-for="index in filled" :key="index" aria-hidden="true" class="vsf-rating__star-filled" />
      <VsfIconStarPartiallyFilled v-if="partiallyFilled" aria-hidden="true" class="vsf-rating__star-partial" />
      <VsfIconStarOutline v-for="index in empty" :key="index" aria-hidden="true" class="vsf-rating__star-empty" />
    </template>
  </div>
</template>
