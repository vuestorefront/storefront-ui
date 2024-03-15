import { type Config } from 'tailwindcss';
import { type ThemeConfig } from 'tailwindcss/types/config';
import tailwindCssVariables from '@mertasan/tailwindcss-variables';
import peerNextPlugin from '@storefront-ui/tw-plugin-peer-next';
import tailwindTypography from '@tailwindcss/typography';

export const tailwindConfig: Config = {
  content: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      typography: ({ theme }: ThemeConfig) => ({
        DEFAULT: {
          css: [
            {
              color: theme('colors.neutral.900'),
              fontSize: '16px',
              fontFamily: theme('fontFamily.body'),
              p: {
                marginTop: '20px',
                marginBottom: '20px',
              },
              '[class~="lead"]': {
                fontWeight: theme('fontWeight.medium'),
                fontSize: '20px',
                lineHeight: '32px',
                marginTop: '24px',
                marginBottom: '24px',
                color: theme('colors.neutral.900'),
              },
              blockquote: {
                fontWeight: theme('fontWeight.medium'),
                color: theme('colors.neutral.900'),
                marginTop: '32px',
                marginBottom: '32px',
                paddingLeft: '20px',
              },
              'blockquote ~ figcaption ': {
                fontWeight: theme('fontWeight.medium'),
                color: theme('colors.neutral.900'),
                fontStyle: 'italic',
              },
              h1: {
                fontSize: '36px',
                fontFamily: theme('fontFamily.headings'),
                marginTop: '0',
                marginBottom: '32px',
                lineHeight: '40px',
              },
              h2: {
                fontSize: '24px',
                fontFamily: theme('fontFamily.headings'),
                marginTop: '48px',
                marginBottom: '24px',
                lineHeight: '32px',
              },
              h3: {
                fontSize: '20px',
                fontFamily: theme('fontFamily.headings'),
                marginTop: '32px',
                marginBottom: '12px',
                lineHeight: '32px',
              },
              h4: {
                fontFamily: theme('fontFamily.headings'),
                marginTop: '24px',
                marginBottom: '8px',
                lineHeight: '24px',
              },
              img: {
                marginTop: '32px',
                marginBottom: '32px',
              },
              video: {
                marginTop: '32px',
                marginBottom: '32px',
              },
              figure: {
                marginTop: '32px',
                marginBottom: '32px',
              },
              'figure > *': {
                marginTop: '0',
                marginBottom: '0',
              },
              figcaption: {
                fontWeight: theme('fontStyle.italic'),
                fontSize: '14px',
                lineHeight: '20px',
                marginTop: '12px',
              },
              code: {
                fontSize: '14px',
              },
              'h2 code': {
                fontSize: '21px',
              },
              'h3 code': {
                fontSize: '18px',
              },
              strong: {
                fontWeight: theme('fontWeight.medium'),
              },
              pre: {
                fontSize: '14px',
                lineHeight: '24px',
                marginTop: '24px',
                marginBottom: '24px',
                borderRadius: '6px',
                paddingTop: '12px',
                paddingRight: '16px',
                paddingBottom: '12px',
                paddingLeft: '16px',
              },
              ol: {
                marginTop: '20px',
                marginBottom: '20px',
                paddingLeft: '20px',
              },
              ul: {
                marginTop: '20px',
                marginBottom: '20px',
                paddingLeft: '26px',
              },
              li: {
                marginTop: '8px',
                marginBottom: '8px',
              },
              'ol > li': {
                paddingLeft: '6px',
              },
              'ul > li': {
                paddingLeft: '6px',
              },
              '> ul > li p': {
                marginTop: '12px',
                marginBottom: '12px',
              },
              '> ul > li > *:first-child': {
                marginTop: '20px',
              },
              '> ul > li > *:last-child': {
                marginBottom: '20px',
              },
              '> ol > li > *:first-child': {
                marginTop: '20px',
              },
              '> ol > li > *:last-child': {
                marginBottom: '20px',
              },
              'ul ul, ul ol, ol ul, ol ol': {
                marginTop: '12px',
                marginBottom: '12px',
              },

              hr: {
                marginTop: '48px',
                marginBottom: '48px',
              },
              'hr + *': {
                marginTop: '0',
              },
              'h2 + *': {
                marginTop: '0',
              },
              'h3 + *': {
                marginTop: '0',
              },
              'h4 + *': {
                marginTop: '0',
              },

              table: {
                fontSize: '14px',
                lineHeight: '24px',
              },
              'thead th': {
                fontWeight: theme('fontWeight.medium'),
                paddingRight: '8px',
                paddingBottom: '8px',
                paddingLeft: '8px',
              },
              'thead th:first-child': {
                paddingLeft: '0',
              },
              'thead th:last-child': {
                paddingRight: '0',
              },
              'tbody td, tfoot td': {
                paddingTop: '8px',
                paddingRight: '8px',
                paddingBottom: '8px',
                paddingLeft: '8px',
              },
              'tbody td:first-child, tfoot td:first-child': {
                paddingLeft: '0',
              },
              'tbody td:last-child, tfoot td:last-child': {
                paddingRight: '0',
              },
            },
            {
              '> :first-child': {
                marginTop: '0',
              },
              '> :last-child': {
                marginBottom: '0',
              },
            },
          ],
        },
      }),
      outlineColor: ({ theme }) => ({
        DEFAULT: theme('colors.secondary.600'),
      }),
      outlineOffset: {
        DEFAULT: '2px',
      },
      outlineWidth: {
        DEFAULT: '2px',
      },
      boxShadow: {
        DEFAULT: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
        md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'checked-checkbox-current':
          'linear-gradient(-45deg,transparent 65%, currentcolor 65.99%),linear-gradient(45deg,transparent 75%, currentcolor 75.99%),linear-gradient(-45deg, currentcolor 40%,transparent 40.99%),linear-gradient(45deg, currentcolor 30%, white 30.99%, white 40%,transparent 40.99%),linear-gradient(-45deg, white 50%, currentcolor 50.99%)',
        'indeterminate-checkbox-current':
          'linear-gradient(90deg,transparent 80%, currentcolor 80%),linear-gradient(-90deg,transparent 80%, currentcolor 80%),linear-gradient(0deg, currentcolor 43%, white 43%, white 57%, currentcolor 57%)',
      },
      colors: {
        brand: 'rgb(var(--colors-brand) / <alpha-value>)',
        neutral: {
          '900': 'rgb(var(--colors-neutral-900) / <alpha-value>)',
          '800': 'rgb(var(--colors-neutral-800) / <alpha-value>)',
          '700': 'rgb(var(--colors-neutral-700) / <alpha-value>)',
          '600': 'rgb(var(--colors-neutral-600) / <alpha-value>)',
          '500': 'rgb(var(--colors-neutral-500) / <alpha-value>)',
          '400': 'rgb(var(--colors-neutral-400) / <alpha-value>)',
          '300': 'rgb(var(--colors-neutral-300) / <alpha-value>)',
          '200': 'rgb(var(--colors-neutral-200) / <alpha-value>)',
          '100': 'rgb(var(--colors-neutral-100) / <alpha-value>)',
          '50': 'rgb(var(--colors-neutral-50) / <alpha-value>)',
        },
        primary: {
          '900': 'rgb(var(--colors-primary-900) / <alpha-value>)',
          '800': 'rgb(var(--colors-primary-800) / <alpha-value>)',
          '700': 'rgb(var(--colors-primary-700) / <alpha-value>)',
          '600': 'rgb(var(--colors-primary-600) / <alpha-value>)',
          '500': 'rgb(var(--colors-primary-500) / <alpha-value>)',
          '400': 'rgb(var(--colors-primary-400) / <alpha-value>)',
          '300': 'rgb(var(--colors-primary-300) / <alpha-value>)',
          '200': 'rgb(var(--colors-primary-200) / <alpha-value>)',
          '100': 'rgb(var(--colors-primary-100) / <alpha-value>)',
          '50': 'rgb(var(--colors-primary-50) / <alpha-value>)',
        },
        secondary: {
          '900': 'rgb(var(--colors-secondary-900) / <alpha-value>)',
          '800': 'rgb(var(--colors-secondary-800) / <alpha-value>)',
          '700': 'rgb(var(--colors-secondary-700) / <alpha-value>)',
          '600': 'rgb(var(--colors-secondary-600) / <alpha-value>)',
          '500': 'rgb(var(--colors-secondary-500) / <alpha-value>)',
          '400': 'rgb(var(--colors-secondary-400) / <alpha-value>)',
          '300': 'rgb(var(--colors-secondary-300) / <alpha-value>)',
          '200': 'rgb(var(--colors-secondary-200) / <alpha-value>)',
          '100': 'rgb(var(--colors-secondary-100) / <alpha-value>)',
          '50': 'rgb(var(--colors-secondary-50) / <alpha-value>)',
        },
        positive: {
          '900': 'rgb(var(--colors-positive-900) / <alpha-value>)',
          '800': 'rgb(var(--colors-positive-800) / <alpha-value>)',
          '700': 'rgb(var(--colors-positive-700) / <alpha-value>)',
          '600': 'rgb(var(--colors-positive-600) / <alpha-value>)',
          '500': 'rgb(var(--colors-positive-500) / <alpha-value>)',
          '400': 'rgb(var(--colors-positive-400) / <alpha-value>)',
          '300': 'rgb(var(--colors-positive-300) / <alpha-value>)',
          '200': 'rgb(var(--colors-positive-200) / <alpha-value>)',
          '100': 'rgb(var(--colors-positive-100) / <alpha-value>)',
          '50': 'rgb(var(--colors-positive-50) / <alpha-value>)',
        },
        negative: {
          '900': 'rgb(var(--colors-negative-900) / <alpha-value>)',
          '800': 'rgb(var(--colors-negative-800) / <alpha-value>)',
          '700': 'rgb(var(--colors-negative-700) / <alpha-value>)',
          '600': 'rgb(var(--colors-negative-600) / <alpha-value>)',
          '500': 'rgb(var(--colors-negative-500) / <alpha-value>)',
          '400': 'rgb(var(--colors-negative-400) / <alpha-value>)',
          '300': 'rgb(var(--colors-negative-300) / <alpha-value>)',
          '200': 'rgb(var(--colors-negative-200) / <alpha-value>)',
          '100': 'rgb(var(--colors-negative-100) / <alpha-value>)',
          '50': 'rgb(var(--colors-negative-50) / <alpha-value>)',
        },
        warning: {
          '900': 'rgb(var(--colors-warning-900) / <alpha-value>)',
          '800': 'rgb(var(--colors-warning-800) / <alpha-value>)',
          '700': 'rgb(var(--colors-warning-700) / <alpha-value>)',
          '600': 'rgb(var(--colors-warning-600) / <alpha-value>)',
          '500': 'rgb(var(--colors-warning-500) / <alpha-value>)',
          '400': 'rgb(var(--colors-warning-400) / <alpha-value>)',
          '300': 'rgb(var(--colors-warning-300) / <alpha-value>)',
          '200': 'rgb(var(--colors-warning-200) / <alpha-value>)',
          '100': 'rgb(var(--colors-warning-100) / <alpha-value>)',
          '50': 'rgb(var(--colors-warning-50) / <alpha-value>)',
        },
        disabled: {
          '900': 'rgb(var(--colors-disabled-900) / 0.5)',
          '800': 'rgb(var(--colors-disabled-800) / 0.5)',
          '700': 'rgb(var(--colors-disabled-700) / 0.5)',
          '600': 'rgb(var(--colors-disabled-600) / 0.5)',
          '500': 'rgb(var(--colors-disabled-500) / 0.5)',
          '400': 'rgb(var(--colors-disabled-400) / 0.5)',
          '300': 'rgb(var(--colors-disabled-300) / 0.5)',
          '200': 'rgb(var(--colors-disabled-200) / 0.5)',
          '100': 'rgb(var(--colors-disabled-100) / 0.5)',
          '50': 'rgb(var(--colors-disabled-50) / 0.5)',
        },
      },
      fontFamily: {
        headings: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
      },
      screens: {
        xs: '376px',
        sm: '640px',
      },
      keyframes: {
        'stroke-loader-circular': {
          '0%': { 'stroke-dasharray': '1, 200', 'stroke-dashoffset': '0' },
          '50%': { 'stroke-dasharray': '140, 200', 'stroke-dashoffset': '-35' },
          '100%': { 'stroke-dasharray': '89, 200', 'stroke-dashoffset': '-150' },
        },
        line: {
          from: {
            left: '-100%',
            width: '100%',
          },
          to: {
            left: '100%',
            width: '10%',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
        line: 'line 1.5s ease-in infinite',
        'stroke-loader-circular': 'stroke-loader-circular 2s ease-in-out infinite',
      },
      fontSize: {
        '2xs': ['10px', '11px'],
        '3xs': ['8px', '8px'],
      },
    },
    variables: {
      DEFAULT: {
        colors: {
          primary: {
            '50': '235 255 242',
            '100': '217 253 228',
            '200': '171 241 192',
            '300': '130 234 158',
            '400': '60 224 120',
            '500': '19 195 96',
            '600': '7 161 79',
            '700': '13 127 63',
            '800': '16 86 46',
            '900': '15 50 30',
          },
          secondary: {
            '50': '247 245 253',
            '100': '239 236 251',
            '200': '225 218 246',
            '300': '216 203 245',
            '400': '198 177 246',
            '500': '180 151 249',
            '600': '151 111 238',
            '700': '119 79 209',
            '800': '82 52 153',
            '900': '48 32 86',
          },
          positive: {
            '50': '235 255 242',
            '100': '217 253 228',
            '200': '171 241 192',
            '300': '130 234 158',
            '400': '60 224 120',
            '500': '19 195 96',
            '600': '7 161 79',
            '700': '13 127 63',
            '800': '16 86 46',
            '900': '15 50 30',
          },
          negative: {
            '50': '255 245 247',
            '100': '255 232 237',
            '200': '254 211 219',
            '300': '253 193 202',
            '400': '255 163 175',
            '500': '255 127 143',
            '600': '240 59 91',
            '700': '208 13 48',
            '800': '141 8 33',
            '900': '76 15 23',
          },
          warning: {
            '50': '254 247 236',
            '100': '255 238 211',
            '200': '254 220 165',
            '300': '254 202 132',
            '400': '255 181 77',
            '500': '237 153 14',
            '600': '191 121 17',
            '700': '157 93 3',
            '800': '109 63 9',
            '900': '62 35 10',
          },
          neutral: {
            '50': '249 251 250',
            '100': '239 244 241',
            '200': '217 226 220',
            '300': '187 198 190',
            '400': '129 140 133',
            '500': '100 111 104',
            '600': '77 86 79',
            '700': '56 65 59',
            '800': '37 43 39',
            '900': '21 26 22',
          },
          disabled: {
            '50': '249 251 250',
            '100': '239 244 241',
            '200': '217 226 220',
            '300': '187 198 190',
            '400': '129 140 133',
            '500': '100 111 104',
            '600': '77 86 79',
            '700': '56 65 59',
            '800': '37 43 39',
            '900': '21 26 22',
          },
        },
      },
    },
  },
  plugins: [tailwindTypography, tailwindCssVariables, peerNextPlugin],
};
