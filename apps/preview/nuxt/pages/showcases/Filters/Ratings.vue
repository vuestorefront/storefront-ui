<template>
  <SfAccordionItem v-model="open">
    <template #summary>
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Sizes</p>
        <SfIconChevronLeft :class="['text-neutral-500', open ? 'rotate-90' : '-rotate-90']" />
      </div>
    </template>
    <fieldset id="radio-rating">
      <SfListItem
        v-for="{ id, value, label, counter } in ratingsValues"
        :key="id"
        as="label"
        size="sm"
        class="!items-start px-1.5 bg-transparent hover:bg-transparent"
      >
        <template #prefix>
          <SfRadio v-model="radioModel" name="radio-price" :value="value" />
        </template>
        <div class="flex items-end">
          <SfRating :value="Number(value)" :max="5" size="sm" />
          <p class="inline-flex items-center">
            <span :class="['mx-2 text-sm', { 'font-medium': radioModel === value }]">{{ label }}</span>
            <SfCounter size="sm">{{ counter }}</SfCounter>
          </p>
        </div>
      </SfListItem>
    </fieldset>
  </SfAccordionItem>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfAccordionItem, SfRadio, SfRating, SfIconChevronLeft, SfCounter, SfListItem } from '@storefront-ui/vue';

const open = ref(true);
const radioModel = ref('');
const ratingsValues = ref([
  { id: 'r1', label: '5', value: '5', counter: 10 },
  { id: 'r2', label: '4 & up', value: '4', counter: 123 },
  { id: 'r3', label: '3 & up', value: '3', counter: 12 },
  { id: 'r4', label: '2 & up', value: '2', counter: 3 },
  { id: 'r5', label: '1 & up', value: '1', counter: 13 },
]);
</script>
