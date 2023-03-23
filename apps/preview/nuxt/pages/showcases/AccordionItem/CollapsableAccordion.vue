<template>
  <div class="border border-neutral-200 rounded-md divide-y text-neutral-900">
    <SfAccordionItem
      v-for="{ id, summary, details } in accordionItems"
      :key="id"
      :model-value="isOpen(id)"
      @update:model-value="toggle(id, $event)"
    >
      <template #summary>
        <div class="flex justify-between p-4 font-medium hover:bg-neutral-100 active:neutral-100">
          <p>{{ summary }}</p>
          <SfIconChevronLeft :class="['text-neutral-500', { 'rotate-90': isOpen(id), '-rotate-90': !isOpen(id) }]" />
        </div>
      </template>
      <p class="p-4">{{ details }}</p>
    </SfAccordionItem>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { SfAccordionItem, SfIconChevronLeft } from '@storefront-ui/vue';

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
    summary: 'Where is my order?',
    details:
      'We will inform you about the expected delivery time of your order in checkout and in your order confirmation email.',
  },
  {
    id: 'acc-2',
    summary: 'What if an item is out of stock?',
    details:
      "If an item you're interested in is sold out, you can register to be notified when your size is back in stock.",
  },
  {
    id: 'acc-3',
    summary: 'How do I cancel my order?',
    details:
      "If you made a mistake or simply changed your mind after placing an order, there's no need to fuss. As long as your parcel has yet to be picked and packed in our warehouse, you'll have the option to cancel.",
  },
];
</script>
