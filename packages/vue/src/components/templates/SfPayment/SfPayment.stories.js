import { SfPayment } from "@storefront-ui/vue";
import {
  countries,
  months,
  years,
  paymentMethods,
  accountData,
} from "../internalData.js";

export default {
  title: "Components/Templates/Payment",
  component: SfPayment,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "heading-padding": {
        value: "var(--spacer-xl) 0 var(--spacer-lg)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "heading-title-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "select-option-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "font-size--base": {
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "select-dropdown-color": {
        value: "blue",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-width": {
        value: "25rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "radio-container-align-items": {
        value: "center",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "radio-container-padding": {
        value: "var(--spacer-base) var(--spacer-sm) 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "radio-content-margin": {
        value: "0 0 0 var(--spacer-lg)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "radio-background": {
        value: "transparent",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-padding": {
        value: "var(--spacer-base) 0 0 var(--spacer-sm)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Component with form for the billing address and payments. Part of the checkout process.",
      },
    },
  },
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
      description:
        "Transition name for credit card form. Could be one of [the default ones](https://docs.storefrontui.io/?path=/docs/utilities-transitions-docs--page).",
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
      defaultValue: 2,
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
      defaultValue: 2,
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
    shipping: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: {},
      description: "Shipping data",
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
    creditCards: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: ["debit", "mastercard", "electron"],
      description: "List of credit cards",
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfPayment },
  template: `
  <SfPayment
    :shipping="shipping"
    :payment-methods="paymentMethods"
    :transition="transition"
    :countries="countries"
    :years="years"
    :months="months"
    :cvcCodeButtonText="cvcCodeButtonText"
    :expiryDateLabel="expiryDateLabel"
    :creditCards="creditCards"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  shipping: accountData.shipping[0],
  countries: countries,
  years: years,
  months: months,
  paymentMethods: paymentMethods,
};
