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
const emit = defineEmits<{
  (event: 'update:modelValue', param: string): void;
}>();
const onChangeHandler = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLSelectElement).value);
};
</script>

<template>
  <div>
    <label
      :class="[
        'vsf-checkbox',
        disabled && 'vsf-checkbox--disabled',
        required && 'vsf-checkbox--required',
        alignment && `vsf-checkbox--alignment-${alignment}`,
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
          @change="onChangeHandler"
        />
      </span>
      <span class="vsf-checkbox__label">
        {{ label }}
      </span>
    </label>
    <div class="vsf-checkbox__text-wrapper">
      <p v-if="invalid && !disabled && errorText" class="vsf-checkbox__error-text">
        {{ errorText }}
      </p>
      <p v-if="helpText" class="vsf-checkbox__help-text">
        {{ helpText }}
      </p>
      <p v-if="required && requiredText" class="vsf-checkbox__required-text">
        {{ requiredText }}
      </p>
    </div>
  </div>
</template>
