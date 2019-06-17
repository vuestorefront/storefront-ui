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
        <SfHeading :level="1">
          Cashmere Sweater
          <template v-slot:subtitle>
            #YOURLOOK
          </template>
        </SfHeading>
        <p></p>
        <SfHeading :level="2">
          Show how YOU wear it 
          <template v-slot:subtitle>
            #YOURLOOK
          </template>
        </SfHeading>
        <p></p>
        <SfHeading class="sf-heading--underline" :level="2">
          Saved for later
          <template v-slot:subtitle>
            9 items
          </template>
        </SfHeading>
        <p></p>
        <SfHeading title="Saved for later" subtitle="#YOURLOOK" :level="1" />
        <p></p>
        <SfHeading title="Saved for later" subtitle="#YOURLOOK" :level="2" />
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
