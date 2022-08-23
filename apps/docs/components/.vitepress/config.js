export default {
  title: 'Storefront UI library',
  description: 'Lightning fast ecommerce library',
  themeConfig: {
    logo: '/assets/logo.svg',
    siteTitle: 'Storefront UI library',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components' },
      { text: 'Playground', link: '/playground' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuestorefront/sfui2' },
    ],
    sidebar: [
      { 
        text: 'Guide',
        link: '/guide/',
        items: []
      },
      {
        text: 'Getting started',
        link: '/getting-started/setup',
        items: []
      },
      {
        text: 'Components',
        link: '/components',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Alert', link: '/components/alert' },
          { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
        ]
      },
      {
        text: 'Changelog',
        link: '/changelog',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '0.0.1', link: '/changelog/0.0.1'}
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/vuestorefront/sfui2/edit/develop/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}