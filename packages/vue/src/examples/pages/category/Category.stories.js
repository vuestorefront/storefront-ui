/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Category from "./Category.vue";

storiesOf("Examples|Pages", module)
  .addDecorator(withKnobs)
  .add(
    "Category",
    () => ({
      components: { Category },
      template: `
      <Category />
    `
    }),
    {
      info: {
        summary:
          "Check https://github.com/DivanteLtd/storefront-ui/blob/master/src/examples/pages/category/Category.vue to see full code"
      }
    }
  );
