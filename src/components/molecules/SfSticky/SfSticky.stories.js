// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfSticky from "./SfSticky.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$component-size", "1.438rem", "size of checkmark"]
  ]
};

// use this to document events
const eventsTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    ["input", "event emited when option is selected"]
  ]
};

// storiesOf("SfSticky", module)
//   .addDecorator(withKnobs)
//   .add(
//     "[slot] default",
//     () => ({
//       props: {
//         editableProp: {
//           default: text("(prop) propname")
//         },
//         customClass: {
//           default: select(
//             "CSS Modifier",
//             ["null", "sf-sf-sticky--modifier"],
//             "null",
//             "CSS-Modifiers"
//           )
//         }
//       },
//       components: { SfSticky },
//       template: `<SfSticky
//         :class="customClass"
//       >
//       </SfSticky>`
//     }),
//     {
//      info: {
//        summary: `<p>Component description.</p>
//        <h2>Usage</h2>
//        <pre><code>import SfSticky from "@storefrontui/vue/dist/SfSticky.vue"</code></pre>
//        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
//        ${generateStorybookTable(eventsTableConfig, "Events")}
//        `
//      }
//    }
// );
