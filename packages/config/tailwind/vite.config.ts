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
    rollupOptions: {
      external: ['tailwindcss', 'tailwindcss/types/config'],
    },
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'storefront-ui-config',
      fileName: (format) => `index.${format}.js`,
    },
  },
});
