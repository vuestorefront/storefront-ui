import Form from "./Form";

export default {
  title: "Examples/Form",
  component: Form,
};

const Template = (args, { argTypes }) => ({
  components: { Form },
  props: Object.keys(argTypes),
  template: `<Form />`,
});

export const Common = Template.bind({});
