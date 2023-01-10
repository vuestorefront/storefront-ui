<script lang="ts" setup>
import type { PropType } from 'vue';
import { VsfSwitchAlignments } from './types';
import { VsfCheckbox, VsfCheckboxAlignments } from '../VsfCheckbox';

defineProps({
  modelValue: {
    type: [Boolean, Array] as PropType<string[] | boolean>,
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
    type: String as PropType<VsfSwitchAlignments>,
    default: VsfSwitchAlignments.start,
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
    :alignment="
      alignment === VsfSwitchAlignments.start ? VsfCheckboxAlignments.leading : VsfCheckboxAlignments.trailing
    "
    role="switch"
    class="vsf-switch"
    @update:model-value="$emit('update:modelValue', $event)"
  />
</template>
