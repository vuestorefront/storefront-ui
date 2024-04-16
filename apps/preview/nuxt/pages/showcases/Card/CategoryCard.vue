<template>
  <div class="flex flex-wrap gap-4 lg:gap-6 lg:flex-no-wrap">
    <div
      v-for="{ title, image } in categories"
      :key="title"
      class="relative flex-col min-w-[140px] max-w-[240px] justify-center group"
    >
      <a
        class="absolute w-full h-full z-[1] focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
        href="#"
        :aria-label="title"
      />
      <img
        class="rounded-full bg-neutral-100 group-hover:shadow-xl group-active:shadow-none"
        :src="image"
        :alt="title"
        width="240"
        height="240"
      />
      <div class="flex justify-center">
        <a
          class="mt-4 font-semibold no-underline text-normal-900 typography-text-base group-hover:underline group-hover:text-primary-800 group-hover:font-normal group-active:text-primary-800 group-active:font-normal"
        >
          {{ title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const categories = [
  {
    title: `Women`,
    image: 'http://localhost:3100/@assets/women_category.png',
  },
  {
    title: `Men`,
    image: 'http://localhost:3100/@assets/men_category.png',
  },
  {
    title: `Kid`,
    image: 'http://localhost:3100/@assets/kid_category.png',
  },
];
</script>
