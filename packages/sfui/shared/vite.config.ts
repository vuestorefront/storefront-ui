// vite.config.js
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'storefront-ui-shared',
      fileName: (format) => format === 'es' ? `index.mjs` : `index.${format}.js`,
    },
  },
});
