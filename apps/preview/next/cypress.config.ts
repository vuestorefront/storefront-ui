import { defineConfig } from 'cypress';

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
    port: 3004,
    specPattern: `sfui/tests/components/${singleFile}**/*.cy.tsx`,
    fixturesFolder: 'sfui/tests/fixtures',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    experimentalSingleTabRunMode: true,
    async setupNodeEvents(on, config) {
      if (isCoverageEnabled) {
        const { default: registerCodeCoverageTasks } = await import('@cypress/code-coverage/task');
        registerCodeCoverageTasks(on, config);
      }
      return config;
    },
  },
});
