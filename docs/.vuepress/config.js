module.exports = {
  title: 'Storefront UI',
  description: 'Highly customizable Vue.js UI framework for eCommerce',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Customization', link: '/customization' },
      { text: 'Storybook', link: 'http://storybook.storefrontui.io' },
      { text: 'Component Rules', link: '/component-rules' },
      { text: 'GitHub', link: 'https://github.com/DivanteLtd/storefront-ui' }
    ],
    sidebar: [
      ['/introduction', 'Introduction'],
      ['/customization', 'Customization'],
      ['/component-rules', 'Component Rules'],
      ['/creating-new-component', 'Creating New Component'],
      ['/working-with-designs', 'Working With Designs'],
      ['/working-with-alpaca', 'Working With Alpaca']
    ]
  }
}
