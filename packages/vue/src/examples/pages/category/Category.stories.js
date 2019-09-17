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
      mounted() {
        document.body.style.setProperty("margin", "0");
      },
      template: `
      <Category />
    `
    }),
    {
      info: {
        summary:
          "Check https://github.com/DivanteLtd/storefront-ui/blob/master/packages/vue/src/examples/pages/home/Category.vue to see full code"
      }
    }
  );
