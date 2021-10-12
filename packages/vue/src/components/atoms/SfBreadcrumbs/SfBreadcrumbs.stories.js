import { SfBreadcrumbs } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Breadcrumbs",
  component: SfBreadcrumbs,
  parameters: {
    docs: {
      description: {
        component:
          "The component which renders a breadcrumb with router links for indicating the level of navigation the user is currently in. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    breadcrumbs: {
      control: "object",
      table: {
        category: "Props",
      },
      description:
        "List of breadcrumbs (array of nested objects: `[ { text, route } ]`)",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfBreadcrumbs },
  props: Object.keys(argTypes),
  template: `<SfBreadcrumbs :breadcrumbs="breadcrumbs" />`,
});

export const Common = Template.bind({});

Common.args = {
  breadcrumbs: [
    { text: "Home", link: "#" },
    { text: "Category", link: "#" },
    { text: "Pants", link: "#" },
  ],
};

export const WithLinkSlot = (args, { argTypes }) => ({
  components: { SfBreadcrumbs },
  props: Object.keys(argTypes),
  template: `
  <SfBreadcrumbs
    :breadcrumbs="breadcrumbs">
    <template #link="{breadcrumb, go}">
      <span style="text-transform: lowercase">'{{breadcrumb.text}}'</span>
    </template>
  </SfBreadcrumbs>`,
});

WithLinkSlot.args = { ...Common.args };

export const WithCurrentSlot = (args, { argTypes }) => ({
  components: { SfBreadcrumbs },
  props: Object.keys(argTypes),
  template: `
  <SfBreadcrumbs
    :breadcrumbs="breadcrumbs">
    <template #current="{breadcrumb}">
      <span style="text-transform: uppercase">"{{breadcrumb.text}}"</span>
    </template>
  </SfBreadcrumbs>`,
});

WithCurrentSlot.args = { ...Common.args };
