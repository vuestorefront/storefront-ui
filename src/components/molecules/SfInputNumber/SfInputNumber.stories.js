/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, number, select } from "@storybook/addon-knobs";
import notes from "./README.md"
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
         min: {
           default: number("min (prop)", 1)
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
         :min="min"
         :max="max"
         :step="step"
         :precision="precision"
         :delimiter="delimiter"
         :thousands="thousands"
         :name="name" />`,
       methods: { action: action("clicked") }
     }),
     {
       info: true,
       notes
     }
   );
