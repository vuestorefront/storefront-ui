import { storiesOf } from "@storybook/vue";
import Form from "./Form";
storiesOf("Others|Form", module).add("Common", () => ({
  components: { Form },
  template: `<Form />`,
}));
