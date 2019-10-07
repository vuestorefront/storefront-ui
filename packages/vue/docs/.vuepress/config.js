module.exports = {
  title: 'Storefront UI',
  description: 'Customizable and performant Vue.js UI library for eCommerce',
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "https://divante.com/open-graph/favicons_storefrontui/sfui_favicon-32x32.png"}],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Customization', link: '/customization' },
      { text: 'Storybook', link: 'http://storybook.storefrontui.io' },
      { text: 'GitHub', link: 'https://github.com/DivanteLtd/storefront-ui' }
    ],
    sidebarDepth: 2,
    sidebar: [
      ['/introduction', 'Introduction'],
      ['/getting-started', 'Getting started'],
      ['/customization', 'Customization'],
      ['/meet-the-team', 'Meet the core team'],
      {
        title: 'Components [WIP]',
        collapsable: false,
        children: [
          ['/components/arrow', 'Arrow'],
          ['/components/button', 'Button'],
        ],
      },
      {
        title: 'Contributing Guide',
        collapsable: false,
        children: [
          ['/contributing/become-a-contributor', 'Become a contributor'],
          ['/contributing/github-guidelines', 'Working with Github'],
          ['/contributing/coding-guidelines', 'Coding guidelines'],
          ['/contributing/creating-new-component', 'Create/Edit Component'],
          ['/contributing/working-with-designs', 'Working With Designs'],
          ['/contributing/documentation-guidelines', 'Documetation guidelines'],
          ['/contributing/issue-report-guidelines', 'How to report an issue'],
        ],
      },
    ]
  }
}
