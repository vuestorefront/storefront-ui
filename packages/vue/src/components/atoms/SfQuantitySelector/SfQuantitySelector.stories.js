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
  methods: {
    inputHandler(quantityValue) {
      this.value = quantityValue;
    },
  },
  template: `
  <SfQuantitySelector
    v-model="value"
    :disabled="disabled"
    aria-label="Quantity"
    :class="classes"
    @input="inputHandler"
  />`,
});

export const Common = Template.bind({});
