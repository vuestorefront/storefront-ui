import { SfColor } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Color",
  component: SfColor,
  parameters: {
    cssprops: {
      "color-width": { value: "var(--color-size, 2.5rem)", control: "text" },
      "color-height": { value: "var(--color-size, 2.5rem)", control: "text" },
      "color-background": { value: "", control: "text" },
      "color-border-radius": { value: "", control: "text" },
      "color-box-shadow-transition": {
        value:
          "opacity var(--color-box-shadow-transition-opacity-duration, 200ms) var(--color-box-shadow-transition-opacity-timing-function, ease-in-out), box-shadow var(--color-box-shadow-transition-box-shadow-duration, 200ms) var(--color-box-shadow-transition-box-shadow-timing-function, ease-in-out)",
        control: "text",
      },
      "color-box-shadow-opacity": { value: "", control: "text" },
      "color-box-shadow": {
        value:
          "var(--color-box-shadow-h-offset, 0px) var(--color-box-shadow-v-offset, 4px) var(--color-box-shadow-blur, 4px) var(--color-box-shadow-spread, 0px) var(--color-box-shadow-color, var(--c-black))",
        control: "text",
      },
      "color-box-shadow-transition-duration": {
        value: "150ms",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "badge-padding": {
        value: "var(--spacer-2xs)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "badge-border-radius": {
        value: "100%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "color-size": {
        value: "0.75rem",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      description: {
        component:
          "The color picker component button. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    color: {
      control: "color",
      table: {
        category: "Props",
      },
      description: "Sets picker color",
    },
    hasBadge: {
      control: "boolean",
      defaultValue: true,
      table: {
        category: "Props",
      },
      description: "Use badge for selected state on smartphone mode",
    },
    classes: {
      control: {
        type: "select",
        options: ["sf-color--rounded", ""],
      },
      table: {
        category: "CSS Modifiers",
      },
      description: "CSS classes to modify component styling",
    },
    selected: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
      description: "Sets select value",
    },
    onClick: { action: "toggle selected", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfColor },
  props: Object.keys(argTypes),
  template: `
  <SfColor 
    :color="color" 
    :selected="selected" 
    :has-badge="hasBadge"
    :aria-label="color"  
    style="margin: 10px;"
    @click="onClick"
    :class="classes" />`,
});

export const Common = Template.bind({});
Common.args = {
  color: "black",
};

export const Selected = Template.bind({});
Selected.args = {
  ...Common.args,
  selected: true,
};

export const WithColor = Template.bind({});
WithColor.args = {
  color: "red",
};
