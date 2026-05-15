import { join, resolve } from 'path';
import { existsSync } from 'fs';

const isProd = process.env.PROD === 'true';

/** @type {import('next').NextConfig} */
export default {
  eslint: {
    /**
     * Disabled, because we're running lint in separate CI step and
     * during docker build we run build:replace-assets-url-with which swaps in source files
     * http://localhost:3100/@assets/ → https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/develop/
     * This makes many JSX/JS lines exceed the 120-char print width
     * next build then runs ESLint (including prettier/prettier) on those modified files, which fails
     */
    ignoreDuringBuilds: true,
  },
  env: {
    DOCS_EXAMPLES_REACT_PATH: process.env.NEXT_DOCS_EXAMPLES_REACT_PATH || '',
  },
  basePath: process.env.NEXT_DOCS_EXAMPLES_REACT_PATH
    ? new URL(process.env.NEXT_DOCS_EXAMPLES_REACT_PATH).pathname
    : '',
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  webpack(config) {
    if (!isProd) {
      config.module.rules.push({
        test: /[\\\/]sfui[\\\/]frameworks[\\\/]react[\\\/]index\.ts/,
        loader: 'string-replace-loader',
        options: {
          // only for dev purposes in monorepo:
          // Search all imports and add typing files before them, webpack has problem with re-exporting from packages
          // import { SfThumbnailSize } from '@storefront-ui/shared';
          // import type { PropsWithStyle } from '@storefront-ui/react';

          // export { SfThumbnailSize };
          search: /^export \* from '\.[\\\/]components[\\\/]([^']+?)';/gm,
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

      config.module.rules.push({
        test: /[\\\/]sfui[\\\/]frameworks[\\\/]react[\\\/]components[\\\/]([a-zA-Z0-9]+)[\\\/]\1\.tsx/,
        loader: 'string-replace-loader',
        options: {
          // only for dev purposes in monorepo:
          // Search all polymorphicForwardRef imports and import it relatively from shared/utils
          // (webpack has problem with import ordering when importing package from itself)
          // import { polymorphicForwardRef } from '@storefront-ui/react';
          // converted to:
          // import { polymorphicForwardRef } from '../../shared/utils';
          search: /^(import {[\S\s]*?)polymorphicForwardRef[,]?([\s\S]*?} from '@storefront-ui\/react';)/gm,
          replace: (_match, prefix, suffix) => {
            return `import { polymorphicForwardRef } from '../../shared/utils';\n${prefix}${suffix}`;
          },
        },
      });
      
      const reactPackage = resolve(
        process.cwd(),
        '..',
        '..',
        '..',
        'packages',
        'sfui',
        'frameworks',
        'react',
        'index.ts',
      );
      config.resolve.alias = {
        ...config.resolve.alias,
        '@storefront-ui/react': reactPackage,
        '@storefront-ui/vue': reactPackage,
      };
    }

    return config;
  },
};
