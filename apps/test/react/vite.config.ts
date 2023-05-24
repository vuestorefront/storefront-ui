import react from '@vitejs/plugin-react';
import { defineConfig, searchForWorkspaceRoot } from 'vite';
import { replaceImport, copiedSfuiPath, relativeSfuiPath } from '@storefront-ui/tests-shared';
import istanbul from 'vite-plugin-istanbul';
import nycConfig from './.nycrc.json';

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === 'true';
const reactComponentsPath = isCoverageEnabled
  ? copiedSfuiPath('react', __dirname)
  : relativeSfuiPath('react', __dirname);
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
  plugins: [
    react(),
    replaceImport('vue'),
    ...(isCoverageEnabled
      ? [
          istanbul({
            ...nycConfig,
            ...(process.env.SPEC && { include: [`**/${process.env.SPEC}/**`] }),
            cypress: true,
          }),
        ]
      : []),
  ],
  resolve: {
    dedupe: ['vue'],
    // Unfortunately we cant do alias directly to packages/sfui/frameworks/vue because node_modules are hardcode excluded from cypress, nyc and code_coverage. And we cant change cwd for nyc(available in cli) because @cypress/code-coverage hardoce cwd where we have package.json https://github.com/cypress-io/code-coverage/blob/706dd66d3450236af9f1dba037dfc1e1fcd5e6d5/task.js#L20
    alias: [
      {
        find: '@storefront-ui/vue',
        replacement: reactComponentsPath,
      },
      {
        find: '@storefront-ui/react',
        replacement: reactComponentsPath,
      },
    ],
  },
});
