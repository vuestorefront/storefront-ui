<template>
  <article class="w-full p-4 border rounded-md">
    <p class="pb-2 font-medium">I love them</p>
    <header class="flex flex-col pb-6 space-y-2 md:flex-row md:justify-between md:space-y-0">
      <div class="flex flex-col items-start">
        <span class="text-sm text-neutral-900">Karla</span>
        <span class="flex items-center pr-2 text-xs text-neutral-500">
          <SfRating :value="5" :max="5" size="xs" class="mr-2" />
          2 days ago
        </span>
      </div>
      <div class="flex items-end">
        <p class="flex items-center text-xs truncate text-primary-700">
          <span class="mr-2 text-xs text-neutral-500">Karla | Black, XS</span>
          <SfIconCheck size="xs" class="mr-1" /> Verified purchase
        </p>
      </div>
    </header>
    <div class="pb-2 text-sm text-neutral-900">{{ truncatedContent }}</div>
    <button
      v-if="isButtonVisible"
      type="button"
      class="inline-block mb-2 text-sm font-normal border-b-2 border-black cursor-pointer w-fit hover:text-primary-700 hover:border-primary-800"
      @click="isCollapsed = !isCollapsed"
    >
      {{ isCollapsed ? 'Read more' : 'Read less' }}
    </button>
    <footer class="flex items-center justify-between">
      <div class="text-sm text-neutral-500">
        <button type="button" class="mr-6 hover:text-primary-800">
          <SfIconThumbUp size="sm" class="mr-2.5" />
          <SfCounter size="sm" class="text-inherit">6</SfCounter>
        </button>
        <button type="button" class="hover:text-primary-800">
          <SfIconThumbDown size="sm" class="mr-2.5" />
          <SfCounter size="sm" class="text-inherit">2</SfCounter>
        </button>
      </div>

      <button class="px-3 py-1.5 text-neutral-500 font-medium text-sm hover:text-primary-800" type="button">
        Report abuse
      </button>
    </footer>
  </article>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { SfRating, SfIconCheck, SfIconThumbUp, SfIconThumbDown, SfCounter } from '@storefront-ui/vue';

const content =
  "I recently purchased a pair of sneakers and I am thoroughly impressed with their quality and comfort. The design is sleek and modern, and the shoes are available in a variety of colors to suit anyone's style preferences. The upper is made of a breathable and durable material that allows my feet to stay cool and dry during long walks or runs. The sole is also very comfortable and provides great support for my feet, making it easy for me to wear them all day without experiencing any discomfort or fatigue. One of my favorite features of these sneakers is the excellent traction they provide, even on slippery surfaces. I feel confident wearing them in any weather condition or terrain. Additionally, the shoes have held up well over time and have not shown any signs of wear and tear, even after frequent use. Overall, I highly recommend these sneakers to anyone in the market for a comfortable and stylish shoe that can handle any activity. They are definitely worth the investment!";

const charLimit = 400;
const isCollapsed = ref(true);
const isButtonVisible = computed(() => content.length > charLimit);
const truncatedContent = computed(() =>
  isButtonVisible.value && isCollapsed.value ? `${content.substring(0, charLimit)}...` : content,
);
</script>
