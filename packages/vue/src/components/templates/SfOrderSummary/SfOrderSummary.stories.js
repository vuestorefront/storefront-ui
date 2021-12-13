import { SfOrderSummary } from "@storefront-ui/vue";

const orderData = {
  shipping: {
    shippingMethod: {
      isOpen: false,
      price: "$5.99",
      delivery: "Delivery from 3 to 7 business days",
      label: "Pickup in the store",
      value: "store",
      description:
        "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
    },
  },
  products: [
    {
      title: "Cream Beach Bag",
      image: "/assets/storybook/Home/productA.jpg",
      price: { regular: "$50.00" },
      configuration: [
        { name: "Size", value: "XS" },
        { name: "Color", value: "White" },
      ],
      qty: 1,
      sku: "MSD23-345-324",
    },
    {
      title: "Vila stripe maxi dress",
      image: "/assets/storybook/Home/productB.jpg",
      price: { regular: "$50.00", special: "$20.05" },
      configuration: [
        { name: "Size", value: "XS" },
        { name: "Color", value: "White" },
      ],
      qty: 2,
      sku: "MSD23-345-325",
    },
  ],
};

const characteristicsData = [
  {
    title: "Safety",
    description: "It carefully packaged with a personal touch",
    icon: "safety",
  },
  {
    title: "Easy shipping",
    description: "You’ll receive dispatch confirmation and an arrival date",
    icon: "shipping",
  },
  {
    title: "Changed your mind?",
    description: "Rest assured, we offer free returns within 30 days",
    icon: "return",
  },
];

export default {
  title: "Components/Templates/OrderSummary",
  component: SfOrderSummary,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "heading-title-margin": {
        value: "0 0 var(--spacer-xl) 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "heading-title-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "font-weight--bold": {
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "heading-padding": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "heading-title-font-size": {
        value: "var(--h3-font-size)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "property-name-font-weight": {
        value: "var(--font-weight--medium)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "property-value-font-weight": {
        value: "var(--font-weight--bold)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "property-name-color": {
        value: "var(--c-text)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "divider-border-color": {
        value: "var(--c-white)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "divider-margin": {
        value: "var(--spacer-xl) 0 0 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-background": {
        value: "var(--c-white)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-label-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "font-size--base": {
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-height": {
        value: "1.875rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Component with summary of the order. Can be displayed at the end of checkout process.",
      },
    },
  },
  argTypes: {
    orderTitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Order review",
      description: "Heading text",
    },
    orderTitleLevel: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 2,
      description: "Heading text size",
    },
    order: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: orderData,
      description: "Order data",
    },
    characteristics: {
      control: "object",
      table: {
        category: "Props",
        type: { summary: "array" },
        defaultValue: {
          summary: `[
            {
              title: "Safety",
              description: "It carefully packaged with a personal touch",
              icon: "safety",
            },
          ]`,
        },
      },
      defaultValue: characteristicsData,
      description:
        "The array of objects with data filling SfCharacteristics components: title, description and icon",
    },
    propertiesNames: {
      control: "object",
      table: {
        category: "Props",
        type: { summary: "array" },
        defaultValue: {
          summary: `["Products", "Subtotal", "Shipping", "Total price"]`,
        },
      },
      defaultValue: ["Products", "Subtotal", "Shipping", "Total price"],
      description: "The array of names for order summary",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfOrderSummary },
  template: `
  <SfOrderSummary
    :order-title="orderTitle"
    :order-title-level="orderTitleLevel"
    :order="order"
    :propertiesNames="propertiesNames"
    :characteristics="characteristics"
  />`,
});

export const Common = Template.bind({});
Common.args = {};
