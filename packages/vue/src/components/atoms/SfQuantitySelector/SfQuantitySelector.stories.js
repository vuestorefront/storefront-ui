import { SfQuantitySelector } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/QuantitySelector",
  component: SfQuantitySelector,
  parameters: {
    cssprops: {
      "quantity-selector-justify-content": { value: "", control: "text" },
      "quantity-selector-height": { value: "3.25rem", control: "text" },
      "quantity-selector-width": { value: "6.75rem", control: "text" },
      "quantity-selector-background": {
        value: "var(--c-light)",
        control: "text",
      },
      "quantity-selector-font": { value: "", control: "text" },
      "quantity-selector-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "quantity-selector-font-size": {
        value: "var(--font-size--lg)",
        control: "text",
      },
      "quantity-selector-font-line-height": { value: "1.6", control: "text" },
      "quantity-selector-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "quantity-selector-border": {
        value:
          "var(--quantity-selector-border-style, solid) var(--quantity-selector-border-color, var(--c-light))",
        control: "text",
      },
      "quantity-selector-border-width": { value: "0", control: "text" },
      "quantity-selector-text-shadow": {
        value: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        control: "text",
      },
      "button-height": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-padding": {
        value: "var(--spacer-2xs) var(--spacer-xs) 0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-background": {
        value: "transparent",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-color": {
        value: "var(--c-text)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-box-shadow": {
        value: "none",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-bar-display": {
        value: "none",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-height": {
        value: "var(--quantity-selector-height, 3.25rem)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-padding": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-margin": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-border": {
        value: "0",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-text-align": {
        value: "center",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-border-radius": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-size": {
        value: "1.625rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "input-width": {
        value: "9rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      description: {
        component:
          "The Component with input to choose numeric values and describe quantity. It's Vue 2 functional component.",
      },
    },
  },
  decorators: [
    () => ({ template: '<div style="max-width: 375px;"><story /></div>' }),
  ],
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-quantity-selector--secondary",
          "sf-quantity-selector--transparent",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    qty: {
      control: "number",
      table: {
        category: "Props",
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: 1,
        },
      },
      description: "Sets quantity value",
      defaultValue: 1,
    },
    disabled: {
      control: "boolean",
      table: {
        category: "Props",
      },
      defaultValue: false,
      description: "Sets component state to disabled",
    },
    min: {
      control: "number",
      defaultValue: null,
      table: {
        category: "Props",
        defaultValue: {
          summary: "null",
        },
      },
      description: "Minimum allowed quantity.",
    },
    max: {
      control: "number",
      defaultValue: null,
      table: {
        category: "Props",
        defaultValue: {
          summary: "null",
        },
      },
      description: "Maximum allowed quantity.",
    },
    blur: {
      action: "Blur event emitted",
      table: {
        category: "Events",
      },
      description: "Emits when input field loses focus",
    },
    "v-model": {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfQuantitySelector },
  props: Object.keys(argTypes),
  data() {
    return {
      inputValue: this.qty,
    };
  },
  template: `
  <SfQuantitySelector
    v-model="inputValue"
    :disabled="disabled"
    :min="min"
    :max="max"
    aria-label="Quantity"
    :class="classes"
    @blur="blur"
  />`,
});

export const Common = Template.bind({});
