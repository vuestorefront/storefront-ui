<template>
  <aside>
    <div class="flex justify-between">
      <h4 class="px-2 font-bold typography-headline-4">Filters</h4>
      <VsfButton
        v-if="selectedFilters.length"
        type="reset"
        size="sm"
        variant="tertiary"
        class="hidden md:flex text-neutral-500"
        @click="clearSelection()"
      >
        Clear all
        <template #suffix>
          <VsfIconCancel size="sm" />
        </template>
      </VsfButton>
      <button type="button" class="md:hidden text-neutral-500">
        <VsfIconClose />
      </button>
    </div>
    <hr class="my-4" />
    <p class="px-2 mb-2 font-medium typography-headline-5">Sort by:</p>
    <div class="px-2">
      <VsfSelect aria-label="Sort by">
        <option v-for="{ id, label, value } in sortOptions" :key="id" :value="value">{{ label }}</option>
      </VsfSelect>
    </div>
    <hr class="my-4" />
    <ul>
      <li v-for="({ id: filterDataId, type, summary, details }, index) in filtersData" :key="filterDataId">
        <VsfAccordionItem v-model="opened[index]">
          <template #summary>
            <div class="flex justify-between p-2 mb-2">
              <p class="p-2 font-medium typography-headline-5">{{ summary }}</p>
              <VsfIconChevronLeft :class="opened[index] ? 'rotate-90' : '-rotate-90'" />
            </div>
          </template>
          <ul v-if="type === 'size'" class="flex flex-wrap gap-4 px-1.5">
            <li v-for="{ id, value, counter, label } in details" :key="id">
              <VsfChip v-model="selectedFilters" size="sm" :input-props="{ value, disabled: !counter }">
                {{ label }}
              </VsfChip>
            </li>
          </ul>
          <template v-if="type === 'color'">
            <VsfListItem
              v-for="{ id, value, label, counter } in details"
              :key="id"
              size="sm"
              tag="label"
              :class="['px-1.5 bg-transparent hover:bg-transparent', { 'font-medium': isItemActive(value) }]"
              :selected="isItemActive(value)"
            >
              <template #prefix>
                <input v-model="selectedFilters" :value="value" class="appearance-none peer" type="checkbox" />
                <span
                  class="inline-flex items-center justify-center p-1 transition duration-300 rounded-full cursor-pointer ring-1 ring-neutral-200 ring-inset outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline"
                  ><VsfThumbnail size="sm" :class="value"
                /></span>
              </template>
              <p>
                <span className="typography-text-sm mr-2">{{ label }}</span>
                <VsfCounter>{{ counter }}</VsfCounter>
              </p>
            </VsfListItem>
          </template>
          <template v-if="type === 'checkbox'">
            <VsfListItem
              v-for="{ id, value, label, counter } in details"
              :key="id"
              as="label"
              size="sm"
              :class="['px-1.5 bg-transparent hover:bg-transparent', { 'font-medium': isItemActive(value) }]"
            >
              <template #prefix>
                <VsfCheckbox v-model="selectedFilters" :disabled="counter === 0" :value="value" />
              </template>
              <p>
                <span class="mr-2 text-sm">{{ label }}</span>
                <VsfCounter>{{ counter }}</VsfCounter>
              </p>
            </VsfListItem>
          </template>
          <template v-if="type === 'radio'">
            <VsfListItem
              v-for="{ id, value, label, counter } in details"
              :key="id"
              as="label"
              size="sm"
              class="px-1.5 bg-transparent hover:bg-transparent"
            >
              <template #prefix>
                <VsfRadio
                  v-model="radioModel"
                  name="radio-price"
                  :value="value"
                  @update:model-value="handleRadioSelection(value)"
                />
              </template>
              <p>
                <span :class="['text-sm mr-2', { 'font-medium': isItemActive(value) }]">{{ label }}</span>
                <VsfCounter>{{ counter }}</VsfCounter>
              </p>
            </VsfListItem>
          </template>
        </VsfAccordionItem>
        <hr class="my-4" />
      </li>
    </ul>
    <div class="flex justify-between">
      <VsfButton variant="secondary" class="w-full mr-3 md:hidden"> Clear all filters </VsfButton>
      <VsfButton class="w-full">Show products</VsfButton>
    </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  VsfAccordionItem,
  VsfButton,
  VsfChip,
  VsfCheckbox,
  VsfCounter,
  VsfIconChevronLeft,
  VsfIconCancel,
  VsfIconClose,
  VsfListItem,
  VsfRadio,
  VsfSelect,
  VsfThumbnail,
} from '@storefront-ui/vue';

