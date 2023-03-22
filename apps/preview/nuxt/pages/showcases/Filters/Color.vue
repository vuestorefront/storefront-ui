<template>
  <SfAccordionItem v-model="open">
    <template #summary>
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Color</p>
        <SfIconChevronLeft :class="['text-neutral-500', open ? 'rotate-90' : '-rotate-90']" />
      </div>
    </template>
    <SfListItem
      v-for="({ label, value, counter }, index) in colorValues"
      :key="index"
      size="sm"
      tag="label"
      class="px-1.5 bg-transparent hover:bg-transparent"
      :selected="isItemActive(value)"
    >
      <template #prefix>
        <input v-model="selectedValues" :value="value" class="peer appearance-none" type="checkbox" />
        <span
          class="cursor-pointer p-1 ring-1 ring-neutral-200 ring-inset rounded-full inline-flex items-center transition duration-300 justify-center outline-offset-2 outline-secondary-600 peer-checked:ring-2 peer-checked:ring-primary-700 peer-hover:bg-primary-100 peer-hover:ring-primary-200 peer-active:bg-primary-200 peer-active:ring-primary-300 peer-disabled:cursor-not-allowed peer-disabled:bg-disabled-100 peer-disabled:opacity-50 peer-disabled:ring-1 peer-disabled:ring-disabled-200 peer-disabled:hover:ring-disabled-200 peer-checked:hover:ring-primary-700 peer-checked:active:ring-primary-700 peer-focus:outline"
          ><SfThumbnail size="sm" :class="value"
        /></span>
      </template>
      <p>
        <span className="typography-text-sm mr-2">{{ label }}</span>
        <SfCounter>{{ counter }}</SfCounter>
      </p>
    </SfListItem>
  </SfAccordionItem>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfAccordionItem, SfCounter, SfListItem, SfThumbnail, SfIconChevronLeft } from '@storefront-ui/vue';

const colorValues = ref([
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
]);
const open = ref(true);
const selectedValues = ref<string[]>([]);
const isItemActive = (val: string) => {
  return selectedValues.value?.includes(val);
};
</script>
