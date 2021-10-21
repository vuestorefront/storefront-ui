import { SfAddToCart } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/AddToCart",
  component: SfAddToCart,
  parameters: {
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
      "font-weight--semibold": {
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
      table: {
        disable: true,
      },
    },
    click: { action: "Added to cart clicked", table: { category: "Events" } },
    input: { action: "Quantity changed", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfAddToCart },
  props: Object.keys(argTypes),
  template: `<SfAddToCart v-model="qty" :disabled="disabled"  @click="click" @input="input" />`,
});

export const Common = Template.bind({});
Common.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const WithAddToCartSlot = (args, { argTypes }) => ({
  components: { SfAddToCart },
  props: Object.keys(argTypes),
  template: `
  <SfAddToCart 
    :disabled="disabled"
    @click="click"
    @input="input"
    :qty="qty"
  >
    <template #quantity-select-input="{qty}">
      <select v-model="qty">
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
