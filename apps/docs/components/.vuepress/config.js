const components = require('../utils/components.json');
const showcases = require('../utils/blocks.json');
const hooks = require('../utils/hooks.json');
const { generateComponentPath } = require('./utils/path.util');

const DOCS_EXAMPLES_REACT_PATH = process.env.VITE_DOCS_EXAMPLES_REACT_PATH;
const DOCS_EXAMPLES_VUE_PATH = process.env.VITE_DOCS_EXAMPLES_VUE_PATH;
const FIGMA_URL = 'https://www.figma.com/file/ko7VoZYxnInYeJJmsnILHU/SFUI-2-%7C-Design-System-(public-RC)';

const convertComponentPathsToLinks = (paths, slug, type) =>
  paths.map((c) => [generateComponentPath(slug, c, type), c.replace('Sf', '')]);

const reactMenu = [
  {
    title: 'Getting Started',
    collapsable: true,
    children: [['/react/getting-started', 'Installation']],
  },
  {
    title: 'Customization',
    collapsable: true,
    children: [
      ['/react/customization/theming', 'Theming'],
      ['/react/customization/overriding-default-styles', 'Overriding Default Styles'],
      ['/react/customization/typography', 'Typography'],
    ],
  },
  {
    title: 'Base Components',
    collapsable: true,
    children: [
      ['/react/components', 'Overview'],
      ...convertComponentPathsToLinks(components.react, 'react', 'components'),
    ],
  },
  {
    title: 'Hooks',
    collapsable: true,
    children: convertComponentPathsToLinks(hooks.react, 'react', 'hooks'),
  },
];

const vueMenu = [
  {
    title: 'Getting Started',
    collapsable: true,
    children: [['/vue/getting-started', 'Installation']],
  },
  {
    title: 'Customization',
    collapsable: true,
    children: [
      ['/vue/customization/theming', 'Theming'],
      ['/vue/customization/overriding-default-styles', 'Overriding Default Styles'],
      ['/vue/customization/typography', 'Typography'],
    ],
  },
  {
    title: 'Base Components',
    collapsable: true,
    children: [['/vue/components', 'Overview'], ...convertComponentPathsToLinks(components.vue, 'vue', 'components')],
  },

  {
    title: 'Composables',
    collapsable: true,
    children: convertComponentPathsToLinks(hooks.vue, 'vue', 'hooks'),
  },
];

module.exports = {
  title: `Storefront UI`,
  base: process.env.VITE_DOCS_BASEPATH ?? '/',
  description: `Documentation for the Storefront UI`,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  patterns: ['**/*.md', '**/*.vue', '!components/**/*.md', '!blocks/**/*.md', '!hooks/**/*.md'], // ignore components folder
  patterns: [
    '**/*.md',
    '**/*.vue',
    '!components/**/*.md',
    '!blocks/**/*.md',
    '!hooks/**/*.md',
    '!customization/**/*.md',
  ], // ignore components folder
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
    secondaryNav: {
      '/react/': [
        { text: 'Getting Started', link: '/react/getting-started' },
        { text: 'Docs', link: '/react/components' },
        { text: 'Blocks', link: '/react/blocks' },
      ],
      '/vue/': [
        { text: 'Getting Started', link: '/vue/getting-started' },
        { text: 'Docs', link: '/vue/components' },
        { text: 'Blocks', link: '/vue/blocks' },
      ],
      '/': [
        { text: 'Getting Started', link: '/vue/getting-started' },
        { text: 'Docs', link: '/vue/components' },
        { text: 'Blocks', link: '/vue/blocks' },
      ],
    },
    mobileMenu: [
      {
        title: 'Vue',
        collapsable: true,
        children: vueMenu,
      },
      {
        title: 'React',
        collapsable: true,
        children: reactMenu,
      },
    ],
    sidebar: {
      '/react/blocks': [
        {
          title: 'Blocks',
          collapsable: false,
          children: convertComponentPathsToLinks(showcases.react, 'react', 'blocks'),
        },
      ],
      '/vue/blocks': [
        {
          title: 'Blocks',
          collapsable: false,
          children: convertComponentPathsToLinks(showcases.vue, 'vue', 'blocks'),
        },
      ],
      '/react/': reactMenu,
      '/vue/': vueMenu,
    },
  },
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
  },
};
