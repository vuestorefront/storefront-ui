import { SfAddToCart } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/AddToCart",
  component: SfAddToCart,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "add-to-cart-select-quantity-margin": {
        value: "0 0 0 var(--spacer-xs)",
        control: "text",
      },
      "button-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-width": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "add-to-cart-select-quantity-display": {
        value: "flex",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The Add-to-cart button and quantity input field with maximum stock validation.",
      },
    },
  },
  decorators: [
    () => ({ template: '<div style="max-width: 21.25rem"><story /></div>' }),
  ],
  argTypes: {
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Boolean to indicate whether product can be added to cart",
    },
    qty: {
      control: "number",
      table: {
        category: "Props",
        type: {
          summary: ["string", "number"],
        },
        defaultValue: {
          summary: 1,
        },
      },
      defaultValue: 1,
      description: "Selected quantity",
    },
    "v-model": {
      control: "number",
      table: {
        type: {
          summary: "number",
        },
        category: "v-model",
        defaultValue: {
          summary: 1,
        },
      },
      defaultValue: 1,
      description: "v-model accepts `qty` prop and emits native events",
    },
    click: {
      action: "Click on button event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits click event when add to cart button is clicked",
    },
    input: {
      action: "Input value event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits input event when input value is changed",
    },
    "quantity-select-input": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description: "Custom content that will replace default quantity selector",
    },
    "add-to-cart-btn": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Custom content that will replace default Add to cart button design",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfAddToCart },
  props: Object.keys(argTypes),
  data() {
    return {
      quantity: this.qty,
    }
  },
  template: `<SfAddToCart v-model="quantity" :disabled="disabled"  @click="click" @input="input" />`,
});

export const Common = Template.bind({});
Common.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const WithAddToCartSlot = (args, { argTypes }) => ({
  components: { SfAddToCart },
  props: Object.keys(argTypes),
  data() {
    return {
      quantity: this.qty,
    }
  },
  template: `
  <SfAddToCart 
    :disabled="disabled"
    @click="click"
    @input="input"
    :qty="quantity"
  >
    <template #quantity-select-input="{quantity}">
      <select v-model="quantity">
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="25">25</option>
      </select>
    </template>
  </SfAddToCart>`,
});
WithAddToCartSlot.args = {
  ...Common.args,
  qty: 5,
};
