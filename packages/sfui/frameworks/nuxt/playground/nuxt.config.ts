import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  tailwindcss: {
    config: {
      content: ['../../../../node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
      theme: {
        extend: {
          colors: {
            primary: {
              700: 'blue',
            },
            pink: {
              200: 'red',
            },
          },
        },
      },
    },
  },
});
