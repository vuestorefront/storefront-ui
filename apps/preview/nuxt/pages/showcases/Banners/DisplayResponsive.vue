<template>
  <div class="grid md:flex md:flex-row flex-wrap gap-6 max-w-[1540px]">
    <div
      v-for="{ image, title, subtitle, description, buttonText, backgroundColor, reverse } in displayDetails"
      :key="title"
      :class="[
        'relative flex md:max-w-[1536px] md:[&:not(:first-of-type)]:flex-1 md:first-of-type:w-full @container group',
        backgroundColor,
      ]"
    >
      <a
        class="absolute w-full h-full z-1 focus-visible:outline focus-visible:rounded-lg"
        :aria-label="title"
        href="#"
      />
      <div
        :class="[
          'flex justify-between overflow-hidden grow flex-col @md:flex-row',
          { '@md:flex-row-reverse flex-col-reverse': reverse },
        ]"
      >
        <div
          class="grow flex flex-col justify-center items-start p-4 @sm:p-6 @3xl:p-10 max-w-1/2 items-center text-center @md:items-start @md:text-start"
        >
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
            >{{ buttonText }}</SfButton
          >
        </div>
        <div class="flex flex-shrink-0 items-center w-full @md:w-1/2 @md:self-start @md:object-contain">
          <img :src="image" :alt="title" class="w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';

const displayDetails = [
  {
    image: 'http://localhost:3100/@assets/display-2.png',
    title: 'Pack it Up',
    subtitle: 'Be active',
    description: 'Explore the great outdoors with our backpacks',
    buttonText: 'Discover now',
    reverse: true,
    backgroundColor: 'bg-warning-200',
  },
  {
    image: 'http://localhost:3100/@assets/display.png',
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    buttonText: 'Discover now',
    reverse: true,
    backgroundColor: 'bg-negative-200',
  },
];
</script>
