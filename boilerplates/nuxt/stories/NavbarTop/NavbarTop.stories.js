
import NavbarTop from '../../components/NavbarTop/NavbarTop.vue'
import NavbarTopCounter from '../../components/NavbarTop/NavbarTopCounter.vue'
import NavbarTopBranded from '../../components/NavbarTop/NavbarTopBranded.vue'
import NavbarTopBrandedCounter from '../../components/NavbarTop/NavbarTopBrandedCounter.vue'

export default {
  title: 'SFUI Components/NavbarTop',
  component: NavbarTop,
  parameters: {
    docs: {
      description: {
        component:
          'The Navbar Top component. [link to component docs on the page]'
      }
    },
    layout: 'fullscreen'
  },
  argTypes: {
    logo: {
      table: {
        category: 'Slots',
        type: {
          summary: null
        }
      },
      description: 'Use this slot to place content in place of default logo'
    },
    menu: {
      table: {
        category: 'Slots',
        type: {
          summary: null
        }
      },
      description: 'Use this slot to place content in place of default navigation'
    },
    search: {
      table: {
        category: 'Slots',
        type: {
          summary: null
        }
      },
      description: 'Use this slot to place content in place of default search'
    },
    icons: {
      table: {
        category: 'Slots',
        type: {
          summary: null
        }
      },
      description: 'Use this slot to place content inside default icons'
    },
  }
}

const Template = () => ({
  components: { NavbarTop },
  template: `
    <NavbarTop />
    `
});

export const Base = Template.bind({});

const NavbarTopWithCounter = () => ({
  components: { NavbarTopCounter },
  template: `
    <NavbarTopCounter />
    `
});

export const WithCounter = NavbarTopWithCounter.bind({});

const NavbarBranded = () => ({
  components: { NavbarTopBranded },
  template: `
    <NavbarTopBranded />
    `
});

export const Branded = NavbarBranded.bind({});

const NavbarBrandedWithCounter = () => ({
  components: { NavbarTopBrandedCounter },
  template: `
    <NavbarTopBrandedCounter />
    `
});

export const BrandedCounter = NavbarBrandedWithCounter.bind({});
