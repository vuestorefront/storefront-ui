module.exports = {
  title: 'Storefront UI',
  description: 'Highly customizable Vue.js UI framework for eCommerce',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Customization', link: '/customization' },
      { text: 'Storybook', link: 'https://storybook.storefrontui.io' },
      { text: 'Component Rules', link: '/component-rules' },
      { text: 'GitHub', link: 'https://github.com/DivanteLtd/storefront-ui' },
    ],
    sidebar: [
      ['/customization', 'Customization'],
      ['/component-rules', 'Component Rules'],
      ['/creating-new-components', 'Creating New Components'],
      ['/working-with-alpaca', 'Working With Alpaca'],
      ['/working-with-designs', 'Working With Designs']
    ]
  }
}
