<template>
  <SfAccordionItem v-model="open" class="w-full md:max-w-[376px]">
    <template #summary>
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Price</p>
        <SfIconChevronLeft :class="['text-neutral-500', open ? 'rotate-90' : '-rotate-90']" />
      </div>
    </template>
    <fieldset id="radio-price">
      <SfListItem
        v-for="{ id, value, label, counter } in details"
        :key="id"
        tag="label"
        size="sm"
        class="px-1.5 bg-transparent hover:bg-transparent"
      >
        <template #prefix>
          <SfRadio
            v-model="priceModel"
            class="flex items-center"
            name="radio-price"
            :value="value"
            @click="priceModel = priceModel === value ? '' : value"
          />
        </template>
        <p>
          <span :class="['text-sm mr-2', { 'font-medium': priceModel === value }]">{{ label }}</span>
          <SfCounter size="sm">{{ counter }}</SfCounter>
        </p>
      </SfListItem>
    </fieldset>
  </SfAccordionItem>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfAccordionItem, SfCounter, SfIconChevronLeft, SfListItem, SfRadio } from '@storefront-ui/vue';

const open = ref(true);
const priceModel = ref('');
const details = [
  { id: 'pr1', label: 'Under $24.99', value: 'under', counter: 123 },
  { id: 'pr2', label: '$25.00 - $49.99', value: '25-49', counter: 100 },
  { id: 'pr3', label: '$50.00 - $99.99', value: '50-99', counter: 12 },
  { id: 'pr4', label: '$100.00 - $199.99', value: '100-199', counter: 3 },
  { id: 'pr5', label: '$200.00 and above', value: 'above', counter: 18 },
];
</script>
