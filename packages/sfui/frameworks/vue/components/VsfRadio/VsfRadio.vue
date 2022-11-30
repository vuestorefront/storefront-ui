<script setup lang="ts">
import { VsfRadioAlignments } from './types';

const emit = defineEmits<{
  (e: 'change:radio', val: string): void;
}>();

defineProps({
  id: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  alignment: {
    type: String,
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
</script>
<template>
  <div :class="['vsf-radio', `vsf-radio--alignment-${alignment}`, { 'vsf-radio--disabled': disabled }]">
    <div class="vsf-radio__input-wrapper">
      <input
        :id="id"
        :name="name"
        type="radio"
        :value="value"
        class="vsf-radio__input"
        :disabled="disabled"
        :required="required"
        @change="emit('change:radio', value)"
      />
    </div>
    <div class="vsf-radio__label-wrapper">
      <label :for="id" class="vsf-radio__label">
        <div>{{ label }}</div>
        <span v-if="helpText" :id="id" class="vsf-radio__help-text">
          {{ helpText }}
        </span>
      </label>
    </div>
  </div>
</template>
