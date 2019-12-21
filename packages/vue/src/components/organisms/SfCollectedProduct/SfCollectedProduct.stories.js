/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import SfCollectedProduct from "./SfCollectedProduct.vue";

storiesOf("Organisms|CollectedProduct", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    data() {
      return {
        qty: 1
      };
    },
    props: {
      image: {
        default: text(
          "image",
          "/assets/storybook/homepage/productB.jpg",
          "Props"
        )
      },
      title: {
        default: text("title", "Product name", "Props")
      },
      regularPrice: {
        default: text("regular-price", "$10,99", "Props")
      },
      specialPrice: {
        default: text("special-price", "$5,99", "Props")
      },
      stock: {
        default: number("stock", 99, {}, "Props")
      },
      qtyMin: {
        default: number("qty-min", 1, {}, "Props")
      }
    },
    components: { SfCollectedProduct },
    template: `<SfCollectedProduct
        v-model="qty"
        :image="image"
        :title="title"
        :specialPrice="specialPrice"
        :regularPrice="regularPrice"
        :stock="stock"
        :qty-min="qtyMin"
        >
        <template #configuration>
          <div :style="{marginTop: '20px'}">
            @slot configuration
          </div>
        </template>
        <template #actions>
          <div :style="{marginTop: 'auto'}">
            @slot actions
          </div>
        </template>
      </SfCollectedProduct>`
  }));
