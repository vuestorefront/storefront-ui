// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfButton from "./SfButton.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$button-padding", "1rem 2.5rem !default;", "padding for button"],
    [
      "$button-padding-desktop",
      "0.9375rem 2.5rem !default;",
      "padding for button on desktop"
    ],
    ["$button-color", "$c-text-on-dark !default;", "color for button"],
    [
      "$button-background-color",
      "$c-green-primary !default;",
      "background-color for button"
    ],
    [
      "$button-font-family",
      "$body-font-family-secondary !default;",
      "font family for button"
    ],
    [
      "$button-font-size",
      "$font-size-small-mobile !default;",
      "font size for button"
    ],
    [
      "$button-font-size-desktop",
      "$font-size-small-desktop !default;",
      "font size for button on mobile"
    ],
    [
      "$button-font-weight",
      "$body-font-weight-secondary !default;",
      "font weight for btton"
    ],
    ["$button-line-height", "1.6 !default;", "line height for button"],
    [
      "$button--outline-border",
      "2px !default;",
      "border width for outline button"
    ]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-button--full-width", "change short button to full width button"],
    [".sf-button--outline", "transform fill button to outline button"]
  ]
};

storiesOf("Atoms|Button", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfButton },
      props: {
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              "sf-button--full-width": "sf-button--full-width",
              "sf-button--outline": "sf-button--outline",
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
      template: `<SfButton :class="customClass">Hello world</SfButton>`
    }),
    {
      info: {
        summary: `<h2>Usage</h2>
        <pre><code>import { SfButton } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(cssTableConfig, "CSS modifiers")}`
      }
    }
  );
