import { storiesOf } from "@storybook/vue";

import SfAlert from "./SfAlert.vue";

const template = className => `
<SfAlert message='Default message via props' class="${className}">
</SfAlert>
`;

storiesOf("Alert", module).add("with props: message", () => ({
  components: { SfAlert },
  template: template("sf-alert--info")
}));
