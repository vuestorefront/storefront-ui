<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
  label: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <fieldset class="vsf-radio-group">
    <legend>Output format</legend>
    <slot />
  </fieldset>
</template>
