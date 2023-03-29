import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    // default
    './src/module.ts',
  ],
  externals: ['@storefront-ui/vue', '@storefront-ui/vue/tailwind-config'],
});
