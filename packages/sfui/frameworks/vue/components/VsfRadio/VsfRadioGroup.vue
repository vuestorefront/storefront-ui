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
  helpText: {
    type: String,
    default: '',
  },
});
</script>
<!-- TODO: Replace with validation component when ready -->
<template>
  <fieldset
    :id="id"
    role="radiogroup"
    class="vsf-radio-group"
    :aria-invalid="invalid"
    :aria-required="required"
    aria-describedby="radioGroupErrorText"
  >
    <legend v-if="legend" class="vsf-radio-group__legend">{{ legend }}</legend>
    <div class="vsf-radio-group__list" :class="`vsf-radio-group__list--${direction}`">
      <slot />
    </div>
    <p v-if="invalid && errorText" id="radioGroupErrorText" class="vsf-radio-group__error-text">{{ errorText }}</p>
    <p v-if="helpText" class="vsf-radio-group__help-text">{{ helpText }}</p>
    <p v-if="requiredText" class="vsf-radio-group__required-text">{{ requiredText }}</p>
  </fieldset>
</template>
