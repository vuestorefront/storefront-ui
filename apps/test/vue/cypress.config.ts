import { defineConfig } from 'cypress';
import { initPlugin } from '@frsource/cypress-plugin-visual-regression-diff/plugins';
import coverageTask from '@cypress/code-coverage/task';

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === 'true';
const singleFile = process.env.SPEC ? `${process.env.SPEC}/` : '';
export default defineConfig({
  env: {
    framework: 'vue',
    coverage: isCoverageEnabled,
  },
  component: {
    viewportHeight: 300,
    viewportWidth: 300,
    video: false,
    specPattern: `src/components/sfui/tests/components/${singleFile}**/*.cy.tsx`,
    fixturesFolder: 'src/components/sfui/tests/fixtures',
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
    experimentalSingleTabRunMode: true,
    setupNodeEvents(on, config) {
      initPlugin(on, config);
      isCoverageEnabled && coverageTask(on, config);
      return config;
    },
  },
});
