import { SfColor } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Color",
  component: SfColor,
  parameters: {
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
