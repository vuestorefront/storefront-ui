
import BreadcrumbsBase from "../../components/Breadcrumbs/BreadcrumbsBase.vue";

export default {
  title: "SFUI Components/Breadcrumbs",
  component: BreadcrumbsBase,
  parameters: {
    docs: {
      description: {
        component:
          "The breadcrumbs component. [link to component docs on the page]",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { BreadcrumbsBase },
  template: `
    <BreadcrumbsBase />
    `
});

export const Common = Template.bind({});