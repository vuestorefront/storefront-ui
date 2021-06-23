import { SfQuantitySelector } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/QuantitySelector",
  component: SfQuantitySelector,
  decorators: [
    () => ({ template: '<div style="max-width: 375px;"><story /></div>' }),
  ],
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-quantity-selector--secondary",
          "sf-quantity-selector--transparent",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    min: {
      control: "number",
      defaultValue: null,
      table: {
        category: "Props",
      },
    },
    max: {
      control: "number",
      defaultValue: null,
      table: {
        category: "Props",
      },
    },
    input: { action: "Quantity changed!", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfQuantitySelector },
  props: Object.keys(argTypes),
  data() {
    return {
      value: 1,
    };
  },
  template: `
  <SfQuantitySelector
    v-model="value"
    :disabled="disabled"
    :min="min"
    :max="max"
    aria-label="Quantity"
    :class="classes"
    @input="input"
  />`,
});

export const Common = Template.bind({});
