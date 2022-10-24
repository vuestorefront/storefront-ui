const glob = require("glob");
const path = require("path");
const vueFiles = glob.sync(
  "../../../packages/sfui/frameworks/vue/components/**/*.vue"
)
const reactFiles = glob.sync(
  "../../../packages/sfui/frameworks/react/components/**/*.tsx"
)
const docs = glob.sync(
  "./components/*.md"
)
const allVueComponents = vueFiles.map(file => path.basename(file).replace('.vue', '')).sort();
const allVueComponentsWithDocs = allVueComponents.filter(component => docs.find(item => component.replace('Vsf', '').toLowerCase() === path.basename(item).replace('.md', '')) )
const allReactComponents = reactFiles.map(file => path.basename(file).replace('.tsx', '')).sort();
const allReactComponentsWithDocs = allReactComponents.filter(component => docs.find(item => component.replace('Vsf', '').toLowerCase() === path.basename(item).replace('.md', '')))

const createComponentLink = (framework, componentName) => `/${framework}/${componentName}`;

export default {
  title: 'Storefront UI library',
  description: 'Lightning fast ecommerce library',
  themeConfig: {
    logo: '/assets/logo.svg',
    siteTitle: 'Storefront UI library',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'React', link: '/react/index' },
      { text: 'Vue', link: '/vue/index' },
      { text: 'Guide', link: '/guide/index' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuestorefront/sfui2' },
    ],
    sidebar: [
      {
        text: 'Guide',
        link: '/guide/index',
        items: []
      },
      {
        text: 'Getting started',
        link: '/getting-started/setup',
        items: [],
      },
      {
        text: 'Custom Scripts',
        link: '/custom-scripts',
        items: [{ text: 'createIcons', link: '/custom-scripts/createIcons' }],
      },
      {
        text: 'Vue',
        link: '/vue/index',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'components',
            link: '/vue/components/index',
            items: allVueComponentsWithDocs.map(component => ({ text: component, link: createComponentLink('vue/components', component.slice(3).toLowerCase()) }))
          }
        ]
      },
      {
        text: 'React',
        link: '/react/index',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'components',
            link: '/react/components/index',
            items: allReactComponentsWithDocs.map(component => ({ text: component, link: createComponentLink('react/components', component.slice(3).toLowerCase()) }))
          }
        ]
      },
      {
        text: 'Changelog',
        link: '/changelog',
        collapsible: true,
        collapsed: true,
        items: [{ text: '0.0.1', link: '/changelog/0.0.1' }],
      },
    ],
    editLink: {
      pattern: 'https://github.com/vuestorefront/sfui2/edit/develop/docs/:path',
      text: 'Edit this page on GitHub'
    },    
  }
}
