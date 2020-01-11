import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number, object } from "@storybook/addon-knobs";
import SfGroupedProduct from "./SfGroupedProduct.vue";
storiesOf("Organisms|GroupedProduct", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfGroupedProduct },
    props: {
      settings: {
        default: object("settings", { type: "slider" }, "Props")
      },
      image: {
        default: text(
          "image",
          "/assets/storybook/SfGroupedProduct/product-white.png",
          "Props"
        )
      },
      imageWidth: {
        default: number("imageWidth", 246, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 336, {}, "Props")
      },
      title: {
        default: text("title", "Leave white brooch", "Props")
      },
      priceSpecial: {
        default: text("priceSpecial", "", "Props")
      },
      priceRegular: {
        default: text("priceRegular", "$10,99", "Props")
      },
      qtyMin: {
        default: number("qtyMin", 1, {}, "Props")
      },
      attributes: {
        default: object(
          "attributes",
          [
            {
              name: "color",
              value: "White"
            }
          ],
          "Props"
        )
      }
    },
    data() {
      return {
        productQty: 1
      };
    },
    template: `<div style="max-width: 509px">
      <SfGroupedProduct :settings="settings">
        <SfGroupedProductItem 
          v-model="productQty"
          :image="image"
          :image-width="imageWidth"
          :image-height="imageHeight"
          :title="title"
          :price-special="priceSpecial"
          :price-regular="priceRegular"
          :qty-min="qtyMin"
        >
          <template #details>
            <div style="color: #a3a5ad">MSD23-345-324</div>
          </template>
          <template #configuration>
            <div style="margin-left: auto;">
              <div v-for="(attribute, key) in attributes" :key="key">{{attribute.value}}</div>
            </div>
          </template>
        </SfGroupedProductItem>
      </SfGroupedProduct>
    </div>`
  }))
  .add("Multiple Products", () => ({
    components: { SfGroupedProduct },
    props: {
      settings: {
        default: object("settings", { type: "slider" }, "Props")
      }
    },
    data() {
      return {
        groupedProduct: [
          {
            image: "/assets/storybook/SfGroupedProduct/product-white.png",
            title: "Leave white brooch",
            sku: "MSD23-345-324",
            priceSpecial: "",
            priceRegular: "$10,99",
            qtyMin: 1,
            qty: 1,
            attributes: [
              {
                name: "color",
                value: "White"
              }
            ]
          },
          {
            image: "/assets/storybook/SfGroupedProduct/product-green.png",
            title: "Leave green brooch",
            sku: "MSD23-345-325",
            priceSpecial: "",
            priceRegular: "$11,99",
            qty: 1,
            qtyMin: 1,
            attributes: [
              {
                name: "color",
                value: "Green"
              }
            ]
          },
          {
            image: "/assets/storybook/SfGroupedProduct/product-black.png",
            title: "Leave black brooch",
            sku: "MSD23-345-326",
            priceSpecial: "",
            priceRegular: "$20,99",
            qty: 1,
            qtyMin: 1,
            attributes: [
              {
                name: "color",
                value: "Black"
              }
            ]
          }
        ]
      };
    },
    template: `<div style="max-width: 509px">
      <SfGroupedProduct :settings="settings">
        <SfGroupedProductItem
          v-for="(product, key) in groupedProduct"
          :key="key" 
          v-model="product.qty"
          :image="product.image"
          :title="product.title"
          :price-special="product.priceSpecial"
          :price-regular="product.priceRegular"
          :qty-min="product.qtyMin"
        >
          <template #details>
            <div style="color: #a3a5ad">{{product.sku}}</div>
          </template>
          <template #configuration>
            <div style="margin-left: auto;">
              <div v-for="(attribute, key) in product.attributes" :key="key">{{attribute.value}}</div>
            </div>
          </template>
        </SfGroupedProductItem>
      </SfGroupedProduct>
    </div>`
  }));
