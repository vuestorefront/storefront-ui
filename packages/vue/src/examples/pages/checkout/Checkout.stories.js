/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import Checkout from "./Checkout.vue";
storiesOf("Pages|Checkout", module).add("Common", () => ({
  components: { Checkout },
  template: `<Checkout />`
}));
