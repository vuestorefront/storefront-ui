
import SfBreadcrumbs from "../../components/SfBreadcrumbs/SfBreadcrumbs.vue";

export default {
  title: "SFUI Components/Breadcrumbs",
  component: SfBreadcrumbs,
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
  components: { SfBreadcrumbs },
  template: `
    <SfBreadcrumbs />
    `
});

export const Common = Template.bind({});