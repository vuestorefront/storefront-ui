// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfHeading from "./SfHeading.vue";

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

storiesOf("Atoms|[WIP]Heading", module)
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
            ["null", "sf-heading--modifier"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfHeading },
      template: `<div style="max-width: 666px">
        <sf-heading :level="2" class="sf-heading--underline">
          Match it witch
          <template v-slot:subtitle>9 Items</template>
        </sf-heading>
        <p></p>
        <sf-heading :level="2">
          Share your look
          <template v-slot:subtitle>#YOURLOOK</template>
        </sf-heading>
        <p></p>
        <sf-heading :level="2">
          Share your look
        </sf-heading>
        <p></p>
        <sf-heading :level="1" class="sf-heading--left">
          Cashmere Sweater
        </sf-heading>
      </div>`
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import SfHeading from "@storefrontui/vue/dist/SfHeading.vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}
       `
      }
    }
  );
