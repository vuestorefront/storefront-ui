import cypress from 'eslint-plugin-cypress';
import tseslint from 'typescript-eslint';
import { concat } from 'eslint-flat-config-utils';

export default concat(
  tseslint.configs.recommended,
  cypress.configs.recommended,
  {
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
      'cypress/assertion-before-screenshot': 'warn',
      'cypress/no-force': 'warn',
      'cypress/no-pause': 'error',
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
);
