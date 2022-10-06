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
          { text: 'RadioGroup', link: '/components/radiogroup' },
          { text: 'Radio', link: '/components/radio' },
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
          { text: 'Counter', link: '/components/counter' },
          { text: 'Divider', link: '/components/divider' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Footer', link: '/components/footer' },
          { text: 'Gallery', link: '/components/gallery' },
          { text: 'Icon', link: '/components/icon' },
          { text: 'IconBase', link: '/components/iconBase' },
          { text: 'ListItemMenu', link: '/components/listitemmenu' },
          { text: 'Overlay', link: '/components/overlay' },
          { text: 'Rating', link: '/components/rating' },
          { text: 'RatingButton', link: '/components/ratingbutton' },
          { text: 'Search', link: '/components/search' },
          { text: 'Slider', link: '/components/slider' },
          { text: 'Spinner', link: '/components/spinner' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Sheet', link: '/components/sheet' },
          { text: 'Select', link: '/components/select' },
          { text: 'Sheet', link: '/components/sheet' },
          { text: 'Spinner', link: '/components/spinner' },
          { text: 'Tag', link: '/components/tag' },
          { text: 'Tooltip', link: '/components/tooltip' },
          { text: 'NavbarBottom', link: '/components/navbarbottom' },
          { text: 'ProductCardVertical', link: '/components/productCardVertical' },
          { text: 'QuantitySelector', link: '/components/quantityselector' },
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
