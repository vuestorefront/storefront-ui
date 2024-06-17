import { defineNuxtModule, addComponent, addImportsSources, installModule } from '@nuxt/kit';
import * as storefrontUi from '@storefront-ui/vue';
import { defu } from 'defu';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import { type Config } from 'tailwindcss';
import '@nuxtjs/tailwindcss';
// import to get all typings schema so `tailwindcss` is available on NuxtOptions
import type { NuxtOptions } from '@nuxt/schema';

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
    contentPath: './node_modules/@storefront-ui/vue/**/*.{js,mjs}',
  },
  async setup(options, nuxt) {
    const { contentPath } = options;
    const nuxtOptions = nuxt.options;

    const defaultTailwindConfig: Config = {
      presets: [tailwindConfig],
      content: [contentPath ?? ''],
    };

    const nuxtConfigTailwindConfig = structuredClone(nuxtOptions.tailwindcss?.config);

    nuxt.hook('tailwindcss:config', function (tailwindFileConfig) {
      // tailwindFileConfig are data coming from tailwind.config.ts
      // priority
      // 1. tailwind.config
      // 2. nuxt.config
      // 3. default config
      const mergeDefaultWithNuxtConfig = defu(nuxtConfigTailwindConfig, defaultTailwindConfig);
      Object.assign(tailwindFileConfig, defu(tailwindFileConfig, mergeDefaultWithNuxtConfig));
    });

    nuxtOptions.tailwindcss = {
      config: {
        plugins: [() => {}], // DO NOT REMOVE/HACK - this property need to exists otherwise whole plugin won't work. Reason is that if there is no plugin set by default, tailwind on nuxt create template inside `.nuxt` directory that is reused later. Tailwind cant do it, because then it stringify plugins that contains functions to `plugins: [null, null]` which means any plugin we load thorugh our preset won't work. https://github.com/nuxt-modules/tailwindcss/blob/fb8fafb98cbf3ea824a1645156d6484ff6c5eda1/src/context.ts#L47. There is switch if there is no `plugins` property on initial load, config is generated, so any plugin cannot be added.
        // TODO: on 6.12.1 should be fixed https://github.com/nuxt-modules/tailwindcss/blob/main/src/context.ts#L87
      },
    } as unknown as NuxtOptions['tailwindcss'];

    await installModule('@nuxtjs/tailwindcss');

    const components: string[] = [];
    const composables: string[] = [];

    Object.keys(storefrontUi).forEach((key) => {
      // @ts-expect-error - if an object has a name or __name fields we consider it a Vue component instance
      if (key.startsWith('Sf') && (storefrontUi[key].__name || storefrontUi[key].name)) {
        components.push(key);
      } else if (key.startsWith('use')) {
        // `useId` is already available in nuxtjs, we omit `useId` because of duplication warning
        if (key !== 'useId') composables.push(key);
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
