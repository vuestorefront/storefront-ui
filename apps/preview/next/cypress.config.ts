import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    framework: 'react',
  },
  component: {
    viewportHeight: 300,
    viewportWidth: 300,
    video: false,
    port: 3004,
    specPattern: 'sfui/tests/**/*.{cy,spec}.{js,ts,jsx,tsx}',
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    fixturesFolder: 'sfui/tests/fixtures',
    experimentalSingleTabRunMode: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
