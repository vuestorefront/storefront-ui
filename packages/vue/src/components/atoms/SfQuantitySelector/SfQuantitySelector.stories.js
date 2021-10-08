import { SfQuantitySelector } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/QuantitySelector",
  component: SfQuantitySelector,
  parameters: {
    docs: {
      description: {
        component:
          "The Component with input to choose numeric values and describe quantity. It's Vue 2 functional component.",
      },
    },
  },
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
      description: "CSS classes to modify component styling",
    },
    qty: {
      control: "number",
      table: {
        category: "Props",
        type: {
          summary: "number",
        },
      },
      description: "Sets quantity value",
      defaultValue: 1,
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Sets component state to disabled",
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
    "v-model": {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfQuantitySelector },
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.qty,
    };
  },
  template: `
  <SfQuantitySelector
    v-model="inputValue"
    :disabled="disabled"
    :min="min"
    :max="max"
    aria-label="Quantity"
    :class="classes"
  />`,
});

export const Common = Template.bind({});
