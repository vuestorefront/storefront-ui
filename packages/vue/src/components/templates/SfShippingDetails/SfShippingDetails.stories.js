import { SfShippingDetails } from "@storefront-ui/vue";
import { accountData, countries } from "../internalData.js";

export default {
  title: "Components/Templates/ShippingDetails",
  component: SfShippingDetails,
  parameters: {
    cssprops: {
      "button-background": {
        value: "var(--c-light)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-color": {
        value: "var(--c-dark-variant)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "tabs-content-border-width": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "tabs-title-display": {
        value: "none",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "tabs-content-padding": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-width": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    docs: {
      description: {
        component:
          "Component for managing of shipping details. The element of the account.",
      },
    },
  },
  argTypes: {
    shippingTabTitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Shipping details",
      description: "Label for the first tab - Shipping details",
    },
    changeAddressTabTitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Change the address",
      description:
        "Label for the second tab - Change the address. It showhs when `Change` or `Add new address` button is clicked",
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
      description:
        "Sets transition name. Could be one of [the default ones](https://docs.storefrontui.io/?path=/docs/utilities-transitions-docs--page).",
    },
    changeAddressDescription: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Text when there are no orders",
    },
    changeButtonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Change",
      description:
        "Text for button Change. If there is no value button will not be displayed.",
    },
    deleteButtonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Delete",
      description:
        "Text for button Delete. If there is no value button will not be displayed.",
    },
    addNewAddressButtonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Add new address",
      description:
        "Text for button Add new address. If there is no value button will not be displayed.",
    },
    updateAddressButtonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Update the address",
      description:
        "Button text for Change Address tab. If there is no value button will not be displayed.",
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
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfShippingDetails },
  template: `
  <SfShippingDetails
    :shippingTabTitle="shippingTabTitle"
    :changeAddressTabTitle="changeAddressTabTitle"
    :account="account"
    :transition="transition"
    :changeAddressDescription="changeAddressDescription"
    :inputsLabels="inputsLabels"
    :selectLabel="selectLabel"
    :countries="countries"
    :shipingTabDescription="shipingTabDescription"
    :changeButtonText="changeButtonText"
    :deleteButtonText="deleteButtonText"
    :addNewAddressButtonText="addNewAddressButtonText"
    :updateAddressButtonText="updateAddressButtonText"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  account: accountData,
  changeAddressDescription: "Keep your addresses and contact details updated.",
  countries: countries,
  shipingTabDescription:
    "Manage all the shipping addresses you want (work place, home address ...) This way you won't have to enter the shipping address manually with each order.",
};
