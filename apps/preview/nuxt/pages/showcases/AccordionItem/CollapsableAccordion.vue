<template>
  <div class="border rounded divide-y">
    <VsfAccordionItem
      v-for="{ id, summary, details } in accordionItems"
      :key="id"
      :class="[{ 'bg-gray-100': isOpen(id) }]"
      :model-value="isOpen(id)"
      @update:model-value="toggle(id, $event)"
    >
      <template #summary>
        <p class="p-2">{{ summary }}</p>
      </template>
      <p class="p-2">{{ details }}</p>
    </VsfAccordionItem>
  </div>
</template>

<script lang="ts" setup>
import { VsfAccordionItem } from '@storefront-ui/vue/components/VsfAccordionItem/index';
import { ref } from 'vue';

const opened = ref<string | null>(null);

const isOpen = (id: string) => id === opened.value;

const toggle = (id: string, open: boolean) => {
  if (open) {
    opened.value = id;
  } else if (isOpen(id)) {
    opened.value = null;
  }
};

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
