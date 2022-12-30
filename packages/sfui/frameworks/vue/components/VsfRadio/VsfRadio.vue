<script setup lang="ts">
import type { PropType } from 'vue';
import { computed, toRefs } from 'vue';
import { VsfRadioAlignments } from './types';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  alignment: {
    type: String as PropType<VsfRadioAlignments>,
    default: VsfRadioAlignments.leading,
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  value: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  helpText: {
    type: String,
    default: '',
  },
});
const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const { modelValue } = toRefs(props);
const proxyChecked = computed({
  get: () => modelValue.value,
  set: (val) => {
    emit('update:modelValue', val);
  },
});
</script>
<template>
  <label :class="['vsf-radio', `vsf-radio--alignment-${alignment}`, { 'vsf-radio--disabled': disabled }]">
    <input
      v-model="proxyChecked"
      :name="name"
      type="radio"
      :value="value"
      class="vsf-radio__input"
      :disabled="disabled"
      :required="required"
    />
    <div v-if="label || helpText" class="vsf-radio__content-wrapper">
      <p>{{ label }}</p>
      <p v-if="helpText" class="vsf-radio__help-text">
        {{ helpText }}
      </p>
    </div>
  </label>
</template>
