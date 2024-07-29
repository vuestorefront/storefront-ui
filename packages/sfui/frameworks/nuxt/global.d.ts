import type { ModuleOptions, ModuleHooks } from '@nuxtjs/tailwindcss';

declare module '@nuxt/schema' {
  interface NuxtConfig {
    ['tailwindcss']?: Partial<ModuleOptions>;
  }
  interface NuxtOptions {
    ['tailwindcss']?: ModuleOptions;
  }
  interface NuxtHooks extends ModuleHooks {}
}

declare module 'nuxt/schema' {
  interface NuxtConfig {
    ['tailwindcss']?: Partial<ModuleOptions>;
  }
  interface NuxtOptions {
    ['tailwindcss']?: ModuleOptions;
  }
  interface NuxtHooks extends ModuleHooks {}
}
