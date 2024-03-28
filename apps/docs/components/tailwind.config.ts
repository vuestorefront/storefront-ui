import type { Config } from 'tailwindcss';
import sfTypography from '@storefront-ui/typography';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import tailwindTypography from '@tailwindcss/typography';

export default <Config>{
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../../packages/sfui/frameworks/vue/**/*.vue', './content/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        headings: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [sfTypography, tailwindTypography],
};
