
import BreadcrumbsBase from '../../components/Breadcrumbs/BreadcrumbsBase.vue';

export default {
  title: 'SFUI Components/Breadcrumbs',
  component: BreadcrumbsBase,
  parameters: {
    docs: {
      description: {
        component:
          'The breadcrumbs component. [link to component docs on the page]'
      }
    }
  },
  argTypes: {
    breadcrumbs: {
      control: 'object',
      defaultValue: [],
      description: 'Array of objects. Objects need to have `name` and `link` keys'
    },
    required: {
      control: 'boolean',
      table: {
        category: 'Props',
        defaultValue: {
          summary: false
        }
      },
      defaultValue: false,
      description: 'Visibility of home icon'
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { BreadcrumbsBase },
  props: Object.keys(argTypes),
  template: `
    <BreadcrumbsBase :with-icon="false" :breadcrumbs="breadcrumbs" />
    `
});

export const Base = Template.bind({});

Base.args = {
  breadcrumbs: [
    { name: 'Home', link: '/' },
    { name: 'Electronics', link: '/' },
    { name: 'iPad & Tablets', link: '/' },
    { name: 'Apple iPad Accessories', link: '/' },
    { name: 'iPad Keyboards', link: '/' }
  ]
};

const BreadcrumbsIcon = (args, { argTypes }) => ({
  components: { BreadcrumbsBase },
  props: Object.keys(argTypes),
  template: `
    <BreadcrumbsBase :with-icon="true" :breadcrumbs="breadcrumbs" />
    `
});

export const WithIcon = BreadcrumbsIcon.bind({});

WithIcon.args = {
  breadcrumbs: [
    { name: 'Electronics', link: '/' },
    { name: 'iPad & Tablets', link: '/' },
    { name: 'Apple iPad Accessories', link: '/' },
    { name: 'iPad Keyboards', link: '/' }
  ]
};
