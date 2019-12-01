// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number } from "@storybook/addon-knobs";

import SfCollectedProduct from "./SfCollectedProduct.vue";

storiesOf("Organisms|CollectedProduct", module)
  .addDecorator(withKnobs)
  .add(
    "Props",
    () => ({
      data() {
        return {
          qty: "1"
        };
      },
      props: {
        image: {
          default: text(
            "image (prop)",
            "/assets/storybook/homepage/productB.jpg"
          )
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
      components: { SfCollectedProduct },
      template: `    <SfCollectedProduct
        :image="image"
        :title="title"
        :specialPrice="specialPrice"
        :regularPrice="regularPrice"
        :stock="stock"
        v-model="qty">
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
