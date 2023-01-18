<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed, ref, toRefs } from 'vue';
import { VsfRatingButtonSize } from './types';
import { VsfIconSize } from '../VsfIconBase';

const props = defineProps({
  max: {
    type: Number,
    default: 5,
  },
  size: {
    type: String as PropType<`${VsfRatingButtonSize}`>,
    default: VsfRatingButtonSize.base,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Number,
    default: 0,
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

const emit = defineEmits<{
  (e: 'update:modelValue', val: number): void;
}>();
const { size } = toRefs(props);

const activeIconIndex = ref<number>();

const getIconSize = computed((): VsfIconSize => {
  switch (size.value) {
    case VsfRatingButtonSize.sm:
      return VsfIconSize.base;
    case VsfRatingButtonSize.lg:
      return VsfIconSize.xl;
    default:
      return VsfIconSize.lg;
  }
});

const updateModelFromEvent = (e: Event) => {
  if (e?.target && e.target instanceof HTMLInputElement) {
    emit('update:modelValue', Number(e.target.value));
  }
};
</script>

<template>
  <fieldset class="vsf-rating-button vsf-rating-button__group" :disabled="disabled" data-testid="rating-button">
    <legend class="vsf-rating-button__legend" data-testid="rating-button-legend">{{ name }}</legend>
    <span
      v-for="rateValue in max"
      :key="`${name}-${rateValue}`"
      class="vsf-rating-button__item"
      :data-testid="`rating-button-item-${rateValue}`"
    >
      <input
        :id="`${name}-${rateValue}`"
        type="radio"
        :aria-label="ariaLabel"
        :name="name"
        :value="rateValue"
        class="vsf-rating-button__input vsf-rating-button__input--items peer"
        :disabled="disabled"
        :checked="modelValue === rateValue"
        :data-testid="`rating-button-item-input-${rateValue}`"
        @change="updateModelFromEvent"
        @focus="activeIconIndex = rateValue"
      />
      <label
        class="vsf-rating-button__label"
        :for="`${name}-${rateValue}`"
        @mouseover="activeIconIndex = rateValue"
        @mouseleave="activeIconIndex = modelValue"
      >
        <span
          v-if="(activeIconIndex || modelValue || -1) >= rateValue && !disabled"
          class="vsf-rating-button__icon vsf-rating-button__icon--filled"
          :data-testid="`rating-button-icon-filled-${rateValue}`"
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
