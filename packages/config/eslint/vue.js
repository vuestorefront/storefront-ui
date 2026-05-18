import prettierConfig from 'eslint-config-prettier';
import vue from 'eslint-plugin-vue';
import vuejsAccessibility from 'eslint-plugin-vuejs-accessibility';
import tseslint from 'typescript-eslint';
import { concat } from 'eslint-flat-config-utils';

export default concat(
  vue.configs['flat/recommended'],
  vuejsAccessibility.configs['flat/recommended'],
  prettierConfig,
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        sourceType: 'module',
      },
    },
  },
  {
    rules: {
      'vuejs-accessibility/form-control-has-label': 'off',
      'vuejs-accessibility/label-has-for': [
        'error',
        { required: { some: ['nesting', 'id'] } },
      ],
      'vuejs-accessibility/mouse-events-have-key-events': 'off',
      'vue/attributes-order': [
        'error',
        {
          order: [
            'LIST_RENDERING',
            'CONDITIONALS',
            'DEFINITION',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            [
              'RENDER_MODIFIERS',
              'CONTENT',
              'OTHER_DIRECTIVES',
            ],
            'OTHER_ATTR',
            'EVENTS',
            'TWO_WAY_BINDING',
          ],
          ignoreVBindObject: true,
        },
      ],
    },
  },
);
