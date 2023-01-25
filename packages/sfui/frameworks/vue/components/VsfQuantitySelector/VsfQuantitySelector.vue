<script lang="ts" setup>
import type { PropType } from 'vue';
import { computed, toRefs, ref } from 'vue';
import { clamp } from '@storefront-ui/shared';
import { VsfQuantitySelectorSize } from './types';
import { VsfButton, VsfButtonVariant, VsfButtonSize } from '../VsfButton';
import { VsfIconMinus, VsfIconPlus } from '../VsfIcons';

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
    default: Infinity,
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
    type: String as PropType<`${VsfQuantitySelectorSize}`>,
    default: VsfQuantitySelectorSize.base,
  },
  inputId: {
    type: String,
    default: 'qty-selector',
  },
  decimal: {
    type: Number,
    default: null,
  },
  ariaLabelDecrease: {
    type: String,
    default: 'decrease',
  },
  ariaLabelIncrease: {
    type: String,
    default: 'increase',
  },
  arialLabelInput: {
    type: String,
    default: 'Quantity Selector',
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', val: number): void;
}>();

const { disabled, minValue, maxValue, modelValue, step } = toRefs(props);

const currentValue = ref(modelValue.value);

const buttonSize = computed(() => (props.size === VsfQuantitySelectorSize.lg ? VsfButtonSize.lg : VsfButtonSize.base));

const increaseDisabled = computed(() => disabled.value || currentValue.value >= maxValue.value);
const decreaseDisabled = computed(() => disabled.value || currentValue.value <= minValue.value);

function handleChange(nextValue: number) {
  currentValue.value = nextValue;
  currentValue.value = Number(clamp(currentValue.value, minValue.value, maxValue.value).toFixed(props.decimal));
  emit('update:modelValue', currentValue.value);
}

function handleOnChange() {
  if (currentValue.value) {
    handleChange(currentValue.value);
  }
}
function handleOnBlur() {
  return currentValue.value ? handleChange(currentValue.value) : handleChange(props.modelValue);
}
</script>

<template>
  <div
    :class="['vsf-qty-selector', { 'vsf-qty-selector--disabled': disabled, 'vsf-qty-selector--block': block }]"
    data-testid="qty-selector"
  >
    <div class="vsf-qty-selector__wrapper">
      <VsfButton
        :variant="VsfButtonVariant.tertiary"
        :aria-controls="inputId"
        :aria-label="ariaLabelDecrease"
        class="vsf-qty-selector__decrease"
        tile
        :size="buttonSize"
        :disabled="decreaseDisabled"
        data-testid="decrease-button"
        @click="handleChange(currentValue - step)"
      >
        <template #prefix>
          <VsfIconMinus />
        </template>
      </VsfButton>

      <input
        :id="inputId"
        v-model.number="currentValue"
        type="number"
        :step="step"
        role="spinbutton"
        class="vsf-qty-selector__input"
        :disabled="disabled"
        :aria-label="arialLabelInput"
        :aria-disabled="disabled"
        :min="minValue"
        :max="maxValue"
        :inputMode="decimal ? 'decimal' : 'numeric'"
        @input="handleOnChange"
        @blur="handleOnBlur"
      />

      <VsfButton
        :variant="VsfButtonVariant.tertiary"
        :aria-controls="inputId"
        :aria-label="ariaLabelIncrease"
        class="vsf-qty-selector__increase"
        tile
        :disabled="increaseDisabled"
        :size="buttonSize"
        data-testid="increase-button"
        @click="handleChange(currentValue + step)"
      >
        <template #prefix>
          <VsfIconPlus />
        </template>
      </VsfButton>
    </div>
    <slot></slot>
  </div>
</template>
