import { storiesOf } from "@storybook/vue";
import ThankYou from "./ThankYou";
storiesOf("Pages|Thank you", module).add("Common", () => ({
  components: { ThankYou },
  template: `<ThankYou />`
}));
