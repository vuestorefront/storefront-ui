/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import DetailedCart from "./DetailedCart";
storiesOf("Pages|DetailedCart", module).add("Common", () => ({
  components: { DetailedCart },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<DetailedCart />`
}));
