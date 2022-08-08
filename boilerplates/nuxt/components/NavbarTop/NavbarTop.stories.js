import NavbarTop from './NavbarTop/NavbarTop.vue';
import NavbarTopCounter from './NavbarTopCounter/NavbarTopCounter.vue';
import NavbarTopBranded from './NavbarTopBranded/NavbarTopBranded.vue';
import NavbarTopBrandedCounter from './NavbarTopBrandedCounter/NavbarTopBrandedCounter.vue';

export default {
  title: 'SFUI Components/NavbarTop',
  component: NavbarTop,
  parameters: {
    docs: {
      description: {
        component:
          'The Navbar Top component. [link to component docs on the page]',
      },
    },
    layout: 'fullscreen',
  },
  argTypes: {
    searchDisabled: {
      control: 'boolean',
      defaultValue: false,
      table: {
        category: 'Props',
      },
      description: 'Disables search.',
    },
    searchValue: {
      control: 'text',
      defaultValue: '',
      table: {
        category: 'Props',
        defaultValue: {
          summary: '',
        },
      },
      description: 'Value for search',
    },
    logo: {
      table: {
        category: 'Slots',
        type: {
          summary: null,
        },
      },
      description: 'Use this slot to place content in place of default logo',
    },
    menu: {
      table: {
        category: 'Slots',
        type: {
          summary: null,
        },
      },
      description: 'Use this slot to place content in place of default navigation',
    },
    search: {
      table: {
        category: 'Slots',
        type: {
          summary: null,
        },
      },
      description: 'Use this slot to place content in place of default search',
    },
    icons: {
      table: {
        category: 'Slots',
        type: {
          summary: null,
        },
      },
      description: 'Use this slot to place content inside default icons',
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { NavbarTop },
  props: Object.keys(argTypes),
  template: `
    <NavbarTop :searchDisabled="searchDisabled" :searchValue="searchValue" />
    `,
});

export const Base = Template.bind({});

const NavbarTopWithCounter = (args, { argTypes }) => ({
  components: { NavbarTopCounter },
  props: Object.keys(argTypes),
  template: `
    <NavbarTopCounter :searchDisabled="searchDisabled" :searchValue="searchValue" />
    `,
});

export const WithCounter = NavbarTopWithCounter.bind({});

const NavbarBranded = (args, { argTypes }) => ({
  components: { NavbarTopBranded },
  props: Object.keys(argTypes),
  template: `
    <NavbarTopBranded :searchDisabled="searchDisabled" :searchValue="searchValue" />
    `,
});

export const Branded = NavbarBranded.bind({});

const NavbarBrandedWithCounter = (args, { argTypes }) => ({
  components: { NavbarTopBrandedCounter },
  props: Object.keys(argTypes),
  template: `
    <NavbarTopBrandedCounter :searchDisabled="searchDisabled" :searchValue="searchValue" />
    `,
});

export const BrandedCounter = NavbarBrandedWithCounter.bind({});
