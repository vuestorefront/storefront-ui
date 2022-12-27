<script lang="ts" setup>
import { PropType, computed, toRefs } from 'vue';
import { VsfInputSizes } from './types';
import { useVModel } from '@vueuse/core';
import { generateId } from '@sfui/shared/utils/generateId';
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<VsfInputSizes>,
    default: VsfInputSizes.base,
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  helpText: {
    type: String,
    default: '',
  },
  errorMessage: {
    type: String,
    default: '',
  },
  requiredText: {
    type: String,
    default: '',
  },
  characterLimit: {
    type: Number,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();
const { invalid, modelValue, characterLimit } = toRefs(props);

const inputValue = useVModel(props, 'modelValue', emit);

const isAboveLimit = computed(() => inputValue.value.length > characterLimit.value);

const charsCount = computed(() => characterLimit.value - modelValue.value.length);

const inputId = generateId('input');
</script>

<template>
  <div
    :class="[
      'vsf-input',
      `vsf-input--size-${size}`,
      { 'vsf-input--disabled': disabled, 'vsf-input--invalid': invalid, 'vsf-input--readonly': readonly },
    ]"
    data-testid="input"
  >
    <label v-if="label" :for="inputId" class="vsf-input__label" data-testid="input-label">{{ label }}</label>
    <div class="vsf-input__input-wrapper">
      <div v-if="$slots.prefix" class="vsf-input__prefix"><slot name="prefix" /></div>
      <input
        :id="inputId"
        v-model="inputValue"
        class="vsf-input__field"
        type="text"
        :placeholder="placeholder"
        :disabled="disabled"
        :invalid="invalid"
        :required="required"
        :readonly="readonly"
        data-testid="input-field"
      />
      <div v-if="$slots.suffix" class="vsf-input__suffix">
        <slot name="suffix" />
      </div>
    </div>
    <div class="vsf-input__bottom-wrapper">
      <div>
        <p v-if="invalid" class="vsf-input__error-message" data-testid="input-error-message">{{ errorMessage }}</p>
        <p v-if="helpText" class="vsf-input__help-text" data-testid="input-help-text">{{ helpText }}</p>
        <p v-if="requiredText && required" class="vsf-input__required-text" data-testid="input-required-text">
          {{ requiredText }}
        </p>
      </div>
      <p
        v-if="characterLimit && !readonly"
        :class="['vsf-input__character-limit', { 'vsf-input__character-limit--above': isAboveLimit }]"
        data-testid="input-chars-count"
      >
        {{ charsCount }}
      </p>
    </div>
  </div>
</template>
