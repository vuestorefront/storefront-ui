import { SfOrderSummary } from "@storefront-ui/vue";

const orderData = {
  review: {
    subtotal: "$150.00",
    shipping: "$9.00",
    total: "$159.00",
  },
  shipping: {
    shippingMethod: {
      isOpen: false,
      price: "Free",
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

const paymentMethodsData = [
  {
    label: "Visa Debit",
    value: "debit",
  },
  {
    label: "MasterCard",
    value: "mastercard",
  },
  {
    label: "Visa Electron",
    value: "electron",
  },
  {
    label: "Cash on delivery",
    value: "cash",
  },
  {
    label: "Check",
    value: "check",
  },
];

const shippingMethodsData = [
  {
    isOpen: false,
    price: "Free",
    delivery: "Delivery from 3 to 7 business days",
    label: "Pickup in the store",
    value: "store",
    description:
      "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
  },
  {
    isOpen: false,
    price: "$9.90",
    delivery: "Delivery from 4 to 6 business days",
    label: "Delivery to home",
    value: "home",
    description:
      "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
  },
  {
    isOpen: false,
    price: "$9.90",
    delivery: "Delivery from 4 to 6 business days",
    label: "Paczkomaty InPost",
    value: "inpost",
    description:
      "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
  },
  {
    isOpen: false,
    price: "$11.00",
    delivery: "Delivery within 48 hours",
    label: "48 hours coffee",
    value: "coffee",
    description:
      "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
  },
  {
    isOpen: false,
    price: "$14.00",
    delivery: "Delivery within 24 hours",
    label: "Urgent 24h",
    value: "urgent",
    description:
      "Novelty! From now on you have the option of picking up an order in the selected InPack parceled. Just remember that in the case of orders paid on delivery, only the card payment will be accepted.",
  },
];

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
    firstButtonName: {
      control: "String",
      table: {
        category: "Props",
      },
      defaultValue: "Go to checkout",
    },
    secondButtonName: {
      control: "String",
      table: {
        category: "Props",
      },
      defaultValue: "Go back shopping",
    },
    order: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: orderData,
    },
    shippingMethods: {
      control: "Array",
      table: {
        category: "Props",
      },
      defaultValue: shippingMethodsData,
    },
    paymentMethods: {
      control: "Array",
      table: {
        category: "Props",
      },
      defaultValue: paymentMethodsData,
    },
    characteristics: {
      control: "Array",
      table: {
        category: "Props",
      },
      defaultValue: characteristicsData,
    },
    firstMobileButtonName: {
      control: "String",
      table: {
        category: "Props",
      },
      defaultValue: "Place my order",
    },
    secondMobileButtonName: {
      control: "String",
      table: {
        category: "Props",
      },
      defaultValue: "Go back",
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
    :first-button-name="firstButtonName"
    :second-button-name="secondButtonName"
    :order="order"
    :shipping-methods="shippingMethods"
    :payment-methods="paymentMethods"
    :characteristics="characteristics"
    :first-mobile-button-name="firstMobileButtonName"
    :second-mobile-button-name="secondMobileButtonName"
  >
  </SfOrderSummary>`,
});

export const Common = Template.bind({});
Common.args = {};
