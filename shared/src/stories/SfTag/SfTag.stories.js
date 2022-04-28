
import SfTag from "../../components/SfTag/SfTag.vue";

export default {
  title: "SFUI Components/Divider",
  component: SfTag,
  parameters: {
    docs: {
      description: {
        component:
          "The divider component. [link to component docs on the page]",
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfTag },
  template: `
    <SfTag />
    `
});

export const Common = Template.bind({});