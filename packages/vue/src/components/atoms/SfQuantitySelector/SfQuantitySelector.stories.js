// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import SfQuantitySelector from "./SfQuantitySelector.vue";

storiesOf("Atoms|QuantitySelector", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfQuantitySelector },
    props: {
      qty: {
        default: text("qty (prop)", "0")
      },
      stock: {
        default: number("stock (prop)", 0)
      }
    },
    template: `<SfQuantitySelector :qty="qty" :stock="stock"/>`
  }));
