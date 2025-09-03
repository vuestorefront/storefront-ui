import type { Config } from 'tailwindcss';
import sfTypography from '@storefront-ui/typography';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../../packages/sfui/frameworks/vue/**/*.vue'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [sfTypography],
};
