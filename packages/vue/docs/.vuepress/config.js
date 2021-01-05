const { version } = require("../../package.json");

module.exports = {
  title: "Storefront UI",
  description: "Customizable and performant Vue.js UI library for eCommerce",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href:
          "https://divante.com/open-graph/favicons_storefrontui/sfui_favicon-32x32.png",
      },
    ],
  ],
  themeConfig: {
    logo: "/logo.png",
    version: version,
    repo: "DivanteLtd/storefront-ui",
    docsDir: "packages/vue/docs",
    editLinks: true,
    editLinkText: "Help us improve this page ❤️",
    nav: [
      { text: `v${version}`, link: `/releases/v${version}` },
      { text: "Community", link: "https://discord.gg/GS8hqFS" },
      { text: "Storybook", link: "http://storybook.storefrontui.io" },
      { text: "GitHub", link: "https://github.com/DivanteLtd/storefront-ui" },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: "Introduction",
        collapsable: true,
        children: [
          ["/introduction/why-storefrontui", "Why Storefront UI?"],
          ["/introduction/storybook", "Storybook"],
          ["/introduction/showcases", "Showcases"],
          ["/introduction/meet-the-team", "Meet the core team"],
        ],
      },
      {
        title: "Releases",
        collapsable: true,
        children: [
          ["/releases/v0.9.2", "v0.9.2"],
          ["/releases/v0.9.1", "v0.9.1"],
          ["/releases/v0.9.0", "v0.9.0"],
        ],
      },
      ["/faq", "Frequently Asked Questions"],
    ],
  },
};
