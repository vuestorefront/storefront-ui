import sfTypography from '@storefront-ui/typography';
/** @type {import('tailwindcss').Config} */
import { tailwindConfig } from '@storefront-ui/tailwind-config';
import tailwindTypography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],
  content: ['./**/*.ts', './**/*.tsx', '../../../node_modules/@storefront-ui/react/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [sfTypography, tailwindTypography],
};
