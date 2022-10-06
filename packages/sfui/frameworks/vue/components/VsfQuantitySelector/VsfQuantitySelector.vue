<script lang="ts" setup>
import { PropType, computed, toRefs, ref } from 'vue';
import { VsfQuantitySelectorSizes } from './types';
import VsfButton from '../VsfButton/VsfButton.vue';
import { VsfButtonVariants, VsfButtonSizes } from '../VsfButton/types';
import { VsfIconMinus, VsfIconPlus } from '../VsfIcons/index';

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
    default: null,
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

const buttonSize = computed(() => {
  switch (props.size) {
    case VsfQuantitySelectorSizes.lg:
      return VsfButtonSizes.lg;
    default:
      return VsfButtonSizes.base;
  }
});

const increaseDisabled = computed(
  () =>
    disabled.value ||
    (maxValue.value !== undefined && currentValue.value !== undefined && currentValue.value >= maxValue.value),
);
const decreaseDisabled = computed(
  () =>
    disabled.value ||
    (minValue.value !== undefined && currentValue.value !== undefined && currentValue.value <= minValue.value),
);

function handleIncrease() {
  currentValue.value += Number(step.value);
  if (maxValue.value && currentValue.value > maxValue.value) {
    currentValue.value = maxValue.value;
  }
  emit('update:modelValue', currentValue.value);
}
function handleDecrease() {
  currentValue.value -= Number(step.value);
  if (currentValue.value < minValue.value) {
    currentValue.value = minValue.value;
  }
  emit('update:modelValue', currentValue.value);
}

function handleChange(event: Event) {
  const { valueAsNumber } = event.target as HTMLInputElement;
  if (!isNaN(valueAsNumber)) {
    currentValue.value = valueAsNumber;
    if (maxValue.value != undefined && currentValue.value > maxValue.value) {
      currentValue.value = maxValue.value;
    }
    if (maxValue.value != undefined && currentValue.value < minValue.value) {
      currentValue.value = minValue.value;
    }
    emit('update:modelValue', currentValue.value);
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
        tabindex="-1"
        @click="handleDecrease"
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
        :aria-valuenow="modelValue"
        :aria-valuemin="minValue"
        :aria-valuemax="maxValue"
        :min="minValue"
        :max="maxValue"
        @input="handleChange"
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
        tabindex="-1"
        @click="handleIncrease"
      >
        <VsfIconPlus />
      </VsfButton>
    </div>

    <slot></slot>
  </div>
</template>
