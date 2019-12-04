/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfDivider from "./SfDivider.vue";

storiesOf("Atoms|Divider", module).add("Default", () => ({
  components: { SfDivider },
  template: `<SfDivider />`
}));
