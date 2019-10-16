// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, optionsKnob as options } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfBadge from "./SfBadge.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$badge-padding", "0.3125rem 0.625rem", "padding for badge"],
    ["$badge-color", "$c-white", "color for text"],
    ["$badge-background-color", "$c-primary;", "color for badge"],
    ["$badge-font-family", "$body-font-family-secondary", "font family for badge"],
    ["$badge-font-size", "$font-size-small-desktop", "font size for badge"],
    ["$badge-font-weight", "500", "font weight for badge"],
    ["$badge-line-height", "1.6", "line height for badge"]
  ]
};

// use this to document css modifier
const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-badge--full-width", "change short badge to full width badge"]
  ]
};

storiesOf("Atoms|Badge", module)
  .addDecorator(withKnobs)
  .add(
    "Default",
    () => ({
      props: {
        customLabel: {
          default: text("(slot) default", "LIMITED")
        },
        customClass: {
          default: options(
            "CSS Modifier",
            {
              "sf-badge--full-width": "sf-badge--full-width",
              "color-primary": "color-primary",
              "color-secondary": "color-secondary",
              "color-warning": "color-warning",
              "color-danger": "color-danger",
              "color-info": "color-info",
              "color-success": "color-success"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      components: { SfBadge },
      template: `<SfBadge
        :class="customClass">{{customLabel}}</SfBadge>`
    }),
    // {
    //   info: {
    //     summary: `<p><!-- Component description. --></p>
    //    <h2>Usage</h2>
    //    <pre><code>import { SfBadge } from "@storefront-ui/vue"</code></pre>
    //    ${generateStorybookTable(scssTableConfig, "SCSS variables")}
    //    ${generateStorybookTable(cssTableConfig, "CSS modifier")}`
    //   }
    // }
  );
