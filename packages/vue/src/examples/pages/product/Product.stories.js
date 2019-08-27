/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs } from "@storybook/addon-knobs";

import Product from "./Product.vue";

storiesOf("Examples|Pages|Product", module)
  .addDecorator(withKnobs)
  .add(
    "Product",
    () => ({
      components: { Product },
      template: `<Product/>`
    }),
    {
      info: {
        summary: ""
      }
    }
  );
