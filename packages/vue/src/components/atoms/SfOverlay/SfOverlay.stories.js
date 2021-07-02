import { SfOverlay } from "@storefront-ui/vue";

export default {
  title: "Components/Atoms/Overlay",
  component: SfOverlay,
  argTypes: {
    transition: {
      control: "text",
      table: {
        category: "Props",
      },
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
