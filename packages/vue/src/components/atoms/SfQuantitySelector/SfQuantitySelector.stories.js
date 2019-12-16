// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, number } from "@storybook/addon-knobs";

import SfQuantitySelector from "./SfQuantitySelector.vue";

storiesOf("Atoms|QuantitySelector", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfQuantitySelector },
    data() {
      return {
        value: "1"
      };
    },
    props: {
      stock: {
        default: number("stock (props)", 99)
      },
      min: {
        default: number("min (props)", 1)
      }
    },
    template: `<SfQuantitySelector :stock="stock" :min="min" v-model="value"/>`
  }));
