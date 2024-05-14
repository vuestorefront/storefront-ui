import { defineNuxtModule, addComponent, addImportsSources, installModule } from '@nuxt/kit';
import { type NuxtOptions } from '@nuxt/schema';
import * as storefrontUi from '@storefront-ui/vue';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import { type RawFile } from 'tailwindcss/types/config';
import '@nuxtjs/tailwindcss';

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

    if (!nuxt.options.modules.includes('@nuxtjs/tailwindcss')) {
      await installModule('@nuxtjs/tailwindcss');
    }

    const content: (string | RawFile)[] = [];

    if (Array.isArray(nuxtOptions.tailwindcss?.config?.content)) {
      content.push(...nuxtOptions.tailwindcss?.config?.content);
    }
    if (contentPath) content.push(contentPath);

    nuxtOptions.tailwindcss = {
      ...nuxtOptions.tailwindcss,
      config: {
        presets: [tailwindConfig],
        content: [contentPath ?? ''],
        ...nuxtOptions.tailwindcss?.config,
        // if content is already defined, we need to merge it with the new one
        ...(Array.isArray(nuxtOptions.tailwindcss?.config?.content) && contentPath
          ? { content: [...nuxtOptions.tailwindcss?.config?.content, contentPath] }
          : {}),
      },
    } as unknown as NuxtOptions['tailwindcss'];

    const components: string[] = [];
    const composables: string[] = [];

    Object.keys(storefrontUi).forEach((key) => {
      // @ts-expect-error - if an object has a name or __name fields we consider it a Vue component instance
      if (key.startsWith('Sf') && (storefrontUi[key].__name || storefrontUi[key].name)) {
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
