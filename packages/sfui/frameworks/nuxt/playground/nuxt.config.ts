import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  // modules: ['../dist/module.mjs'], //For testing bundle
  css: ['~/assets/style.scss'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            brand: 'red',
          },
        },
      },
    },
  },
});
