import Error from "./Error";
export default {
  title: "Pages/Error",
  component: Error,
};

const Template = (args, { argTypes }) => ({
  components: { Error },
  props: Object.keys(argTypes),
  template: `<Error />`,
});

export const Common = Template.bind({});
Common.args = {};
