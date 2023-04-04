import { defineNuxtModule, addComponent, addImportsSources, installModule } from '@nuxt/kit';
import * as storefrontUi from '@storefront-ui/vue';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import { NuxtConfig, NuxtOptions } from '@nuxt/schema';
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
  async setup(options, nuxt) {
    const { contentPath } = options;
    const nuxtOptions = nuxt.options;

    nuxtOptions.tailwindcss = {
      ...nuxtOptions.tailwindcss,
      config: {
        presets: [tailwindConfig],
        content: [contentPath ?? ''],
        ...nuxtOptions.tailwindcss?.config,
        // if content is already defined, we need to merge it with the new one
        ...(Array.isArray(nuxtOptions.tailwindcss?.config?.content) && contentPath
          ? { content: [...nuxtOptions.tailwindcss?.config?.content!, contentPath] }
          : {}),
      },
    } as unknown as NuxtOptions['tailwindcss'];

    if (!nuxt.options.modules.includes('@nuxtjs/tailwindcss')) {
      await installModule('@nuxtjs/tailwindcss');
    }

    const components: string[] = [];
    const composables: string[] = [];

    Object.keys(storefrontUi).forEach((key) => {
      if (key.startsWith('Sf')) {
        components.push(key);
      } else if (key.startsWith('use')) {
        composables.push(key);
      }
    });

    components.forEach((key) => {
      addComponent({
        name: key, // name of the component to be used in vue templates,
        export: key,
        filePath: `@storefront-ui/vue`,
      });
    });

    addImportsSources({
      imports: composables,
      from: '@storefront-ui/vue',
    });
  },
});
