/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md"
import SfInputNumber from "./SfInputNumber.vue";

storiesOf("Molecules|InputNumber", module)
   .addDecorator(withKnobs)
   .add(
     "[slot] default",
     () => ({
       props: {
         editableProp: {
           default: text("(prop) propname")
         },
         customClass: {
           default: select(
             "CSS Modifier",
             ["null", "sf-component--modifier"],
             "null",
             "CSS-Modifiers"
           )
         }
       },
       components: { SfInputNumber },
       template: `<SfInputNumber :class="customClass" v-model="qnt" />`,
       data () {
         return {
           qnt: 10
         }
       },
       methods: { action: action("clicked") }
     }),
     {
       info: true,
       notes
     }
   );
