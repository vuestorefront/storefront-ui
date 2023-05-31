<template>
  <SelectDropdown :options="options" label="Delivery" :is-error="true" />
</template>

<script lang="ts" setup>
import SelectDropdown from './SelectDropdown.vue';

const options = [
  {
    label: 'Today',
    value: 'today',
  },
  {
    label: 'Tomorrow',
    value: 'tomorrow',
  },
  {
    label: 'Anytime',
    value: 'anytime',
  },
];
</script>
