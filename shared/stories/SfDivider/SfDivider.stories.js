
import SfDivider from "../../components/SfDivider/SfDivider.vue";

export default {
  title: "SFUI Components/Divider",
  component: SfDivider,
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
  components: { SfDivider },
  template: `
    <SfDivider />
    `
});

export const Common = Template.bind({});