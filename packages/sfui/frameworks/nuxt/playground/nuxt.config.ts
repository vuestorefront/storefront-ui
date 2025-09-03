import { defineNuxtConfig } from 'nuxt/config';

// How to test? check if variable is overwritten with current priority table
// 1. `tailwind.config.ts` file
// 2. `nuxt.config.ts` file with `tailwindcss` property
// 3. default configuration inside module
export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  // modules: ['../dist/module.mjs'], //For testing bundle
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            brand: 'red',
            secondary: {
              200: 'green',
            },
          },
        },
      },
    },
  },
});
