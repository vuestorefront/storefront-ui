<template>
  <fieldset role="radiogroup">
    <legend class="mb-2 text-sm font-normal text-gray-500">Legend</legend>
    <div class="flex flex-col">
      <label
        v-for="{ label, name, value } in radioOptions"
        :key="`${value}-${name}`"
        class="flex items-center mb-4 mr-6 rounded cursor-pointer"
      >
        <SfRadio v-model="radioGroupModelValue" :value="value" :name="name" />
        <span class="ml-2 text-base font-normal leading-6 font-body">{{ label }}</span>
      </label>
    </div>
  </fieldset>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfRadio } from '@storefront-ui/vue';

const radioGroupModelValue = ref('');
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
