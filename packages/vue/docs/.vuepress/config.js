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
      {
        title: 'Contributing',
        collapsable: false,
        children: [
          ['/component-rules', 'Component Rules'],
          ['/creating-new-component', 'Creating New Component'],
          ['/working-with-designs', 'Working With Designs'],
          ['/working-with-alpaca', 'Working With Alpaca'],
        ],
      },

    ]
  }
}
