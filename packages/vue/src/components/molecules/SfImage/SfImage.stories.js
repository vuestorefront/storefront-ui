// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfImage from "./SfImage.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [["$component-size", "1.438rem", "size of checkmark"]]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [["input", "event emited when option is selected"]]
};

storiesOf("Molecules|[WIP] Image", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        editableProp: {
          default: text("(prop) propname")
        },
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-image--modifier"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfImage },
      template: `<SfImage
        :class="customClass"
        src="https://source.unsplash.com/random/300x300"
        alt="angelina_trn"
      >
        angelina_trn
      </SfImage>`
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import { SfImage } from "@storefrontui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}
       `
      }
    }
  );
