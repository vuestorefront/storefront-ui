<template>
  <div class="flex flex-col gap-6 md:flex-row">
    <div
      v-for="{ title, subtitle, description, callToAction, image, backgroundColor, reverse } in displayDetails"
      :key="title"
      :class="[
        `flex flex-col justify-between rounded-md md:items-center md:basis-1/2 ${backgroundColor}`,
        { 'flex-col-reverse': reverse },
      ]"
    >
      <div class="flex flex-col items-center p-4 text-center md:p-10">
        <p class="mb-2 font-bold tracking-widest uppercase typography-headline-6">{{ subtitle }}</p>
        <p class="mb-4 font-bold typography-headline-2">{{ title }}</p>
        <p class="mb-4 typography-text-lg">{{ description }}</p>
        <SfButton class="font-semibold !bg-neutral-900">
          {{ callToAction }}
        </SfButton>
      </div>
      <div class="flex items-center w-full">
        <img :src="image" :alt="title" width="100%" height="auto" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';
import sunglasses from '@assets/display.png';
import backpack from '@assets/display-2.png';

const displayDetails = [
  {
    title: 'Sunny Days Ahead',
    subtitle: 'Be inspired',
    description: 'Step out in style with our sunglasses collection',
    callToAction: 'Discover now',
    image: sunglasses,
    backgroundColor: 'bg-negative-200',
    reverse: false,
  },
  {
    title: 'Pack it Up',
    subtitle: 'Be active',
    description: 'Explore the great outdoors with our backpacks',
    callToAction: 'Discover now',
    image: backpack,
    backgroundColor: 'bg-warning-200',
    reverse: true,
  },
];
</script>
