import Static from "./Static";
export default {
  title: "Pages/Static",
  component: Static,
};

const Template = (args, { argTypes }) => ({
  components: { Static },
  props: Object.keys(argTypes),
  template: `<Static />`,
});

export const Common = Template.bind({});
Common.args = {};
