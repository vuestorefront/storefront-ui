import { SfCheckbox } from "@storefront-ui/vue";

export default {
  title: "Components/Molecules/Checkbox",
  component: SfCheckbox,
  parameters: {
    cssprops: {
      "checkbox-padding": { value: "", control: "text" },
      "checkbox-container-width": { value: "", control: "text" },
      "checkbox-cursor": { value: "pointer", control: "text" },
      "checkbox-display": { value: "flex", control: "text" },
      "checkbox-order": { value: "", control: "text" },
      "checkbox-size": { value: "1.5rem", control: "text" },
      "checkbox-border": {
        value:
          "var(--checkbox-border-style, solid) var(--checkbox-border-color, var(--c-link))",
        control: "text",
      },
      "checkbox-border-width": { value: "1px", control: "text" },
      "checkbox-border-radius": { value: "", control: "text" },
      "checkbox-background": { value: "transparent", control: "text" },
      "checkbox-label-margin": {
        value: "0 0 0 var(--spacer-xs)",
        control: "text",
      },
      "checkbox-label-color": { value: "var(--c-link)", control: "text" },
      "checkbox-font": { value: "", control: "text" },
      "checkbox-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "checkbox-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "checkbox-font-line-height": { value: "1.6", control: "text" },
      "checkbox-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "checkbox-message-margin": {
        value: "var(--spacer-2xs) 0 0 0",
        control: "text",
      },
      "checkbox-message-color": { value: "var(--c-danger)", control: "text" },
      "checkbox-message-font": { value: "", control: "text" },
      "checkbox-message-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "checkbox-message-font-size": {
        value: "var(--font-size--xs)",
        control: "text",
      },
      "checkbox-message-font-line-height": { value: "1.2", control: "text" },
      "checkbox-message-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "icon-size": {
        value: "1.25rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "checkbox-border-color": {
        value: "var(--c-danger)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      description: {
        component:
          "The checkbox component consisting of input field, label and error message field",
      },
    },
  },
  argTypes: {
    name: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Checkbox name",
    },
    value: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Value of checkbox input",
    },
    label: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Label text",
    },
    hintMessage: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Hint/Required message text.",
    },
    required: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Sets the required value of checkbox.",
    },
    infoMessage: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Info/success message text.",
    },
    errorMessage: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description:
        "Error message value of select. It appears if `valid` is `false`.",
    },
    valid: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: true,
      description: "Indicates if the checkbox is properly filled.",
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Sets the checkbox state to disabled.",
    },
    selected: {
      control: "boolean",
      table: {
        category: "Props",
        type: {
          summary: ["array", "boolean"],
        },
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Indicates which checkbox is selected.",
    },
    "v-model": {
      table: {
        disable: true,
      },
    },
    change: { action: "Selected items changed", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfCheckbox },
  props: Object.keys(argTypes),
  template: `
  <SfCheckbox 
    v-model="selected"
    :name="name"      
    :label="label"
    :hintMessage="hintMessage"
    :required="required"
    :error-message="errorMessage"
    :valid="valid"
    :infoMessage="infoMessage"
    :disabled="disabled"
    @change="change"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  name: "shipping",
  label: "I want to create an account",
};

export const Selected = Template.bind({});
Selected.args = {
  ...Common.args,
  selected: true,
};

export const Required = Template.bind({});
Required.args = {
  ...Common.args,
  required: true,
};

export const WithInfo = Template.bind({});
WithInfo.args = {
  ...Common.args,
  infoMessage: "This is an info message",
};

export const WithCustomError = Template.bind({});
WithCustomError.args = {
  ...Common.args,
  errorMessage: "Something is wrong",
  valid: false,
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Common.args,
  valid: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Common.args,
  disabled: true,
};

export const UseCheckmarkSlot = (args, { argTypes }) => ({
  components: { SfCheckbox },
  props: Object.keys(argTypes),
  template: `
  <SfCheckbox 
    v-model="checked"
    :name="name"
    :label="label"
    :hintMessage="hintMessage"
    :required="required"
    :error-message="errorMessage"
    :valid="valid"
    :infoMessage="infoMessage"
    :disabled="disabled">
    <template #checkmark="{isChecked, disabled}">
      <span v-if="isChecked">👍🏻</span>
      <span v-else>👎🏻</span>
    </template>
  </SfCheckbox>`,
});
UseCheckmarkSlot.args = {
  ...Common.args,
  checked: true,
};

export const UseErrorMessageSlot = (args, { argTypes }) => ({
  components: { SfCheckbox },
  props: Object.keys(argTypes),
  template: `
  <SfCheckbox 
    v-model="selected"
    :name="name"      
    :label="label"
    :hint-message="hintMessage"
    :required="required"
    :error-message="errorMessage"
    :valid="valid"
    :info-message="infoMessage"
    :disabled="disabled"
    >
      <template #show-error-message="{ errorMessage }">
        <span> CUSTOM ERROR MESSAGE 👈</span>
      </template>
    </SfCheckbox>`,
});
UseErrorMessageSlot.args = { ...Invalid.args };
