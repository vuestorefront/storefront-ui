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
              color: "White"
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
              color: "Green"
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
              color: "Black"
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
       <SfGroupedProduct v-model="groupedProduct">
          <SfGroupedProductItem 
          v-for="(product, key) in groupedProduct"
          :key="key"
          :qty="product.qty"
          :image="product.image"
          :placeholderImage="imageSetup.placeholderImage"
          :lazyImage="imageSetup.lazyImage"
          :pictureBreakpointImage="imageSetup.pictureBreakpointImage"
          :title="product.title"
          :sku="product.sku"
          :specialPrice="product.specialPrice"
          :regularPrice="product.regularPrice"
          :stock="product.stock"
          :attributes="product.attributes"/>
      </SfGroupedProduct>
    </div>`
}));
