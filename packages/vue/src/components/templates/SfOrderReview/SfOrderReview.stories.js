import { SfOrderReview } from "@storefront-ui/vue";

const orderData = {
  firstName: "John",
  lastName: "Dog",
  email: "john,dog@gmail.com",
  shipping: {
    streetName: "Sezame Street",
    apartment: "24/193A",
    city: "Wroclaw",
    zipCode: "53-540",
    country: "Poland",
    phoneNumber: "(00)560 123 456",
    shippingMethod: "home",
  },
  payment: {
    streetName: "Sezame Street",
    apartment: "24/193A",
    city: "Wroclaw",
    zipCode: "53-540",
    country: "Poland",
    phoneNumber: "(00)560 123 456",
    paymentMethod: "debit",
    shippingMethod: "home",
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
  title: "Components/Templates/OrderReview",
  component: SfOrderReview,
  parameters: {
    cssprops: {
      "heading-title-margin": {
        value: "0 0 var(--spacer-xl) 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "heading-title-font-weight": {
        value: "var(--font-weight--bold)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-background": {
        value: "var(--c-white)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-label-font-size": {
        value: "var(--font-size--base)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-height": {
        value: "1.875rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    docs: {
      description: {
        component:
          "Component with review of the order. Can be displayed during different checkout steps.",
      },
    },
  },
  argTypes: {
    reviewTitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Order review",
      description: "Heading text",
    },
    reviewTitleLevel: {
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
    buttonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Edit",
      description: "Order sections button text",
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
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfOrderReview },
  template: `
  <SfOrderReview
    :review-title="reviewTitle"
    :review-title-level="reviewTitleLevel"
    :order="order"
    :buttonText="buttonText"
    :characteristics="characteristics"
  />`,
});

export const Common = Template.bind({});
Common.args = {};
