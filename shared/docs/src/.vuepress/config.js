const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Storefront UI Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  configureWebpack: (config) => {
    // Add support for webp images
    config.module.rules.push({
      test: /\.(webp)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/img/[name].[hash:8].[ext]',
          },
        },
      ],
    });

    // Fix image loading. Ref: https://github.com/vuejs/vue-loader/issues/1612#issuecomment-559366730
    config.module.rules = config.module.rules.map((rule) => {
      rule.use =
        rule.use &&
        rule.use.map((useRule) => {
          if (useRule.loader === 'url-loader') {
            useRule.options.esModule = false;
          }

          return useRule;
        });

      return rule;
    });
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */

  themeConfig: {
    repo: 'https://github.com/vuestorefront/sfui2',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Edit this page',
    lastUpdated: false,
    logo: '/assets/sfui_logo.png',
    smoothScroll: true,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Getting started',
        link: '/getting-started/setup'
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Changelog',
        link: '/changelog/0.0.1',
      },
      {
        text: 'Discord',
        link: 'https://discord.com/channels/770285988244750366/870278441650487316/',
      },
    ],
    sidebar: {
      '/': [
        {
          title: 'Getting started',
          collapsable: false,
          children: [
            ['/getting-started/setup', 'Setup'],
          ]
        },
        {
          title: 'Guide',
          collapsable: false,
          children: []
        },
        {
          title: 'Changelog',
          collapsable: true,
          children: [
            ['/changelog/0.0.1', '0.0.1'],
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
