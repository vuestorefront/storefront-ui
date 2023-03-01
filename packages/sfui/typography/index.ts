import plugin from 'tailwindcss/plugin';
import type { KeyValuePair, ResolvableTo } from 'tailwindcss/types/config'

export type ConfigValue = Record<string, string>;
export type ConfigKeyValuePair = KeyValuePair<string, ConfigValue>;
export type Options = { utilityPrefix?: string } | undefined;

declare module 'tailwindcss/types/config' {
  export interface ThemeConfig {
    vsfTypography: ResolvableTo<ConfigKeyValuePair>
  }
}

const PLUGIN_CONFIG_KEY = 'vsfTypography';

export default plugin.withOptions(({ utilityPrefix = 'typography' }: Options = {}) =>
  function({ matchUtilities, theme }) {
    matchUtilities(
      {
        [utilityPrefix]: (value) => {
          if (Array.isArray(value.fontSize)) {
            // user can specify lineHeight, letterSpacing or fontWeight within fontSize configuration
            // see: https://tailwindcss.com/docs/font-size#providing-a-default-line-height
            const otherFontProperties = value.fontSize[1];
            if (otherFontProperties) {
              value = {
                ...(typeof otherFontProperties === 'object'
                  ? otherFontProperties
                  : { lineHeight: otherFontProperties }
                ),
                ...value,
              };
            }
            value.fontSize = value.fontSize[0];
          }
          return { ...value };
        },
      },
      {
        values: theme(PLUGIN_CONFIG_KEY),
        supportsNegativeValues: false,
      }
    )
  }, () => ({
    theme: {
      [PLUGIN_CONFIG_KEY]: ({ theme }) => 
      [
        // [name, fontSize, lineHeight, fontFamily]
        ['headline-1', 'fontSize.6xl', 'lineHeight.extra-tight', 'fontFamily.headings'],
        ['headline-2', 'fontSize.4xl', 'lineHeight.10', 'fontFamily.headings'],
        ['headline-3', 'fontSize.2xl', 'lineHeight.8', 'fontFamily.headings'],
        ['headline-4', 'fontSize.lg', 'lineHeight.7', 'fontFamily.headings'],
        ['headline-5', 'fontSize.base', 'lineHeight.6', 'fontFamily.headings'],
        ['headline-6', 'fontSize.sm', 'lineHeight.5', 'fontFamily.headings'],
        ['text-xl', 'fontSize.xl', 'lineHeight.7'],
        ['text-lg', 'fontSize.lg', 'lineHeight.7'],
        ['text-base', 'fontSize.base', 'lineHeight.6'],
        ['text-sm', 'fontSize.sm', 'lineHeight.5'],
        ['text-xs', 'fontSize.xs', 'lineHeight.4'],
        ['button-lg', 'fontSize.lg', 'lineHeight.7'],
        ['button-base', 'fontSize.base', 'lineHeight.6'],
        ['button-sm', 'fontSize.sm', 'lineHeight.5'],
        ['label-lg', 'fontSize.lg', 'lineHeight.7'],
        ['label-base', 'fontSize.base', 'lineHeight.6'],
        ['label-sm', 'fontSize.sm', 'lineHeight.5'],
        ['error-lg', 'fontSize.lg', 'lineHeight.7'],
        ['error-base', 'fontSize.base', 'lineHeight.6'],
        ['error-sm', 'fontSize.sm', 'lineHeight.5'],
        ['hint-lg', 'fontSize.lg', 'lineHeight.7'],
        ['hint-base', 'fontSize.base', 'lineHeight.6'],
        ['hint-sm', 'fontSize.sm', 'lineHeight.5'],
      ].reduce((p, [name, fontSize, lineHeight, fontFamily]) => {
        p[name] = {
          fontSize: theme(fontSize),
          lineHeight: theme(lineHeight),
          fontFamily: fontFamily ? theme(fontFamily) : undefined,
        };
        return p;
      }, {} as Record<string, ConfigValue>),
    } as { [PLUGIN_CONFIG_KEY]: ResolvableTo<ConfigKeyValuePair> },
  })
);
