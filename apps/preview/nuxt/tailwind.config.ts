import type { Config } from 'tailwindcss';
import vsfTypography from '@storefront-ui/typography';
import config from '@storefront-ui/tailwind-config/index.json';

export default <Config>{
  ...(config as unknown as Config),
  content: [
    ...config.content,
    '../../../node_modules/@storefront-ui/vue/shared/**/*.ts',
    '../../../node_modules/@storefront-ui/vue/components/**/*.{ts,vue}',
  ],
  plugins: [vsfTypography],
};
