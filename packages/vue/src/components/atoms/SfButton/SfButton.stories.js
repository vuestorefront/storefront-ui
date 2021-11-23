import { SfButton } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Button",
  component: SfButton,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "button-color": { value: "", control: "text" },
      "button-size": { value: "var(--button-width)", control: "text" },
      "button-display": { value: "flex", control: "text" },
      "button-padding": { value: "", control: "text" },
      "button-background": { value: "", control: "text" },
      "button-transition": { value: "", control: "text" },
      "button-text-transform": { value: "", control: "text" },
      "button-text-decoration": { value: "", control: "text" },
      "button-cursor": { value: "pointer", control: "text" },
      "button-border-radius": { value: "0", control: "text" },
      "button-wrap": { value: "", control: "text" },
      "button-font": { value: "", control: "text" },
      "button-font-weight": {
        value: "var(--font-weight--semibold)",
        control: "text",
      },
      "button-font-size": { value: "var(--font-size--base)", control: "text" },
      "button-font-line-height": { value: "1.2", control: "text" },
      "button-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "button-border": { value: "", control: "text" },
      "button-border-width": { value: "", control: "text" },
      "button-box-shadow-transition": {
        value:
          "opacity var(--button-box-shadow-transition-opacity-duration, 200ms) var(--button-box-shadow-transition-opacity-timing-function, ease-in-out), box-shadow var(--button-box-shadow-transition-box-shadow-duration, 200ms) var(--button-box-shadow-transition-box-shadow-timing-function, ease-in-out)",
        control: "text",
      },
      "button-box-shadow-opacity": { value: "", control: "text" },
      "button-box-shadow": { value: "", control: "text" },
      "link-color": {
        value: "var(--button-color, var(--c-light-variant))",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-width": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "button-border-color": {
        value: "",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "The base button component. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-button--outline",
          "sf-button--underlined",
          "sf-button--text",
          "sf-button--full-width",
          "sf-button--pure",
          "color-primary",
          "color-secondary",
          "color-light",
          "color-warning",
          "color-danger",
          "color-info",
          "color-success",
        ],
      },
      description: "CSS classes to modify component styling",
      table: {
        category: "CSS modifiers",
      },
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      description:
        "Equivalent of native button disabled attribute, allows focus for better accessibility",
    },
    link: {
      control: "text",
      defaultValue: undefined,
      table: {
        category: "Props",
        defaultValue: {
          summary: "null",
        },
      },
      description: "Link for 'a' tag.",
    },
    content: {
      control: "text",
      description:
        "Type here to fill the button (only for testing in Storybook). For development use default slot, described below, to change the content.",
    },
    onClick: { action: "Button clicked", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfButton },
  props: Object.keys(argTypes),
  template: `
  <SfButton
    :class="classes"
    :disabled="disabled" 
    @click="onClick"
    :link="link">
      {{content}}
  </SfButton>`,
});

export const Primary = Template.bind({});
Primary.args = {
  classes: "color-primary",
  content: "Shop now",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  ...Primary.args,
};

export const AsLink = Template.bind({});
AsLink.args = {
  ...Primary.args,
  classes: "sf-button--underlined",
  link: "https://storefrontui.io",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Primary.args,
  classes: "color-secondary",
};

export const Light = Template.bind({});
Light.args = {
  ...Primary.args,
  classes: "color-light",
};

export const Warning = Template.bind({});
Warning.args = {
  ...Primary.args,
  classes: "color-warning",
};

export const InDanger = Template.bind({});
InDanger.args = {
  ...Primary.args,
  classes: "color-danger",
};

export const Info = Template.bind({});
Info.args = {
  ...Primary.args,
  classes: "color-info",
};

export const Success = Template.bind({});
Success.args = {
  ...Primary.args,
  classes: "color-success",
};

export const WithDefaultSlot = (args, { argTypes }) => ({
  components: { SfButton },
  props: Object.keys(argTypes),
  template: `
  <SfButton
    :class="classes"
    :disabled="disabled"
    @click="onClick"
    :link="link">
    <template>
      <div v-html="content"/>
    </template>
  </SfButton>`,
});

WithDefaultSlot.args = {
  content: "<div>Custom slot</div>",
};
