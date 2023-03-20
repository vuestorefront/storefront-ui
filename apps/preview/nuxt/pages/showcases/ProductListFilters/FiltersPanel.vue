<template>
  <aside>
    <div class="flex justify-between">
      <h4 class="px-2 typography-headline-4 font-bold">Filters</h4>
      <VsfButton v-if="selectedFilters.length" size="sm" variant="tertiary" @click="clearSelection()">
        Clear all
        <template #suffix>
          <VsfIconCancel size="sm" />
        </template>
      </VsfButton>
    </div>
    <hr class="my-4" />
    <p class="mb-2 px-2 typography-headline-5 font-medium">Sort by:</p>
    <div class="px-2">
      <VsfSelect aria-label="Sort by">
        <option v-for="{ id, label, value } in sortOptions" :key="id" :value="value">{{ label }}</option>
      </VsfSelect>
    </div>
    <hr class="my-4" />
    <ul>
      <li v-for="({ id, type, summary, details }, index) in filtersData" :key="id">
        <VsfAccordionItem v-model="opened[index]">
          <template #summary>
            <div class="flex justify-between p-2 mb-2">
              <p class="p-2 typography-headline-5 font-medium">{{ summary }}</p>
              <VsfIconChevronLeft :class="opened[index] ? 'rotate-90' : '-rotate-90'" />
            </div>
          </template>
          <ul v-if="type === 'size'" class="flex flex-wrap gap-4 px-1.5">
            <li v-for="size in details" :key="size.id">
              <VsfChip
                v-model="selectedFilters"
                size="sm"
                :input-props="{ value: size.value, disabled: !size.counter }"
              >
                {{ size.label }}
              </VsfChip>
            </li>
          </ul>
          <template v-if="type === 'color'">
            <VsfListItemMenu
              v-for="color in details"
              :key="color.id"
              as="label"
              size="sm"
              class="px-1.5 bg-transparent hover:bg-transparent"
            >
              <template #prefix>
                <input v-model="selectedFilters" :value="color.value" class="peer appearance-none" type="checkbox" />
                <span
                  class="cursor-pointer p-1 ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline"
                >
                  <VsfThumbnail size="sm" :class="color.value" />
                </span>
              </template>
              <p>
                <span class="text-sm mr-2">{{ color.label }}</span>
                <VsfCounter>{{ color.counter }}</VsfCounter>
              </p>
            </VsfListItemMenu>
          </template>
          <template v-if="type === 'checkbox'">
            <VsfListItemMenu
              v-for="brand in details"
              :key="brand.id"
              as="label"
              size="sm"
              class="px-1.5 bg-transparent hover:bg-transparent"
            >
              <template #prefix>
                <VsfCheckbox v-model="selectedFilters" :disabled="brand.counter === 0" :value="brand.value" />
              </template>
              <p>
                <span class="text-sm mr-2">{{ brand.label }}</span>
                <VsfCounter>{{ brand.counter }}</VsfCounter>
              </p>
            </VsfListItemMenu>
          </template>
          <template v-if="type === 'radio'">
            <VsfListItemMenu
              v-for="price in details"
              :key="price.id"
              as="label"
              size="sm"
              class="px-1.5 bg-transparent hover:bg-transparent"
            >
              <template #prefix>
                <VsfRadio
                  name="radio-price"
                  :value="price.value"
                  @update:model-value="handleRadioSelection(price.value)"
                />
              </template>
              <p>
                <span class="text-sm mr-2">{{ price.label }}</span>
                <VsfCounter>{{ price.counter }}</VsfCounter>
              </p>
            </VsfListItemMenu>
          </template>
        </VsfAccordionItem>
        <hr class="my-4" />
      </li>
    </ul>
    <VsfButton class="w-full">Show products</VsfButton>
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
  VsfListItemMenu,
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
const handleRadioSelection = (val: string) => {
  const newSelectedFilters = selectedFilters.value.filter(
    (selectedFilter) => !selectedFilters.value.includes(selectedFilter),
  );
  newSelectedFilters.push(val);
  selectedFilters.value = newSelectedFilters;
};
const clearSelection = () => {
  selectedFilters.value = [];
};
</script>
