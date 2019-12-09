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
  .add("Default", () => ({
    components: { SfCounter },
    props: {
      customClass: {
        default: options(
          "CSS Modifiers",
          {
            "sf-counter--large": "sf-counter--large"
          },
          "",
          { display: "multi-select" }
        )
      },
      step: {
        default: number("step (prop)", 1)
      },
      autoFill: {
        default: boolean("auto-fill (prop)", false)
      },
      min: {
        default: number("min (prop)", 1)
      },
      max: {
        default: number("max (prop)", 99)
      },
      precision: {
        default: number("precision (prop)", 0)
      },
      delimiter: {
        default: text("delimiter (prop)", ".")
      },
      thousands: {
        default: text("thousands (prop)", ",")
      },
      controls: {
        default: boolean("controls (prop)", true)
      },
      type: {
        default: text("type (prop)", "text")
      },
      name: {
        default: text("name (prop)", "counter")
      },
      placeholder: {
        default: text("placeholder (prop)", "")
      },
      disabled: {
        default: boolean("disabled (prop)", false)
      },
      required: {
        default: boolean("required (prop)", false)
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
          { display: "multi-select" }
        )
      },
      step: {
        default: number("step (prop)", 1)
      },
      autoFill: {
        default: boolean("auto-fill (prop)", false)
      },
      min: {
        default: number("min (prop)", 1)
      },
      max: {
        default: number("max (prop)", 99)
      },
      precision: {
        default: number("precision (prop)", 0)
      },
      delimiter: {
        default: text("delimiter (prop)", ".")
      },
      thousands: {
        default: text("thousands (prop)", ",")
      },
      controls: {
        default: boolean("controls (prop)", true)
      },
      type: {
        default: text("type (prop)", "text")
      },
      name: {
        default: text("name (prop)", "counter")
      },
      placeholder: {
        default: text("placeholder (prop)", "")
      },
      disabled: {
        default: boolean("disabled (prop)", false)
      },
      required: {
        default: boolean("required (prop)", false)
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
          { display: "multi-select" }
        )
      },
      step: {
        default: number("step (prop)", 1)
      },
      autoFill: {
        default: boolean("auto-fill (prop)", false)
      },
      min: {
        default: number("min (prop)", 1)
      },
      max: {
        default: number("max (prop)", 99)
      },
      precision: {
        default: number("precision (prop)", 0)
      },
      delimiter: {
        default: text("delimiter (prop)", ".")
      },
      thousands: {
        default: text("thousands (prop)", ",")
      },
      controls: {
        default: boolean("controls (prop)", true)
      },
      type: {
        default: text("type (prop)", "text")
      },
      name: {
        default: text("name (prop)", "counter")
      },
      placeholder: {
        default: text("placeholder (prop)", "")
      },
      disabled: {
        default: boolean("disabled (prop)", false)
      },
      required: {
        default: boolean("required (prop)", false)
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
          { display: "multi-select" }
        )
      },
      step: {
        default: number("step (prop)", 1)
      },
      autoFill: {
        default: boolean("auto-fill (prop)", false)
      },
      min: {
        default: number("min (prop)", 1)
      },
      max: {
        default: number("max (prop)", 99)
      },
      precision: {
        default: number("precision (prop)", 0)
      },
      delimiter: {
        default: text("delimiter (prop)", ".")
      },
      thousands: {
        default: text("thousands (prop)", ",")
      },
      controls: {
        default: boolean("controls (prop)", true)
      },
      type: {
        default: text("type (prop)", "text")
      },
      name: {
        default: text("name (prop)", "counter")
      },
      placeholder: {
        default: text("placeholder (prop)", "")
      },
      disabled: {
        default: boolean("disabled (prop)", false)
      },
      required: {
        default: boolean("required (prop)", false)
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
