import Default from "./Default";
export default {
  title: "Templates/Default",
  component: Default,
};

const Template = (args, { argTypes }) => ({
  components: { Default },
  props: Object.keys(argTypes),
  template: `<Default />`,
});

export const Common = Template.bind({});
Common.args = {};
