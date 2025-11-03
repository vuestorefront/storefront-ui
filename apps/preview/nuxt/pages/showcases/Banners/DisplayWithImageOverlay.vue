<template>
  <div class="max-w-[1540px]">
    <div
      v-for="{ title, subtitle, description, buttonText, backgroundImage } in displayDetails"
      :key="title"
      class="relative flex text-white max-w-[1536px] @container group"
    >
      <a
        class="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
        :aria-label="title"
        href="#"
      />
      <div class="h-[680px] @3xl:h-auto @3xl:aspect-[2] flex justify-center overflow-hidden grow">
        <div class="grow flex flex-col justify-center items-center text-center p-4 @sm:p-6 @3xl:p-10 max-w-1/2">
          <p class="uppercase typography-text-xs block font-medium tracking-widest @3xl:typography-headline-6">
            {{ subtitle }}
          </p>
          <h2 class="mb-4 mt-2 font-semibold typography-display-3 -tracking-wide @3xl:typography-display-1">
            {{ title }}
          </h2>
          <p class="typography-text-base block mb-4 @3xl:typography-text-lg">
            {{ description }}
          </p>
          <SfButton
            blank
            class="w-[200px] bg-white text-primary-700 ring-secondary-400 group-hover:bg-primary-100 group-hover:hover:text-primary-800 group-hover:ring-secondary-500 group-active:bg-primary-200 group-active:text-primary-900 group-active:ring-secondary-600 group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-offset pointer-events-none"
            tabindex="-1"
            variant="secondary"
          >
            {{ buttonText }}
          </SfButton>
        </div>
        <div class="absolute inset-0 z-[-1] overflow-hidden bg-primary-900">
          <img :src="backgroundImage" :alt="title" class="w-full h-full object-cover opacity-75" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';

const displayDetails = [
  {
    title: 'Cap Game Strong',
    subtitle: 'Special Offer',
    description: 'Score serious style points with our Open Capsule collection',
    buttonText: 'Browse offers',
    backgroundImage: 'http://localhost:3100/@assets/display-overlay.png',
  },
];
</script>
