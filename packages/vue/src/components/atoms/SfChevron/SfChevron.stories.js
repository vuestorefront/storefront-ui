import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfChevron from "@/components/atoms/SfChevron/SfChevron.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$chevron-duration", "0.5s !default;", "transition duration for chevron"],
    [
      "$chevron-easing",
      "cubic-bezier(0.25, 1.7, 0.35, 0.8) !default;",
      "transition easing for chevron"
    ],
    ["$chevron-size", "20px !default;", "size for chevron"],
    ["$chevron__bar-color", "$c-black !default;", "color fill for chevron"]
  ]
};
const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    ["sf-chevron--top", "change chevron direction from bottom to top"]
  ]
};

const summary = `<h2>Usage</h2>
<pre><code>import { SfChevron } from "@storefront-ui/vue"</code></pre>
${generateStorybookTable(scssTableConfig, "SCSS variables")}
${generateStorybookTable(cssTableConfig, "CSS modifiers")}`;

storiesOf("Atoms|Chevron", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      props: {
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-chevron--top": "sf-chevron--top"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      components: {
        SfChevron
      },
      template: '<SfChevron :class="customClass" />'
    }),
    {
      info: {
        summary
      }
    }
  )
  .add(
    "[slot] default",
    () => ({
      components: {
        SfChevron
      },
      template: `<SfChevron>
        <img src='assets/chevron_down.svg' alt="">
      </SfChevron>`
    }),
    {
      info: {
        summary
      }
    }
  );
