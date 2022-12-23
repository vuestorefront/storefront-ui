import { defineNuxtConfig } from 'nuxt/config';
import * as tailwindConfig from '@sfui/tailwind-config/index.json';

export default defineNuxtConfig({
  app: {
    baseURL: process.env.VITE_DOCS_EXAMPLES_VUE
      ? new URL(process.env.VITE_DOCS_EXAMPLES_VUE).pathname
      : '',
  },
  tailwindcss: {
    config: tailwindConfig,
    cssPath: '~/assets/tailwind.scss',
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['@sfui/example-style/index.scss'],
});
