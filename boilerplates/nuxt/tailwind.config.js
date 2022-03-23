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
      }
    }
  },
  plugins: []
}
