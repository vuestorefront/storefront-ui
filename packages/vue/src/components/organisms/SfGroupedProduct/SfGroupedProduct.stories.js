/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  text,
  number,
  boolean,
  object
} from "@storybook/addon-knobs";

import SfGroupedProduct from "./SfGroupedProduct.vue";
import SfProperty from "../../atoms/SfProperty/SfProperty.vue";

storiesOf("Organisms|GroupedProduct", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfGroupedProduct, SfProperty },
    props: {
      settings: {
        default: object("settings", { type: "slider" }, "Props")
      },
      hasCarousel: {
        default: boolean("hasCarousel", true, "Props")
      },
      image: {
        default: object(
          "image",
          {
            mobile: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            },
            desktop: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            }
          },
          "Props"
        )
      },
      imageWidth: {
        default: number("imageWidth", 246, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 336, {}, "Props")
      },
      imageLazy: {
        default: boolean("imageLazy", true, "Props")
      },
      title: {
        default: text("title", "Leave white brooch", "Props")
      },
      priceRegular: {
        default: text("priceRegular", "$10,99", "Props")
      },
      priceSpecial: {
        default: text("priceSpecial", "$5,09", "Props")
      }
    },
    data() {
      return {
        productQty: 1
      };
    },
    template: `<SfGroupedProduct
        :settings="settings"
        :has-carousel="hasCarousel"
        :style="{maxWidth: '500px'}"
      >
        <SfGroupedProductItem
          :qty="productQty"
          @input="productQty = $event"
          :image="image"
          :image-width="imageWidth"
          :image-height="imageHeight"
          :image-lazy="imageLazy"
          :title="title"
          :price-regular="priceRegular"
          :price-special="priceSpecial"
        >
          <template #details>
           <div :style="{color: '#A3A5AD', fontSize: '12px'}">MSD23-345-324</div>
           <SfProperty name="Color" value="White" :style="{margin: 'auto 0 0 0'}" />
          </template>
        </SfGroupedProductItem>
      </SfGroupedProduct>`
  }))
  .add("Multiple Products", () => ({
    components: { SfGroupedProduct, SfProperty },
    props: {
      settings: {
        default: object("settings", { type: "slider" }, "Props")
      },
      hasCarousel: {
        default: boolean("hasCarousel", true, "Props")
      }
    },
    data() {
      return {
        products: [
          {
            image: {
              mobile: {
                url: "/assets/storybook/SfGroupedProduct/product-white.png"
              },
              desktop: {
                url: "/assets/storybook/SfGroupedProduct/product-white.png"
              }
            },
            sku: "MSD23-345-324",
            title: "Leave white brooch",
            priceRegular: "$10,99",
            productQty: 1,
            attributes: [
              {
                name: "color",
                value: "White"
              }
            ]
          },
          {
            image: {
              mobile: {
                url: "/assets/storybook/SfGroupedProduct/product-black.png"
              },
              desktop: {
                url: "/assets/storybook/SfGroupedProduct/product-black.png"
              }
            },
            sku: "MSD23-345-324",
            title: "Leave black brooch",
            priceRegular: "$10,99",
            productQty: 1,
            attributes: [
              {
                name: "color",
                value: "Black"
              }
            ]
          },
          {
            image: {
              mobile: {
                url: "/assets/storybook/SfGroupedProduct/product-green.png"
              },
              desktop: {
                url: "/assets/storybook/SfGroupedProduct/product-green.png"
              }
            },
            sku: "MSD23-345-324",
            title: "Leave green brooch",
            priceRegular: "$10,99",
            productQty: 1,
            attributes: [
              {
                name: "color",
                value: "Green"
              }
            ]
          }
        ]
      };
    },
    template: `<SfGroupedProduct
        :settings="settings"
        :has-carousel="hasCarousel"
        :style="{maxWidth: '500px'}"
    >
      <SfGroupedProductItem 
          v-for="product in products"
          :key="product.title"
          :qty="product.productQty"
          @input="product.productQty = $event"
          :image="product.image"
          image-width="246"
          image-height="336"
          :title="product.title"
          :price-regular="product.priceRegular"
          :price-special="product.priceSpecial"
      >
        <template #details>
          <div :style="{color: '#A3A5AD'}">{{product.sku}}</div>
        </template>
        <template #configuration>
          <div :style="{margin: '0 0 0 auto'}">
            <SfProperty v-for="attribute in product.attributes" name="Color" :value="attribute.value" :key="attribute.value"/>
          </div>
        </template>
      </SfGroupedProductItem>
    </SfGroupedProduct>`
  }))
  .add("[slot] details", () => ({
    components: { SfGroupedProduct },
    props: {
      settings: {
        default: object("settings", { type: "slider" }, "Props")
      },
      hasCarousel: {
        default: boolean("hasCarousel", true, "Props")
      },
      image: {
        default: object(
          "image",
          {
            mobile: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            },
            desktop: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            }
          },
          "Props"
        )
      },
      imageWidth: {
        default: number("imageWidth", 246, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 336, {}, "Props")
      },
      imageLazy: {
        default: boolean("imageLazy", true, "Props")
      },
      title: {
        default: text("title", "Leave white brooch", "Props")
      },
      priceRegular: {
        default: text("priceRegular", "$10,99", "Props")
      },
      priceSpecial: {
        default: text("priceSpecial", "$5,09", "Props")
      }
    },
    data() {
      return {
        productQty: 1
      };
    },
    template: `<SfGroupedProduct
        :settings="settings"
        :has-carousel="hasCarousel"
        :style="{maxWidth: '500px'}"
    >
      <SfGroupedProductItem
          :qty="productQty"
          @input="productQty = $event"
          :image="image"
          :image-width="imageWidth"
          :image-height="imageHeight"
          :image-lazy="imageLazy"
          :title="title"
          :price-regular="priceRegular"
          :price-special="priceSpecial"
      >
        <template #details>
          CUSTOM DETAILS
        </template>
      </SfGroupedProductItem>
    </SfGroupedProduct>`
  }))
  .add("[slot] configuration", () => ({
    components: { SfGroupedProduct },
    props: {
      settings: {
        default: object("settings", { type: "slider" }, "Props")
      },
      hasCarousel: {
        default: boolean("hasCarousel", true, "Props")
      },
      image: {
        default: object(
          "image",
          {
            mobile: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            },
            desktop: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            }
          },
          "Props"
        )
      },
      imageWidth: {
        default: number("imageWidth", 246, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 336, {}, "Props")
      },
      imageLazy: {
        default: boolean("imageLazy", true, "Props")
      },
      title: {
        default: text("title", "Leave white brooch", "Props")
      },
      priceRegular: {
        default: text("priceRegular", "$10,99", "Props")
      },
      priceSpecial: {
        default: text("priceSpecial", "$5,09", "Props")
      }
    },
    data() {
      return {
        productQty: 1
      };
    },
    template: `<SfGroupedProduct
        :settings="settings"
        :has-carousel="hasCarousel"
        :style="{maxWidth: '500px'}"
    >
      <SfGroupedProductItem
          :qty="productQty"
          @input="productQty = $event"
          :image="image"
          :image-width="imageWidth"
          :image-height="imageHeight"
          :image-lazy="imageLazy"
          :title="title"
          :price-regular="priceRegular"
          :price-special="priceSpecial"
      >
        <template #configuration>
          CUSTOM CONFIGURATION
        </template>
      </SfGroupedProductItem>
    </SfGroupedProduct>`
  }))
  .add("[slot] image", () => ({
    components: { SfGroupedProduct },
    props: {
      settings: {
        default: object("settings", { type: "slider" }, "Props")
      },
      hasCarousel: {
        default: boolean("hasCarousel", true, "Props")
      },
      image: {
        default: object(
          "image",
          {
            mobile: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            },
            desktop: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            }
          },
          "Props"
        )
      },
      imageWidth: {
        default: number("imageWidth", 246, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 336, {}, "Props")
      },
      imageLazy: {
        default: boolean("imageLazy", true, "Props")
      },
      title: {
        default: text("title", "Leave white brooch", "Props")
      },
      priceRegular: {
        default: text("priceRegular", "$10,99", "Props")
      },
      priceSpecial: {
        default: text("priceSpecial", "$5,09", "Props")
      }
    },
    data() {
      return {
        productQty: 1
      };
    },
    template: `<SfGroupedProduct
        :settings="settings"
        :has-carousel="hasCarousel"
        :style="{maxWidth: '500px'}"
    >
      <SfGroupedProductItem
          :qty="productQty"
          @input="productQty = $event"
          :image="image"
          :image-width="imageWidth"
          :image-height="imageHeight"
          :image-lazy="imageLazy"
          :title="title"
          :price-regular="priceRegular"
          :price-special="priceSpecial"
      >
        <template #image="{ image, title, imagePlaceholder, imageLazy, imagePictureBreakpoint }">
          <div :style="{height: '111px'}">CUSTOM IMAGE</div>
        </template>
      </SfGroupedProductItem>
    </SfGroupedProduct>`
  }))
  .add("[slot] input", () => ({
    components: { SfGroupedProduct },
    props: {
      settings: {
        default: object("settings", { type: "slider" }, "Props")
      },
      hasCarousel: {
        default: boolean("hasCarousel", true, "Props")
      },
      image: {
        default: object(
          "image",
          {
            mobile: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            },
            desktop: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            }
          },
          "Props"
        )
      },
      imageWidth: {
        default: number("imageWidth", 246, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 336, {}, "Props")
      },
      imageLazy: {
        default: boolean("imageLazy", true, "Props")
      },
      title: {
        default: text("title", "Leave white brooch", "Props")
      },
      priceRegular: {
        default: text("priceRegular", "$10,99", "Props")
      },
      priceSpecial: {
        default: text("priceSpecial", "$5,09", "Props")
      }
    },
    data() {
      return {
        productQty: 1
      };
    },
    template: `<SfGroupedProduct
        :settings="settings"
        :has-carousel="hasCarousel"
        :style="{maxWidth: '500px'}"
    >
      <SfGroupedProductItem
          :qty="productQty"
          @input="productQty = $event"
          :image="image"
          :image-width="imageWidth"
          :image-height="imageHeight"
          :image-lazy="imageLazy"
          :title="title"
          :price-regular="priceRegular"
          :price-special="priceSpecial"
      >
        <template #input="{ qty }">
          CUSTOM INPUT
        </template>
      </SfGroupedProductItem>
    </SfGroupedProduct>`
  }))
  .add("[slot] title", () => ({
    components: { SfGroupedProduct },
    props: {
      settings: {
        default: object("settings", { type: "slider" }, "Props")
      },
      hasCarousel: {
        default: boolean("hasCarousel", true, "Props")
      },
      image: {
        default: object(
          "image",
          {
            mobile: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            },
            desktop: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            }
          },
          "Props"
        )
      },
      imageWidth: {
        default: number("imageWidth", 246, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 336, {}, "Props")
      },
      imageLazy: {
        default: boolean("imageLazy", true, "Props")
      },
      title: {
        default: text("title", "Leave white brooch", "Props")
      },
      priceRegular: {
        default: text("priceRegular", "$10,99", "Props")
      },
      priceSpecial: {
        default: text("priceSpecial", "$5,09", "Props")
      }
    },
    data() {
      return {
        productQty: 1
      };
    },
    template: `<SfGroupedProduct
        :settings="settings"
        :has-carousel="hasCarousel"
        :style="{maxWidth: '500px'}"
    >
      <SfGroupedProductItem
          :qty="productQty"
          @input="productQty = $event"
          :image="image"
          :image-width="imageWidth"
          :image-height="imageHeight"
          :image-lazy="imageLazy"
          :title="title"
          :price-regular="priceRegular"
          :price-special="priceSpecial"
      >
        <template #title="{ title }">
          CUSTOM TITLE
        </template>
      </SfGroupedProductItem>
    </SfGroupedProduct>`
  }))
  .add("[slot] price", () => ({
    components: { SfGroupedProduct },
    props: {
      settings: {
        default: object("settings", { type: "slider" }, "Props")
      },
      hasCarousel: {
        default: boolean("hasCarousel", true, "Props")
      },
      image: {
        default: object(
          "image",
          {
            mobile: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            },
            desktop: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png"
            }
          },
          "Props"
        )
      },
      imageWidth: {
        default: number("imageWidth", 246, {}, "Props")
      },
      imageHeight: {
        default: number("imageHeight", 336, {}, "Props")
      },
      imageLazy: {
        default: boolean("imageLazy", true, "Props")
      },
      title: {
        default: text("title", "Leave white brooch", "Props")
      },
      priceRegular: {
        default: text("priceRegular", "$10,99", "Props")
      },
      priceSpecial: {
        default: text("priceSpecial", "$5,09", "Props")
      }
    },
    data() {
      return {
        productQty: 1
      };
    },
    template: `<SfGroupedProduct
        :settings="settings"
        :has-carousel="hasCarousel"
        :style="{maxWidth: '500px'}"
    >
      <SfGroupedProductItem
          :qty="productQty"
          @input="productQty = $event"
          :image="image"
          :image-width="imageWidth"
          :image-height="imageHeight"
          :image-lazy="imageLazy"
          :title="title"
          :price-regular="priceRegular"
          :price-special="priceSpecial"
      >
        <template #price="{ priceSpecial, priceRegular }">
          CUSTOM PRICE
        </template>
      </SfGroupedProductItem>
    </SfGroupedProduct>`
  }));
