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
        default: number("qty", 0, "Props")
      },
      stock: {
        default: number("stock", 99, "Props")
      }
    },
    template: `<SfQuantitySelector :qty="qty" :stock="stock"/>`
  }));
