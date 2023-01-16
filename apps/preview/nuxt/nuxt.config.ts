import { defineNuxtConfig } from 'nuxt/config';
import * as tailwindConfig from '@storefront-ui/tailwind-config/index.json';

export default defineNuxtConfig({
  app: {
    baseURL: process.env.VITE_DOCS_EXAMPLES_VUE
      ? new URL(process.env.VITE_DOCS_EXAMPLES_VUE).pathname
      : '',
  },
  tailwindcss: {
    config: tailwindConfig,
    cssPath: '~/assets/global.scss',
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@storefront-ui/example-style/index.scss'],
});
