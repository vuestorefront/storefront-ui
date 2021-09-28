import { SfShippingDetails } from "@storefront-ui/vue"
import { accountData, countries } from "../internalData.js"

export default {
  title: "Components/Templates/MyAccount/ShippingDetails",
  component: SfShippingDetails,
  argTypes: {
    tabsTitles: {
      control: "array",
      table: {
        category: "Props",
        defaultValue: {
          summary: '["Change the address", "Shipping details"]',
        },
      },
      defaultValue: ["Change the address", "Shipping details"],
    },
    account: {
      control: "object",
      table: {
        category: "Props",
        defaultValue: {
          summary: "{}",
        },
      },
      defaultValue: "",
      description: "Account data",
    },
    transition: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "sf-fade",
      description: "Transition name",
    },
    changeAddressDescription: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Text when there are no orders",
    },
    changeAddressButtonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Button text for Change Address tab",
    },
    inputsLabels: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    selectLabel: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Country",
      description: "Label for select. Neede during creation of a new address",
    },
    countries: {
      control: "object",
      table: {
        category: "Props",
      },
      description: "List of countries. Needed during cearion of a new address.",
    },
    shipingTabDescription: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Shipping tab description",
    },
    shippingButtonsTexts: {
      control: "array",
      table: {
        category: "Props",
        defaultValue: {
          summary: '["Change", "Delete", "Add new address"]',
        },
      },
      defaultValue: ["Change", "Delete", "Add new address"],
      description: "Labels for buttons in shipping tab",
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfShippingDetails },
  template: `
  <SfShippingDetails
    :tabsTitles="tabsTitles"
    :account="account"
    :transition="transition"
    :changeAddressDescription="changeAddressDescription"
    :inputsLabels="inputsLabels"
    :selectLabel="selectLabel"
    :countries="countries"
    :shipingTabDescription="shipingTabDescription"
    :shippingButtonsTexts="shippingButtonsTexts"
    :changeAddressButtonText="changeAddressButtonText"
  />`,
})

export const Common = Template.bind({})
Common.args = {
  account: accountData,
  changeAddressDescription: "Keep your addresses and contact details updated.",
  countries: countries,
  shipingTabDescription:
    "Manage all the shipping addresses you want (work place, home address ...) This way you won't have to enter the shipping address manually with each order.",
}
