module.exports = {
  title: 'Storefront UI',
  description: 'Customizable and performant Vue.js UI library for eCommerce',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Customization', link: '/customization' },
      { text: 'Storybook', link: 'http://storybook.storefrontui.io' },
      { text: 'GitHub', link: 'https://github.com/DivanteLtd/storefront-ui' }
    ],
    sidebar: [
      ['/introduction', 'Introduction'],
      ['/customization', 'Customization'],
      ['/meet-the-team', 'Meet the core team'],
      {
        title: 'Contribution Guide',
        collapsable: false,
        children: [
          ['/contributing/getting-started', 'How to contribute'],
          ['/contributing/component-rules', 'Component Rules'],
          ['/contributing/working-with-designs', 'Working With Designs'],
          ['/contributing/creating-new-component', 'Create/Edit Component'],
        ],
      },

    ]
  }
}
