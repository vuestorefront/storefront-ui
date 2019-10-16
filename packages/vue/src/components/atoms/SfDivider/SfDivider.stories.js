// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { generateStorybookTable } from "@/helpers";

import SfDivider from "./SfDivider.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$divider-border-color", "$c-light-primary", "border color for divider"]
  ]
};

storiesOf("Atoms|Divider", module).add(
  "Basic",
  () => ({
    components: { SfDivider },
    template: `<SfDivider />`
  }),
  {
    info: {
      summary: `<h2>Usage</h2>
      <pre><code>import { SfDivider } from "@storefront-ui/vue"</code></pre>
      ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
    }
  }
);
