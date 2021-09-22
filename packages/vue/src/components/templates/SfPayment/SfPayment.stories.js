import { SfPayment } from "@storefront-ui/vue";
import { countries, months, years, paymentMethods } from "../internalData.js";

export default {
  title: "Components/Templates/Checkout/Payment",
  component: SfPayment,
  argTypes: {
    paymentMethods: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: paymentMethods,
      description: "Available payment methods",
    },
    transition: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "sf-fade",
      description: "Transition name for credit card form",
    },
    billingHeading: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Billing address",
      description: "Heading text for the first header",
    },
    billingHeadingLevel: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 3,
      description: "Heading number for the first header",
    },
    sameAsShippingCheckboxLabel: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Copy address data from shipping",
      description: "Label for checkbox that copies address from shipping",
    },
    billingInputsLabels: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Labels for inputs",
    },
    billingSelectLabel: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Billing address",
      description: "Label for select",
    },
    generateInvoiceCheckboxlabel: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "I want to generate invoice",
      description: "Label for generating invoice checkbox",
    },
    paymentHeading: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Payment methods",
      description: "Heading text for the second header",
    },
    paymentHeadingLevel: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 3,
      description: "Heading number for the second header",
    },
    countries: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: [],
      description:
        "List of counties needed for select to creeate billing address",
    },
    years: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: [],
      description: "Years needed for expiration day on credid card",
    },
    months: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: [],
      description: "Months needed for expiration day on credid card",
    },
    cvcCodeButtonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Text for button that helps with cvc code",
    },
    expiryDateLabel: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Label for expiry date for credid card",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfPayment },
  template: `
  <SfPayment 
    :payment-methods="paymentMethods"
    :transition="transition"
    :countries="countries"
    :years="years"
    :months="months"
    :cvcCodeButtonText="cvcCodeButtonText"
    :expiryDateLabel="expiryDateLabel"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  countries: countries,
  years: years,
  months: months,
  paymentMethods: paymentMethods,
};
