<script lang="ts" setup>
import type { InputHTMLAttributes, PropType } from 'vue';
import { VsfSwitchAlignment } from './types';
import { VsfCheckbox, VsfCheckboxAlignment } from '../VsfCheckbox';
import { extractProps } from '../../shared/props';

defineProps({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...extractProps(VsfCheckbox as any, ['value', 'disabled', 'name', 'label', 'helpText', 'labelTag'] as const),
  modelValue: {
    type: [String, Array, Boolean] as PropType<InputHTMLAttributes['checked']>,
    required: true,
  },
  alignment: {
    type: String as PropType<`${VsfSwitchAlignment}`>,
    default: VsfSwitchAlignment.prefix,
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
    :name="name"
    :label-tag="labelTag"
    class="vsf-switch"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>
