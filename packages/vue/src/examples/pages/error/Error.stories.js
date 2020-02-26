import { storiesOf } from "@storybook/vue";
import Error from "./Error";
storiesOf("Pages|Error", module).add("Common", () => ({
  components: { Error },
  template: `<Error />`
}));
