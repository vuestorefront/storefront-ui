import { storiesOf } from "@storybook/vue";
import Product from "./Product";
storiesOf("Pages|Product", module).add("Common", () => ({
  components: { Product },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<Product />`,
}));
