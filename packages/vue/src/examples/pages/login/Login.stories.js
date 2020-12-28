import Login from "./Login.vue";
export default {
  title: "Pages/Login & Sign-in",
  component: Login,
};

const Template = (args, { argTypes }) => ({
  components: { Login },
  props: Object.keys(argTypes),
  template: `<Login />`,
});

export const Common = Template.bind({});
Common.args = {};
