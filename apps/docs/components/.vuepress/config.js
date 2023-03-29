require('dotenv').config()
const components = require('../utils/components.json');
const showcases = require('../utils/blocks.json');
const hooks = require('../utils/hooks.json');
const { generateComponentPath } = require('./utils/path.util');

const DOCS_EXAMPLES_REACT_PATH = process.env.VITE_DOCS_EXAMPLES_REACT_PATH;
const DOCS_EXAMPLES_VUE_PATH = process.env.VITE_DOCS_EXAMPLES_VUE_PATH;
const FIGMA_URL =
  'https://www.figma.com/file/Y9mMfUVXAfH3qvUWrOAZa2/Storefront-UI-%7C-Design-Kit?node-id=20697-75059&t=cfzx4cpxb16BsXE8-0';
const GTAG = 'G-BL2CYW4NJ5';
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
  {
    title: 'Blocks',
    collapsable: true,
    children: [['/react/blocks', 'Overview'], ...convertComponentPathsToLinks(showcases.react, 'react', 'blocks')],
  },
  {
    title: 'Community',
    collapsable: true,
    children: [
      ['/react/migration', 'Migration'],
      ['https://github.com/vuestorefront/storefront-ui/blob/v2/CONTRIBUTING.md', 'Contributing'],
      ['https://github.com/vuestorefront/storefront-ui/blob/v2/CHANGELOG.md', 'Changelog'],
    ],
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
  {
    title: 'Blocks',
    collapsable: true,
    children: [['/vue/blocks', 'Overview'], ...convertComponentPathsToLinks(showcases.vue, 'vue', 'blocks')],
  },
  {
    title: 'Community',
    collapsable: true,
    children: [
      ['/vue/migration', 'Migration'],
      ['https://github.com/vuestorefront/storefront-ui/blob/v2/CONTRIBUTING.md', 'Contributing'],
      ['https://github.com/vuestorefront/storefront-ui/blob/v2/CHANGELOG.md', 'Changelog'],
    ],
  },
];

module.exports = {
  title: `Storefront UI`,
  base: process.env.VITE_DOCS_BASEPATH ?? '/',
  description: `Documentation for the Storefront UI`,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { async: true, src: `https://www.googletagmanager.com/gtag/js?id=G-${GTAG}` }],
    [
      'script',
      {},
      [
        `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GTAG}');`,
      ],
    ],
  ],
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
    repo: 'https://github.com/vuestorefront/storefront-ui',
    docsRepoPath: 'https://github.com/vuestorefront/storefront-ui/tree/v2/apps/docs/components/', // used to generate direct edit links on docs pages.
    secondaryNav: {
      '/react/': [
        { text: 'Getting Started', link: '/react/getting-started.html' },
        { text: 'Base Components', link: '/react/components.html' },
        { text: 'Blocks', link: '/react/blocks.html' },
      ],
      '/vue/': [
        { text: 'Getting Started', link: '/vue/getting-started.html' },
        { text: 'Base Components', link: '/vue/components.html' },
        { text: 'Blocks', link: '/vue/blocks.html' },
      ],
      '/': [
        { text: 'Getting Started', link: '/vue/getting-started.html' },
        { text: 'Base Components', link: '/vue/components.html' },
        { text: 'Blocks', link: '/vue/blocks.html' },
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
      '/react/': reactMenu,
      '/vue/': vueMenu,
    },
  },
  postcss: {
    plugins: [require('tailwindcss')('./tailwind.config.js'), require('autoprefixer')],
  },
};
