<script setup lang="ts">
import { computed, PropType, ref, toRefs } from 'vue';
import { VsfCheckboxAlignments } from './types';

const props = defineProps({
  modelValue: {
    type: [Boolean, Array] as PropType<string[] | boolean>,
    default: undefined,
  },
  value: {
    type: String,
    default: '',
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
const { modelValue } = toRefs(props);

const emit = defineEmits<{
  (event: 'update:modelValue', param: string[] | boolean): void;
}>();

const proxyChecked = computed({
  get: () => modelValue?.value,
  set: (value) => {
    value && emit('update:modelValue', value);
  },
});
</script>

<template>
  <div
    class="vsf-checkbox"
    :class="['vsf-checkbox', { 'vsf-checkbox--disabled': disabled, 'vsf-checkbox--required': required }]"
    data-testid="checkbox"
  >
    <label class="vsf-checkbox__wrapper" :class="`vsf-checkbox__wrapper--alignment-${alignment}`">
      <input
        v-model="proxyChecked"
        class="vsf-checkbox__input"
        :class="{ 'vsf-checkbox__input--invalid': invalid && !disabled && !indeterminate && !checked }"
        type="checkbox"
        :disabled="disabled"
        :required="required"
        :indeterminate="indeterminate"
        :value="value"
        data-testid="checkbox-input"
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
