import { SfShipping } from "@storefront-ui/vue";

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

export default {
  title: "Components/Templates/Shipping",
  component: SfShipping,
  argTypes: {
    value: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    shippingMethods: {
      control: "Array",
      table: {
        category: "Props",
      },
      defaultValue: shippingMethodsData,
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfShipping },
  template: `
  <SfShipping 
    :value="value"
    :shipping-methods="shippingMethods"
  >
  </SfShipping>`,
});

export const Common = Template.bind({});
Common.args = {};
