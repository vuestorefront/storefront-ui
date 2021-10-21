import { SfInput, SfIcon } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Input",
  component: SfInput,
  parameters: {
    cssprops: {
      "input-width": { value: "", control: "text" },
      "input-height": { value: "", control: "text" },
      "input-label-display": { value: "", control: "text" },
      "input-label-top": { value: "50%", control: "text" },
      "input-label-left": { value: "", control: "text" },
      "input-label-padding": { value: "", control: "text" },
      "input-label-color": { value: "var(--c-link)", control: "text" },
      "input-label-background": { value: "", control: "text" },
      "input-label-transform": {
        value: "translate3d(0, calc(-1 * var(--input-label-top, 50%)), 0)",
        control: "text",
      },
      "input-label-transition": {
        value: "top 150ms linear, font-size 150ms linear",
        control: "text",
      },
      "input-label-font": { value: "", control: "text" },
      "input-label-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "input-label-font-size": {
        value: "var(--font-size--lg)",
        control: "text",
      },
      "input-label-font-line-height": { value: "1", control: "text" },
      "input-label-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "input-label-required": { value: "", control: "text" },
      "input-bar-display": { value: "block", control: "text" },
      "input-bar-width": { value: "0", control: "text" },
      "input-bar-background": { value: "var(--c-primary)", control: "text" },
      "input-error-message-color": {
        value: "var(--c-danger)",
        control: "text",
      },
      "input-error-message-font": { value: "", control: "text" },
      "input-error-message-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "input-error-message-font-size": {
        value: "var(--font-size--xs)",
        control: "text",
      },
      "input-error-message-font-line-height": { value: "1.2", control: "text" },
      "input-error-message-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "input-margin": { value: "0 0 var(--spacer-xs) 0", control: "text" },
      "input-padding": {
        value: "var(--spacer-sm) 0 var(--spacer-xs) 0",
        control: "text",
      },
      "input-border": {
        value:
          "var(--input-border-style, solid) var(--input-border-color, var(--c-link))",
        control: "text",
      },
      "input-border-width": { value: "0 0 1px 0", control: "text" },
      "input-background": { value: "", control: "text" },
      "input-color": { value: "var(--c-text)", control: "text" },
      "input-font": { value: "", control: "text" },
      "input-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "input-font-size": { value: "var(--font-size--lg)", control: "text" },
      "input-font-line-height": { value: "1", control: "text" },
      "input-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "input-text-align": { value: "", control: "text" },
      "input-icon-top": { value: "50%", control: "text" },
      "input-icon-right": { value: "var(--spacer-xs)", control: "text" },
      "input-password-icon-background": {
        value: "var(--c-black)",
        control: "text",
      },
      "input-password-icon-scaleX": { value: "0)", control: "text" },
      "icon-color": {
        value: "var(--c-primary)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-border-color": {
        value: "var(--c-text-disabled)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-size": {
        value: "12px",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-padding": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-background": {
        value: "transparent",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-box-shadow": {
        value: "none",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      description: {
        component:
          "The input form field with validation and built-in label animation.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["", "sf-input--filled", "sf-input--outline"],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    type: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Form input type",
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
      description: "Form input label",
    },
    name: {
      control: "text",
      table: {
        category: "Props",
        defaultValue: {
          summary: "",
        },
      },
      description: "Form input name",
    },
    errorMessage: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue:
        "Error message value of form input. It appears if `valid` is `false`.",
    },
    valid: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: true,
      description: "Validate value of form input",
    },
    required: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Native input required attribute",
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Native input disabled attribute",
    },
    hasShowPassword: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Status of show password icon display",
    },
    placeholder: {
      control: "text",
      table: {
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description:
        "Native placeholder, can be added, but it's not default component prop.",
    },
    value: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Current input value (`v-model`)",
    },
    onChange: { action: "input changed!", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfInput },
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.value,
    };
  },
  template: `
  <SfInput
    v-model="inputValue"
    :class="classes"
    :type="type"
    :label="label"
    :name="name"
    :valid="valid"
    :error-message="errorMessage"
    :required="required"
    :disabled="disabled"
    :has-show-password="hasShowPassword"
    @change="onChange"
  />`,
});

export const Common = Template.bind({});
Common.args = {
  type: "text",
  label: "First name",
  name: "name",
};

export const WithError = Template.bind({});
WithError.args = {
  ...Common.args,
  errorMessage: "Required",
  valid: false,
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...WithError.args,
};

export const AsRequired = Template.bind({});
AsRequired.args = {
  ...Common.args,
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Common.args,
  disabled: true,
};

export const ShowPassword = Template.bind({});
ShowPassword.args = {
  ...Common.args,
  type: "password",
  hasShowPassword: true,
};

export const WithPlaceholder = (args, { argTypes }) => ({
  components: { SfInput },
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.value,
    };
  },
  template: `
  <SfInput
    v-model="inputValue"
    :class="classes"
    :type="type"
    :label="label"
    :name="name"
    :valid="valid"
    :error-message="errorMessage"
    :required="required"
    :disabled="disabled"
    :has-show-password="hasShowPassword"
    placeholder="I'm a placeholder"
    @change="onChange"
  />`,
});

WithPlaceholder.args = {
  ...Common.args,
};

export const Filled = Template.bind({});
Filled.args = {
  ...Common.args,
  classes: "sf-input--filled",
  value: "Storefront",
};

export const WithLabelSlot = (args, { argTypes }) => ({
  components: { SfInput, SfIcon },
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.value,
    };
  },
  template: `
  <SfInput
    v-model="inputValue"
    :type="type"
    :label="label"
    :name="name"
    :valid="valid"
    :error-message="errorMessage"
    :required="required"
    :disabled="disabled"
    :has-show-password="hasShowPassword"
    @change="onChange"
    >
    <template #label="{label}">
      <SfIcon 
        icon="heart_fill" 
        size="10px" 
        :style="disabled ? {'--icon-color': 'var(--c-text-disabled)'} : ''"
        style="margin-right: 4px; display: inline-block"
      />
      {{label}}
    </template>
  </SfInput>`,
});

WithLabelSlot.args = {
  ...Common.args,
};

export const WithErrorSlot = (args, { argTypes }) => ({
  components: { SfInput, SfIcon },
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.value,
    };
  },
  template: `
  <SfInput
    v-model="inputValue"
    :type="type"
    :label="label"
    :name="name"
    :valid="valid"
    :error-message="errorMessage"
    :required="required"
    :disabled="disabled"
    :has-show-password="hasShowPassword"
    @change="onChange"
    >
    <template #error-message="{errorMessage}">
      <div>
        <SfIcon icon="info_shield" size="10px" color="#E22326" style="margin-right: 4px; display: inline-block"/> 
        CUSTOM ERROR MESSAGE
      </div>
    </template>
  </SfInput>`,
});

WithErrorSlot.args = {
  ...Invalid.args,
};
