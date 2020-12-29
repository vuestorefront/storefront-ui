import DetailedCart from "./DetailedCart";
export default {
  title: "Pages/DetailedCart",
  component: DetailedCart,
};

const Template = (args, { argTypes }) => ({
  components: { DetailedCart },
  props: Object.keys(argTypes),
  template: `<DetailedCart />`,
});

export const Common = Template.bind({});
Common.args = {};
