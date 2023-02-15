<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed, toRefs } from 'vue';
import { clamp, roundToNearest } from '@storefront-ui/shared';
import { VsfRatingSize, VsfRatingVariant } from './types';
import { VsfIconStarFilled, VsfIconStar, VsfIconStarHalf } from '../VsfIcons';

const props = defineProps({
  size: {
    type: String as PropType<`${VsfRatingSize}`>,
    default: VsfRatingSize.base,
  },
  variant: {
    type: String as PropType<`${VsfRatingVariant}`>,
    default: VsfRatingVariant.base,
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
const { value, max, halfIncrement } = toRefs(props);

const precision = computed(() => (halfIncrement.value ? 0.5 : 1));
const ratingValue = computed(() => clamp(roundToNearest(value.value, precision.value), 0, max.value));
const partiallyFilled = computed(() => Number(!Number.isInteger(ratingValue.value)));
const filled = computed(() => Math.ceil(ratingValue.value - partiallyFilled.value));
const empty = computed(() => max.value - filled.value - partiallyFilled.value);
// TODO: i18n, localize text via prop
const title = computed(() => `${value.value} out of ${max.value}`);
</script>

<template>
  <div
    role="img"
    :ariaLabel="title"
    :title="title"
    :class="[
      'vsf-rating',
      {
        'vsf-rating--xs': size === VsfRatingSize.xs,
        'vsf-rating--sm': size === VsfRatingSize.sm,
        'vsf-rating--base': size === VsfRatingSize.base,
        'vsf-rating--lg': size === VsfRatingSize.lg,
        'vsf-rating--xl': size === VsfRatingSize.xl,
      },
    ]"
  >
    <template v-if="variant === 'withValue'">
      <VsfIconStarFilled aria-hidden="true" class="vsf-rating__star-filled" />
      <span class="vsf-rating__value">{{ value }}</span>
    </template>
    <template v-else>
      <VsfIconStarFilled v-for="index in filled" :key="index" aria-hidden="true" class="vsf-rating__star-filled" />
      <VsfIconStarHalf v-if="partiallyFilled" aria-hidden="true" class="vsf-rating__star-partial" />
      <VsfIconStar v-for="index in empty" :key="index" aria-hidden="true" class="vsf-rating__star-empty" />
    </template>
  </div>
</template>
