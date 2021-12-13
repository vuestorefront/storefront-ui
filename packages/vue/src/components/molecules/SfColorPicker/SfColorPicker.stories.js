import SfColorPicker from "./SfColorPicker.vue";
import SfColor from "../../atoms/SfColor/SfColor.vue";
const colors = [
  { label: "Sand", value: "sand", color: "#EDCBB9", selected: false },
  { label: "Mint", value: "mint", color: "#ABD9D8", selected: false },
  {
    label: "Light Gray",
    value: "light gray",
    color: "#F1F2F3",
    selected: false,
  },
  {
    label: "Vivid rose",
    value: "vivid rose",
    color: "#DB5593",
    selected: false,
  },
  { label: "Peach", value: "peach", color: "#F59F93", selected: false },
  {
    label: "Citrus",
    value: "citrus",
    color: "#FFEE97",
    selected: false,
  },
];

export default {
  title: "Components/Molecules/ColorPicker",
  component: SfColorPicker,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "color-picker-position": { value: "absolute", control: "text" },
      "color-picker-top": { value: "", control: "text" },
      "color-picker-right": { value: "", control: "text" },
      "color-picker-bottom": { value: "", control: "text" },
      "color-picker-align-items": { value: "", control: "text" },
      "color-picker-width": { value: "", control: "text" },
      "color-picker-overflow": { value: "", control: "text" },
      "color-picker-transform": { value: "", control: "text" },
      "color-picker-colors-height": { value: "", control: "text" },
      "color-picker-flex-direction": { value: "", control: "text" },
      "color-picker-justify-content": { value: "", control: "text" },
      "color-picker-padding": { value: "", control: "text" },
      "color-picker-label-margin": {
        value: "0 0 var(--spacer-xs)",
        control: "text",
      },
      "color-picker-label-color": { value: "var(--c-white)", control: "text" },
      "color-picker-label-font": { value: "", control: "text" },
      "color-picker-label-font-weight": {
        value: "var(--font-weight--bold)",
        control: "text",
      },
      "color-picker-label-font-size": {
        value: "var(--font-size--sm)",
        control: "text",
      },
      "color-picker-label-font-line-height": { value: "1.2", control: "text" },
      "color-picker-label-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "color-picker-opacity": { value: "0.8", control: "text" },
      "color-picker-open-padding": { value: "", control: "text" },
      "color-picker-open-button-transform-origin": {
        value: "",
        control: "text",
      },
      "color-picker-open-button-transform": { value: "", control: "text" },
      "color-picker-close-margin": { value: "", control: "text" },
      "color-picker-height": { value: "", control: "text" },
      "color-picker-animation-transform": { value: "", control: "text" },
      "overlay-z-index": {
        value: "auto",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "overlay-background": {
        value: "rgba(var(--c-black-base), 0.8)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-width": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-padding": {
        value: "var(--spacer-xs) var(--spacer-sm)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-font": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-text-transform": {
        value: "capitalize",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-color": {
        value: "var(--c-white)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "icon-size": {
        value: "0.875rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-background": {
        value: "transparent",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "color-picker-left": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "open-button-x": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "open-button-y": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "ColorPicker component utilizing [SfButton](https://docs.storefrontui.io/?path=/story/components-atoms-button--primary) with slot for [SfColor](https://docs.storefrontui.io/?path=/story/components-atoms-color--common) component",
      },
    },
  },
  decorators: [
    () => ({
      template:
        '<div style="position: relative; min-height: 250px;"><div>Switch to smaller viewport mode to view better</div><story /></div>',
    }),
  ],
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "sf-color-picker--vertical",
          "sf-color-picker--left sf-color-picker--vertical",
          "",
        ],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
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
      defaultValue: "",
      description: "Label for ColorPicker",
    },
    hasClose: {
      control: "boolean",
      table: {
        category: "Props",
      },
      description: "Close button state whether show it or not",
      defaultValue: false,
    },
    isOpen: {
      control: "boolean",
      defaultValue: 0,
      table: {
        category: "Props",
      },
      description: "ColorPicker is open",
    },
    colors: {
      control: "array",
      defaultValue: colors,
      description:
        "Changing colors (for testing purposes). For development, you can use default slot to place custom color element.",
    },
    "click:toggle": {
      action: "click:toggle event emitted",
      table: { category: "Events", type: { summary: null } },
      description:
        "Emits click:toggle when open/close button is clicked in mobile mode",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfColorPicker, SfColor },
  props: Object.keys(argTypes),
  template: `
  <SfColorPicker
    :class="classes"
    :label="label"
    :has-close="hasClose"
    :isOpen="isOpen"
    @click:toggle="() => {this['click:toggle'](); this.isOpen = !this.isOpen}"
  >
    <SfColor style="margin: 0.4375rem" v-for="color in colors" :key="color.value" :color="color.color" :selected="color.selected" @click="color.selected = !color.selected"/>
  </SfColorPicker>`,
});

export const Common = Template.bind({});
Common.args = {
  isOpen: true,
  label: "Choose color",
};

export const IsOpen = Template.bind({});
IsOpen.args = {
  ...Common.args,
};

export const WithCloseBtn = Template.bind({});
WithCloseBtn.args = {
  ...Common.args,
  hasClose: true,
};

export const VerticalDisplay = Template.bind({});
VerticalDisplay.args = {
  ...WithCloseBtn.args,
  classes: "sf-color-picker--vertical",
};

export const VerticalLeftDisplay = Template.bind({});
VerticalLeftDisplay.args = {
  ...WithCloseBtn.args,
  classes: "sf-color-picker--left sf-color-picker--vertical",
};
