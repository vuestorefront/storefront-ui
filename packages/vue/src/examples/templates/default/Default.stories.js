import { storiesOf } from "@storybook/vue";
import Default from "./Default";
storiesOf("Templates|Default", module).add("Common", () => ({
  components: { Default },
  template: `<Default />`,
}));
