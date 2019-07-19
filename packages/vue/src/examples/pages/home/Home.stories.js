/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";

import Home from "./Home.vue";

storiesOf("Examples|Pages|Home", module)
  .addDecorator(withKnobs)
  .add(
    "Home",
    () => ({
      components: { Home },
      props: {
        bannerGrid: {
          default: select("Banner Grid", [1, 2], 1)
        }
      },
      template: `
      <Home :bannerGrid="bannerGrid"/>
    `
    }),
    {
      info: {
        summary:
          "Check https://github.com/DivanteLtd/storefront-ui/blob/master/packages/vue/src/examples/pages/home/Home.vue to see full code"
      }
    }
  );
