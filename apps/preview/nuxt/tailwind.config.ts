import type { Config } from 'tailwindcss';
import vsfTypography from '@storefront-ui/typography';
import { tailwindConfig } from '@storefront-ui/tailwind-config';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./**/*.vue', './**/*.ts', './**/*.tsx', '../../../node_modules/@storefront-ui/vue/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Red Hat Text, sans-serif',
      },
    },
  },
  plugins: [vsfTypography],
};
