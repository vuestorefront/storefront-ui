import type { Config } from 'tailwindcss';
import sfTypography from '@storefront-ui/typography';
import { tailwindConfig } from '@storefront-ui/angular/tailwind-config';

export default <Config>{
  presets: [tailwindConfig],
  content: [
    './src/**/*.html',
    './src/**/*.ts',
    '../../../packages/sfui/frameworks/angular/**/*.html',
    '../../../packages/sfui/frameworks/angular/**/*.ts',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Red Hat Text, sans-serif',
      },
    },
  },
  plugins: [sfTypography],
};
