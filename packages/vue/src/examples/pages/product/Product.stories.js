/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Product from "./Product.vue";

storiesOf("Examples|Pages|Product", module)
  .addDecorator(withKnobs)
  .add(
    "Product",
    () => ({
      components: { Product },
      mounted() {
        document.body.style.setProperty("margin", "0");
      },
      template: `
      <Product/>
    `
    }),
    {
      info: {
        summary:
          "Check https://github.com/DivanteLtd/storefront-ui/blob/master/packages/vue/src/examples/pages/product/Product.vue to see full code"
      }
    }
  );
