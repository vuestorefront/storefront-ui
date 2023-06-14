<script setup lang="ts">
defineProps({
  invalid: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  legend: {
    type: String,
    default: 'Label',
  },
  hintText: {
    type: String,
    default: 'Hint',
  },
  errorText: {
    type: String,
    default: 'Error message',
  },
  legendClass: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <fieldset>
    <legend
      v-if="legend"
      :class="['font-medium text-sm mb-0.5', disabled ? 'text-disabled-900' : 'text-neutral-900', legendClass]"
    >
      {{ legend }}
    </legend>
    <slot />
    <p v-if="invalid && !disabled" class="text-negative-700">{{ errorText }}</p>
    <p v-if="hintText" :class="['block text-xs mt-0.5', disabled ? 'text-disabled-500' : 'text-neutral-500']">
      {{ hintText }}
    </p>
  </fieldset>
</template>
