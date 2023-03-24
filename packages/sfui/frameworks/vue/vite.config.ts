// vite.config.js
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';

import pkg from './package.json';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'index.ts'),
        'tailwind-config': path.resolve(__dirname, 'tailwind-config.ts'),
      },
      name: 'storefront-ui-vue',
      fileName: (format, entryName) => format === 'es'
        ? `${entryName}.mjs`
        : `${entryName}.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['vue', '@storefront-ui/shared'].concat(
        Object.keys(pkg.peerDependencies || {}),
        Object.keys(pkg.devDependencies || {}),
        Object.keys(pkg.dependencies || {}),
      ),
      // make sure modules are separated and this - bundle is tree shakeable
      // see: https://github.com/vitejs/vite/issues/5174
      output: {
        preserveModules: true,
      },
    },
  },
});
