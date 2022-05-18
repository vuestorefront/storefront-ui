
import DividerBase from "../../components/Divider/DividerBase.vue";

export default {
  title: "SFUI Components/Divider",
  component: DividerBase,
  parameters: {
    docs: {
      description: {
        component:
          "The divider component. [link to component docs on the page]",
      },
    },
  },
};

const Template = () => ({
  components: { DividerBase },
  template: `
    <DividerBase />
    `
});

export const Common = Template.bind({});