import { SfPayment } from "@storefront-ui/vue";

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

const shippingData = {
  streetName: "",
  apartment: "",
  zipCode: "",
  city: "",
  country: "",
  phoneNumber: "",
};

export default {
  title: "Components/Templates/Payment",
  component: SfPayment,
  argTypes: {
    value: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    shipping: {
      control: "Object",
      table: {
        category: "Props",
      },
      defaultValue: shippingData,
    },
    paymentMethods: {
      control: "Array",
      table: {
        category: "Props",
      },
      defaultValue: paymentMethodsData,
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfPayment },
  template: `
  <SfPayment 
    :value="value"
    :shipping="shipping"
    :payment-methods="paymentMethods"
  >
  </SfPayment>`,
});

export const Common = Template.bind({});
Common.args = {};
