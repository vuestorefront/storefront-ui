import type { Config } from 'tailwindcss';
import vsfTypography from '@storefront-ui/typography';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../../packages/sfui/frameworks/vue/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Red Hat Text, sans-serif',
      },
    },
  },
  plugins: [vsfTypography],
};
