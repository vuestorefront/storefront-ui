<template>
  <SfAccordionItem v-model="isOpen" class="w-full md:max-w-[376px]">
    <template #summary>
      <div class="flex justify-between p-2 mb-2">
        <p class="font-medium">Rating</p>
        <SfIconChevronLeft :class="['text-neutral-500', isOpen ? 'rotate-90' : '-rotate-90']" />
      </div>
    </template>
    <fieldset id="radio-rating">
      <SfListItem
        v-for="{ id, value, label, counter } in ratingsValues"
        :key="id"
        tag="label"
        size="sm"
        class="!items-center py-4 md:py-1 px-1.5 bg-transparent hover:bg-transparent"
      >
        <template #prefix>
          <SfRadio
            v-model="ratingsModel"
            class="flex items-center"
            :checked="ratingsModel === value"
            :name="ratingsModel"
            :value="value"
            @click="ratingsModel = ratingsModel === value ? '' : value"
          />
        </template>
        <!-- TODO: Adjust the styling and remove block elements when/if span wrapper removed from ListItem -->
        <div class="flex flex-wrap items-center">
          <SfRating class="-mt-px" :value="Number(value)" :max="5" size="sm" />
          <span :class="['mx-2 text-base md:text-sm', { 'font-medium': ratingsModel === value }]">{{ label }}</span>
          <SfCounter size="sm">{{ counter }}</SfCounter>
        </div>
      </SfListItem>
    </fieldset>
  </SfAccordionItem>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
  SfAccordionItem,
  SfRadio,
  SfRating,
  SfIconChevronLeft,
  SfCounter,
  SfListItem,
  useDisclosure,
} from '@storefront-ui/vue';

const { isOpen } = useDisclosure({ initialValue: true });
const ratingsModel = ref('');
const ratingsValues = ref([
  { id: 'r1', label: '5', value: '5', counter: 10 },
  { id: 'r2', label: '4 & up', value: '4', counter: 123 },
  { id: 'r3', label: '3 & up', value: '3', counter: 12 },
  { id: 'r4', label: '2 & up', value: '2', counter: 3 },
  { id: 'r5', label: '1 & up', value: '1', counter: 13 },
]);
</script>
