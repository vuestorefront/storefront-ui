<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <div class="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap">
    <div
      v-for="({ image, title, description, button }, index) in cardDetails"
      :key="`${title}-${index}`"
      class="flex flex-col min-w-[325px] max-w-[375px] lg:w-[496px] relative border border-neutral-200 rounded-3xl hover:shadow-xl active:shadow-none transition-shadow group"
    >
      <a
        class="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-3xl"
        href="#"
      />
      <img :src="image" :alt="title" class="object-cover h-auto rounded-t-3xl aspect-video" />
      <div class="flex flex-col items-end p-4 grow">
        <p class="font-medium typography-text-base">{{ title }}</p>
        <p class="mt-1 mb-4 font-normal typography-text-sm text-neutral-700">{{ description }}</p>
        <SfButton
          size="sm"
          variant="tertiary"
          class="mt-auto group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-offset pointer-events-none"
          tabindex="-1"
          >{{ button }}</SfButton
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';

const cardDetails = [
  {
    image: 'http://localhost:3100/@assets/card-3.png',
    title: "Trail Running: Nature's Ultimate Challenge",
    description:
      "Explore the exhilarating world of trail running. Embrace nature's rugged terrains, elevate your fitness, and learn to conquer every path.",
    button: 'Read more',
  },
  {
    image: 'http://localhost:3100/@assets/card-2.png',
    title: 'Ride the Future: Exploring the Benefits of e-Bikes',
    description:
      'Eco-friendly, efficient, and fun modes of transportation that provide a range of benefits for riders and the environment.',
    button: 'Read more',
  },
  {
    image: 'http://localhost:3100/@assets/card-1.png',
    title: 'Unleash the Ultimate Listening Experience',
    description:
      'Audiophile headphones offer unmatched sound quality and clarity, making them the go-to choice for music enthusiasts.',
    button: 'Read more',
  },
];
</script>
