// vite.config.js
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      tsConfigFilePath: 'tsconfig.vue.json',
    }),
  ],
  build: {
    outDir: 'frameworks/vue/dist',
    lib: {
      entry: path.resolve(__dirname, 'frameworks', 'vue', 'index.ts'),
      name: 'vue',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
