import MyAccount from "./MyAccount";
export default {
  title: "Pages/MyAccount",
  component: MyAccount,
};

const Template = (args, { argTypes }) => ({
  components: { MyAccount },
  props: Object.keys(argTypes),
  template: `<MyAccount />`,
});

export const Common = Template.bind({});
Common.args = {};
