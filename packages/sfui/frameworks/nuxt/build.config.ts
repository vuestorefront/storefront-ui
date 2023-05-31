import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/module.ts'],
  externals: ['@storefront-ui/vue', '@storefront-ui/vue/tailwind-config'],
});
