import { SfBreadcrumbs } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Breadcrumbs",
  component: SfBreadcrumbs,
  argTypes: {
    breadcrumbs: {
      control: "object",
      table: {
        category: "Props",
      },
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
