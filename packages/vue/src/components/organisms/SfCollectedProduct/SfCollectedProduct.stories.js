/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";
import SfCollectedProduct from "./SfCollectedProduct.vue";
storiesOf("Organisms|CollectedProduct", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    props: {
      image: {
        default: text("image", "/assets/storybook/Home/productB.jpg", "Props")
      },
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props")
      },
      title: {
        default: text("title", "Product name", "Props")
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props")
      },
      specialPrice: {
        default: text("specialPrice", "$5,99", "Props")
      },
      qtyMin: {
        default: number("qtyMin", 1, {}, "Props")
      }
    },
    data() {
      return {
        qty: 1
      };
    },
    components: { SfCollectedProduct },
    template: `<SfCollectedProduct
        v-model="qty"
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :title="title"
        :specialPrice="specialPrice"
        :regularPrice="regularPrice"
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
