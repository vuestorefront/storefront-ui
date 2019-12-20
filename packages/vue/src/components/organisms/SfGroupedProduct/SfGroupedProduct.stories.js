import { storiesOf } from "@storybook/vue";
import { withKnobs, text, number, object } from "@storybook/addon-knobs";
import SfGroupedProduct from "./SfGroupedProduct.vue";

storiesOf("Organisms|GroupedProduct", module)
  .addDecorator(withKnobs)
  .add("Default", () => ({
    components: { SfGroupedProduct },
    props: {
      settings: {
        default: object("settings (prop)", { type: "slider" })
      },
      image: {
        default: text("image (prop)", "/assets/storybook/product-white.png")
      },
      title: {
        default: text("title (prop)", "Leave white brooch")
      },
      priceSpecial: {
        default: text("price-special (prop)", "")
      },
      priceRegular: {
        default: text("price-regular (prop)", "$10,99")
      },
      stock: {
        default: number("stock (prop)", 99)
      },
      attributes: {
        default: object("attributes (prop)", [
          {
            name: "color",
            value: "White"
          }
        ])
      }
    },
    data() {
      return {
        productQty: "0"
      };
    },
    template: `<div style="max-width: 509px">
      <SfGroupedProduct :settings="settings">
        <SfGroupedProductItem 
          v-model="productQty"
          :image="image"
          :title="title"
          :price-special="priceSpecial"
          :price-regular="priceRegular"
          :stock="stock"
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
        default: object("settings (prop)", { type: "slider" })
      }
    },
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
          :stock="product.stock"
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
