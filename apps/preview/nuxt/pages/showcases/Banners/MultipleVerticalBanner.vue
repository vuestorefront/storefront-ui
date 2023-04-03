<template>
  <div class="flex flex-col gap-6 md:flex-row">
    <div class="flex flex-col justify-between rounded-md md:items-center md:basis-1/2 bg-warning-200">
      <div class="flex flex-col items-center p-4 text-center md:p-10">
        <p class="mb-2 font-bold tracking-widest uppercase typography-headline-6">{{ bannerDetails[1].subtitle }}</p>
        <p class="mb-4 font-bold typography-headline-2">{{ bannerDetails[1].title }}</p>
        <p class="mb-4 typography-text-lg">{{ bannerDetails[1].description }}</p>
        <SfButton class="font-semibold text-white bg-neutral-900 hover:bg-neutral-600 active:bg-neutral-700">
          {{ bannerDetails[1].callToAction }}
        </SfButton>
      </div>
      <div class="flex items-center w-full">
        <img :src="bannerDetails[1].image" :alt="bannerDetails[1].title" width="100%" height="auto" />
      </div>
    </div>
    <div class="flex flex-col justify-between rounded-md md:items-center md:basis-1/2 bg-negative-200">
      <div class="flex items-center w-full">
        <img :src="bannerDetails[0].image" :alt="bannerDetails[0].title" width="100%" height="auto" />
      </div>
      <div class="flex flex-col items-center p-4 text-center md:p-10">
        <p class="mb-2 font-bold tracking-widest uppercase typography-headline-6">{{ bannerDetails[0].subtitle }}</p>
        <p class="mb-4 font-bold typography-headline-2">{{ bannerDetails[0].title }}</p>
        <p class="mb-4 typography-text-lg">{{ bannerDetails[0].description }}</p>
        <SfButton class="font-semibold text-white bg-neutral-900 hover:bg-neutral-600 active:bg-neutral-700">
          {{ bannerDetails[0].callToAction }}
        </SfButton>
      </div>
    </div>
    <div class="flex flex-col justify-between rounded-md md:items-center md:basis-1/2 bg-warning-200">
      <div class="flex items-center w-full">
        <img :src="bannerDetails[1].image" :alt="bannerDetails[1].title" width="100%" height="auto" />
      </div>
      <div class="flex flex-col items-center p-4 text-center md:p-10">
        <p class="mb-2 font-bold tracking-widest uppercase typography-headline-6">{{ bannerDetails[1].subtitle }}</p>
        <p class="mb-4 font-bold typography-headline-2">{{ bannerDetails[1].title }}</p>
        <p class="mb-4 typography-text-lg">{{ bannerDetails[1].description }}</p>
        <SfButton class="font-semibold text-white bg-neutral-900 hover:bg-neutral-600 active:bg-neutral-700">
          {{ bannerDetails[1].callToAction }}
        </SfButton>
      </div>
    </div>
    <div class="flex flex-col justify-between rounded-md md:items-center md:basis-1/2 bg-negative-200">
      <div class="flex flex-col items-center p-4 text-center md:p-10">
        <p class="mb-2 font-bold tracking-widest uppercase typography-headline-6">{{ bannerDetails[0].subtitle }}</p>
        <p class="mb-4 font-bold typography-headline-2">{{ bannerDetails[0].title }}</p>
        <p class="mb-4 typography-text-lg">{{ bannerDetails[0].description }}</p>
        <SfButton class="font-semibold text-white bg-neutral-900 hover:bg-neutral-600 active:bg-neutral-700">
          {{ bannerDetails[0].callToAction }}
        </SfButton>
      </div>
      <div class="flex items-center w-full">
        <img :src="bannerDetails[0].image" :alt="bannerDetails[0].title" width="100%" height="auto" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';
import image1 from '@assets/display_1.png';
import image2 from '@assets/display_2.png';

const bannerDetails = [
  {
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    callToAction: 'Discover now',
    image: image1,
  },
  {
    title: 'Pack it Up',
    subtitle: 'Be active',
    description: 'Explore the great outdoors with our backpacks',
    callToAction: 'Discover now',
    image: image2,
  },
];
</script>
