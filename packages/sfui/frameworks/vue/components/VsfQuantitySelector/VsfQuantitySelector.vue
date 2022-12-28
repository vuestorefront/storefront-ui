<script lang="ts" setup>
import { PropType, computed, toRefs, ref } from 'vue';
import { VsfQuantitySelectorSizes } from './types';
import VsfButton from '../VsfButton/VsfButton.vue';
import { VsfButtonVariants, VsfButtonSizes } from '../VsfButton/types';
import { VsfIconMinus, VsfIconPlus } from '../VsfIcons/index';
import { clamp } from '@sfui/shared/utils/index';

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
  decimal: {
    type: Number,
    default: null,
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
      <!-- TODO: i18n aria-label -->
      <VsfButton
        :variant="VsfButtonVariants.tertiary"
        :aria-controls="inputId"
        aria-label="decrease"
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
        :aria-label="inputAriaLabel"
        :aria-disabled="disabled"
        :min="minValue"
        :max="maxValue"
        :inputMode="decimal ? 'decimal' : 'numeric'"
        @input="handleOnChange"
        @blur="handleOnBlur"
      />

      <!-- TODO: i18n aria-label -->
      <VsfButton
        :variant="VsfButtonVariants.tertiary"
        :aria-controls="inputId"
        aria-label="increase"
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
