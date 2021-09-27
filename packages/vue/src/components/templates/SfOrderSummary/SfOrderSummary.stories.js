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
  title: "Components/Templates/Checkout/OrderSummary",
  component: SfOrderSummary,
  argTypes: {
    orderTitle: {
      control: "String",
      table: {
        category: "Props",
      },
      defaultValue: "Order review",
    },
    orderTitleLevel: {
      control: "Number",
      table: {
        category: "Props",
      },
      defaultValue: 3,
    },
    order: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: orderData,
    },
    characteristics: {
      control: "Array",
      table: {
        category: "Props",
      },
      defaultValue: characteristicsData,
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
    :characteristics="characteristics"
  >
  </SfOrderSummary>`,
});

export const Common = Template.bind({});
Common.args = {};
