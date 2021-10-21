import { SfChevron, SfIcon } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Chevron",
  component: SfChevron,
  parameters: {
    cssprops: {
      "chevron-position": { value: "relative", control: "text" },
      "chevron-size": { value: "1.25rem", control: "text" },
      "chevron-background": { value: "transparent", control: "text" },
      "chevron-color": { value: "var(--c-black)", control: "text" },
      "chevron-translateX": {
        value:
          "0), var(--chevron-translateY, -50%), 0) rotate(var(--chevron-rotate, 45deg)",
        control: "text",
      },
      "chevron-rotate": {
        value: "-45deg",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "chevron-translateY": {
        value: "150%",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },

    docs: {
      description: {
        component: "The chevron component. It's Vue 2 functional component.",
      },
    },
  },
  argTypes: {
    classes: {
      control: {
        type: "select",
        options: [
          "",
          "sf-chevron--top",
          "sf-chevron--left",
          "sf-chevron--right",
        ],
      },
      description: "CSS classes to modify component styling",
      table: {
        category: "CSS Modifiers",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfChevron },
  props: Object.keys(argTypes),
  template: `<SfChevron :class="classes" />`,
});

export const Common = Template.bind({});

export const Top = Template.bind({});
Top.args = {
  classes: "sf-chevron--top",
};

export const Right = Template.bind({});
Right.args = {
  classes: "sf-chevron--right",
};

export const Left = Template.bind({});
Left.args = {
  classes: "sf-chevron--left",
};

export const WithDefaultSlot = (args, { argTypes }) => ({
  components: { SfChevron, SfIcon },
  props: Object.keys(argTypes),
  template: `
  <SfChevron :class="classes">
    <SfIcon icon="arrow_left" size="14px"/> 
  </SfChevron>`,
});
