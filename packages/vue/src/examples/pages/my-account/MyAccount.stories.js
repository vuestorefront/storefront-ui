/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import MyAccount from "./MyAccount";
storiesOf("Pages|My account", module).add("Common", () => ({
  components: { MyAccount },
  template: `<MyAccount />`
}));
