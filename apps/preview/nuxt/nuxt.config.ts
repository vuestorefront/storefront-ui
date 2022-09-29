import { defineNuxtConfig } from 'nuxt/config';
import * as tailwindConfig from '@sfui/tailwind-config/index.json';

export default defineNuxtConfig({
  tailwindcss: {
    config: tailwindConfig,
    cssPath: '~/assets/tailwind.scss',
  },
  buildModules: ['@nuxtjs/tailwindcss'],
  css: ['@sfui/example-style/index.scss'],
});
