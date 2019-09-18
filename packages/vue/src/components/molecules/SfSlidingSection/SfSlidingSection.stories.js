// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfSlidingSection from "./SfSlidingSection.vue";

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

storiesOf("Molecules|SlidingSection", module)
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
            ["null", "sf-card--modifier"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfSlidingSection },
      template: `<div style="max-width: 1240px; margin: auto;">
        <SfSlidingSection>
          <template #top>
              <div style="background-color: #5ECE7B; height: 150px"></div>
          </template>
          <template #bottom>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nisl id felis consectetur accumsan. In porttitor consequat sollicitudin. Praesent condimentum augue sem, id eleifend elit efficitur sed. Nam fringilla quis felis sit amet rutrum. Vivamus consequat eros lacus, quis mattis felis posuere nec. In pellentesque velit justo, vel ultrices diam laoreet eget. Donec vel efficitur velit, ut feugiat magna. In et lectus vitae odio semper aliquam non at nunc. Sed semper pellentesque auctor. Phasellus augue purus, pretium id pretium eu, ullamcorper nec magna.
            </div>
          </template>
        </SfSlidingSection>
      </div>`
    }),
    {
      info: {
        summary: `<p>Component description.</p>
       <h2>Usage</h2>
       <pre><code>import { SfSlidingSection } from "@storefront-ui/vue"</code></pre>
       ${generateStorybookTable(scssTableConfig, "SCSS variables")}
       ${generateStorybookTable(eventsTableConfig, "Events")}`
      }
    }
  );
