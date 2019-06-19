/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Home from "./Home.vue";

storiesOf("Examples|Home", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { Home },
      template: `
      <Home />
    `
    }),
    {
      info: {
        summary:
          "Check https://github.com/DivanteLtd/storefront-ui/blob/master/src/examples/pages/category/Home.vue to see full code"
      }
    }
  );
