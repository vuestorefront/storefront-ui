<script lang="ts" setup>
import { PropType, computed, toRefs } from 'vue';
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
    default: null,
  },
  inputId: {
    type: String,
    default: null,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', val: number): void;
}>();

const { disabled, minValue, maxValue, modelValue, step } = toRefs(props);

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
    (maxValue.value !== undefined && modelValue.value !== undefined && modelValue.value >= maxValue.value),
);
const decreaseDisabled = computed(
  () =>
    disabled.value ||
    (minValue.value !== undefined && modelValue.value !== undefined && modelValue.value <= minValue.value),
);

function handleIncrease() {
  const nextValue = (Number(modelValue.value) ?? 0) + Number(step.value);
  if (maxValue.value !== undefined && nextValue > maxValue.value) {
    return;
  }
  emit('update:modelValue', nextValue);
}
function handleDecrease() {
  const nextValue = (Number(modelValue.value) ?? 0) - Number(step.value);
  if (minValue.value !== undefined && nextValue < minValue.value) {
    return;
  }
  emit('update:modelValue', nextValue);
}

function handleChange(currentValue: number) {
  // const { value: currentValue } = event.target as HTMLInputElement;
  // const nextValue = currentValue.length > 0 ? Number(currentValue) : undefined;
  const nextValue = Number(currentValue) || undefined;
  if (nextValue !== undefined) {
    if (maxValue.value !== undefined && nextValue > maxValue.value) {
      return emit('update:modelValue', maxValue.value);
    }
    if (minValue.value !== undefined && nextValue < minValue.value) {
      return emit('update:modelValue', minValue.value);
    }
    emit('update:modelValue', nextValue);
    console.log(nextValue, maxValue.value, minValue.value);
  }
}
function onChange(e) {
  console.log(e);
}

const inputValue = computed({
  get() {
    return modelValue.value;
  },
  set(val) {
    handleChange(val);
  },
});
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
        v-model="inputValue"
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
        @change.prevent="onChange"
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
