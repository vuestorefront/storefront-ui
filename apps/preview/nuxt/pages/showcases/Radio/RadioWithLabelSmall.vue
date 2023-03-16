<template>
  <label
    v-for="{ name, value, label } in radioOptions"
    :key="value"
    class="flex items-center mb-4 mr-6 rounded cursor-pointer"
  >
    <VsfRadio v-model="radioModel" :value="value" :name="name" />
    <span class="ml-2 text-sm font-normal leading-5 font-body">{{ label }}</span>
  </label>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VsfRadio } from '@storefront-ui/vue';

const radioModel = ref('');
const radioOptions = [
  {
    label: 'Label',
    value: 'value-1',
    name: 'radio-1',
  },
  {
    label: 'Label 2',
    value: 'value-2',
    name: 'radio-1',
  },
];
</script>
