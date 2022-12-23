const components = require('../utils/components.json');

const DOCS_EXAMPLES_REACT = process.env.VITE_DOCS_EXAMPLES_REACT;
const DOCS_EXAMPLES_VUE = process.env.VITE_DOCS_EXAMPLES_VUE;

module.exports = {
  title: `Storefront UI`,
  base: process.env.VITE_DOCS_BASEPATH ?? '/',
  description: `Documentation for the Storefront UI`,
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  patterns: ['**/*.md', '**/*.vue', '!components/**/*.md'], // ignore components folder
  themeConfig: {
    DOCS_EXAMPLES_REACT,
    DOCS_EXAMPLES_VUE,
    title: 'Storefront UI',
    repo: 'https://github.com/vuestorefront/sfui2',
    docsRepoPath: 'https://github.com/vuestorefront/sfui2/tree/main/apps/docs/components/', // used to generate direct edit links on docs pages.
    secondaryNav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Components', link: '/components/', match: '(react|vue|components)' },
    ],
    sidebar: {
      '/getting-started/': [
        {
          title: 'Getting Started',
          collapsable: true,
          children: [['/getting-started/', 'Setup']],
        },
      ],
      '/react/': [
        {
          title: 'Components',
          collapsable: true,
          children: components.react.map((c) => [`/react/components/${c.replace('Vsf', '').toLowerCase()}`, c]),
        },
      ],
      '/vue/': [
        {
          title: 'Components',
          collapsable: true,
          children: components.vue.map((c) => [`/vue/components/${c.replace('Vsf', '').toLowerCase()}`, c]),
        },
      ],
    },
  },
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
  },
};
