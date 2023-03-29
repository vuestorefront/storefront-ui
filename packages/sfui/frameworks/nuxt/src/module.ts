import { defineNuxtModule, addComponent, addImports } from '@nuxt/kit';
import * as storefrontUi from '@storefront-ui/vue';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
console.log(storefrontUi);

const components = Object.keys(storefrontUi).filter((key) => key.startsWith('Sf'));
const composables = Object.keys(storefrontUi).filter(
  (key) => key.startsWith('use') && !['useSlotsRef', 'useAttrsRef'].includes(key),
);

// Module options TypeScript interface definition
export interface ModuleOptions {
  contentPath?: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'storefront-ui',
    configKey: 'storefrontUi',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    contentPath: './node_modules/@storefront-ui/vue/**/*.mjs',
  },
  setup(options, nuxt) {
    const { contentPath } = options;
    if (!nuxt.options.modules.includes('@nuxtjs/tailwindcss')) {
      nuxt.options.modules.push('@nuxtjs/tailwindcss');
      console.warn('You need to add @nuxtjs/tailwindcss to your modules list in nuxt.config.js');
    }
    // @ts-ignore
    nuxt.options.tailwindcss = {
      // @ts-ignore
      ...nuxt.options.tailwindcss,
      config: {
        presets: [tailwindConfig],
        content: [contentPath],
        // @ts-ignore
        ...nuxt.options.tailwindcss?.config,
      },
    };

    components.forEach((key) => {
      addComponent({
        name: key, // name of the component to be used in vue templates,
        export: key,
        filePath: `@storefront-ui/vue`,
      });
    });
    composables.forEach((key) => {
      addImports({
        name: key,
        from: '@storefront-ui/vue',
      });
    });
  },
});
