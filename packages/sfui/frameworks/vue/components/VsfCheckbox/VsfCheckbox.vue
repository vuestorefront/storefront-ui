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
  (event: 'update:modelValue', param: boolean): void;
}>();
const onChangeHandler = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).checked);
};
</script>

<template>
  <div
    class="vsf-checkbox"
    :class="[disabled && 'vsf-checkbox--disabled', required && 'vsf-checkbox--required']"
    data-testid="checkbox"
  >
    <label class="vsf-checkbox__wrapper" :class="`vsf-checkbox__wrapper--alignment-${alignment}`">
      <input
        class="vsf-checkbox__input"
        :class="{ 'vsf-checkbox__input--invalid': invalid && !disabled && !indeterminate && !checked }"
        type="checkbox"
        :disabled="disabled"
        :required="required"
        :indeterminate="indeterminate"
        :checked="checked"
        :value="value"
        data-testid="checkbox-input"
        @change="onChangeHandler"
      />
      <slot name="label">
        <span class="vsf-checkbox__label" data-testid="checkbox-label">
          {{ label }}
        </span>
      </slot>
    </label>
    <div class="vsf-checkbox__text-wrapper" :class="`vsf-checkbox__text-wrapper-${alignment}`">
      <slot name="errorText">
        <p
          v-if="invalid && !!errorText && !disabled && !indeterminate && !checked && !required"
          class="vsf-checkbox__error-text"
          data-testid="checkbox-error-text"
        >
          {{ errorText }}
        </p>
      </slot>
      <slot name="helpText">
        <p v-if="helpText" class="vsf-checkbox__help-text" data-testid="checkbox-help-text">
          {{ helpText }}
        </p>
      </slot>
    </div>
    <slot name="requiredText">
      <p v-if="required && requiredText" class="vsf-checkbox__required-text" data-testid="checkbox-required-text">
        {{ requiredText }}
      </p>
    </slot>
  </div>
</template>
