import Home from "./Home";
export default {
  title: "Pages/Home",
  component: Home,
};

const Template = (args, { argTypes }) => ({
  components: { Home },
  props: Object.keys(argTypes),
  template: `<Home />`,
});

export const Common = Template.bind({});
Common.args = {};
