<script setup lang="ts">

defineProps({
  invalid: {
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
});

</script>

<template>
<fieldset>
  <legend>{{ legend }}</legend>
  <slot/>
  <span v-if="invalid" class="text-negative-700 ">{{ errorText }}</span>
  <span v-if="hintText" class="block">{{ hintText }}</span>
</fieldset>
</template>
