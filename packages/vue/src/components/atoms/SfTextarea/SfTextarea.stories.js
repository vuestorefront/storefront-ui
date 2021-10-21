import { SfTextarea } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Textarea",
  component: SfTextarea,
  parameters: {
    cssprops: {
      "textarea-position": { value: "relative" },
      "textarea-resize": { value: "auto" },
      "textarea-color": { value: "" },
      "textarea-font": { value: "" },
      "textarea-font-weight": { value: "var(--font-weight--normal)" },
      "textarea-font-size": { value: "var(--font-size--base)" },
      "textarea-font-line-height": { value: "1" },
      "textarea-font-family": { value: "var(--font-family--secondary)" },
      "textarea-height": { value: "" },
      "textarea-width": { value: "" },
      "textarea-padding": { value: "var(--spacer-sm)" },
      "textarea-border": {
        value:
          "var(--textarea-border-style, solid) var(--textarea-border-color, var(--c-link))",
      },
      "textarea-border-width": { value: "1px" },
      "textarea-label-font": { value: "" },
      "textarea-label-font-weight": { value: "var(--font-weight--normal)" },
      "textarea-label-font-size": { value: "var(--font-size--base)" },
      "textarea-label-font-line-height": { value: "1" },
      "textarea-label-font-family": { value: "var(--font-family--secondary)" },
      "textarea-label-position": { value: "absolute" },
      "textarea-label-padding": { value: "var(--spacer-sm)" },
      "textarea-label-top": { value: "" },
      "textarea-label-bottom": { value: "" },
      "textarea-label-left": { value: "0" },
      "textarea-label-right": { value: "" },
      "textarea-label-transform": { value: "" },
      "textarea-label-color": { value: "var(--c-link)" },
      "textarea-label-transition": {
        value: "transform 150ms linear, font-size 150ms linear",
      },
      "textarea-label-required": { value: "" },
      "textarea-error-message-color": { value: "var(--c-danger)" },
      "textarea-error-message-font": { value: "" },
      "textarea-error-message-font-weight": {
        value: "var(--font-weight--medium)",
      },
      "textarea-error-message-font-size": { value: "var(--font-size--xs)" },
      "textarea-error-message-font-line-height": { value: "1.2" },
      "textarea-error-message-font-family": {
        value: "var(--font-family--secondary)",
      },
      "textarea-border-color": {
        value: "var(--c-primary)",
        description: "Overridden other component's CSS variable",
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
