<template>
  <div class="relative h-dvh w-dvh shrink-0">
    <picture>
      <source :srcset="backgroundImage" media="(min-width: 768px)" />
      <img :src="backgroundImageMobile" class="absolute w-full h-full z-[-1] object-cover" alt="hero" />
    </picture>
    <div
      class="h-full w-full max-w-[1536px] mx-auto flex flex-col justify-end md:justify-center"
      :class="variant === 'dark' ? 'text-white' : 'text-neutral-900'"
    >
      <div class="p-4 md:p-10 flex flex-col">
        <p class="typography-text-xs md:typography-text-sm font-bold tracking-widest uppercase">
          {{ headline }}
        </p>
        <h1 class="mt-2 mb-4 typography-display-2 md:typography-display-1 md:leading-[67.5px] font-bold">
          {{ title }}
        </h1>
        <p class="typography-text-base md:typography-text-lg">
          {{ description }}
        </p>
        <div class="mt-6 flex flex-col md:flex-row gap-4">
          <SfButton size="lg" variant="secondary" class="bg-white">
            {{ callToAction }}
          </SfButton>
          <SfButton size="lg">
            {{ callToActionSecondary }}
          </SfButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';

const {
  headline,
  title,
  description,
  callToAction,
  callToActionSecondary,
  backgroundImage,
  backgroundImageMobile,
  image,
  imageAlt,
  variant,
} = {
  headline: 'New collection',
  title: 'Made to move. Built to win.',
  description: 'The new sport collection is now in store.',
  callToAction: 'Order now',
  callToActionSecondary: 'Show more',
  backgroundImage: 'http://localhost:3100/@assets/hero-bg-2.png',
  backgroundImageMobile: 'http://localhost:3100/@assets/hero-bg-mobile-2.png',
  image: undefined,
  imageAlt: undefined,
  variant: 'dark',
};
</script>
