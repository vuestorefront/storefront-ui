<template>
  <div class="flex gap-x-10">
    <fieldset role="radiogroup">
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

    <fieldset role="radiogroup">
      <div class="flex flex-row">
        <label
          v-for="{ label, name, value } in radioOptionsTwo"
          :key="`${value}-${name}`"
          class="flex items-center mr-4 rounded cursor-pointer"
        >
          <SfRadio v-model="radioGroupTwoModelValue" :value="value" :name="name" />
          <span class="ml-2 text-base font-normal leading-6 font-body">{{ label }}</span>
        </label>
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfRadio } from '@storefront-ui/vue';

const radioGroupModelValue = ref('');
const radioGroupTwoModelValue = ref('');
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
const radioOptionsTwo = [
  {
    label: 'Label',
    value: 'value-1',
    name: 'radio-2',
  },
  {
    label: 'Label 2',
    value: 'value-2',
    name: 'radio-2',
  },
];
</script>
