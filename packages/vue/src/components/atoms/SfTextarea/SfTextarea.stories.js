import { SfTextarea } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Textarea",
  component: SfTextarea,
  parameters: {
    cssprops: {
      "textarea-position": { value: "relative", control: "text" },
      "textarea-resize": { value: "auto", control: "text" },
      "textarea-color": { value: "", control: "text" },
      "textarea-font": { value: "", control: "text" },
      "textarea-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "textarea-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "textarea-font-line-height": { value: "1", control: "text" },
      "textarea-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "textarea-height": { value: "", control: "text" },
      "textarea-width": { value: "", control: "text" },
      "textarea-padding": { value: "var(--spacer-sm)", control: "text" },
      "textarea-border": {
        value:
          "var(--textarea-border-style, solid) var(--textarea-border-color, var(--c-link))",
        control: "text",
      },
      "textarea-border-width": { value: "1px", control: "text" },
      "textarea-label-font": { value: "", control: "text" },
      "textarea-label-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "textarea-label-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "textarea-label-font-line-height": { value: "1", control: "text" },
      "textarea-label-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "textarea-label-position": { value: "absolute", control: "text" },
      "textarea-label-padding": { value: "var(--spacer-sm)", control: "text" },
      "textarea-label-top": { value: "", control: "text" },
      "textarea-label-bottom": { value: "", control: "text" },
      "textarea-label-left": { value: "0", control: "text" },
      "textarea-label-right": { value: "", control: "text" },
      "textarea-label-transform": { value: "", control: "text" },
      "textarea-label-color": { value: "var(--c-link)", control: "text" },
      "textarea-label-transition": {
        value: "transform 150ms linear, font-size 150ms linear",
        control: "text",
      },
      "textarea-label-required": { value: "", control: "text" },
      "textarea-error-message-color": {
        value: "var(--c-danger)",
        control: "text",
      },
      "textarea-error-message-font": { value: "", control: "text" },
      "textarea-error-message-font-weight": {
        value: "var(--font-weight--medium)",
        control: "text",
      },
      "textarea-error-message-font-size": {
        value: "var(--font-size--xs)",
        control: "text",
      },
      "textarea-error-message-font-line-height": {
        value: "1.2",
        control: "text",
      },
      "textarea-error-message-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "textarea-border-color": {
        value: "var(--c-primary)",
        control: "text",
      },
    },
    docs: {
      description: {
        component:
          "The multi-line text input control. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    value: {
      control: "text",
      defaultValue: "",
      table: {
        category: "Props",
      },
      description: "Current textarea value (`v-model`).",
    },
    label: {
      control: "text",
      table: {
        category: "Props",
        type: {
          summary: "string",
        },
      },
      description: "Textarea label.",
    },
    name: {
      control: "text",
      table: {
        category: "Props",
      },
      description: "Textarea name.",
    },
    cols: {
      control: "number",
      table: {
        category: "Props",
      },
      description:
        "The visible width of the text control. It must be a positive integer. If it is not specified, the default value is 20.",
    },
    rows: {
      control: "number",
      table: {
        category: "Props",
      },
      description: "The number of visible text lines for the control.",
    },
    minlength: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description:
        "The minimum number of characters required that the user should enter.",
    },
    maxlength: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description:
        "The maximum number of characters that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.",
    },
    wrap: {
      control: "text",
      table: {
        category: "Props",
      },
      description:
        "Indicates how the control wraps text. Possible values are soft, hard, off. Default value is soft.",
    },
    errorMessage: {
      control: "text",
      table: {
        category: "Props",
      },
      description:
        "Error message for textarea. It appears if `valid` is `false`.",
    },
    valid: {
      control: "boolean",
      defaultValue: true,
      table: {
        category: "Props",
      },
      description: "Validate value of textarea.",
    },
    required: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      description: "Native textarea required attribute.",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      description: "Native textarea disabled attribute.",
    },
    placeholder: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: "",
      description: "Placeholder for textarea.",
    },
    readonly: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      description: "With default false value the textarea is editable.",
    },
    change: { action: "Text area changed", table: { category: "Events" } },
    click: { action: "Text area focus", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfTextarea },
  props: Object.keys(argTypes),
  data() {
    return {
      textArea: this.value,
    };
  },
  template: `
  <SfTextarea
    v-model="textArea"
    :cols="cols"
    :rows="rows"
    :minlength="minlength"
    :maxlength="maxlength"
    :label="label"
    :name="name"
    :wrap="wrap"
    :valid="valid"
    :error-message="errorMessage"
    :required="required"
    :disabled="disabled"
    :placeholder="placeholder"
    @click="click"
    @change="change"
  />`,
});

export const Common = Template.bind({});

Common.args = {
  label: "First name",
  name: "first-name",
  cols: 40,
  rows: 10,
  wrap: "soft",
  errorMessage: "Required",
};