const filtersData = ref([
  {
    id: 'acc1',
    summary: 'Size',
    type: 'size',
    details: [
      { id: 's1', label: '6', value: '6', counter: 10 },
      { id: 's2', label: '6.5', value: '6.5', counter: 10 },
      { id: 's3', label: '7', value: '7.5', counter: 30 },
      { id: 's4', label: '8', value: '8', counter: 0 },
      { id: 's5', label: '8.5', value: '8.5', counter: 3 },
      { id: 's6', label: '9', value: '9', counter: 7 },
      { id: 's7', label: '9.5', value: '9.5', counter: 9 },
      { id: 's8', label: '10', value: '10', counter: 11 },
      { id: 's9', label: '10.5', value: '10.5', counter: 12 },
      { id: 's10', label: '11', value: '11', counter: 0 },
      { id: 's11', label: '11.5', value: '11.5', counter: 4 },
      { id: 's12', label: '12', value: '12', counter: 1 },
    ],
  },
  {
    id: 'acc2',
    summary: 'Colors',
    type: 'color',
    details: [
      {
        id: 'c1',
        label: 'Primary',
        value: 'bg-primary-500',
        counter: 10,
      },
      {
        id: 'c2',
        label: 'Black and gray',
        value: 'bg-[linear-gradient(-45deg,#000_50%,#d1d5db_50%)]',
        counter: 5,
      },
      {
        id: 'c3',
        label: 'Violet',
        value: 'bg-violet-500',
        counter: 0,
      },
      {
        id: 'c4',
        label: 'Red',
        value: 'bg-red-500',
        counter: 2,
      },
      {
        id: 'c5',
        label: 'Yellow',
        value: 'bg-yellow-500',
        counter: 100,
      },
      {
        id: 'c6',
        label: 'Avocado',
        value: 'bg-gradient-to-tr from-yellow-300 to-primary-500',
        counter: 14,
      },
    ],
  },
  {
    id: 'acc3',
    summary: 'Brand',
    type: 'checkbox',
    details: [
      { id: 'b1', label: 'Conroy', value: 'conroy', counter: 10 },
      { id: 'b2', label: 'Goyette', value: 'goyette', counter: 100 },
      { id: 'b3', label: 'Ledner & Ward', value: 'lednerward', counter: 0 },
      { id: 'b4', label: 'Pacocha', value: 'pacocha', counter: 3 },
    ],
  },
  {
    id: 'acc4',
    summary: 'Price',
    type: 'radio',
    details: [
      { id: 'pr1', label: 'Under $24.99', value: 'under', counter: 123 },
      { id: 'pr2', label: '$25.00 - $49.99', value: '25-49', counter: 100 },
      { id: 'pr3', label: '$50.00 - $99.99', value: '50-99', counter: 12 },
      { id: 'pr4', label: '$100.00 - $199.99', value: '100-199', counter: 3 },
      { id: 'pr5', label: '$200.00 and above', value: 'above', counter: 18 },
    ],
  },
]);
const sortOptions = ref([
  { id: 'sort1', label: 'Relevance', value: 'relevance' },
  { id: 'sort2', label: 'Price: Low to High', value: 'price low to high' },
  { id: 'sort3', label: 'Price: High to Low', value: 'price high to low' },
  { id: 'sort4', label: 'New Arrivals', value: 'new arrivals' },
  { id: 'sort5', label: 'Customer Rating', value: 'customer rating' },
  { id: 'sort6', label: 'Bestsellers', value: 'bestsellers' },
]);

const selectedFilters = ref<string[]>([]);
const opened = ref<boolean[]>(filtersData.value.map(() => true));
const radioModel = ref('');

const isItemActive = (val: string) => {
  return selectedFilters.value?.includes(val);
};
const handleRadioSelection = (val: string) => {
  const newSelectedFilters = selectedFilters.value.filter((selectedFilter) => !isItemActive(selectedFilter));
  newSelectedFilters.push(val);
  selectedFilters.value = newSelectedFilters;
};
const clearSelection = () => {
  selectedFilters.value = [];
  radioModel.value = '';
};
</script>
