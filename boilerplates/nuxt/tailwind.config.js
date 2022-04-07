/* eslint-disable quote-props */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        'md': '6px',
        'xl': '12px',
        'full': '80px'
      },
      boxShadow: {
        default: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
        'md': '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
      },
      colors: {
        'brand': '#02C652',
        'gray': {
          900: '#18181B',
          800: '#27272A',
          700: '#3F3F46',
          600: '#52525B',
          500: '#71717A',
          400: '#A1A1AA',
          300: '#D4D4D8',
          200: '#E4E4E7',
          100: '#F4F4F5',
          50: '#FAFAFA'
        },
        'primary': {
          900: '#14532D',
          800: '#166534',
          700: '#15803D',
          600: '#16A34A',
          500: '#02BB4D',
          400: '#4ADE80',
          300: '#86EFAC',
          200: '#BBF7D0',
          100: '#DCFCE7',
          50: '#F0FDF4'
        },
        'secondary': {
          900: '#420CA9',
          800: '#531ED3',
          700: '#6131DD',
          600: '#6F40EC',
          500: '#875CF6',
          400: '#A78BFA',
          300: '#C4B5FD',
          200: '#DDD6FE',
          100: '#EDE9FE',
          50: '#F5F3FF'
        },
        'positive': {
          900: '#14532D',
          800: '#166534',
          700: '#15803D',
          600: '#16A34A',
          500: '#02BB4D',
          400: '#4ADE80',
          300: '#86EFAC',
          200: '#BBF7D0',
          100: '#DCFCE7',
          50: '#F0FDF4'
        },
        'negative': {
          900: '#881337',
          800: '#9F1239',
          700: '#BE123C',
          600: '#E11D48',
          500: '#F43F5E',
          400: '#FB7185',
          300: '#FDA4AF',
          200: '#FECDD3',
          100: '#FFE4E6',
          50: '#FFF1F2'
        },
        'warning': {
          900: '#713F12',
          800: '#854D0E',
          700: '#A16207',
          600: '#CA8A04',
          500: '#EAB308',
          400: '#FACC15',
          300: '#FDE047',
          200: '#FEF08A',
          100: '#FEF9C3',
          50: '#FEFCE8'
        }
      },
      fontFamily: {
        'headings': 'Red Hat Display',
        'body': 'Red Hat Text'
      },
      fontSize: {
        'lg': '18px',
        'base': '16px',
        'sm': '14px',
        'xs': '12px'
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'bold': '700'
      },
      screens: {
      // => @media (min-width: 1536px, max-width: 1608px) { ... }
        '2xl': { min: '1536px', max: '1608px' },
        'xl': '1280px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
        'xs': '0px'
      },
      spacing: {
        'px': '1px',
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '20': '5rem',
        '40': '10rem'
      },
      keyframes: {
        spin: {
          'from': {
            transform: 'rotate:(0deg)',
            'transform-origin': 'bottom right'
          },
          'to': {
            transform: 'rotate(360deg)',
            'transform-origin': 'bottom right'
          }
        }
      },
      animation: {
        spin: 'spin 1s linear infinite'
      }
    }
  },
  plugins: []
}
