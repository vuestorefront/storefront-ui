import { defineNuxtConfig } from 'nuxt/config';
import { join, resolve } from 'path';
import { existsSync } from 'fs';

const isProd = process.env.PROD === 'true';

export default defineNuxtConfig({
  app: {
    baseURL: process.env.VITE_DOCS_EXAMPLES_VUE_PATH ? new URL(process.env.VITE_DOCS_EXAMPLES_VUE_PATH).pathname : '',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Vue Storefront UI v2',
    },
  },
  alias: {
    '@assets': resolve(__dirname, 'assets', 'fixture'),
    ...(!isProd
      ? {
          '@storefront-ui/vue': resolve(
            __dirname,
            '..',
            '..',
            '..',
            'packages',
            'sfui',
            'frameworks',
            'vue',
            'index.ts',
          ),
          '@storefront-ui/react': resolve(
            __dirname,
            '..',
            '..',
            '..',
            'packages',
            'sfui',
            'frameworks',
            'vue',
            'index.ts',
          ),
        }
      : {}),
  },
  vite: {
    plugins: [
      {
        name: 'add-types-to-import',
        enforce: 'pre',
        apply(config, env) {
          return env.mode !== 'production';
        },
        async transform(code, id) {
          // only for dev purposes in monorepo:
          // Because Nuxt does not respect proper order of imports in index.ts and on initial load types file are not available when import of component is loaded first
          if (/\/sfui\/frameworks\/vue\/index\.ts/.test(id)) {
            code = code.replace(/^export \* from '\.\/components\/([^']+?)';/gm, (_match, componentName) => {
              const path = join(
                __dirname,
                '..',
                '..',
                '..',
                'packages',
                'sfui',
                'frameworks',
                'vue',
                'components',
                componentName,
                'types.ts',
              );
              if (!existsSync(path)) return _match;
              return `export * from './components/${componentName}/types';\nexport * from './components/${componentName}';`;
            });

            return { code };
          }

          return null;
        },
      },
    ],
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@storefront-ui/example-style/index.scss', '@storefront-ui/example-style/controls.scss'],
  imports: {
    transform: {
      // you could also add the path of your built library to prevent this happening
      // for your users, but the issue is probably only replicable in your monorepo
      exclude: [/\bsfui\b/],
    },
  },
});
