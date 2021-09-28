import { SfShipping } from "@storefront-ui/vue"
import { countries, shippingMethodsData } from "../internalData.js"

export default {
  title: "Components/Templates/Checkout/Shipping",
  component: SfShipping,
  argTypes: {
    shippingMethods: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: shippingMethodsData,
      description: "Available shipping methods",
    },
    headingTitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Shipping",
      description: "Heading text for the first header",
    },
    headingTitleLevel: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 3,
      description: "Heading number for the first header",
    },
    inputsLabels: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: [
        "First name",
        "Last name",
        "Street name",
        "City",
        "State/Province",
        "Zip-code",
        "Phone number",
      ],
      description: "Labels for inputs",
    },
    selectLabel: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Country",
      description: "Label for select",
    },
    countries: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: [],
      description:
        "List of counties needed for select to creeate shipping address",
    },
    methodsHeadingTitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Shipping method",
      description: "Heading text for the second header",
    },
    methodsHeadingTitleLevel: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 3,
      description: "Heading number for the second header",
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfShipping },
  template: `
  <SfShipping
    :shipping-methods="shippingMethods"
    :headingTitle="headingTitle"
    :headingTitleLevel="headingTitleLevel"
    :inputsLabels="inputsLabels"
    :selectLabel="selectLabel"
    :countries="countries"
    :methodsHeadingTitle="methodsHeadingTitle"
    :methodsHeadingTitleLevel="methodsHeadingTitleLevel"
  />`,
})

export const Common = Template.bind({})
Common.args = {
  countries: countries,
  shippingMethods: shippingMethodsData,
}
