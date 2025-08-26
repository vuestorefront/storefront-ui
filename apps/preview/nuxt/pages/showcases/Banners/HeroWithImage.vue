<template>
  <div class="relative h-dvh w-dvh shrink-0">
    <picture>
      <source :srcset="backgroundImage" media="(min-width: 768px)" />
      <img :src="backgroundImageMobile" class="absolute w-full h-full z-[-1] object-cover" alt="hero" />
    </picture>
    <div
      class="h-full w-full max-w-[1536px] mx-auto flex flex-col md:flex-row-reverse md:justify-center"
      :class="variant === 'light' ? 'text-white' : 'text-neutral-900'"
    >
      <div class="flex flex-col md:basis-2/4 md:items-stretch">
        <img :src="image" :alt="imageAlt" class="h-full object-cover object-left overflow-visible" />
      </div>
      <div class="p-4 md:p-10 flex flex-col justify-center basis-2/4 md:items-start">
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
          <SfButton size="lg">
            {{ callToAction }}
          </SfButton>
          <SfButton size="lg" variant="secondary" class="bg-white">
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
  headline: 'Feel the music',
  title: 'New Wireless Pro',
  description: 'Spatial audio. Adjustable ear cups. On-device controls. All-day battery.',
  callToAction: 'Order now',
  callToActionSecondary: 'Show more',
  backgroundImage: 'http://localhost:3100/@assets/hero-bg.png',
  backgroundImageMobile: 'http://localhost:3100/@assets/hero-bg-mobile.png',
  image: 'http://localhost:3100/@assets/hero-headphones.png',
  imageAlt: 'Headphones',
  variant: 'light',
};
</script>
