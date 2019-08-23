// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, select } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";

import SfButton from "./SfButton.vue";

// use this to document scss vars
const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$button-color", "$c-text-on-dark", "Default button text color"],
    [
      "$button-background-color",
      "$c-green-primary",
      "Default button background color"
    ],
    ["$button-border-radius", "0", "Button border radius"],
    ["$button-text-transform", "uppercase", "Transform button text"],
    [
      "$button-desktop-padding",
      "0.9375rem 2.5rem",
      "Button spacing on desktop screens"
    ],
    [
      "$button-desktop-font-size",
      "1.125rem",
      "Button font size on desktop screens"
    ],
    [
      "$button-mobile-padding",
      "0.5rem 1.7rem",
      "Button spacing on mobile screens"
    ],
    [
      "$button-mobile-font-size",
      "0.75rem",
      "Button font size on mobile screens"
    ]
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
          default: select(
            "CSS Modifier",
            [
              "null",
              "color-primary",
              "color-secondary",
              "color-warning",
              "color-danger",
              "color-info",
              "color-success",
              "sf-button--full-width",
              "sf-button--full-width"
            ],
            "null"
          )
        }
      },
      template: `
        <SfButton :class="customClass">Hello world</SfButton>`
    }),
    {
      info: {
        summary: `
        <h2>
          Description
        </h2>
        <p>
          Basic button component,
          called by <code>&lt;SfButton&gt;</code>.
        </p>
        <h2>Usage</h2>
        <pre><code>import { SfButton } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        `
      }
    }
  );
