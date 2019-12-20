/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number } from "@storybook/addon-knobs";

import SfQuantitySelector from "./SfQuantitySelector.vue";

storiesOf("Atoms|QuantitySelector", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfQuantitySelector },
    data() {
      return {
        value: 1
      };
    },
    props: {
      stock: {
        default: number("stock", 99, {}, "Props")
      },
      min: {
        default: number("min (props)", 1, {}, "Propss")
      }
    },
    template: `<SfQuantitySelector 
        v-model="value"
        :stock="stock" 
        :min="min" 
      />`
  }));
