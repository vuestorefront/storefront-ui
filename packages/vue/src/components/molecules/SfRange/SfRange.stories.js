import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  number,
  text,
  boolean,
  optionsKnob as options,
  object,
} from "@storybook/addon-knobs";
import SfRange from "./SfRange.vue";
storiesOf("Molecules|Range", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      min: {
        default: number("min", 0, "Props"),
      },
      max: {
        default: number("max", 10, "Props"),
      },
      valueMin: {
        default: number("Value min", 0, "Props"),
      },
      valueMax: {
        default: number("Value Max", 1, "Props"),
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
      direction: {
        default: boolean("direction", true, "Props"),
      },
      tooltips: {
        default: boolean("tooltips", false, "Props"),
      },
      formatTooltipsValues: {
        default: object("format values", {
          decimals: 2,
          mark: '.',
          thousand: ' ',
          prefix: '$',
          suffix: '',
          negative: ''
        }, "Props")
      }
    },
    components: { SfRange },
    template: `<div style="padding: 100px">
    <SfRange
        :min="min"
        :max="max"
        :valueMin="valueMin"
        :valueMax="valueMax"
        :step="step"
        :label="label"
        :disabled="disabled"
        :orientation="orientation"
        :direction="direction"
        :tooltips="tooltips"
        :formatTooltipsValues="formatTooltipsValues"
      />
      </div>`,
  }))
  .add("One slider", () => ({
    props: {
      min: {
        default: number("min", 0, "Props"),
      },
      max: {
        default: number("max", 10, "Props"),
      },
      valueMin: {
        default: number("Value min", 0, "Props"),
      },
      valueMax: {
        default: text("Value Max", "", "Props"),
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
      direction: {
        default: boolean("direction", true, "Props"),
      },
      tooltips: {
        default: boolean("tooltips", false, "Props"),
      },
    },
    components: { SfRange },
    template: `<div style="padding: 100px">
    <SfRange
        :min="min"
        :max="max"
        :valueMin="valueMin"
        :valueMax="valueMax"
        :step="step"
        :label="label"
        :disabled="disabled"
        :orientation="orientation"
        :direction="direction"
        :tooltips="tooltips"
      />
      </div>`,
  }));
