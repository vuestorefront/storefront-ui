import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import pkg from './package.json';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    tsconfigPaths({ root: './' }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'index.ts'),
        'tailwind-config': path.resolve(__dirname, 'tailwind-config.ts'),
      },
      name: 'storefront-ui-react',
      fileName: (format, entryName) => format === 'es'
        ? `${entryName}.mjs`
        : `${entryName}.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['react', 'react-dom', 'react/jsx-runtime', '@storefront-ui/shared'].concat(
        Object.keys(pkg.peerDependencies || {}),
        Object.keys(pkg.devDependencies || {}),
        Object.keys(pkg.dependencies || {}),
      ),
      output: {
        preserveModules: true,
        preserveModulesRoot: './',
      },
      plugins: [preserveDirectives()],
      onwarn(warning, warn) {
        // https://github.com/vitejs/vite-plugin-react/issues/137
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
        warn(warning);
      },
    },
  },
});
