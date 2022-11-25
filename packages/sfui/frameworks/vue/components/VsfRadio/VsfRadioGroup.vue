<script setup lang="ts">
import { PropType } from 'vue';
import { VsfRadioGroupDirections } from './types';

defineProps({
  id: {
    type: String,
    required: true,
  },
  legend: {
    type: String,
    default: '',
  },
  direction: {
    type: String as PropType<VsfRadioGroupDirections>,
    default: VsfRadioGroupDirections.vertical,
  },
  required: {
    type: Boolean,
    default: false,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
  requiredText: {
    type: String,
    default: '',
  },
  errorText: {
    type: String,
    default: '',
  },
  helperText: {
    type: String,
    default: '',
  },
});
</script>
<!-- TODO: Replace with validation component when ready -->
<template>
  <fieldset :id="id" class="vsf-radio-group">
    <legend v-if="legend" class="vsf-radio-group__legend">{{ legend }}</legend>
    <div class="vsf-radio-group__list" :class="`vsf-radio-group__list--${direction}`">
      <slot />
    </div>
    <p v-if="invalid && errorText" class="vsf-radio-group__error-text">{{ errorText }}</p>
    <p v-if="helperText" class="vsf-radio-group__helper-text">{{ helperText }}</p>
    <p v-if="required && requiredText" class="vsf-radio-group__required-text">{{ requiredText }}</p>
  </fieldset>
</template>
