import { defineNuxtModule, addComponent, addImports, logger } from '@nuxt/kit';
import * as storefrontUi from '@storefront-ui/vue';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';

const components: string[] = [];
const composables: string[] = [];

Object.keys(storefrontUi).forEach((key) => {
  if (key.startsWith('Sf')) {
    components.push(key);
  } else if (key.startsWith('use')) {
    composables.push(key);
  }
});

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
      logger.warn(
        'Missing module @nuxtjs/tailwindcss in the modules list in Nuxt Configuration. Please add this module.',
      );
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
