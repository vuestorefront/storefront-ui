import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import pkg from './package.json';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'storefront-ui-react',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['react/jsx-runtime', 'react-dom', '@storefront-ui/shared', 'next', 'next/link'].concat(
        Object.keys({
          ...(pkg.peerDependencies || {}),
          ...(pkg.dependencies || {}),
        }),
      ),
      input: 'index.ts',
      output: [
        {
          preserveModules: true,
          inlineDynamicImports: false,
          preserveModulesRoot: './',
          format: 'esm',
          exports: 'named',
          sourcemap: false,
          globals: {
            react: 'React',
            'react-dom': 'ReactDom',
            'react-use': 'ReactUse',
          },
          entryFileNames: '[name].es.js',
        },
        {
          name: 'umd',
          format: 'umd',
          exports: 'named',
          sourcemap: false,
          globals: {
            react: 'React',
            'react-dom': 'ReactDom',
            'react-use': 'ReactUse',
          },
          entryFileNames: '[name].umd.js',
        },
      ],
    },
  },
});
