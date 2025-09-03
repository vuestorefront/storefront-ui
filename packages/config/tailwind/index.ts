import { type Config } from 'tailwindcss';
import { type ThemeConfig } from 'tailwindcss/types/config';
import tailwindCssVariables from '@mertasan/tailwindcss-variables';
import peerNextPlugin from '@storefront-ui/tw-plugin-peer-next';
import tailwindTypography from '@tailwindcss/typography';
import tailwindContainerQueries from '@tailwindcss/container-queries';

export const tailwindConfig: Config = {
  content: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      typography: ({ theme }: { theme: (s: string) => any }) => ({
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
        brand: 'oklch(var(--colors-brand) / <alpha-value>)',
        neutral: {
          '900': 'oklch(var(--colors-neutral-900) / <alpha-value>)',
          '800': 'oklch(var(--colors-neutral-800) / <alpha-value>)',
          '700': 'oklch(var(--colors-neutral-700) / <alpha-value>)',
          '600': 'oklch(var(--colors-neutral-600) / <alpha-value>)',
          '500': 'oklch(var(--colors-neutral-500) / <alpha-value>)',
          '400': 'oklch(var(--colors-neutral-400) / <alpha-value>)',
          '300': 'oklch(var(--colors-neutral-300) / <alpha-value>)',
          '200': 'oklch(var(--colors-neutral-200) / <alpha-value>)',
          '100': 'oklch(var(--colors-neutral-100) / <alpha-value>)',
          '50': 'oklch(var(--colors-neutral-50) / <alpha-value>)',
        },
        primary: {
          '900': 'oklch(var(--colors-primary-900) / <alpha-value>)',
          '800': 'oklch(var(--colors-primary-800) / <alpha-value>)',
          '700': 'oklch(var(--colors-primary-700) / <alpha-value>)',
          '600': 'oklch(var(--colors-primary-600) / <alpha-value>)',
          '500': 'oklch(var(--colors-primary-500) / <alpha-value>)',
          '400': 'oklch(var(--colors-primary-400) / <alpha-value>)',
          '300': 'oklch(var(--colors-primary-300) / <alpha-value>)',
          '200': 'oklch(var(--colors-primary-200) / <alpha-value>)',
          '100': 'oklch(var(--colors-primary-100) / <alpha-value>)',
          '50': 'oklch(var(--colors-primary-50) / <alpha-value>)',
        },
        secondary: {
          '900': 'oklch(var(--colors-secondary-900) / <alpha-value>)',
          '800': 'oklch(var(--colors-secondary-800) / <alpha-value>)',
          '700': 'oklch(var(--colors-secondary-700) / <alpha-value>)',
          '600': 'oklch(var(--colors-secondary-600) / <alpha-value>)',
          '500': 'oklch(var(--colors-secondary-500) / <alpha-value>)',
          '400': 'oklch(var(--colors-secondary-400) / <alpha-value>)',
          '300': 'oklch(var(--colors-secondary-300) / <alpha-value>)',
          '200': 'oklch(var(--colors-secondary-200) / <alpha-value>)',
          '100': 'oklch(var(--colors-secondary-100) / <alpha-value>)',
          '50': 'oklch(var(--colors-secondary-50) / <alpha-value>)',
        },
        positive: {
          '900': 'oklch(var(--colors-positive-900) / <alpha-value>)',
          '800': 'oklch(var(--colors-positive-800) / <alpha-value>)',
          '700': 'oklch(var(--colors-positive-700) / <alpha-value>)',
          '600': 'oklch(var(--colors-positive-600) / <alpha-value>)',
          '500': 'oklch(var(--colors-positive-500) / <alpha-value>)',
          '400': 'oklch(var(--colors-positive-400) / <alpha-value>)',
          '300': 'oklch(var(--colors-positive-300) / <alpha-value>)',
          '200': 'oklch(var(--colors-positive-200) / <alpha-value>)',
          '100': 'oklch(var(--colors-positive-100) / <alpha-value>)',
          '50': 'oklch(var(--colors-positive-50) / <alpha-value>)',
        },
        negative: {
          '900': 'oklch(var(--colors-negative-900) / <alpha-value>)',
          '800': 'oklch(var(--colors-negative-800) / <alpha-value>)',
          '700': 'oklch(var(--colors-negative-700) / <alpha-value>)',
          '600': 'oklch(var(--colors-negative-600) / <alpha-value>)',
          '500': 'oklch(var(--colors-negative-500) / <alpha-value>)',
          '400': 'oklch(var(--colors-negative-400) / <alpha-value>)',
          '300': 'oklch(var(--colors-negative-300) / <alpha-value>)',
          '200': 'oklch(var(--colors-negative-200) / <alpha-value>)',
          '100': 'oklch(var(--colors-negative-100) / <alpha-value>)',
          '50': 'oklch(var(--colors-negative-50) / <alpha-value>)',
        },
        warning: {
          '900': 'oklch(var(--colors-warning-900) / <alpha-value>)',
          '800': 'oklch(var(--colors-warning-800) / <alpha-value>)',
          '700': 'oklch(var(--colors-warning-700) / <alpha-value>)',
          '600': 'oklch(var(--colors-warning-600) / <alpha-value>)',
          '500': 'oklch(var(--colors-warning-500) / <alpha-value>)',
          '400': 'oklch(var(--colors-warning-400) / <alpha-value>)',
          '300': 'oklch(var(--colors-warning-300) / <alpha-value>)',
          '200': 'oklch(var(--colors-warning-200) / <alpha-value>)',
          '100': 'oklch(var(--colors-warning-100) / <alpha-value>)',
          '50': 'oklch(var(--colors-warning-50) / <alpha-value>)',
        },
        disabled: {
          '900': 'oklch(var(--colors-disabled-900) / 0.5)',
          '800': 'oklch(var(--colors-disabled-800) / 0.5)',
          '700': 'oklch(var(--colors-disabled-700) / 0.5)',
          '600': 'oklch(var(--colors-disabled-600) / 0.5)',
          '500': 'oklch(var(--colors-disabled-500) / 0.5)',
          '400': 'oklch(var(--colors-disabled-400) / 0.5)',
          '300': 'oklch(var(--colors-disabled-300) / 0.5)',
          '200': 'oklch(var(--colors-disabled-200) / 0.5)',
          '100': 'oklch(var(--colors-disabled-100) / 0.5)',
          '50': 'oklch(var(--colors-disabled-50) / 0.5)',
        },
      },
      fontFamily: {
        headings: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
      },
      lineHeight: {
        'extra-tight': '1.125',
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
          brand: '0.796 0.216 150.615',
          neutral: {
            '50': '0.986 0.002 0',
            '100': '0.96 0.005 147.28',
            '200': '0.904 0.013 156.832',
            '300': '0.816 0.016 154.297',
            '400': '0.629 0.016 157.933',
            '500': '0.53 0.017 157.808',
            '600': '0.443 0.016 152.174',
            '700': '0.365 0.016 156.314',
            '800': '0.282 0.011 156.383',
            '900': '0.211 0.011 151.165'
          },
          primary: {
            '50': '0.98 0.02 156.735',
            '100': '0.945 0.028 162.02',
            '200': '0.887 0.047 164.988',
            '300': '0.804 0.062 163.425',
            '400': '0.727 0.054 162.969',
            '500': '0.634 0.048 162.931',
            '600': '0.525 0.041 162.018',
            '700': '0.466 0.035 162.976',
            '800': '0.365 0.026 164.592',
            '900': '0.27 0.017 163.365'
          },
          secondary: {
            '50': '0.982 0.027 157.322',
            '100': '0.962 0.05 155.017',
            '200': '0.899 0.097 153.574',
            '300': '0.855 0.144 151.03',
            '400': '0.801 0.196 150.807',
            '500': '0.716 0.19 150.726',
            '600': '0.621 0.165 151.142',
            '700': '0.524 0.135 151.385',
            '800': '0.401 0.095 152.918',
            '900': '0.285 0.055 155.368'
          },
          positive: {
            '50': '0.982 0.027 157.322',
            '100': '0.962 0.05 155.017',
            '200': '0.899 0.097 153.574',
            '300': '0.855 0.144 151.03',
            '400': '0.801 0.196 150.807',
            '500': '0.716 0.19 150.726',
            '600': '0.621 0.165 151.142',
            '700': '0.524 0.135 151.385',
            '800': '0.401 0.095 152.918',
            '900': '0.285 0.055 155.368'
          },
          negative: {
            '50': '0.978 0.011 3.577',
            '100': '0.951 0.026 2.797',
            '200': '0.906 0.049 5.563',
            '300': '0.867 0.07 8.609',
            '400': '0.81 0.11 11.318',
            '500': '0.746 0.156 13.807',
            '600': '0.634 0.215 16.447',
            '700': '0.545 0.215 22.13',
            '800': '0.41 0.16 20.89',
            '900': '0.28 0.09 18.166'
          },
          warning: {
            '50': '0.979 0.016 79.212',
            '100': '0.96 0.037 80.566',
            '200': '0.91 0.08 79.414',
            '300': '0.87 0.106 73.914',
            '400': '0.825 0.145 72.253',
            '500': '0.75 0.16 70.078',
            '600': '0.636 0.135 68.487',
            '700': '0.539 0.12 64.869',
            '800': '0.415 0.089 62.994',
            '900': '0.286 0.055 60.071'
          },
          disabled: {
            '50': '0.986 0.002 0',
            '100': '0.96 0.005 147.28',
            '200': '0.904 0.013 156.832',
            '300': '0.816 0.016 154.297',
            '400': '0.629 0.016 157.933',
            '500': '0.53 0.017 157.808',
            '600': '0.443 0.016 152.174',
            '700': '0.365 0.016 156.314',
            '800': '0.282 0.011 156.383',
            '900': '0.211 0.011 151.165'
          },
        },
      },
    },
  },
  plugins: [tailwindTypography, tailwindCssVariables, peerNextPlugin, tailwindContainerQueries],
};
