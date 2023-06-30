<template>
  <div class="max-w-[376px] md:max-w-[768px]">
    <h3 class="font-bold py-2 pl-4 pr-3 typography-headline-4">Leave a review</h3>
    <form
      class="grid grid-cols-[100px_1fr] py-2 px-4 gap-4 md:grid-cols-[176px_1fr] grid-rows-[100px_1fr] md:grid-rows-[28px_1fr] items-center md:items-start"
      @submit.prevent="submitForm"
    >
      <img
        src="http://localhost:3100/@assets/smartwatch.png"
        alt="Smartwatch"
        width="100"
        height="100"
        class="mx-auto border border-neutral-200 rounded-md aspect-square w-[100px] md:w-[176px]"
      />
      <p class="text-left text-neutral-900 md:typography-text-lg">Smartwatch Fitness Tracker</p>
      <div class="col-span-2 md:col-start-2">
        <div class="flex items-center justify-between">
          <p :id="ratingLabelId" class="typography-label-sm font-medium text-neutral-900">Your rating:</p>
          <SfRatingButton v-model="ratingModelValue" :aria-labelledby="ratingLabelId" class="p-1 gap-x-2" />
        </div>
        <label class="my-4 block">
          <span class="block typography-label-sm font-medium mb-0.5 text-neutral-900">Product review (optional)</span>
          <textarea
            v-model="reviewModelValue"
            placeholder="Describe your experience eg. Great product! The quality exceeded my expectations, and it's incredibly versatile. I highly recommend it to anyone looking for a reliable and durable solution."
            class="block w-full py-2 pl-4 pr-3 min-h-[138px] rounded-md ring-1 ring-neutral-300 placeholder:text-neutral-500"
          />
          <span
            :class="[
              'block text-xs mt-0.5 text-right',
              reviewIsAboveLimit ? 'text-negative-700 font-medium' : 'text-neutral-500',
            ]"
          >
            {{ reviewCharsCount }}
          </span>
        </label>
        <label class="block mb-6">
          <span class="block mb-0.5 typography-label-sm font-medium text-neutral-900">Your name (optional)</span>
          <SfInput v-model="usernameModelValue" />
        </label>
        <div class="flex justify-end gap-x-4">
          <SfButton variant="secondary" type="button" class="flex-1 md:flex-initial">Cancel</SfButton>
          <SfButton type="submit" class="flex-1 md:flex-initial">Submit Review</SfButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { SfButton, SfRatingButton, SfInput, useId } from '@storefront-ui/vue';

const ratingLabelId = useId();
const ratingModelValue = ref();
const usernameModelValue = ref('');
const reviewModelValue = ref('');
const reviewCharacterLimit = ref(5000);
const reviewIsAboveLimit = computed(() => reviewModelValue.value.length > reviewCharacterLimit.value);
const reviewCharsCount = computed(() => reviewCharacterLimit.value - reviewModelValue.value.length);

const submitForm = () =>
  console.log(
    `Form submitted with ${ratingModelValue.value} and ${reviewModelValue.value} by ${usernameModelValue.value}`,
  );
</script>
