import { SfMyProfile } from "@storefront-ui/vue"
import { accountData } from "../internalData.js"

export default {
  title: "Components/Templates/MyProfile",
  component: SfMyProfile,
  argTypes: {
    tabsTitles: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: ["Personal data", "Password change"],
      description: "Labels for tabs titles",
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
    personalInputsLabels: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: ["First Name", "Last Name", "Your e-mail"],
      description: "Labels for inputs in the first tab",
    },
    passwordInputsLabels: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: ["Current Password", "New Password", "Repeat Password"],
      description: "Labels for inputs in the second tab",
    },
    saveButtonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Save changes",
      description: "Text for save button",
    },
    updateButtonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Update password",
      description: "Text for update button",
    },
    personalDataDescription: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue:
        "Feel free to edit any of your details below so your account is always up to date",
      description: "Description for the forst tab",
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfMyProfile },
  template: `
  <SfMyProfile
    :tabs-titles="tabsTitles"
    :account="account"
    :personalInputsLabels="personalInputsLabels"
    :passwordInputsLabels="passwordInputsLabels"
    :saveButtonText="saveButtonText"
    :updateButtonText="updateButtonText"
    :personalDataDescription="personalDataDescription"
  />`,
})

export const Common = Template.bind({})
Common.args = {
  account: accountData,
}
