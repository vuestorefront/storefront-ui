import { SfProductOption } from "@storefront-ui/vue";
export default {
  title: "Components/Molecules/ProductOption",
  component: SfProductOption,
  decorators: [
    () => ({ template: "<div style='max-width: 300px'><story/></div>" }),
  ],
  argTypes: {
    label: {
      control: "text",
      description: "Label to assign to the product",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
    },
    color: {
      control: "color",
      description: "Product color",
      defaultValue: "",
      table: {
        category: "Props",
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
