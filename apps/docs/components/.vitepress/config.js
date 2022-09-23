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
        text: 'Custom Scripts',
        link: '/custom-scripts',
        items: [
          { text: 'createIcons', link: '/custom-scripts/createIcons' },
        ]
      },
      {
        text: 'Components',
        link: '/components',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Search', link: '/components/search' },
          { text: 'Counter', link: '/components/counter' },
          { text: 'Slider', link: '/components/slider' },
          { text: 'NavBarTop', link: '/components/navbartop' },
          { text: 'Alert', link: '/components/alert' },
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Breadcrumbs', link: '/components/breadcrumbs' },
          { text: 'Button', link: '/components/button' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'ChipsFilter', link: '/components/chipsfilter' },
          { text: 'ChipsInput', link: '/components/chipsinput' },
          { text: 'Divider', link: '/components/divider' },
          { text: 'Icon', link: '/components/icon' },
          { text: 'IconBase', link: '/components/iconBase' },
          { text: 'Sheet', link: '/components/sheet' },
          { text: 'Spinner', link: '/components/spinner' },
          { text: 'Rating', link: '/components/rating' },
          { text: 'RatingButton', link: '/components/ratingbutton' },
          { text: 'Tag', link: '/components/tag' },
          { text: 'Tooltip', link: '/components/tooltip' },
          { text: 'Overlay', link: '/components/overlay' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Select', link: '/components/select' },
          { text: 'Sheet', link: '/components/sheet' },
          { text: 'Spinner', link: '/components/spinner' },
          { text: 'Footer', link: '/components/footer' },
          { text: 'Gallery', link: '/components/gallery' },
        ].sort((a, b) => a.text.localeCompare(b.text)),
      },
      {
        text: 'Changelog',
        link: '/changelog',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '0.0.1', link: '/changelog/0.0.1' }
        ]
      }
    ],
    editLink: {
      pattern: 'https://github.com/vuestorefront/sfui2/edit/develop/docs/:path',
      text: 'Edit this page on GitHub'
    }
  }
}
