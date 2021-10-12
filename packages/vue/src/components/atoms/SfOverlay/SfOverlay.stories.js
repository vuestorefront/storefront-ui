import { SfOverlay } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Overlay",
  component: SfOverlay,
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
        ],
      },
      table: {
        category: "Props",
      },
      defaultValue: "sf-fade",
      description:
        "Transition effect to apply when overlay visibility is changed",
    },
    visible: {
      control: "boolean",
      table: {
        category: "Props",
      },
      description: "Visibility state",
    },
    click: { action: "Overlay clicked!", table: { category: "Events" } },
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
