import { SfPersonalDetails } from "@storefront-ui/vue";

export default {
  title: "Components/Templates/PersonalDetails",
  component: SfPersonalDetails,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "heading-padding": {
        value: "var(--spacer-xl) 0 var(--spacer-base)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "heading-title-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "font-weight--bold": {
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "h3-font-size": {
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "font-weight--semibold": {
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-width": {
        value: "25rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "characteristic-description-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "font-size--base": {
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-padding": {
        value: "var(--spacer-sm) 0 var(--spacer-2xs) 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "checkbox-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "font-family--primary": {
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Component with personal data form. Part of the checkout process.",
      },
    },
  },
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
      defaultValue: 2,
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
      description:
        "Transition for input that creates password for account. Could be one of [the default ones](https://docs.storefrontui.io/?path=/docs/utilities-transitions-docs--page).",
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
    input: {
      action: "input event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits input event when one of input fields is changed",
    },
    logIn: {
      name: "log-in",
      action: "log-in event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits log-in event when log in button is clicked",
    },
    createAccount: {
      name: "create-account",
      action: "create-account event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits create-account event when create account checkbox is checked/unchecked",
    },
  },
};

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
    @input="input"
    @log-in="this['logIn']"
    @create-account="this['createAccount']"
  />`,
});

export const Common = Template.bind({});
Common.args = {};
