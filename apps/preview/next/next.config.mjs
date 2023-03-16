import {
  removeCode,
  changeFrameworkPathInImports,
} from "@storefront-ui/tests-shared/index.js";
import { join, resolve } from 'path';
import { existsSync } from 'fs';

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === "true";
const isTest = process.env.TEST === 'true';
const isProd = process.env.PROD === 'true';

/** @type {import('next').NextConfig} */
export default {
  env: {
    DOCS_EXAMPLES_REACT_PATH: process.env.DOCS_EXAMPLES_REACT_PATH,
  },
  basePath: process.env.DOCS_EXAMPLES_REACT_PATH
    ? new URL(process.env.DOCS_EXAMPLES_REACT_PATH).pathname
    : '',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
    topLevelAwait: true,
    swcPlugins: isCoverageEnabled ? [
      ["swc-plugin-coverage-instrument", {
        esModules: true,
      }]
    ] : undefined,
  },
  webpack(config) {
    if(isTest) {
      config.module.rules.push({
        test: /\/sfui\/tests\//,
        loader: 'string-replace-loader',
        options: {
          multiple: [
            {
              // 1. Remove all `// vue` and `// end vue` from code
              search: removeCode("vue"),
              replace: ''
            },
            {
              // 2. Find all imports with `/vue/` files and replace it to `/react/` so we would test correct package
              search: changeFrameworkPathInImports('vue'),
              replace: (_match, g1, g2, g3) => {
                return `${g1}/react/${g3}`;
              }
            }
          ]
        }
      });
    }

    if(!isProd) {
      config.module.rules.push({
        test: /\/sfui\/frameworks\/react\/index\.ts/,
        loader: 'string-replace-loader',
        options: {
          // only for dev purposes in monorepo:
          // Search all imports and add typing files before them, webpack has problem with re-exporting from packages
          // import { VsfThumbnailSize } from '@storefront-ui/shared';
          // import type { PropsWithStyle } from '@storefront-ui/react';

          // export { VsfThumbnailSize };
          search: /^export \* from '\.\/components\/([^']+?)';/gm,
          replace: (_match, componentName) => {
            const path = join(
              process.cwd(),
              '..',
              '..',
              '..',
              'packages',
              'sfui',
              'frameworks',
              'react',
              'components',
              componentName,
              'types.ts',
            );
            if (!existsSync(path)) return _match;
            return `export * from './components/${componentName}/types';\nexport * from './components/${componentName}';`;
          },
        },
      });

      const reactPackage = resolve(process.cwd(), '..', '..', '..', 'packages', 'sfui', 'frameworks', 'react', 'index.ts');
      config.resolve.alias = {
        ...config.resolve.alias,
        '@storefront-ui/react': reactPackage,
        '@storefront-ui/vue': reactPackage,
      }
    }

    return config;
  }
};
