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

storiesOf("Molecules|[WIP]Image", module)
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
      data() {
        return {
          row: {
            display: "flex"
          },
          margin: {
            marginLeft: "10px"
          }
        };
      },
      components: { SfImage },
      template: `
      <div :style="row">
        <div>
          <SfImage
            style="width: 162px; height: 162px"
            src="https://source.unsplash.com/162x162/"
            :alt="angelina_trn"
            :class="customClass"
          >
          angelina_trn
          </SfImage>
        </div>
        <div :style="margin">
          <SfImage
            style="width: 162px; height: 162px"
            src="https://source.unsplash.com/162x162/"
            :alt="trn_angelina"
            :class="customClass"
          >
          trn_angelina
          </SfImage>
        </div>
      </div>`
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
