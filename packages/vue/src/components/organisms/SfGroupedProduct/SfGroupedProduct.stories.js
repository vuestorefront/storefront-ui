// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import SfGroupedProduct from "./SfGroupedProduct.vue";

storiesOf("Organisms|GroupedProduct", module)
  .addDecorator(withKnobs)
  .add("[slot] default", () => ({
    components: { SfGroupedProduct },
    props: {
      image: {
        default: text("image (prop)", "/assets/storybook/homepage/productB.jpg")
      },
      title: {
        default: text("title (prop)", "Product name")
      },
      regularPrice: {
        default: text("regularPrice (prop)", "$10,99")
      },
      specialPrice: {
        default: text("specialPrice (prop)", "$5,99")
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
      :image="image"
      :title="title"
      :specialPrice="specialPrice"
      :regularPrice="regularPrice"
      :stock="stock"
      v-model="qty" />`
  }));
