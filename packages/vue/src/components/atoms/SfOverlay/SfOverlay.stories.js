import { SfOverlay } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Overlay",
  component: SfOverlay,
  argTypes: {
    transition: {
      control: {
        type: "select",
        options: [
          "sf-collapse-bottom",
          "sf-collapse-top",
          "sf-slide-left",
          "sf-slide-right",
          "sf-expand",
        ] 
      },
      table: {
        category: "Props",
      },
      defaultValue: "sf-fade",
    },
    visible: {
      control: "boolean",
      table: {
        category: "Props",
      },
    },
    click: { action: "Overlay clicked!", table: { category: "Events" } },
  },
  parameters: {
    docs: {
      inlineStories: false,
      iframeHeight: "300px",
      description: {
        component:
          "The fullscreen overlay, emitting click events. It's Vue 2 functional component.",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfOverlay },
  props: Object.keys(argTypes),
  template: `<SfOverlay :visible="visible" :transition="transition" @click="click"/>`,
});

export const Common = Template.bind({});
Common.args = {
  visible: true,
};

export const WithFadeTransition = Template.bind({});
WithFadeTransition.args = {
  ...Common.args,
  transition: "sf-fade",
};

export const Visible = Template.bind({});
Visible.args = {
  ...Common.args,
  visible: true,
};
