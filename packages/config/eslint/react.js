import { ecma, nextjs, style, typescript } from '@vue-storefront/eslint-config';
import { concat } from 'eslint-flat-config-utils';

export default concat(
  ecma({ isStrict: false }),
  typescript({ isStrict: false }),
  nextjs({ isStrict: false },),
  style(),
  {
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
  },
  {
    files: ['**/*.{mjs,cjs,js,jsx,ts,tsx,mts,cts}'],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/prefer-default-export': 'off',
      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          aspects: ['invalidHref', 'preferButton'],
          components: ['Link'],
          specialLink: ['hrefLeft', 'hrefRight'],
        },
      ],
      'jsx-a11y/control-has-associated-label': 'off',
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          allowChildren: false,
          components: [],
          required: { some: ['nesting', 'id'] },
        },
      ],
      'perfectionist/sort-exports': 'off',
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-interfaces': 'off',
      'perfectionist/sort-intersection-types': 'off',
      'perfectionist/sort-jsx-props': 'off',
      'perfectionist/sort-maps': 'off',
      'perfectionist/sort-named-imports': 'off',
      'perfectionist/sort-object-types': 'off',
      'perfectionist/sort-objects': 'off',
      'perfectionist/sort-switch-case': 'off',
      'perfectionist/sort-union-types': 'off',
      'react/button-has-type': ['error', { reset: true }],
      'react/display-name': 'off',
      'no-restricted-imports': 'off',
      'react-hooks/refs': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'import/no-unresolved': 'off',
    },
  },
);
