import { SfSelect } from "@storefront-ui/vue";

const options = [
  { value: "amaranth", color: "#E52B50", label: "Amaranth" },
  { value: "amber", color: "#FFBF00", label: "Amber" },
  { value: "arctic-lime", color: "#D0FF14", label: "Arctic lime" },
  { value: "bluetiful", color: "#3C69E7", label: "Bluetiful" },
  { value: "buff", color: "#F0DC82", label: "Buff" },
];

export default {
  title: "Components/Molecules/Select",
  component: SfSelect,
  parameters: {
    cssprops: {
      "select-width": { value: "", control: "text" },
      "select-height": { value: "4.25rem", control: "text" },
      "select-padding": {
        value: "var(--spacer-sm) 0 var(--spacer-sm) 0",
        control: "text",
      },
      "select-color": { value: "var(--c-text)", control: "text" },
      "select-label-top": { value: "30%", control: "text" },
      "select-label-left": { value: "0", control: "text" },
      "select-label-color": {
        value: "var(--c-secondary-variant)",
        control: "text",
      },
      "select-label-transition": {
        value: "top 150ms linear, font-size 150ms linear",
        control: "text",
      },
      "select-label-font": { value: "", control: "text" },
      "select-label-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "select-label-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "select-label-font-line-height": { value: "1", control: "text" },
      "select-label-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "select-label-required": { value: "", control: "text" },
      "select-dropdown-color": {
        value: "var(--c-secondary-variant)",
        control: "text",
      },
      "select-dropdown-border": {
        value:
          "var(--select-dropdown-border-style, solid) var(--select-dropdown-border-color, var(--c-secondary))",
        control: "text",
      },
      "select-dropdown-border-width": { value: "0 0 0 0", control: "text" },
      "select-option-background": { value: "var(--c-white)", control: "text" },
      "select-option-font": { value: "", control: "text" },
      "select-option-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "select-option-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "select-option-font-line-height": { value: "1", control: "text" },
      "select-option-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "select-error-message-color": {
        value: "var(--c-danger)",
        control: "text",
      },
      "select-error-message-height": {
        value: "calc(var(--font-size--xs) * 1.2)",
        control: "text",
      },
      "select-dropdown-border-color": {
        value: "var(--c-primary)",
        control: "text",
      },
      "select-border-width": {
        value: "0 0 1px 0",
        control: "text",
      },
      "select-border-color": {
        value: "var(--c-light)",
        control: "text",
      },
    },

    docs: {
      description: {
        component:
          "Native select component. Built from main component - SfSelect and internal component - SfSelectOption.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: ["sf-select--underlined", ""],
      },
      table: {
        category: "CSS Modifiers",
        defaultValue: {
          summary: "",
        },
      },
      description: "CSS classes to modify component styling",
    },
    label: {
      control: "text",
      table: {
        category: "Props for main component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Select field label",
    },
    value: {
      control: "text",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Value selected",
    },
    placeholder: {
      control: "text",
      table: {
        category: "Props for main component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Placeholder",
    },
    errorMessage: {
      control: "text",
      table: {
        category: "Props for main component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "This field is not correct.",
        },
      },
      defaultValue: "This field is not correct.",
      description:
        "Error message value of form select. It appears if `valid` is `false`.",
    },
    required: {
      control: "boolean",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Required field?",
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: false,
        },
      },
      defaultValue: false,
      description: "Disabled status of form select",
    },
    valid: {
      control: "boolean",
      table: {
        category: "Props for main component",
        defaultValue: {
          summary: true,
        },
      },
      defaultValue: true,
      description: "Validate value of form select",
    },
    value: {
      control: "text",
      table: {
        category: "Props for SfSelectOption component",
        type: {
          summary: ["string", "number", "object"],
        },
        defaultValue: {
          summary: "",
        },
      },
      defaultValue: "",
      description: "Content of the option.",
    },
    input: {
      action: "input event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits input event when option is chosen",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSelect },
  props: Object.keys(argTypes),
  data() {
    return {
      options,
      selectedValue: "",
    };
  },
  template: `
  <SfSelect
    v-model="selectedValue"
    :class="classes"
    :label="label"
    :required="required"
    :valid="valid"
    :disabled="disabled"
    :error-message="errorMessage"
    :placeholder="placeholder"       
    @input="input"
    style="max-width: 30rem; margin: 10px;"
  >
    <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
      {{option.label}}
    </SfSelectOption>
  </SfSelect>`,
});

export const Common = Template.bind({});
Common.args = {
  label: "Color",
};

export const Invalid = Template.bind({});
Invalid.args = {
  ...Common.args,
  valid: false,
};

export const Required = Template.bind({});
Required.args = {
  ...Common.args,
  required: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Common.args,
  disabled: true,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...Common.args,
  placeholder: "Select something",
};

export const Underlined = Template.bind({});
Underlined.args = {
  ...Common.args,
  classes: "sf-select--underlined",
};

export const HasSelectedValue = Template.bind({});
HasSelectedValue.args = {
  ...Common.args,
  value: "amber",
};

export const UseLabelSlot = (args, { argTypes }) => ({
  components: { SfSelect },
  props: Object.keys(argTypes),
  data() {
    return {
      options,
      selectedValue: "",
    };
  },
  template: `
  <SfSelect
    v-model="selectedValue"
    :class="classes"
    :label="label"
    :required="required"
    :valid="valid"
    :disabled="disabled"
    :error-message="errorMessage"
    :placeholder="placeholder"       
    @input="input"
    style="max-width: 30rem; margin: 10px;"
  >
    <SfSelectOption v-for="(option, key) in options" :key="key" :value="option.value">
      {{option.label}}
    </SfSelectOption>
    <template #label>
      CUSTOM LABEL
    </template>
  </SfSelect>`,
});
UseLabelSlot.args = { ...Common.args };
