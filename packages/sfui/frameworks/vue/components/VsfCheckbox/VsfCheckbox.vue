<script setup lang="ts">
import { PropType } from 'vue';
import { VsfCheckboxAlignments } from './types';

defineProps({
  value: {
    type: String,
    default: '',
  },
  checked: {
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
  required: {
    type: Boolean,
    default: false,
  },
  indeterminate: {
    type: Boolean,
    default: false,
  },
  alignment: {
    type: String as PropType<VsfCheckboxAlignments>,
    default: VsfCheckboxAlignments.leading,
  },
  label: {
    type: String,
    default: '',
  },
  errorText: {
    type: String,
    default: '',
  },
  helpText: {
    type: String,
    default: '',
  },
  requiredText: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div>
    <label
      :class="[
        'vsf-checkbox',
        disabled && 'vsf-checkbox--disabled',
        invalid && 'vsf-checkbox--invalid',
        required && 'vsf-checkbox--required',
      ]"
    >
      <span>
        <input
          class="vsf-checkbox__input"
          type="checkbox"
          :disabled="disabled"
          :required="required"
          :indeterminate="indeterminate"
          :invalid="invalid"
          :checked="checked"
          :value="value"
        />
      </span>
      <span class="vsf-checkbox__label">
        {{ label }}
      </span>
    </label>
    <div class="vsf-checkbox__text-wrapper">
      <div v-if="invalid && errorText" class="vsf-checkbox__error-text">
        {{ errorText }}
      </div>
      <div v-if="helpText" class="vsf-checkbox__help-text">
        {{ helpText }}
      </div>
      <div v-if="required && requiredText" class="vsf-checkbox__required-text">
        {{ requiredText }}
      </div>
    </div>
  </div>
</template>
