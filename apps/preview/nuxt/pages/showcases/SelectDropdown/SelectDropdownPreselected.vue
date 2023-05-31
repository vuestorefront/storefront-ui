<template>
  <SelectDropdown :options="options" label="Delivery" :default-value="options[0]" />
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
