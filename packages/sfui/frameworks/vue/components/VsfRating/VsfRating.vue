<script lang="ts">
const sizeClasses = {
  [VsfRatingSize.xs]: 'text-xs',
  [VsfRatingSize.sm]: 'text-sm',
  [VsfRatingSize.base]: 'text-base',
  [VsfRatingSize.lg]: 'text-lg',
  [VsfRatingSize.xl]: 'text-xl',
};
</script>

<script lang="ts" setup>
import { computed, toRefs, type PropType } from 'vue';
import { clamp, roundToNearest } from '@storefront-ui/shared';
import { VsfRatingSize, VsfIconStarFilled, VsfIconStar, VsfIconStarHalf } from '@storefront-ui/vue';

const props = defineProps({
  size: {
    type: String as PropType<`${VsfRatingSize}`>,
    default: VsfRatingSize.base,
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
  ariaLabel: {
    type: String,
    default: undefined,
  },
});
const { value, max, halfIncrement, ariaLabel } = toRefs(props);

const precision = computed(() => (halfIncrement.value ? 0.5 : 1));
const ratingValue = computed(() => clamp(roundToNearest(value.value, precision.value), 0, max.value));
const partiallyFilled = computed(() => Number(!Number.isInteger(ratingValue.value)));
const filled = computed(() => Math.ceil(ratingValue.value - partiallyFilled.value));
const empty = computed(() => max.value - filled.value - partiallyFilled.value);

const label = computed(() => ariaLabel?.value ?? `${value.value} out of ${max.value}`);
</script>

<template>
  <span
    role="img"
    :ariaLabel="label"
    :title="label"
    :class="['inline-flex items-center text-warning-500', sizeClasses[size]]"
    data-testid="rating"
  >
    <VsfIconStarFilled v-for="index in filled" :key="index" aria-hidden="true" class="w-[1.5em] h-[1.5em]" />
    <VsfIconStarHalf v-if="partiallyFilled" aria-hidden="true" class="w-[1.5em] h-[1.5em]" />
    <VsfIconStar v-for="index in empty" :key="index" aria-hidden="true" class="text-disabled-500 w-[1.5em] h-[1.5em]" />
  </span>
</template>
