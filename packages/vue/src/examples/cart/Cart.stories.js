import { storiesOf } from "@storybook/vue";
import Cart from "./Cart";
export default {
  title: "Examples/Cart",
  component: Cart,
  argTypes: {
    name: {
      control: "text",
      table: {
        category: "Props",
      },
      defaultValue: 0,
    },
    current: {
      control: "number",
      defaultValue: 0,
      table: {
        category: "Props",
      },
    },
    input: { action: "Address picked", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Cart },
  props: Object.keys(argTypes),
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<Cart />`,
});
export const Common = Template.bind({});
Common.args = {};
