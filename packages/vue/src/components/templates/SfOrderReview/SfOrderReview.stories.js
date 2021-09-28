import { SfOrderReview } from "@storefront-ui/vue"

const orderData = {
  review: {
    subtotal: "$150.00",
    shipping: "$9.00",
    total: "$159.00",
  },
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
    paymentMethod: "debit"
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
}

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
]

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
]

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
]

export default {
  title: "Components/Templates/Checkout/OrderReview",
  component: SfOrderReview,
  argTypes: {
    order: {
      control: "Object",
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
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfOrderReview },
  template: `
  <SfOrderReview
    :order="order"
    :shipping-methods="shippingMethods"
    :payment-methods="paymentMethods"
    :characteristics="characteristics"
  >
  </SfOrderReview>`,
})

export const Common = Template.bind({})
Common.args = {}
