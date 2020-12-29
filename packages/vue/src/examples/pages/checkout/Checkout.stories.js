import Checkout from "./Checkout.vue";
export default {
  title: "Pages/Checkout",
  component: Checkout,
};

const Template = (args, { argTypes }) => ({
  components: { Checkout },
  props: Object.keys(argTypes),
  template: `<Checkout />`,
});

export const Common = Template.bind({});
Common.args = {};
