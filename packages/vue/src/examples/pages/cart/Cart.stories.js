/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import Cart from "./Cart";
storiesOf("Pages|Cart", module).add("Common", () => ({
  components: { Cart },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<Cart />`
}));
