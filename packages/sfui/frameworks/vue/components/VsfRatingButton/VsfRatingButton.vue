<script lang="ts" setup>
import { VsfRatingButtonSizes } from './types';
import { VsfIconSizeEnum } from '../VsfIconBase/types';
import { computed, PropType, watch, ref, toRefs } from 'vue';
const props = defineProps({
  max: {
    type: Number,
    default: 5,
  },
  size: {
    type: String as PropType<VsfRatingButtonSizes>,
    default: VsfRatingButtonSizes.base,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Number,
    default: null,
  },
  name: {
    type: String,
    default: '',
  },
  ariaLabel: {
    type: String,
    default: '',
  },
});

defineEmits<{
  (e: 'update:modelValue', val: number): void;
}>();

const { ariaLabel, max, size } = toRefs(props);
const activeIcon = ref(null);
const ratingPointsArray = ref([]);

const getIconSize = computed((): VsfIconSizeEnum => {
  switch (size.value) {
    case VsfRatingButtonSizes.sm:
      return VsfIconSizeEnum.base;
    case VsfRatingButtonSizes.lg:
      return VsfIconSizeEnum.xl;
    default:
      return VsfIconSizeEnum.lg;
  }
});

const createRatingPointsArray = (amount: number): number[] => {
  return Array.from({ length: amount }, (item, index) => index + 1);
};

watch(
  max,
  (max) => {
    ratingPointsArray.value = createRatingPointsArray(max);
  },
  { immediate: true },
);
</script>

<template>
  <fieldset class="vsf-rating-button vsf-rating-button__group" :disabled="disabled" data-testid="rating-button">
    <legend class="vsf-rating-button__legend" data-testid="rating-button-legend">{{ name }}</legend>
    <span
      v-for="item of ratingPointsArray"
      :key="`${name}-${item}`"
      class="vsf-rating-button__item"
      :data-testid="`rating-button-item-${item}`"
    >
      <input
        :id="`${name}-${item}`"
        type="radio"
        :aria-label="ariaLabel"
        :name="name"
        :value="item"
        class="vsf-rating-button__input vsf-rating-button__input--items peer"
        :disabled="disabled"
        :checked="modelValue === item"
        :data-testid="`rating-button-item-input-${item}`"
        @change="$emit('update:modelValue', Number($event.target.value))"
        @focus="activeIcon = item"
      />
      <label
        class="vsf-rating-button__label"
        :for="`${name}-${item}`"
        @mouseover="activeIcon = item"
        @mouseleave="activeIcon = modelValue"
      >
        <span
          v-if="(activeIcon || modelValue) >= item && !disabled"
          class="vsf-rating-button__icon vsf-rating-button__icon--filled"
          :data-testid="`rating-button-icon-filled-${item}`"
        >
          <slot name="iconFilled" :get-icon-size="getIconSize" />
        </span>
        <span v-else class="vsf-rating-button__icon vsf-rating-button__icon--empty">
          <slot name="iconEmpty" :get-icon-size="getIconSize" />
        </span>
      </label>
    </span>
  </fieldset>
</template>
