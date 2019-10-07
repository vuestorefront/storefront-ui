// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfBadge from "./SfBadge.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$badge-padding", "0.3125rem 0.625rem", "padding for badge"],
    ["$badge-color", "$c-white", "color for text"],
    ["$badge-background-color", "$c-primary;", "color for badge"],
    [
      "$badge-font-family",
      "$body-font-family-secondary",
      "font family for badge"
    ],
    ["$badge-font-size", "$font-size-small-desktop", "font size for badge"],
    ["$badge-font-weight", "500", "font weight for badge"],
    ["$badge-line-height", "1.6", "line height for badge"]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-badge--full-width", "change short badge to full width badge"]
  ]
};

storiesOf("Atoms|Badge", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfBadge },
      props: {
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-button--full-width": "sf-button--full-width"
            },
            "",
            { display: "multi-select" }
          )
        }
      },
      template: `<SfBadge :class="customClass">LIMITED</SfBadge>`
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfBadge } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(cssTableConfig, "CSS modifiers")}`
      }
    }
  );
