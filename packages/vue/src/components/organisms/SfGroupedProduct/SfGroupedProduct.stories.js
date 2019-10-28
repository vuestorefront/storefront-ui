// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import SfGroupedProduct from "./SfGroupedProduct.vue";

storiesOf("Organisms|GroupedProduct", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfGroupedProduct },
    props: {
      image: {
        default: text("image (prop)", "/assets/storybook/homepage/productB.jpg")
      },
      title: {
        default: text("title (prop)", "Leave white brooch")
      },
      sku: {
        default: text("sku (prop)", "MSD23-345-324")
      },
      regularPrice: {
        default: text("regularPrice (prop)", "$10,99")
      },
      specialPrice: {
        default: text("specialPrice (prop)", "")
      },
      stock: {
        default: number("stock (prop)", 99)
      }
    },
    data() {
      return {
        qty: "1"
      };
    },
    template: `<SfGroupedProduct
        image="/assets/storybook/product-white.png"
        :title="title"
        :sku="sku"
        :specialPrice="specialPrice"
        :regularPrice="regularPrice"
        :stock="stock"
        v-model="qty" />`
  }));
