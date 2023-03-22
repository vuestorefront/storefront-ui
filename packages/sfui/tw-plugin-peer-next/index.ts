import plugin from 'tailwindcss/plugin';
import { normalize } from 'tailwindcss/src/util/dataTypes';
import { removeAlphaVariables } from 'tailwindcss/src/util/removeAlphaVariables';
import escapeClassName from 'tailwindcss/src/util/escapeClassName';

// Whole code is basically copy paste of original source code of tailwind https://github.com/tailwindlabs/tailwindcss/blob/7eab762a3d7fa56b12d8d1e0cbce35133c0eb324/src/corePlugins.js#L85 , just because essential parts such are not exported

let pseudoVariants = [
  // Positional
  ['first', '&:first-child'],
  ['last', '&:last-child'],
  ['only', '&:only-child'],
  ['odd', '&:nth-child(odd)'],
  ['even', '&:nth-child(even)'],
  'first-of-type',
  'last-of-type',
  'only-of-type',

  // State
  [
    'visited',
    ({ container }: { container: any }) => {
      removeAlphaVariables(container, ['--tw-text-opacity', '--tw-border-opacity', '--tw-bg-opacity']);

      return '&:visited';
    },
  ],
  'target',
  ['open', '&[open]'],

  // Forms
  'default',
  'checked',
  'indeterminate',
  'placeholder-shown',
  'autofill',
  'optional',
  'required',
  'valid',
  'invalid',
  'in-range',
  'out-of-range',
  'read-only',

  // Content
  'empty',

  // Interactive
  'focus-within',
  ['hover', '&:hover'],
  'focus',
  'focus-visible',
  'active',
  'enabled',
  'disabled',
].map((variant) => (Array.isArray(variant) ? variant : [variant, `&:${variant}`]));

export default plugin(function ({ matchVariant }) {
  matchVariant(
    'peer-next',
    (value = '', extra) => {
      let result = normalize(typeof value === 'function' ? (value as (opt: {}) => string)(extra) : value);
      if (!result.includes('&')) result = '&' + result;

      const fn = (_: unknown, { modifier }: { modifier: any }) =>
        modifier ? [`:merge(.peer\\/${escapeClassName(modifier)})`, ' + &'] : [`:merge(.peer)`, ' + &'];

      let [a, b] = fn('', extra);

      let start: number | null = null;
      let end: number | null = null;
      let quotes = 0;

      for (let i = 0; i < result.length; ++i) {
        let c = result[i];
        if (c === '&') {
          start = i;
        } else if (c === "'" || c === '"') {
          quotes += 1;
        } else if (start !== null && c === ' ' && !quotes) {
          end = i;
        }
      }

      if (start !== null && end === null) {
        end = result.length;
      }

      // Basically this but can handle quotes:
      // result.replace(/&(\S+)?/g, (_, pseudo = '') => a + pseudo + b)
      return (
        result.slice(0, start as number) +
        a +
        result.slice((start as number) + 1, end as number) +
        b +
        result.slice(end as number)
      );
    },
    { values: Object.fromEntries(pseudoVariants) },
  );
});
