<script lang="ts" setup>
import type { InputHTMLAttributes, PropType } from 'vue';
import { VsfSwitchAlignment } from './types';
import { VsfCheckbox, VsfCheckboxAlignment } from '../VsfCheckbox';

defineProps({
  modelValue: {
    type: [String, Array, Boolean] as PropType<InputHTMLAttributes['checked']>,
    required: true,
  },
  value: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  alignment: {
    type: String as PropType<`${VsfSwitchAlignment}`>,
    default: VsfSwitchAlignment.prefix,
  },
  label: {
    type: String,
    default: '',
  },
  helpText: {
    type: String,
    default: '',
  },
});

defineEmits<{
  (event: 'update:modelValue', param: string[] | boolean): void;
}>();
</script>

<template>
  <VsfCheckbox
    :model-value="modelValue"
    :label="label"
    :value="value"
    :disabled="disabled"
    :help-text="helpText"
    :alignment="alignment === VsfSwitchAlignment.prefix ? VsfCheckboxAlignment.leading : VsfCheckboxAlignment.trailing"
    role="switch"
    class="vsf-switch"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>
