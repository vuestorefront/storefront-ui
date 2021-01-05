import ThankYou from "./ThankYou";
export default {
  title: "Pages/ThankYou",
  component: ThankYou,
};

const Template = (args, { argTypes }) => ({
  components: { ThankYou },
  props: Object.keys(argTypes),
  template: `<ThankYou />`,
});

export const Common = Template.bind({});
Common.args = {};
