import { storiesOf } from "@storybook/vue";
import DetailedCart from "./DetailedCart";
storiesOf("Pages|DetailedCart", module).add("Common", () => ({
  components: { DetailedCart },
  template: `<DetailedCart />`,
}));
