/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfProductCard from "./SfProductCard.vue";

storiesOf("Molecules|ProductCard", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfProductCard },
      template: `<SfProductCard
        title="Component WIP"
        :price="{ regularPrice: '10,99 $'}"
        :rating="{ max: 5, score: 4 }"
      />`
    }),
    {
      info: true,
      notes
    }
  );
