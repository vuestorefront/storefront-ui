import vue from '@vitejs/plugin-vue';
import { defineConfig, searchForWorkspaceRoot, type PluginOption } from 'vite';
import { copiedSfuiPath, relativeSfuiPath, replaceImport } from '@storefront-ui/tests-shared';
import istanbul from 'vite-plugin-istanbul';
import nycConfig from './.nycrc.json';

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === 'true';
const vueComponentsPath = isCoverageEnabled ? copiedSfuiPath('vue', __dirname) : relativeSfuiPath('vue', __dirname);
// https://vitejs.dev/config/

export default defineConfig({
  server: {
    fs: {
      allow: [
        // https://vitejs.dev/config/server-options.html#server-fs-allow problem with workspace symlinked dependencies
        searchForWorkspaceRoot(process.cwd()),
      ],
    },
  },
  // In Vite 6, dep optimization runs lazily, which can trigger a re-optimization mid-test
  // when transitive deps from @storefront-ui/vue are first imported. This creates two separate
  // Vue module instances with split `currentRenderingInstance` state, breaking slot rendering.
  // Pre-bundling all transitive deps ensures a stable single optimization pass before tests run.
  optimizeDeps: {
    include: [
      'vue',
      'cypress/vue',
      '@floating-ui/vue',
      '@vueuse/core',
      'tabbable',
      'tailwind-merge',
      'jw-paginate',
      // Test files import React (shared test utilities), which would otherwise trigger
      // a re-optimization for react/jsx-dev-runtime and cypress/react18 mid-test.
      'react',
      'react/jsx-dev-runtime',
      'cypress/react18',
    ],
  },
  plugins: [
    vue(),
    replaceImport('react'),
    ...(isCoverageEnabled
      ? [
          istanbul({
            ...nycConfig,
            ...(process.env.SPEC && { include: [`**/${process.env.SPEC}/**`] }),
            cypress: true,
          }) as PluginOption,
        ]
      : []),
  ],
  resolve: {
    dedupe: ['vue'],
    // Unfortunately we cant do alias directly to packages/sfui/frameworks/vue because node_modules are hardcode excluded from cypress, nyc and code_coverage. And we cant change cwd for nyc(available in cli) because @cypress/code-coverage hardoce cwd where we have package.json https://github.com/cypress-io/code-coverage/blob/706dd66d3450236af9f1dba037dfc1e1fcd5e6d5/task.js#L20
    alias: [
      {
        find: '@storefront-ui/vue',
        replacement: vueComponentsPath,
      },
      {
        find: '@storefront-ui/react',
        replacement: vueComponentsPath,
      },
    ],
  },
});
