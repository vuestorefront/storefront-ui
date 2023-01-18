<script lang="ts" setup>
import type { PropType } from 'vue';
import { ref } from 'vue';
import { VsfSelectSize } from './types';
import VsfSelectOption from './VsfSelectOption.vue';

const props = defineProps({
  options: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  size: {
    type: String as PropType<`${VsfSelectSize}`>,
    default: VsfSelectSize.base,
  },
  placeholder: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  helpText: {
    type: String,
    default: '',
  },
  errorText: {
    type: String,
    default: '',
  },
  requiredText: {
    type: String,
    default: '*Required',
  },
});
const selected = ref(props.value);
const emit = defineEmits<{
  (event: 'update:modelValue', param: string): void;
}>();

const changedValue = (event: Event) => {
  selected.value = (event.target as HTMLSelectElement).value;
  emit('update:modelValue', (event.target as HTMLSelectElement).value);
};
</script>

<template>
  <div class="vsf-select" :class="{ 'vsf-select--disabled': disabled }" data-testid="select">
    <div class="vsf-select__wrapper">
      <div class="vsf-select__wrapper-input" :class="{ 'vsf-select__wrapper-input--with-label': label }">
        <select
          :id="label"
          :required="required"
          :disabled="disabled"
          class="vsf-select__input peer"
          :class="{
            'vsf-select__input--small': size === VsfSelectSize.sm,
            'vsf-select__input--large': size === VsfSelectSize.lg,
            'vsf-select__input--invalid': invalid,
          }"
          data-testid="select-input"
          @change="changedValue"
        >
          <slot name="placeholder">
            <option
              v-if="placeholder"
              :selected="!!placeholder"
              class="vsf-select__placeholder"
              value=""
              :class="{
                'vsf-select__placeholder--small': size === VsfSelectSize.sm,
                'vsf-select__placeholder--large': size === VsfSelectSize.lg,
              }"
              data-testid="select-placeholder"
            >
              {{ placeholder }}
            </option>
          </slot>
          <slot name="options">
            <VsfSelectOption v-for="(option, index) in options" :key="`${option}-${index}`" :value="option">
              {{ option }}
            </VsfSelectOption>
          </slot>
        </select>
        <slot name="label">
          <label :for="label" class="vsf-select__label" data-testid="select-label">{{ label }}</label>
        </slot>
      </div>
    </div>
    <slot name="errorText">
      <span
        v-if="invalid"
        class="vsf-select__error-text"
        data-testid="select-invalid-text"
        :aria-live="invalid ? 'assertive' : 'off'"
      >
        {{ errorText }}
      </span>
    </slot>
    <slot name="helpText">
      <span v-if="helpText" data-testid="select-help-text" class="vsf-select__help-text">{{ helpText }}</span>
    </slot>
    <slot name="requiredText">
      <span v-if="required" data-testid="select-required-text" class="vsf-select__required">{{ requiredText }}</span>
    </slot>
  </div>
</template>
