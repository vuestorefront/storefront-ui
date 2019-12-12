/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import MyAccount from "./MyAccount";

storiesOf("Pages|My account", module).add("Default", () => ({
  components: { MyAccount },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<MyAccount />`
}));
