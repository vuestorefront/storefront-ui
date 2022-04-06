
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
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfDivider },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfDivider />
  </div>`
});

export const Common = Template.bind({});