<script setup lang="ts">
import { PropType } from 'vue';
import { VsfRadioGroupDirections } from './types';

defineProps({
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
    class="vsf-radio-group"
    :aria-invalid="invalid"
    :aria-required="required"
    aria-describedby="radioGroupErrorText"
    data-testid="radio-group"
  >
    <legend v-if="legend" class="vsf-radio-group__legend" data-testid="legend">{{ legend }}</legend>
    <div :class="['vsf-radio-group__list', `vsf-radio-group__list--${direction}`]" data-testid="radio-group-list">
      <slot />
    </div>
    <p
      v-if="invalid && errorText"
      id="radioGroupErrorText"
      class="vsf-radio-group__error-text"
      data-testid="radio-group-invalid"
    >
      {{ errorText }}
    </p>
    <p v-if="helpText" class="vsf-radio-group__help-text" data-testid="radio-group-help">{{ helpText }}</p>
    <p v-if="required && requiredText" class="vsf-radio-group__required-text" data-testid="radio-group-required">
      {{ requiredText }}
    </p>
  </fieldset>
</template>
