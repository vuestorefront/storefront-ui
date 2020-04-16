import {
  withKnobs,
  text,
  number,
  boolean,
  object,
} from "@storybook/addon-knobs";
import SfGroupedProduct from "./SfGroupedProduct.vue";
import SfProperty from "../../atoms/SfProperty/SfProperty.vue";

export default {
  title: "Organisms|GroupedProduct",
  decorators: [withKnobs],
};

export const Common = () => ({
  components: { SfGroupedProduct, SfProperty },
  props: {
    settings: {
      default: object("settings", { type: "slider" }, "Props"),
    },
    hasCarousel: {
      default: boolean("hasCarousel", false, "Props"),
    },
    image: {
      default: object(
        "image",
        {
          mobile: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
          desktop: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 328, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 448, {}, "Props"),
    },
    imageLazy: {
      default: boolean("imageLazy", true, "Props"),
    },
    title: {
      default: text("title", "Leave white brooch", "Props"),
    },
    priceRegular: {
      default: text("priceRegular", "$10,99", "Props"),
    },
    priceSpecial: {
      default: text("priceSpecial", "$5,09", "Props"),
    },
  },
  data() {
    return {
      productQty: 1,
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
      </SfGroupedProduct>`,
});

export const MultipleProducts = () => ({
  components: { SfGroupedProduct, SfProperty },
  props: {
    settings: {
      default: object("settings", { type: "slider" }, "Props"),
    },
    hasCarousel: {
      default: boolean("hasCarousel", true, "Props"),
    },
  },
  data() {
    return {
      products: [
        {
          image: {
            mobile: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png",
            },
            desktop: {
              url: "/assets/storybook/SfGroupedProduct/product-white.png",
            },
          },
          sku: "MSD23-345-324",
          title: "Leave white brooch",
          priceRegular: "$10,99",
          productQty: 1,
          attributes: [
            {
              name: "color",
              value: "White",
            },
          ],
        },
        {
          image: {
            mobile: {
              url: "/assets/storybook/SfGroupedProduct/product-black.png",
            },
            desktop: {
              url: "/assets/storybook/SfGroupedProduct/product-black.png",
            },
          },
          sku: "MSD23-345-324",
          title: "Leave black brooch",
          priceRegular: "$10,99",
          productQty: 1,
          attributes: [
            {
              name: "color",
              value: "Black",
            },
          ],
        },
        {
          image: {
            mobile: {
              url: "/assets/storybook/SfGroupedProduct/product-green.png",
            },
            desktop: {
              url: "/assets/storybook/SfGroupedProduct/product-green.png",
            },
          },
          sku: "MSD23-345-324",
          title: "Leave green brooch",
          priceRegular: "$10,99",
          productQty: 1,
          attributes: [
            {
              name: "color",
              value: "Green",
            },
          ],
        },
      ],
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
          image-width="328"
          image-height="448"
          :title="product.title"
          :price-regular="product.priceRegular"
          :price-special="product.priceSpecial"
      >
        <template #details>
          <div :style="{color: '#A3A5AD' }" class="desktop-only">{{product.sku}}</div>
          <SfProperty v-for="attribute in product.attributes" name="Color" :value="attribute.value" :key="attribute.value" :style="{margin: 'auto 0 0 0'}" class="desktop-only"/>
        </template>
      </SfGroupedProductItem>
    </SfGroupedProduct>`,
});

export const SlotDetails = () => ({
  components: { SfGroupedProduct },
  props: {
    settings: {
      default: object("settings", { type: "slider" }, "Props"),
    },
    hasCarousel: {
      default: boolean("hasCarousel", false, "Props"),
    },
    image: {
      default: object(
        "image",
        {
          mobile: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
          desktop: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 328, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 448, {}, "Props"),
    },
    imageLazy: {
      default: boolean("imageLazy", true, "Props"),
    },
    title: {
      default: text("title", "Leave white brooch", "Props"),
    },
    priceRegular: {
      default: text("priceRegular", "$10,99", "Props"),
    },
    priceSpecial: {
      default: text("priceSpecial", "$5,09", "Props"),
    },
  },
  data() {
    return {
      productQty: 1,
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
    </SfGroupedProduct>`,
});

SlotDetails.story = {
  name: "[slot] details",
};

export const SlotConfiguration = () => ({
  components: { SfGroupedProduct },
  props: {
    settings: {
      default: object("settings", { type: "slider" }, "Props"),
    },
    hasCarousel: {
      default: boolean("hasCarousel", false, "Props"),
    },
    image: {
      default: object(
        "image",
        {
          mobile: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
          desktop: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 328, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 448, {}, "Props"),
    },
    imageLazy: {
      default: boolean("imageLazy", true, "Props"),
    },
    title: {
      default: text("title", "Leave white brooch", "Props"),
    },
    priceRegular: {
      default: text("priceRegular", "$10,99", "Props"),
    },
    priceSpecial: {
      default: text("priceSpecial", "$5,09", "Props"),
    },
  },
  data() {
    return {
      productQty: 1,
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
    </SfGroupedProduct>`,
});

SlotConfiguration.story = {
  name: "[slot] configuration",
};

export const SlotImage = () => ({
  components: { SfGroupedProduct },
  props: {
    settings: {
      default: object("settings", { type: "slider" }, "Props"),
    },
    hasCarousel: {
      default: boolean("hasCarousel", false, "Props"),
    },
    image: {
      default: object(
        "image",
        {
          mobile: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
          desktop: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 328, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 448, {}, "Props"),
    },
    imageLazy: {
      default: boolean("imageLazy", true, "Props"),
    },
    title: {
      default: text("title", "Leave white brooch", "Props"),
    },
    priceRegular: {
      default: text("priceRegular", "$10,99", "Props"),
    },
    priceSpecial: {
      default: text("priceSpecial", "$5,09", "Props"),
    },
  },
  data() {
    return {
      productQty: 1,
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
    </SfGroupedProduct>`,
});

SlotImage.story = {
  name: "[slot] image",
};

export const SlotInput = () => ({
  components: { SfGroupedProduct },
  props: {
    settings: {
      default: object("settings", { type: "slider" }, "Props"),
    },
    hasCarousel: {
      default: boolean("hasCarousel", false, "Props"),
    },
    image: {
      default: object(
        "image",
        {
          mobile: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
          desktop: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 328, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 448, {}, "Props"),
    },
    imageLazy: {
      default: boolean("imageLazy", true, "Props"),
    },
    title: {
      default: text("title", "Leave white brooch", "Props"),
    },
    priceRegular: {
      default: text("priceRegular", "$10,99", "Props"),
    },
    priceSpecial: {
      default: text("priceSpecial", "$5,09", "Props"),
    },
  },
  data() {
    return {
      productQty: 1,
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
          <div style="position: absolute; bottom: 0; right: 0">
            CUSTOM INPUT
          </div>
        </template>
      </SfGroupedProductItem>
    </SfGroupedProduct>`,
});

SlotInput.story = {
  name: "[slot] input",
};

export const SlotTitle = () => ({
  components: { SfGroupedProduct },
  props: {
    settings: {
      default: object("settings", { type: "slider" }, "Props"),
    },
    hasCarousel: {
      default: boolean("hasCarousel", false, "Props"),
    },
    image: {
      default: object(
        "image",
        {
          mobile: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
          desktop: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 328, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 448, {}, "Props"),
    },
    imageLazy: {
      default: boolean("imageLazy", true, "Props"),
    },
    title: {
      default: text("title", "Leave white brooch", "Props"),
    },
    priceRegular: {
      default: text("priceRegular", "$10,99", "Props"),
    },
    priceSpecial: {
      default: text("priceSpecial", "$5,09", "Props"),
    },
  },
  data() {
    return {
      productQty: 1,
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
    </SfGroupedProduct>`,
});

SlotTitle.story = {
  name: "[slot] title",
};

export const SlotPrice = () => ({
  components: { SfGroupedProduct },
  props: {
    settings: {
      default: object("settings", { type: "slider" }, "Props"),
    },
    hasCarousel: {
      default: boolean("hasCarousel", false, "Props"),
    },
    image: {
      default: object(
        "image",
        {
          mobile: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
          desktop: {
            url: "/assets/storybook/SfGroupedProduct/product-white.png",
          },
        },
        "Props"
      ),
    },
    imageWidth: {
      default: number("imageWidth", 328, {}, "Props"),
    },
    imageHeight: {
      default: number("imageHeight", 448, {}, "Props"),
    },
    imageLazy: {
      default: boolean("imageLazy", true, "Props"),
    },
    title: {
      default: text("title", "Leave white brooch", "Props"),
    },
    priceRegular: {
      default: text("priceRegular", "$10,99", "Props"),
    },
    priceSpecial: {
      default: text("priceSpecial", "$5,09", "Props"),
    },
  },
  data() {
    return {
      productQty: 1,
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
    </SfGroupedProduct>`,
});

SlotPrice.story = {
  name: "[slot] price",
};
