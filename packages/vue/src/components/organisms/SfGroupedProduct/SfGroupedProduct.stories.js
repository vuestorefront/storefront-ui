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
          specialPrice: "",
          regularPrice: "$10,99",
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
          specialPrice: "",
          regularPrice: "$11,99",
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
          specialPrice: "",
          regularPrice: "$20,99",
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
        placeholderImage: "",
        lazyImage: true,
        pictureBreakpointImage: 576
      }
    };
  },
  template: `<div style="max-width: 509px">
       <SfGroupedProduct>
          <SfGroupedProductItem 
          v-for="(product, key) in groupedProduct"
          :key="key"
          v-model="product.qty"
          :image="product.image"
          :placeholderImage="imageSetup.placeholderImage"
          :lazyImage="imageSetup.lazyImage"
          :pictureBreakpointImage="imageSetup.pictureBreakpointImage"
          :title="product.title"
          :specialPrice="product.specialPrice"
          :regularPrice="product.regularPrice"
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
