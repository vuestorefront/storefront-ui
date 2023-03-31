<template>
  <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-no-wrap">
    <div
      v-for="{ title, image } in categories"
      :key="title"
      class="relative first-letter:flex flex-col w-[280px] justify-center overflow-hidden group"
    >
      <SfLink class="absolute w-full h-full z-1" href="/" :aria-label="title" />
      <img
        class="rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
        :src="image"
        :alt="title"
        :width="280"
        :height="280"
      />
      <div class="flex justify-center">
        <SfLink
          variant="secondary"
          class="mt-4 font-semibold no-underline !text-normal-900 typography-text-base group-hover:underline group-hover:text-primary-800 group-hover:font-normal group-active:text-primary-800 group-active:font-normal"
        >
          {{ title }}
        </SfLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfLink } from '@storefront-ui/vue';
import men from '@assets/men_category.png';
import women from '@assets/women_category.png';
import kid from '@assets/kid_category.png';

const categories = [
  {
    title: `Women`,
    image: women,
  },
  {
    title: `Men`,
    image: men,
  },
  {
    title: `Kid`,
    image: kid,
  },
];
</script>
