/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  boolean,
  select
} from "@storybook/addon-knobs";
import notes from "./README.md";
import SfInputNumber from "./SfInputNumber.vue";

storiesOf("Molecules|InputNumber", module)
  .addDecorator(withKnobs)
  .add(
    "Props / CSS Modifiers",
    () => ({
      props: {
        value: {
          default: number("value (prop)", 1)
        },
        autoFill: {
          default: boolean("autoFill (prop)")
        },
        min: {
          default: number("min (prop)")
        },
        max: {
          default: number("max (prop)")
        },
        step: {
          default: number("step (prop)", 1)
        },
        precision: {
          default: number("precision (prop)", 0)
        },
        delimiter: {
          default: text("delimiter (prop)", ".")
        },
        thousands: {
          default: text("delimiter (prop)", ",")
        },
        name: {
          default: text("name (prop)")
        },
        type: {
          default: text("type (prop)", "tel")
        },
        placeholder: {
          default: text("placeholder (prop)")
        },
        disabled: {
          default: boolean("disabled (prop)")
        },
        required: {
          default: boolean("required (prop)")
        },
        customClass: {
          default: select(
            "CSS Modifier",
            ["null", "sf-input-number--large"],
            "null",
            "CSS-Modifiers"
          )
        }
      },
      components: { SfInputNumber },
      template: `<SfInputNumber
         :class="customClass"
         v-model="value"
         :autoFill="autoFill"
         :min="min"
         :max="max"
         :step="step"
         :precision="precision"
         :delimiter="delimiter"
         :thousands="thousands"
         :type="type"
         :name="name"
         :placeholder="placeholder"
         :disabled="disabled"
         :required="required" />`
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "[slot] up",
    () => ({
      components: { SfInputNumber },
      template: `
       <SfInputNumber value="1">
         <template #up>+</template>
       </SfInputNumber>`
    }),
    {
      info: true,
      notes
    }
  )
  .add(
    "[slot] down",
    () => ({
      components: { SfInputNumber },
      template: `
       <SfInputNumber value="1">
         <template #down>-</template>
       </SfInputNumber>`
    }),
    {
      info: true,
      notes
    }
  );
