// vite.config.js
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsConfigFilePath: 'tsconfig.react.json',
    }),
  ],
  build: {
    outDir: 'frameworks/react/dist',
    lib: {
      entry: path.resolve(__dirname, 'frameworks', 'react', 'index.ts'),
      name: 'react',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['react', 'react-use', 'classnames', 'jw-paginate', '@storefront-ui/shared', 'react-transition-group'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          react: 'React',
          classnames: 'classNames',
          '@storefront-ui/shared': '@storefront-ui/shared',
          'react-use': 'reactUse',
          'jw-paginate': 'paginate',
          'react-transition-group': 'reactTransitionGroup',
        },
      },
    },
  },
});
