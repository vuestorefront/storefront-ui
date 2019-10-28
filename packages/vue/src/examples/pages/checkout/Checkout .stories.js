/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import Checkout from "./Checkout.vue";

storiesOf("Examples|Pages|Home", module)
  .addDecorator(withKnobs)
  .add(
    "Checkout",
    () => ({
      components: { Checkout },
      mounted() {
        document.body.style.setProperty("margin", "0");
      },
      template: `
      <Checkout/>
    `
    }),
    {
      info: {
        summary:
          "Check https://github.com/DivanteLtd/storefront-ui/blob/master/packages/vue/src/examples/pages/checkout/Checkout.vue to see full code"
      }
    }
  );
