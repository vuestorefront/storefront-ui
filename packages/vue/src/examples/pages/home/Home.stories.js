import { storiesOf } from "@storybook/vue";
import Home from "./Home";
storiesOf("Pages|Home", module).add("Common", () => ({
  components: { Home },
  mounted() {
    document.body.style.setProperty("margin", "0");
  },
  beforeDestroy() {
    document.body.style.removeProperty("margin");
  },
  template: `<Home />`,
}));
