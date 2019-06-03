/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import { generateStorybookTable } from "@/helpers";
import SfArrow from "./SfArrow.vue";

const scssTableConfig = {
  tableHeadConfig: ["NAME", "DEFAULT", "DESCRIPTION"],
  tableBodyConfig: [
    ["$arrow__button-color", "$c-light-primary", ""],
    ["$arrow__button-color--hover", "$c-dark-primary", ""],
    ["$arrow__button-shadow", "0 5px 12px -6px rgba($c-dark-primary, 0)", ""],
    [
      "$arrow__button-shadow--right",
      "0 -5px 12px -5px rgba($c-dark-primary, 0.6)",
      ""
    ],
    ["$arrow__icon-color", "$c-white", ""],
    ["$arrow__icon-color--hover", "$c-dark-primary", ""]
  ]
};

const cssTableConfig = {
  tableHeadConfig: ["NAME", "DESCRIPTION"],
  tableBodyConfig: [
    [".sf-arrow--long", "sets default arrow to long"],
    [".sf-arrow--right", "transform default left arrow to right arrow"]
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
      <SfArrow :class="customClass">
      </div>
      `
    }),
    {
      info: true,
      notes
    }
  );
