// /* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";

import SfGroupedProduct from "./SfGroupedProduct.vue";

storiesOf("Organisms|GroupedProduct", module).add("Default", () => ({
  components: { SfGroupedProduct },
  data() {
    return {
      groupedProduct: [
        {
          image: "/assets/storybook/product-white.png",
          title: "Leave white brooch",
          sku: "MSD23-345-324",
          priceSpecial: "",
          priceRegular: "$10,99",
          stock: 99,
          qty: "0",
          attributes: [
            {
              name: "color",
              value: "White"
            }
          ]
        },
        {
          image: "/assets/storybook/product-green.png",
          title: "Leave green brooch",
          sku: "MSD23-345-325",
          priceSpecial: "",
          priceRegular: "$11,99",
          qty: "0",
          stock: 99,
          attributes: [
            {
              name: "color",
              value: "Green"
            }
          ]
        },
        {
          image: "/assets/storybook/product-black.png",
          title: "Leave black brooch",
          sku: "MSD23-345-326",
          priceSpecial: "",
          priceRegular: "$20,99",
          qty: "0",
          stock: 99,
          attributes: [
            {
              name: "color",
              value: "Black"
            }
          ]
        }
      ],
      imageSetup: {
        imagePlaceholder: "",
        imageLazy: true,
        imagePictureBreakpoint: 576
      }
    };
  },
  template: `<div style="max-width: 509px">
       <SfGroupedProduct :settings="{type: 'slider'}">
          <SfGroupedProductItem 
          v-for="(product, key) in groupedProduct"
          :key="key"
          v-model="product.qty"
          :image="product.image"
          :image-placeholder="imageSetup.imagePlaceholder"
          :image-lazy="imageSetup.imageLazy"
          :image-picture-breakpoint="imageSetup.imagePictureBreakpoint"
          :title="product.title"
          :price-special="product.priceSpecial"
          :price-regular="product.priceRegular"
          :stock="product.stock">
          <template #details><div style="color: #a3a5ad">{{product.sku}}</div></template>
          <template #configuration>
            <div style="margin-left: auto;">
              <div v-for="(attribute, key) in product.attributes" :key="key">{{attribute.value}}</div>
            </div>
          </template>
        </SfGroupedProductItem>
      </SfGroupedProduct>
    </div>`
}));
