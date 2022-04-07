import SfSpinner from "../../components/SfSpinner/SfSpinner.vue";

export default {
  title: "SFUI Components/Spinner",
  component: SfSpinner,
  parameters: {
    docs: {
      description: {
        component:
          "The component to show users that loading is underway of content. [link to component docs on the page]",
      },
    },
  },
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfSpinner },
  props: Object.keys(argTypes),
  template: `
  <div>
    <SfSpinner />
  </div>`
});

export const Common = Template.bind({});