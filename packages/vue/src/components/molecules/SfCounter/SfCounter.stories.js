/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  boolean,
  number,
  optionsKnob as options
} from "@storybook/addon-knobs";

import SfCounter from "./SfCounter.vue";

storiesOf("Molecules|Counter", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfCounter },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-counter--large": "sf-counter--large"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      step: {
        default: number("step", 1, {}, "Props")
      },
      autoFill: {
        default: boolean("autoFill", false, "Props")
      },
      min: {
        default: number("min", 1, {}, "Props")
      },
      max: {
        default: number("max", 99, {}, "Props")
      },
      precision: {
        default: number("precision", 0, {}, "Props")
      },
      delimiter: {
        default: text("delimiter", ".", "Props")
      },
      thousands: {
        default: text("thousands", ",", "Props")
      },
      controls: {
        default: boolean("controls", true, "Props")
      },
      type: {
        default: text("type", "text", "Props")
      },
      name: {
        default: text("name", "counter", "Props")
      },
      placeholder: {
        default: text("placeholder", "", "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      }
    },
    data() {
      return {
        value: 1
      };
    },
    template: `<SfCounter
    v-model="value"
    :step="step"
    :auto-fill="autoFill"
    :min="min"
    :max="max"
    :precision="precision"
    :delimiter="delimiter"
    :thousands="thousands"
    :controls="controls"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    />`
  }))
  .add("[slot] field", () => ({
    components: { SfCounter },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-counter--large": "sf-counter--large"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      step: {
        default: number("step", 1, {}, "Props")
      },
      autoFill: {
        default: boolean("autoFill", false, "Props")
      },
      min: {
        default: number("min", 1, {}, "Props")
      },
      max: {
        default: number("max", 99, {}, "Props")
      },
      precision: {
        default: number("precision", 0, {}, "Props")
      },
      delimiter: {
        default: text("delimiter", ".", "Props")
      },
      thousands: {
        default: text("thousands", ",", "Props")
      },
      controls: {
        default: boolean("controls", true, "Props")
      },
      type: {
        default: text("type", "text", "Props")
      },
      name: {
        default: text("name", "counter", "Props")
      },
      placeholder: {
        default: text("placeholder", "", "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      }
    },
    data() {
      return {
        value: 1
      };
    },
    template: `<SfCounter
      v-model="value"
      :step="step"
      :auto-fill="autoFill"
      :min="min"
      :max="max"
      :precision="precision"
      :delimiter="delimiter"
      :thousands="thousands"
      :controls="controls"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required">
      <template #field="{stringValue, increase, decrease, keypress, type, name, required, disabled, placeholder}">
        ❤️
       </template>
    </SfCounter>`
  }))
  .add("[slot] up", () => ({
    components: { SfCounter },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-counter--large": "sf-counter--large"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      step: {
        default: number("step", 1, {}, "Props")
      },
      autoFill: {
        default: boolean("autoFill", false, "Props")
      },
      min: {
        default: number("min", 1, {}, "Props")
      },
      max: {
        default: number("max", 99, {}, "Props")
      },
      precision: {
        default: number("precision", 0, {}, "Props")
      },
      delimiter: {
        default: text("delimiter", ".", "Props")
      },
      thousands: {
        default: text("thousands", ",", "Props")
      },
      controls: {
        default: boolean("controls", true, "Props")
      },
      type: {
        default: text("type", "text", "Props")
      },
      name: {
        default: text("name", "counter", "Props")
      },
      placeholder: {
        default: text("placeholder", "", "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      }
    },
    data() {
      return {
        value: 1
      };
    },
    template: `<SfCounter
      v-model="value"
      :step="step"
      :auto-fill="autoFill"
      :min="min"
      :max="max"
      :precision="precision"
      :delimiter="delimiter"
      :thousands="thousands"
      :controls="controls"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required">
      <template #up>+</template>
    </SfCounter>`
  }))
  .add("[slot] down", () => ({
    components: { SfCounter },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-counter--large": "sf-counter--large"
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        )
      },
      step: {
        default: number("step", 1, {}, "Props")
      },
      autoFill: {
        default: boolean("autoFill", false, "Props")
      },
      min: {
        default: number("min", 1, {}, "Props")
      },
      max: {
        default: number("max", 99, {}, "Props")
      },
      precision: {
        default: number("precision", 0, {}, "Props")
      },
      delimiter: {
        default: text("delimiter", ".", "Props")
      },
      thousands: {
        default: text("thousands", ",", "Props")
      },
      controls: {
        default: boolean("controls", true, "Props")
      },
      type: {
        default: text("type", "text", "Props")
      },
      name: {
        default: text("name", "counter", "Props")
      },
      placeholder: {
        default: text("placeholder", "", "Props")
      },
      disabled: {
        default: boolean("disabled", false, "Props")
      },
      required: {
        default: boolean("required", false, "Props")
      }
    },
    data() {
      return {
        value: 1
      };
    },
    template: `<SfCounter
      v-model="value"
      :step="step"
      :auto-fill="autoFill"
      :min="min"
      :max="max"
      :precision="precision"
      :delimiter="delimiter"
      :thousands="thousands"
      :controls="controls"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required">
      <template #down>-</template>
    </SfCounter>`
  }));
