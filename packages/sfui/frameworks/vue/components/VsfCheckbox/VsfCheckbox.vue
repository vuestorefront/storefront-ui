<script setup lang="ts">
import { computed, PropType, toRefs } from 'vue';
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
  labelTag: {
    type: String,
    default: undefined,
  },
});
const { modelValue } = toRefs(props);

const emit = defineEmits<{
  (event: 'update:modelValue', param: string[] | boolean): void;
}>();

const isChecked = computed(() => {
  if (Array.isArray(modelValue.value)) {
    return modelValue.value.includes(props.value);
  }
  return !!modelValue.value;
});

const proxyChecked = computed({
  get: () => modelValue?.value,
  set: (value) => {
    value && emit('update:modelValue', value);
  },
});
</script>

<template>
  <component
    :is="labelTag || 'label'"
    :class="['vsf-checkbox', { 'vsf-checkbox--disabled': disabled, 'vsf-checkbox--required': required }]"
    data-testid="checkbox"
  >
    <span class="vsf-checkbox__wrapper" :class="`vsf-checkbox__wrapper--alignment-${alignment}`">
      <input
        v-model="proxyChecked"
        class="vsf-checkbox__input"
        :class="{
          'vsf-checkbox__input--invalid': invalid && !disabled && !indeterminate && !isChecked,
        }"
        type="checkbox"
        :disabled="disabled"
        :required="required"
        :indeterminate="indeterminate"
        :value="value"
        data-testid="checkbox-input"
      />
      <span v-if="label" class="vsf-checkbox__label" data-testid="checkbox-label">
        {{ label }}
      </span>
    </span>

    <span
      v-if="errorText || helpText"
      class="vsf-checkbox__text-wrapper"
      :class="`vsf-checkbox__text-wrapper-${alignment}`"
    >
      <span
        v-if="invalid && !!errorText && !disabled && !indeterminate && !required && !isChecked"
        class="vsf-checkbox__error-text"
        data-testid="checkbox-error-text"
      >
        {{ errorText }}
      </span>
      <span v-if="helpText" class="vsf-checkbox__help-text" data-testid="checkbox-help-text">
        {{ helpText }}
      </span>
    </span>
    <span v-if="required && requiredText" class="vsf-checkbox__required-text" data-testid="checkbox-required-text">
      {{ requiredText }}
    </span>
  </component>
</template>
