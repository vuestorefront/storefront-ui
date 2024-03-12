import type { Config } from 'tailwindcss';
import sfTypography from '@storefront-ui/typography';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import tailwindTypography from '@tailwindcss/typography';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../../packages/sfui/frameworks/vue/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter Text, sans-serif',
      },
    },
  },
  plugins: [sfTypography, tailwindTypography],
};
