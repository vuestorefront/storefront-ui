import { SfConfirmOrder } from "@storefront-ui/vue";

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
  orderItems: [
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

const tableHeadersData = [
  "Size",
  "Description",
  "Quantity",
  "Colour",
  "Amount",
];

export default {
  title: "Components/Templates/ConfirmOrder",
  component: SfConfirmOrder,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "heading-padding": {
        value: "var(--spacer-xl) 0 var(--spacer-base)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "heading-title-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "table-row-padding": {
        value: "var(--spacer-sm) 0 var(--spacer-xs)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "image-width": {
        value: "2.75rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "table-heading-padding": {
        value: "var(--spacer-sm) 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "price-regular-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "price-special-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "link-color": {
        value: "var(--c-link)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "link-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "font-family--primary": {
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "property-name-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "property-value-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "property-name-color": {
        value: "var(--c-text)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "divider-border-color": {
        value: "var(--c-primary)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "divider-width": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "divider-margin": {
        value: "0 0 var(--spacer-base) 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component: "Component with details of the order. Part of checkout",
      },
    },
  },
  argTypes: {
    orderTitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Order details",
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
    tableHeaders: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: tableHeadersData,
      description: "Order table headers",
    },
    propertiesNames: {
      control: "object",
      table: {
        category: "Props",
        type: { summary: "array" },
        defaultValue: {
          summary: `["Subtotal", "Shipping", "Total price"]`,
        },
      },
      defaultValue: ["Subtotal", "Shipping", "Total price"],
      description: "The array of names for order summary",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfConfirmOrder },
  template: `
  <SfConfirmOrder
    :orderTitle="orderTitle"
    :orderTitleLevel="orderTitleLevel"
    :order="order"
    :table-headers="tableHeaders"
    :propertiesNames="propertiesNames"
  >
  </SfConfirmOrder>`,
});

export const Common = Template.bind({});
Common.args = {};
