/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import SigIn from "./SignIn.vue";

storiesOf("Pages|Sign In", module).add("Default", () => ({
  components: { SigIn },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<SigIn />`
}));
