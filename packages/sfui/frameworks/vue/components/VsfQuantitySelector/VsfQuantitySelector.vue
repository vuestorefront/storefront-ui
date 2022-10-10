<script lang="ts" setup>
import { PropType, computed, toRefs, ref } from 'vue';
import { VsfQuantitySelectorSizes } from './types';
import VsfButton from '../VsfButton/VsfButton.vue';
import { VsfButtonVariants, VsfButtonSizes } from '../VsfButton/types';
import { VsfIconMinus, VsfIconPlus } from '../VsfIcons/index';
import { clamp } from '@sfui/sfui/shared/utils/index';

const props = defineProps({
  modelValue: {
    type: [Number],
    default: null,
  },
  minValue: {
    type: [Number],
    default: 1,
  },
  maxValue: {
    type: [Number],
    default: Number.POSITIVE_INFINITY,
  },
  step: {
    type: [Number],
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<VsfQuantitySelectorSizes>,
    default: VsfQuantitySelectorSizes.base,
  },
  inputAriaLabel: {
    type: String,
    default: 'Quantity Selector',
  },
  inputId: {
    type: String,
    default: 'qty-selector',
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', val: number): void;
}>();

const { disabled, minValue, maxValue, modelValue, step } = toRefs(props);

const currentValue = ref(modelValue.value);

const buttonSize = computed(() =>
  props.size === VsfQuantitySelectorSizes.lg ? VsfButtonSizes.lg : VsfButtonSizes.base,
);

const increaseDisabled = computed(() => disabled.value || currentValue.value >= maxValue.value);
const decreaseDisabled = computed(() => disabled.value || currentValue.value <= minValue.value);

function handleChange(nextValue: number) {
  currentValue.value = nextValue;
  currentValue.value = clamp(nextValue, minValue.value, maxValue.value);
  emit('update:modelValue', currentValue.value);
}

function handleOnChange(event: Event) {
  const { value } = event.target as HTMLInputElement;
  if (value) {
    handleChange(Number(value));
  }
}
</script>

<template>
  <div :class="['vsf-qty-selector', { 'vsf-qty-selector--disabled': disabled, 'vsf-qty-selector--block': block }]">
    <div class="vsf-qty-selector__wrapper">
      <VsfButton
        :variant="VsfButtonVariants.tertiary"
        :aria-controls="inputId"
        aria-label="decrease"
        class="vsf-qty-selector__decrease"
        tile
        icon
        :size="buttonSize"
        :disabled="decreaseDisabled"
        @click="handleChange(currentValue - step)"
      >
        <VsfIconMinus />
      </VsfButton>

      <input
        :id="inputId"
        type="number"
        :step="step"
        :value="currentValue"
        role="spinbutton"
        class="vsf-qty-selector__input"
        :disabled="disabled"
        :aria-label="inputAriaLabel"
        :aria-disabled="disabled"
        :min="minValue"
        :max="maxValue"
        @input="handleOnChange"
      />

      <VsfButton
        :variant="VsfButtonVariants.tertiary"
        :aria-controls="inputId"
        aria-label="increase"
        class="vsf-qty-selector__increase"
        tile
        icon
        :disabled="increaseDisabled"
        :size="buttonSize"
        @click="handleChange(currentValue + step)"
      >
        <VsfIconPlus />
      </VsfButton>
    </div>

    <slot></slot>
  </div>
</template>
