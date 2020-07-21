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
      slidersInitialValues: {
        default: object("sliders initial values", [0, 1], "Props"),
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
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      horizontalOrientation: {
        default: boolean("horizontal orientation", true, "Props"),
      },
      ltrDirection: {
        default: boolean("ltr direction", true, "Props"),
      },
      tooltips: {
        default: boolean("tooltips", false, "Props"),
      },
      formatTooltipsValues: {
        default: object(
          "format values",
          {
            decimals: 2,
            mark: ".",
            thousand: " ",
            prefix: "$",
            suffix: "",
            negative: "",
          },
          "Props"
        ),
      },
    },
    components: { SfRange },
    template: `<div style="padding: 100px">
    <SfRange
        :slidersInitialValues="slidersInitialValues"
        :min="min"
        :max="max"
        :valueMin="valueMin"
        :valueMax="valueMax"
        :step="step"
        :disabled="disabled"
        :horizontalOrientation="horizontalOrientation"
        :ltrDirection="ltrDirection"
        :tooltips="tooltips"
        :formatTooltipsValues="formatTooltipsValues"
      />
      </div>`,
  }))
  .add("One slider", () => ({
    props: {
      slidersInitialValues: {
        default: object("sliders initial values", [0], "Props"),
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
      disabled: {
        default: boolean("disabled", false, "Props"),
      },
      horizontalOrientation: {
        default: boolean("horizontal orientation", true, "Props"),
      },
      ltrDirection: {
        default: boolean("ltr direction", true, "Props"),
      },
      tooltips: {
        default: boolean("tooltips", false, "Props"),
      },
      formatTooltipsValues: {
        default: object(
          "format values",
          {
            decimals: 2,
            mark: ".",
            thousand: " ",
            prefix: "$",
            suffix: "",
            negative: "",
          },
          "Props"
        ),
      },
    },
    components: { SfRange },
    template: `<div style="padding: 100px">
    <SfRange
        :slidersInitialValues="slidersInitialValues"
        :min="min"
        :max="max"
        :step="step"
        :disabled="disabled"
        :horizontalOrientation="horizontalOrientation"
        :ltrDirection="ltrDirection"
        :tooltips="tooltips"
        :formatTooltipsValues="formatTooltipsValues"
      />
      </div>`,
  }));
