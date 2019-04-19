/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfProductCard from "./SfProductCard.vue";

storiesOf("Molecules|Product Card", module)
  .addDecorator(withKnobs)
  .add(
    "[slot] default",
    () => ({
      // props: {
      //   editableProp: {
      //     default: text("(prop) propname")
      //   },
      //   customClass: {
      //     default: select(
      //       "CSS Modifier",
      //       ["null", "sf-component--modifier"],
      //       "null",
      //       "CSS-Modifiers"
      //     )
      //   }
      // },
      components: { SfProductCard },
      template: `<SfProductCard
        title="Lorem ipsum"
        :price="{ regularPrice: '10,99 $'}"
        :rating="{ max: 5, score: 4 }"
      />`
    }),
    {
      info: true,
      notes
    }
  );
