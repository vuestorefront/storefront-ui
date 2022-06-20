import { SfBreadcrumbs } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Breadcrumbs",
  component: SfBreadcrumbs,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "breadcrumbs-list-item-before-padding": {
        value: "0 var(--spacer-sm)",
        control: "text",
      },
      "breadcrumbs-list-item-seperator": { value: '"|"', control: "text" },
      "breadcrumbs-list-item-before-color": {
        value: "var(--c-text-muted)",
        control: "text",
      },
      "breadcrumbs-font": { value: "", control: "text" },
      "breadcrumbs-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "breadcrumbs-font-size": {
        value: "var(--font-size--xs)",
        control: "text",
      },
      "breadcrumbs-font-line-height": { value: "1.6", control: "text" },
      "breadcrumbs-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "link-color": {
        value: "var(--c-text-muted)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "link-text-decoration": {
        value: "none",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
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
    current: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Custom markup for current page (binds `breadcrumb` object)",
    },
    link: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Custom markup for previous pages (binds `breadcrumb` object)",
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
