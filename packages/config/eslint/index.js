import { ecma, typescript } from '@vue-storefront/eslint-config';
import { concat } from 'eslint-flat-config-utils';

export default concat(
  ecma({ isStrict: false }),
  typescript({ isStrict: false }),
);
