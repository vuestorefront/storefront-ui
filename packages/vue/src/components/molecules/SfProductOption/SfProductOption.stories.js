import { SfProductOption } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/ProductOption",
  component: SfProductOption,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "product-option-font": { value: "", control: "text" },
      "product-option-font-weight": {
        value: "var(--font-weight--light)",
        control: "text",
      },
      "product-option-font-size": {
        value: "var(--font-size--sm)",
        control: "text",
      },
      "product-option-font-line-height": { value: "normal", control: "text" },
      "product-option-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "product-option-size": { value: "1.5rem", control: "text" },
      "product-option-color-margin": {
        value: "0 var(--spacer-sm) 0 0",
        control: "text",
      },
      "product-option-border": {
        value:
          "var(--product-option-border-style, solid) var(--product-option-border-color, var(--c-light))",
        control: "text",
      },
      "product-option-border-width": { value: "0", control: "text" },
      "product-option-border-radius": { value: "", control: "text" },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "Component with label used as part of product description. ",
      },
    },
  },
  decorators: [
    () => ({ template: "<div style='max-width: 300px'><story/></div>" }),
  ],
  argTypes: {
    label: {
      control: "text",
      description: "Label to assign to the product",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
    },
    color: {
      control: "color",
      description: "Product color, can be any CSS available property",
      defaultValue: "",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
    },
    "label*": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot `label`. Due to name conflict in storybook docs, slot name has been changed to the name with asterisk. Use this slot to replace label element",
    },
    "color*": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot `color`. Due to name conflict in storybook docs, slot name has been changed to the name with asterisk. Use this slot replace color element",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfProductOption },
  props: Object.keys(argTypes),
  template: `<SfProductOption :color="color" :label="label"/>`,
});

export const Common = Template.bind({});
Common.args = {
  color: "red",
  label: "Red",
};

export const UseColorSlot = (args, { argTypes }) => ({
  components: { SfProductOption },
  props: Object.keys(argTypes),
  template: `
  <SfProductOption
    :color="color"
    :label="label">
    <template #color="{color}">
      <div :style="{width: '20px', height:'20px', backgroundColor: color, borderRadius: '100%', marginRight: '10px'}"></div>
    </template>
  </SfProductOption>`,
});
UseColorSlot.args = { ...Common.args };

export const UseLabelSlot = (args, { argTypes }) => ({
  components: { SfProductOption },
  props: Object.keys(argTypes),
  template: `
  <SfProductOption
    :color="color"
    :label="label">
    <template #label="{label}">
      CUSTOM LABEL
    </template>
  </SfProductOption>`,
});
UseLabelSlot.args = { ...Common.args };
