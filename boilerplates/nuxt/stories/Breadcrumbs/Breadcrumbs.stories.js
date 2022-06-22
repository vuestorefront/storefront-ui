
import BreadcrumbsBase from '../../components/Breadcrumbs/BreadcrumbsBase.vue';
import BreadcrumbsWithIcon from '../../components/Breadcrumbs/BreadcrumbsWithIcon.vue';

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
    }
  }
};

const Template = (args, { argTypes }) => ({
  components: { BreadcrumbsBase },
  props: Object.keys(argTypes),
  template: `
    <BreadcrumbsBase :breadcrumbs="breadcrumbs" />
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
  components: { BreadcrumbsWithIcon },
  props: Object.keys(argTypes),
  template: `
    <BreadcrumbsWithIcon :breadcrumbs="breadcrumbs" />
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
