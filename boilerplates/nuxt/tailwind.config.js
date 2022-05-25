/* eslint-disable quote-props */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './stories/**/*.{js,ts}',
    './layouts/**/**.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      boxShadow: {
        'base': '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
        'inset': '0 0 0 2px rgba(255,255,255, 1) inset,0 0 0 rgba(255,255,255, 1) inset',
        'medium': '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'large': '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'extra-large': '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
      },
      backgroundImage: {
        'star-filled': "url('../../assets/star.svg')",
        'star-outline': "url('../../assets/star-outline.svg')",
        'checked-checkbox': 'linear-gradient(-45deg,transparent 65%, #02BB4D 65.99%),linear-gradient(45deg,transparent 75%, #02BB4D 75.99%),linear-gradient(-45deg, #02BB4D 40%,transparent 40.99%),linear-gradient(45deg, #02BB4D 30%, white 30.99%, white 40%,transparent 40.99%),linear-gradient(-45deg, white 50%, #02BB4D 50.99%)',
        'indeterminate-checkbox': 'linear-gradient(90deg,transparent 80%, #02BB4D 80%),linear-gradient(-90deg,transparent 80%, #02BB4D 80%),linear-gradient(0deg, #02BB4D 43%, white 43%, white 57%, #02BB4D 57%)'
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
      screens: {
      // => @media (min-width: 1536px, max-width: 1608px) { ... }
        '2-extra-large': { min: '1536px', max: '1920px' },
        'extra-large': { min: '1280px', max: '1366px' },
        'large': '1024px',
        'medium': '768px',
        'small': '640px',
        'extra-small': { min: '360px', max: '376px' }
      },
      keyframes: {
        'spin-base': {
          'from': {
            transform: 'rotate:(0deg)'
          },
          'to': {
            transform: 'rotate(360deg)'
          }
        },
        'linear-loader': {
          '0%': {
            left: '-150%',
            width: '100%'
          },
          '100%': {
            left: '100%',
            width: '10%'
          }
        }
      },
      animation: {
        'spin-base': 'spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
        'linear-loader': 'linear-loader 1.5s ease-in infinite'
      }
    }
  },
  plugins: []
};
