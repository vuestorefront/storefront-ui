import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['../src/module.ts'],
  tailwindcss: {
    config: {
      content: [],
      theme: {
        extend: {
          colors: {
            primary: {
              700: '#1e1e1e',
            },
          },
        },
      },
    },
  },
});
