import { defineNuxtModule, addComponent, addImportsSources, installModule, addTemplate } from '@nuxt/kit';
import * as storefrontUi from '@storefront-ui/vue';
import { defu } from 'defu';
import { join } from 'node:path';
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
    contentPath: './node_modules/@storefront-ui/vue/**/*.{js,mjs}',
  },
  async setup(options, nuxt) {
    const { contentPath } = options;

    const customTailwindConfigTemplate = addTemplate({
      filename: 'storefront-ui.tailwind-config.mjs',
      write: true,
      getContents: () =>
        `import { tailwindConfig } from '@storefront-ui/vue/tailwind-config'; export default { presets: [tailwindConfig] }`,
    });

    await installModule(
      '@nuxtjs/tailwindcss',
      defu(
        {
          configPath: [customTailwindConfigTemplate.dst, join(nuxt.options.rootDir, 'tailwind.config')],
          config: { content: [contentPath ?? ''] },
        },
        nuxt.options.tailwindcss,
      ),
    );

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
