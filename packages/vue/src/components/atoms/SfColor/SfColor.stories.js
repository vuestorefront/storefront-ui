import { SfColor } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Color",
  component: SfColor,
  argTypes: {
    color: {
      control: "color",
      table: {
        category: "Props",
      },
    },
    hasBadge: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
    },
    classes: {
      control: {
        type: "select",
        options: ["sf-color--rounded", ""],
      },
      table: {
        category: "CSS Modifiers",
      },
    },
    selected: {
      control: "boolean",
      defaultValue: false,
      table: {
        category: "Props",
      },
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
