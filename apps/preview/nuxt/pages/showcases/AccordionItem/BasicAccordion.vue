<template>
  <div class="border rounded divide-y">
    <SfAccordionItem
      v-for="({ id, summary, details }, index) in accordionItems"
      :key="id"
      v-model="opened[index]"
      :class="[{ 'bg-gray-100': opened[index] }]"
    >
      <template #summary>
        <p class="p-2">{{ summary }}</p>
      </template>
      <p class="p-2">{{ details }}</p>
    </SfAccordionItem>
  </div>
</template>

<script lang="ts" setup>
import { SfAccordionItem } from '@storefront-ui/vue';
import { ref } from 'vue';

const opened = ref<boolean[]>([]);

const accordionItems = [
  {
    id: 'acc-1',
    summary: 'One',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 'acc-2',
    summary: 'Two',
    details:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 'acc-3',
    summary: 'Three',
    details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];
</script>
