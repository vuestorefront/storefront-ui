import { SfChevron, SfIcon } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Chevron",
  component: SfChevron,
  parameters: {
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
      description: "CSS modifiers",
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
