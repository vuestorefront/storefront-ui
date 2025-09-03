/** @type {import('tailwindcss').Config} */
import { join } from 'path';
import sfTypography from '@storefront-ui/typography';
import { tailwindConfig } from '@storefront-ui/tailwind-config';
import tailwindTypography from '@tailwindcss/typography';

module.exports = {
  presets: [tailwindConfig],
  content: [
    'index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../../node_modules/@storefront-ui/react/shared/**/*.ts',
    join(
      __dirname,
      '..',
      '..',
      '..',
      'packages',
      'sfui',
      'frameworks',
      'react',
      'components',
      '**',
      '*.{js,ts,jsx,tsx}',
    ),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [sfTypography, tailwindTypography],
};
