import { defineConfig } from 'cypress';
import codeCoverage from '@cypress/code-coverage/task';

const isCoverageEnabled = process.env.CYPRESS_COVERAGE === 'true';
const singleFile = process.env.SPEC ? `${process.env.SPEC}/` : '';
export default defineConfig({
  env: {
    framework: 'react',
    coverage: isCoverageEnabled,
  },
  component: {
    viewportHeight: 300,
    viewportWidth: 300,
    video: false,
    specPattern: `src/components/sfui/tests/components/${singleFile}**/*.cy.tsx`,
    fixturesFolder: 'src/components/sfui/tests/fixtures',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    experimentalSingleTabRunMode: true,
    setupNodeEvents(on, config) {
      isCoverageEnabled && codeCoverage(on, config);
      return config;
    },
  },
});
