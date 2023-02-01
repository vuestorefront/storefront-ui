import { defineNuxtConfig } from 'nuxt/config';
import * as tailwindConfig from '@storefront-ui/tailwind-config/index.json';

export default defineNuxtConfig({
  app: {
    baseURL: process.env.VITE_DOCS_EXAMPLES_VUE_PATH
      ? new URL(process.env.VITE_DOCS_EXAMPLES_VUE_PATH).pathname
      : '',
      head: {
        htmlAttrs: {
          lang: 'en'
        },
        title: 'Vue Storefront UI v2',
      }
  },
  tailwindcss: {
    config: tailwindConfig,
    cssPath: '~/assets/global.scss',
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@storefront-ui/example-style/index.scss'],
});
