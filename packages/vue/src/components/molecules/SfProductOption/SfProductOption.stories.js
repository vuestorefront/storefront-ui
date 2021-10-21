import { SfProductOption } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/ProductOption",
  component: SfProductOption,
  parameters: {
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
