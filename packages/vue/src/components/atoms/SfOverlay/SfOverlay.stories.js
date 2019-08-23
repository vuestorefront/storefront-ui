// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfOverlay from "./SfOverlay.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    [
      "$overlay__overlay-background-color",
      "$c-black",
      "background color of the overlay"
    ],
    ["$overlay__opacity", "0.8", "opacity of the overlay"]
  ]
};

storiesOf("Atoms|Overlay", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfOverlay },
      template: `<SfOverlay></SfOverlay>`
    }),
    {
      info: {
        summary: `<p>Overlay.</p>
       <h2>Usage</h2>
       <pre><code>import { SfOverlay } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       `
      }
    }
  );
