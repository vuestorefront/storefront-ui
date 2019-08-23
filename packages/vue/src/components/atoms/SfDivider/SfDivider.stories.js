// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfDivider from "./SfDivider.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$divider__color", "$c-light-primary", "Divider line color"]
  ]
};

storiesOf("Atoms|Divider", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfDivider },
      template: `<SfDivider />`
    }),
    {
      info: {
        summary: `<p>Divider element.</p>
       <h2>Usage</h2>
       <pre><code>import { SfDivider } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}`
      }
    }
  );
