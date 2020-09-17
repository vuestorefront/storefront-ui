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
      { text: 'Introduction', link: '/guide' },
      { text: 'Customization', link: '/customization' },
      { text: 'Storybook', link: 'http://storybook.storefrontui.io' },
      { text: 'GitHub', link: 'https://github.com/DivanteLtd/storefront-ui' }
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: 'Introduction',
        collapsable: false,
        children: [
          ['/guide', 'Beginner\'s Guide'],
          ['/getting-started', 'Getting started'],
          ['/import-stories', 'Import stories to your Storybook'],
          ['/customization', 'Customization'],
          ['/migration-guide', 'Migration Guide'],
          ['/pull-off-components', 'Pull off components'],
          ['/meet-the-team', 'Meet the core team'],
        ]
      },
      {
        title: 'Contributing Guide',
        collapsable: false,
        children: [
          ['/contributing/become-a-contributor', 'Become a contributor'],
          ['/contributing/github-guidelines', 'Working with Github'],
          ['/contributing/coding-guidelines', 'Coding guidelines'],
          ['/contributing/branching-guidelines', 'Branching guidelines'],
          ['/contributing/creating-new-component', 'Create/Edit Component'],
          ['/contributing/documentation-guidelines', 'Documentation guidelines'],
          ['/contributing/issue-report-guidelines', 'How to report an issue'],
        ],
      },
      {
        title: 'Styles & Designs',
        collapsable: false,
        children: [
          ['/design/color-palette', 'Colors'],
          ['/design/sizes', 'Sizes'],
          ['/design/working-with-designs', 'Working with Designs']
        ],
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
// @components-docs-start (keep comment and indentation for auto-generated component docs)
{ 
 title: "Atoms",
 collapsable: false,
 children:  [
["/components/arrow", "Arrow"],
["/components/badge", "Badge"],
["/components/breadcrumbs", "Breadcrumbs"],
["/components/bullets", "Bullets"],
["/components/button", "Button"],
["/components/chevron", "Chevron"],
["/components/circleicon", "Circle Icon"],
["/components/color", "Color"],
["/components/divider", "Divider"],
["/components/heading", "Heading"],
["/components/icon", "Icon"],
["/components/image", "Image"],
["/components/input", "Input"],
["/components/link", "Link"],
["/components/loader", "Loader"],
["/components/overlay", "Overlay"],
["/components/price", "Price"],
["/components/property", "Property"],
["/components/quantityselector", "Quantity Selector"],
["/components/rating", "Rating"],
["/components/textarea", "Textarea"]]
 },
{ 
 title: "Molecules",
 collapsable: false,
 children:  [
["/components/addtocart", "Add To Cart"],
["/components/alert", "Alert"],
["/components/banner", "Banner"],
["/components/bar", "Bar"],
["/components/bottommodal", "Bottom Modal"],
["/components/calltoaction", "Call To Action"],
["/components/characteristic", "Characteristic"],
["/components/checkbox", "Checkbox"],
["/components/colorpicker", "Color Picker"],
["/components/componentselect", "Component Select"],
["/components/dropdown", "Dropdown"],
["/components/filter", "Filter"],
["/components/gallery", "Gallery"],
["/components/menuitem", "Menu Item"],
["/components/modal", "Modal"],
["/components/notification", "Notification"],
["/components/pagination", "Pagination"],
["/components/productoption", "Product Option"],
["/components/radio", "Radio"],
["/components/review", "Review"],
["/components/scrollable", "Scrollable"],
["/components/searchbar", "Search Bar"],
["/components/section", "Section"],
["/components/select", "Select"],
["/components/slidingsection", "Sliding Section"],
["/components/steps", "Steps"],
["/components/sticky", "Sticky"]]
 },
{ 
 title: "Organisms",
 collapsable: false,
 children:  [
["/components/accordion", "Accordion"],
["/components/bannergrid", "Banner Grid"],
["/components/bottomnavigation", "Bottom Navigation"],
["/components/carousel", "Carousel"],
["/components/collectedproduct", "Collected Product"],
["/components/contentpages", "Content Pages"],
["/components/footer", "Footer"],
["/components/groupedproduct", "Grouped Product"],
["/components/header", "Header"],
["/components/hero", "Hero"],
["/components/list", "List"],
["/components/megamenu", "Mega Menu"],
["/components/productcard", "Product Card"],
["/components/productcardhorizontal", "Product Card Horizontal"],
["/components/sidebar", "Sidebar"],
["/components/storelocator", "Store Locator"],
["/components/table", "Table"],
["/components/tabs", "Tabs"],
["/components/topbar", "Top Bar"]]
 }// @components-docs-end
        ],
      },
    ]
  }
};
