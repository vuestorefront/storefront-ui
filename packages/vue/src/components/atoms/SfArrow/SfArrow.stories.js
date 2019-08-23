/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfArrow from "./SfArrow.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$arrow__button-color", "$c-light-primary", "color for button"],
    [
      "$arrow__button-color--hover",
      "$c-dark-primary",
      "color for hovered button"
    ],
    [
      "$arrow__button-shadow",
      "0 5px 12px -6px rgba($c-dark-primary, 0)",
      "shadow for hovered button"
    ],
    [
      "$arrow__button-shadow--right",
      "0 -5px 12px -5px rgba($c-dark-primary, 0.6)",
      "shadow for hovered right arrow"
    ],
    ["$arrow__icon-color", "$c-white", "color for icon"],
    ["$arrow__icon-color--hover", "$c-dark-primary", "color for hovered icon"]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-arrow--long", "change short to long arrow"],
    [".sf-arrow--right", "transform left to right arrow"]
  ]
};

storiesOf("Atoms|Arrow", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfArrow },
      props: {
        customClass: {
          default: options(
            "CSS Modifiers",
            {
              null: "null",
              "sf-arrow--right": "sf-arrow--right",
              "sf-arrow--long": "sf-arrow--long"
            },
            "null",
            { display: "multi-select" }
          )
        }
      },
      template: `
      <div :style="{padding: '1rem', 'background-color': customClass.indexOf('sf-arrow--long') ? '' : '#F1F2F3'}">
      <SfArrow :class="customClass" />
      </div>
      `
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import { SfArrow } from "@storefront-ui/vue"</code></pre>
        ${generateStorybookTable(scssTableConfig, "SCSS variables")}
        ${generateStorybookTable(cssTableConfig, "CSS modifiers")}
        `
      }
    }
  );
