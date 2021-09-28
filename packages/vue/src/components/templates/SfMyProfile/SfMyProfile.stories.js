import { SfMyProfile } from "@storefront-ui/vue"
import { accountData } from "../internalData.js"

export default {
  title: "Components/Templates/MyAccount/MyProfile",
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
    buttonsTexts: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: ["Save changes", "Update password"],
      description: "Labels for buttons",
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
    passwordChangeDescription: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: [
        "If you want to change the password to access your account, enter the following information:",
        "Your current email address is",
      ],
      description: "Description for the second tab",
    },
    passwordChangeEmail: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "example@email.com",
      description: "Email displayed in the sceond tab description",
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
    :buttonsTexts="buttonsTexts"
    :personalDataDescription="personalDataDescription"
    :passwordChangeDescription="passwordChangeDescription"
    :passwordChangeEmail="passwordChangeEmail"
  />`,
})

export const Common = Template.bind({})
Common.args = {
  account: accountData,
}
