<template>
  <div class="border border-neutral-200 rounded-md divide-y text-neutral-900">
    <SfAccordionItem
      v-for="({ id, summary, details }, index) in accordionItems"
      :key="id"
      :model-value="isTransitioning || opened[index]"
      @update:model-value="
        (isOpen) => {
          isTransitioning = true;
          opened[index] = isOpen;
        }
      "
    >
      <template #summary>
        <p class="p-4 font-medium hover:bg-neutral-100 active:neutral-100">{{ summary }}</p>
      </template>
      <Transition
        enter-from-class="grid grid-rows-[0fr]"
        enter-to-class="grid grid-rows-[1fr]"
        leave-from-class="grid grid-rows-[1fr]"
        leave-to-class="grid grid-rows-[0fr]"
        @after-leave="isTransitioning = false"
        @after-enter="isTransitioning = false"
      >
        <div v-if="opened[index]" class="grid duration-300 ease-in-out transition-[grid-template-rows]">
          <div class="overflow-hidden">
            <p class="p-4">{{ details }}</p>
          </div>
        </div>
      </Transition>
    </SfAccordionItem>
  </div>
</template>

<script lang="ts" setup>
import { SfAccordionItem } from '@storefront-ui/vue';
import { ref } from 'vue';

const opened = ref<boolean[]>([]);
const isTransitioning = ref(false);

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
