import Product from "./Product";
export default {
  title: "Pages/Product",
  component: Product,
};

const Template = (args, { argTypes }) => ({
  components: { Product },
  props: Object.keys(argTypes),
  template: `<Product />`,
});

export const Common = Template.bind({});
Common.args = {};
