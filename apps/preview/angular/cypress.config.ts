import { defineConfig } from 'cypress';

export default defineConfig({
  video: false,
  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  },
});
