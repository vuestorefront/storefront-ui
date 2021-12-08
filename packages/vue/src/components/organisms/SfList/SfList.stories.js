import { SfList, SfMenuItem } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/List",
  component: SfList,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "list-list-style": { value: "none", control: "text" },
      "list-padding": { value: "0", control: "text" },
      "list-margin": { value: "0", control: "text" },
      "list-item-margin": { value: "0", control: "text" },
      "list-item-padding": { value: "0", control: "text" },
      "list-item-color": { value: "var(--c-text)", control: "text" },
      "list-item-border": {
        value:
          "var(--list-item-border-style, solid) var(--list-item-border-color, var(--c-light))",
        control: "text",
      },
      "list-item-border-width": { value: "0", control: "text" },
      "list-item-font": { value: "", control: "text" },
      "list-item-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "list-item-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "list-item-font-line-height": { value: "1.4", control: "text" },
      "list-item-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Vertical list component. Built from main component - SfList and internal component - SfListItem.",
      },
    },
  },
  argTypes: {
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfList` component. Use this slot to pass list content",
    },
    "default*": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfListItem` component. Due to name conflict in storybook docs, slot name has been changed to the name with asterisk. Use this slot to place list item content",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfList },
  props: Object.keys(argTypes),
  data() {
    return {
      items: [
        { label: "All", count: "280" },
        { label: "Skirts", count: "11" },
        { label: "Dresses", count: "32" },
        { label: "Belts", count: "101" },
        { label: "Bag", count: "2" },
        { label: "Trainers", count: "22" },
        { label: "Sandals", count: "55" },
      ],
    };
  },
  template: `
  <SfList :style="{maxWidth: '186px'}">
    <SfListItem 
      v-for="item in items" 
      :key="item.label" 
      :style="{'--list-item-margin':'24px 0'}"
    >
      {{item.label}}: {{item.count}}
    </SfListItem>
  </SfList>`,
});

export const Common = Template.bind({});
Common.args = {};
