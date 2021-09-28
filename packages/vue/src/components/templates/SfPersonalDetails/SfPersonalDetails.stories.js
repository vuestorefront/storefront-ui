import { SfPersonalDetails } from "@storefront-ui/vue"

export default {
  title: "Components/Templates/Checkout/PersonalDetails",
  component: SfPersonalDetails,
  argTypes: {
    value: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: {},
      description: "Inputs values",
    },
    buttonText: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Log into your account",
      description: "Text for login button",
    },
    logInInfo: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "or fill the details below:",
      description: "Text for description below login button",
    },
    headingTitle: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Personal details",
      description: "Text for heading",
    },
    headingTitleLevel: {
      control: "number",
      table: {
        category: "Props",
      },
      defaultValue: 3,
      description: "Heading number",
    },
    inputsLabels: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: ["First name", "Last name", "Your email"],
      description: "Labels for inputs",
    },
    additionalDetails: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Enjoy these perks with your free account!",
      description: "Additionsl text below inputs",
    },
    characteristics: {
      control: "object",
      table: {
        category: "Props",
      },
      defaultValue: [
        { description: "Faster checkout", icon: "clock", size: "24px" },
        {
          description: "Earn credits with every purchase",
          icon: "credits",
          size: "24px",
        },
        {
          description: "Full rewards program benefits",
          icon: "rewards",
          size: "24px",
        },
        { description: "Manage your wishlist", icon: "heart", size: "24px" },
      ],
      description: "Characteristics below inputs",
    },
    transition: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "sf-fade",
      description: "Transition for input that creates password for account",
    },
    createAccountCheckboxLabel: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "I want to create an account",
      description: "Checkbox label that shows/hides input for password",
    },
    createAccountInputLabel: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "Create Password",
      description: "Label fo password input",
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { SfPersonalDetails },
  template: `
  <SfPersonalDetails
    :value="value"
    :button-text="buttonText"
    :logInInfo="logInInfo"
    :headingTitle="headingTitle"
    :headingTitleLevel="headingTitleLevel"
    :inputsLabels="inputsLabels"
    :additionalDetails="additionalDetails"
    :characteristics="characteristics"
    :transition="transition"
    :createAccountCheckboxLabel="createAccountCheckboxLabel"
    :createAccountInputLabel="createAccountInputLabel"
  />`,
})

export const Common = Template.bind({})
Common.args = {}
