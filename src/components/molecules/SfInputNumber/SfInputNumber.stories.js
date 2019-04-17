/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md"
import SfInputNumber from "./SfInputNumber.vue";

storiesOf("Molecules|InputNumber", module)
   .addDecorator(withKnobs)
   .add(
     "Props / CSS Modifiers",
     () => ({
       props: {
         editableProp: {
           delimiter: text("(prop) delimiter"),
           precision: text("(prop) precision")
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
         v-model="qnt"
         :min="min"
         :max="max" />`,
       data () {
         return {
           qnt: 1,
           min: 1,
           max: 10
         }
       },
       methods: { action: action("clicked") }
     }),
     {
       info: true,
       notes
     }
   );
