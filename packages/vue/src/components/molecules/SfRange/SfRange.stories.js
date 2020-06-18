import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  number,
  text,
  boolean,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfRange from "./SfRange.vue";
storiesOf("Molecules|Range", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-range--modifier": "sf-range--modifier",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      min: {
        default: number("min", 0, "Props"),
      },
      max: {
        default: number("max", 10, "Props"),  
      },
      step: {
        default: number("step", 1, "Props"),
      },
      label: {
        default: text("label", "Price", "Props"),
      },
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      orientation: {
        default: boolean("orientation", true, "Props"),
      },
      tooltips: {
        default: boolean("tooltips", false, "Props"),
      }
    },
    components: { SfRange },
    template: `<div style="padding: 100px">
    <SfRange
        :class="customClass"
        :min="min"
        :max="max"
        :step="step"
        :label="label"
        :disabled="disabled"
        :orientation="orientation"
        :tooltips="tooltips"
      />
      </div>`
  }));
