/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, optionsKnob as options } from "@storybook/addon-knobs";
import notes from "./SfArrow.md";
import SfArrow from "./SfArrow.vue";

storiesOf("Atoms|[WIP]Arrow", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfArrow },
      props: {
        customClass: {
          default: options(
            "CSS Modifiers",
            { null: "null", "sf-arrow--right": "sf-arrow--right", "sf-arrow--long": "sf-arrow--long" },
            "null",
            { display: "multi-select" }
          )
        }
      },
      template: `
      <div style="padding: 1rem; background-color: #F1F2F3">
      <SfArrow :class="customClass">
      </div>
      `
    }),
    {
      info: true,
      notes
    }
  );
