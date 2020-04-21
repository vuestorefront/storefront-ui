module.exports = {
  title: 'Storefront UI',
  description: 'Customizable and performant Vue.js UI library for eCommerce',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href:
          'https://divante.com/open-graph/favicons_storefrontui/sfui_favicon-32x32.png',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Customization', link: '/customization' },
      { text: 'Storybook', link: 'http://storybook.storefrontui.io' },
      { text: 'GitHub', link: 'https://github.com/DivanteLtd/storefront-ui' },
    ],
    sidebarDepth: 2,
    sidebar: [
      ['/introduction', 'Introduction'],
      ['/getting-started', 'Getting started'],
      ['/customization', 'Customization'],
      ['/migration-guide', 'Migration Guide'],
      ['/meet-the-team', 'Meet the core team'],
      {
        title: 'Contributing Guide',
        collapsable: false,
        children: [
          ['/contributing/become-a-contributor', 'Become a contributor'],
          ['/contributing/github-guidelines', 'Working with Github'],
          ['/contributing/coding-guidelines', 'Coding guidelines'],
          ['/contributing/branching-guidelines', 'Branching guidelines'],
          ['/contributing/creating-new-component', 'Create/Edit Component'],
          [
            '/contributing/documentation-guidelines',
            'Documentation guidelines',
          ],
          ['/contributing/issue-report-guidelines', 'How to report an issue'],
        ],
      },
      {
        title: 'Styles & Designs',
        collapsable: false,
        children: [
          ['/design/color-palette', 'Colors'],
          ['/design/sizes', 'Sizes'],
          ['/design/working-with-designs', 'Working with Designs'],
        ],
      },
      {
        title: 'Components [WIP]',
        collapsable: false,
        children: [                                                    
// @components-docs-start (keep comment and indentation for auto-generated component docs)
{ 
 title: "Atoms",
 children:  [
 
["/components/Arrow", "Arrow"],
["/components/Badge", "Badge"],
["/components/Breadcrumbs", "Breadcrumbs"],
["/components/Bullets", "Bullets"],
["/components/Button", "Button"],
["/components/Checkbox", "Checkbox"],
["/components/Chevron", "Chevron"],
["/components/CircleIcon", "Circle Icon"],
["/components/Color", "Color"],
["/components/Divider", "Divider"],
["/components/Heading", "Heading"],
["/components/Icon", "Icon"],
["/components/Image", "Image"],
["/components/Input", "Input"],
["/components/Loader", "Loader"],
["/components/Overlay", "Overlay"],
["/components/Price", "Price"],
["/components/Property", "Property"],
["/components/QuantitySelector", "Quantity Selector"],
["/components/Rating", "Rating"]]
 },
{ 
 title: "Molecules",
 children:  [
 
["/components/AddToCart", "Add To Cart"],
["/components/Alert", "Alert"],
["/components/Banner", "Banner"],
["/components/Bar", "Bar"],
["/components/CallToAction", "Call To Action"],
["/components/Characteristic", "Characteristic"],
["/components/Dropdown", "Dropdown"],
["/components/Filter", "Filter"],
["/components/Gallery", "Gallery"],
["/components/MenuItem", "Menu Item"],
["/components/Modal", "Modal"],
["/components/Notification", "Notification"],
["/components/Pagination", "Pagination"],
["/components/ProductOption", "Product Option"],
["/components/Radio", "Radio"],
["/components/Review", "Review"],
["/components/Scrollable", "Scrollable"],
["/components/SearchBar", "Search Bar"],
["/components/Section", "Section"],
["/components/Select", "Select"],
["/components/SlidingSection", "Sliding Section"],
["/components/Steps", "Steps"],
["/components/Sticky", "Sticky"]]
 },
{ 
 title: "Organisms",
 children:  [
 
["/components/Accordion", "Accordion"],
["/components/BannerGrid", "Banner Grid"],
["/components/BottomNavigation", "Bottom Navigation"],
["/components/Carousel", "Carousel"],
["/components/CollectedProduct", "Collected Product"],
["/components/ContentPages", "Content Pages"],
["/components/Footer", "Footer"],
["/components/GroupedProduct", "Grouped Product"],
["/components/Header", "Header"],
["/components/Hero", "Hero"],
["/components/List", "List"],
["/components/MegaMenu", "Mega Menu"],
["/components/ProductCard", "Product Card"],
["/components/ProductCardHorizontal", "Product Card Horizontal"],
["/components/Sidebar", "Sidebar"],
["/components/StoreLocator", "Store Locator"],
["/components/Table", "Table"],
["/components/Tabs", "Tabs"],
["/components/TopBar", "Top Bar"]]
 }// @components-docs-end
        ],
      },
    ],
  },
};
