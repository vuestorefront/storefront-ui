<template>
  <div class="flex flex-col gap-6 md:flex-row">
    <div
      v-for="{ title, subtitle, description, callToAction, image, backgroundColor, reverse } in displayDetails"
      :key="title"
      :class="[
        `relative flex flex-col justify-between rounded-md md:items-center md:basis-1/2 ${backgroundColor} @container group`,
        { 'flex-col-reverse': reverse },
      ]"
    >
      <a
        class="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
        :aria-label="title"
        href="#"
      />
      <div class="flex flex-col items-center p-6 text-center @3xl:p-10">
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
          class="text-white bg-neutral-700 hover:bg-neutral-800 active:bg-neutral-900 group-hover:bg-neutral-800 group-active:bg-neutral-900 group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-offset pointer-events-none"
          tabindex="-1"
        >
          {{ callToAction }}
        </SfButton>
      </div>
      <div class="flex items-center w-full">
        <img :src="image" :alt="title" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';

const displayDetails = [
  {
    title: 'Pack it Up',
    subtitle: 'Be active',
    description: 'Explore the great outdoors with our backpacks',
    callToAction: 'Discover now',
    image: 'http://localhost:3100/@assets/display-2.png',
    backgroundColor: 'bg-warning-200',
    reverse: false,
  },
  {
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    callToAction: 'Discover now',
    image: 'http://localhost:3100/@assets/display.png',
    backgroundColor: 'bg-negative-200',
    reverse: true,
  },
];
</script>
