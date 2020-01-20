/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import Login from "./Login.vue";
storiesOf("Pages|Login & Sign in", module).add("Common", () => ({
  components: { Login },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<Login />`
}));
