const components = require('../utils/components.json');
const showcases = require('../utils/showcases.json');
const hooks = require('../utils/hooks.json');
const { generateComponentPath } = require('./utils/path.util');

const DOCS_EXAMPLES_REACT_PATH = process.env.VITE_DOCS_EXAMPLES_REACT_PATH;
const DOCS_EXAMPLES_VUE_PATH = process.env.VITE_DOCS_EXAMPLES_VUE_PATH;
const FIGMA_URL = 'https://www.figma.com/file/ko7VoZYxnInYeJJmsnILHU/SFUI-2-%7C-Design-System-(public-RC)';

const convertComponentPathsToLinks = (paths, slug, type) =>
  paths.map((c) => [generateComponentPath(slug, c, type), c.replace('Vsf', '')]);
module.exports = {
  title: `Storefront UI`,
  base: process.env.VITE_DOCS_BASEPATH ?? '/',
  description: `Documentation for the Storefront UI`,
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  patterns: ['**/*.md', '**/*.vue', '!components/**/*.md', '!showcases/**/*.md', '!hooks/**/*.md'], // ignore components folder
  markdown: {
    extractHeaders: ['h1', 'h2', 'h3'],
  },
  themeConfig: {
    DOCS_EXAMPLES_REACT_PATH,
    DOCS_EXAMPLES_VUE_PATH,
    FIGMA_URL,
    title: 'Storefront UI',
    repo: 'https://github.com/vuestorefront/sfui2',
    docsRepoPath: 'https://github.com/vuestorefront/sfui2/tree/main/apps/docs/components/', // used to generate direct edit links on docs pages.
    secondaryNav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      {
        text: 'Components',
        match: '(react|vue)/components',
        children: [
          { text: 'React', link: '/react/components.html' },
          { text: 'Vue', link: '/vue/components.html' },
        ],
      },
      {
        text: 'Hooks',
        match: '(react|vue)/hooks',
        children: [
          { text: 'React', link: '/react/hooks.html' },
          { text: 'Vue', link: '/vue/hooks.html' },
        ],
      },
      {
        text: 'Showcases',
        match: '(react|vue|)/showcases',
        children: [
          { text: 'React', link: '/react/showcases.html' },
          { text: 'Vue', link: '/vue/showcases.html' },
        ],
      },
      { text: 'Contributing', link: 'https://github.com/vuestorefront/sfui2/blob/main/CONTRIBUTING.md' },
    ],
    sidebar: {
      '/getting-started/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            ['/getting-started/react', 'React'],
            ['/getting-started/vue', 'Vue'],
          ],
        },
      ],
      '/react/components/': [
        {
          title: 'Components',
          collapsable: false,
          children: convertComponentPathsToLinks(components.react, 'react', 'components'),
        },
      ],
      '/vue/components/': [
        {
          title: 'Components',
          collapsable: false,
          children: convertComponentPathsToLinks(components.vue, 'vue', 'components'),
        },
      ],
      '/react/showcases/': [
        {
          title: 'Showcases',
          collapsable: false,
          children: convertComponentPathsToLinks(showcases.react, 'react', 'showcases'),
        },
      ],
      '/vue/showcases/': [
        {
          title: 'Showcases',
          collapsable: false,
          children: convertComponentPathsToLinks(showcases.vue, 'vue', 'showcases'),
        },
      ],
      '/react/hooks/': [
        {
          title: 'Hooks',
          collapsable: false,
          children: convertComponentPathsToLinks(hooks.react, 'react', 'hooks'),
        },
      ],
      '/vue/hooks/': [
        {
          title: 'Hooks',
          collapsable: false,
          children: convertComponentPathsToLinks(hooks.vue, 'vue', 'hooks'),
        },
      ],
    },
  },
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
  },
};
