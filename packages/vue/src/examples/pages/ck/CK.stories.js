import { storiesOf } from "@storybook/vue";
import CK from "./CK";
storiesOf("Pages|CK", module).add("Common", () => ({
  components: { CK },
  template: `<CK />`,
}));
