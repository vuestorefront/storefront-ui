const components = require('../utils/components.json');
const { generateComponentPath } = require('./utils/path.util');

const DOCS_EXAMPLES_REACT = process.env.VITE_DOCS_EXAMPLES_REACT;
const DOCS_EXAMPLES_VUE = process.env.VITE_DOCS_EXAMPLES_VUE;
const FIGMA_URL = 'https://www.figma.com/file/ko7VoZYxnInYeJJmsnILHU/SFUI-2-%7C-Design-System-(public-RC)';

const convertComponentPathsToLinks = (paths, slug) =>
  paths.map((c) => [generateComponentPath(slug, c), c.replace('Vsf', '')]);
module.exports = {
  title: `Storefront UI`,
  base: process.env.VITE_DOCS_BASEPATH ?? '/',
  description: `Documentation for the Storefront UI`,
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  patterns: ['**/*.md', '**/*.vue', '!components/**/*.md'], // ignore components folder
  markdown: {
    extractHeaders: ['h1', 'h2', 'h3'],
  },
  themeConfig: {
    DOCS_EXAMPLES_REACT,
    DOCS_EXAMPLES_VUE,
    FIGMA_URL,
    title: 'Storefront UI',
    repo: 'https://github.com/vuestorefront/sfui2',
    docsRepoPath: 'https://github.com/vuestorefront/sfui2/tree/main/apps/docs/components/', // used to generate direct edit links on docs pages.
    secondaryNav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      {
        text: 'Components',
        match: '(react|vue|components)',
        children: [
          { text: 'React', link: '/react/components' },
          { text: 'Vue', link: '/vue/components' },
        ],
      },
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
          collapsable: false,
          children: convertComponentPathsToLinks(components.react, 'react'),
        },
      ],
      '/vue/': [
        {
          title: 'Components',
          collapsable: false,
          children: convertComponentPathsToLinks(components.vue, 'vue'),
        },
      ],
    },
  },
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
  },
};
