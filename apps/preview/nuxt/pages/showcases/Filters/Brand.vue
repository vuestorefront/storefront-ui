<template>
  <SfAccordionItem v-model="open" class="w-full md:max-w-[376px]">
    <template #summary>
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Brand</p>
        <SfIconChevronLeft :class="['text-neutral-500', open ? 'rotate-90' : '-rotate-90']" />
      </div>
    </template>
    <SfListItem
      v-for="{ id, value, label, counter } in details"
      :key="id"
      tag="label"
      size="sm"
      :disabled="counter === 0"
      :class="['px-1.5 bg-transparent hover:bg-transparent', { 'font-medium': isItemActive(value) }]"
    >
      <template #prefix>
        <SfCheckbox v-model="selectedFilters" class="flex items-center" :disabled="counter === 0" :value="value" />
      </template>
      <p>
        <span class="mr-2 text-sm">{{ label }}</span>
        <SfCounter size="sm">{{ counter }}</SfCounter>
      </p>
    </SfListItem>
  </SfAccordionItem>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfAccordionItem, SfCheckbox, SfCounter, SfIconChevronLeft, SfListItem } from '@storefront-ui/vue';

const open = ref(true);
const selectedFilters = ref<string[]>([]);
const isItemActive = (selectedValue: string) => {
  return selectedFilters.value?.includes(selectedValue);
};

const details = ref([
  { id: 'b1', label: 'Conroy', value: 'conroy', counter: 10 },
  { id: 'b2', label: 'Goyette', value: 'goyette', counter: 100 },
  { id: 'b3', label: 'Ledner & Ward', value: 'lednerward', counter: 0 },
  { id: 'b4', label: 'Pacocha', value: 'pacocha', counter: 3 },
]);
</script>
