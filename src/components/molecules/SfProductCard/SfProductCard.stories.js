/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import notes from "./README.md";
import SfProductCard from "./SfProductCard.vue";

storiesOf("Molecules|[WIP] ProductCard", module)
  .addDecorator(withKnobs)
  .add(
    "Basic",
    () => ({
      components: { SfProductCard },
      template: `<SfProductCard
        title="Product name"
        :price="{ regularPrice: '10,99 $'}"
        :rating="{ max: 5, score: 4 }"
      />`
    }),
    {
      info: {
        summary: `<h2> Usage </h2>
        <pre><code>import SfProductCard from "@storefrontui/vue/dist/SfProductCard.vue"</code></pre>`
      },
      notes
    }
  );
