/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import Layout from "./Layout";

storiesOf("Pages|Layout", module).add("Common", () => ({
  components: { Layout },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<Layout />`
}));
