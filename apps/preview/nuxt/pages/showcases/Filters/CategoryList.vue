<template>
  <SfAccordionItem v-model="open">
    <template #summary>
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Categories</p>
        <SfIconChevronLeft :class="open ? 'rotate-90' : '-rotate-90'" />
      </div>
    </template>
    <ul class="mt-2 mb-6">
      <li>
        <SfListItem size="sm" as="button" type="button">
          <div class="flex items-center">
            <SfIconArrowBack size="sm" class="text-neutral-500 mr-3" />Back to {{ categories[0].label }}
          </div>
        </SfListItem>
      </li>
      <li v-for="category in categories" :key="category.key">
        <SfListItem
          size="sm"
          as="a"
          :href="category.link"
          :class="[
            'first-of-type:mt-2 rounded-md active:bg-primary-100',
            { 'bg-primary-100 hover:bg-primary-100': isCategorySelected(category.label) },
          ]"
          @click="handleCategorySelection(category.label)"
        >
          <template #suffix>
            <SfIconCheck v-if="isCategorySelected(category.label)" size="xs" class="text-primary-700" />
          </template>
          <span class="flex items-center">
            {{ category.label }}
            <SfCounter class="ml-2 typography-text-sm">{{ category.counter }}</SfCounter>
          </span>
        </SfListItem>
      </li>
    </ul>
  </SfAccordionItem>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  SfAccordionItem,
  SfCounter,
  SfIconArrowBack,
  SfIconCheck,
  SfIconChevronLeft,
  SfListItem,
} from '@storefront-ui/vue';

const categories = ref([
  {
    key: 'CLOTHING',
    label: 'Clothing',
    counter: 30,
    link: '#',
  },
  {
    key: 'SHOES',
    label: 'Shoes',
    counter: 28,
    link: '#',
  },
  {
    key: 'ACCESSORIES',
    label: 'Accessories',
    counter: 56,
    link: '#',
  },
  {
    key: 'WEARABLES',
    label: 'Wearables',
    counter: 12,
    link: '#',
  },
  {
    key: 'FOOD_DRINKS',
    label: 'Food & Drinks',
    counter: 52,
    link: '#',
  },
]);

const open = ref(true);
const selectedCategories = ref<string[]>([]);

const isCategorySelected = (selectedValue: string) => selectedCategories.value.includes(selectedValue);
const handleCategorySelection = (selectedValue: string) => {
  if (selectedCategories.value.indexOf(selectedValue) > -1) {
    selectedCategories.value = [...selectedCategories.value.filter((value) => value !== selectedValue)];
  } else {
    selectedCategories.value = [...selectedCategories.value, selectedValue];
  }
};
</script>
