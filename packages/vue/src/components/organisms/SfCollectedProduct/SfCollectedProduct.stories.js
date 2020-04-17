import { storiesOf } from "@storybook/vue";
import {
  withKnobs,
  object,
  text,
  number,
  optionsKnob as options,
} from "@storybook/addon-knobs";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfCollectedProduct from "./SfCollectedProduct.vue";
import SfProperty from "../../atoms/SfProperty/SfProperty.vue";
storiesOf("Organisms|CollectedProduct", module)
  .addDecorator(withKnobs)
  .add("Common", () => ({
    components: { SfCollectedProduct, SfProperty, SfButton },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-collected-product--detailed": "sf-collected-product--detailed",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      image: {
        default: object(
          "image",
          {
            mobile: { url: "/assets/storybook/Home/productB.jpg" },
            desktop: { url: "/assets/storybook/Home/productB.jpg" },
          },
          "Props"
        ),
      },
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props"),
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props"),
      },
      title: {
        default: text("title", "Cotton Sweater", "Props"),
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "$5,09", "Props"),
      },
    },
    data() {
      return {
        productQty: 1,
      };
    },
    template: `<SfCollectedProduct
        :qty="productQty"
        :class="customClass"
        @input="productQty = $event"
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :title="title"
        :regular-price="regularPrice"
        :special-price="specialPrice"
    >
      <template #configuration>
        <div :style="{margin: '1rem 0 0 0'}">
          <SfProperty name="Size" value="XS"/>
          <SfProperty name="Color" value="white"/>
        </div>
      </template>
      <template #actions>
          <SfButton class="sf-button--text desktop-only">Save for later</SfButton>
      </template>
    </SfCollectedProduct>`,
  }))
  .add("[slot] actions", () => ({
    components: { SfCollectedProduct, SfProperty },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-collected-product--detailed": "sf-collected-product--detailed",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      image: {
        default: object(
          "image",
          {
            mobile: { url: "/assets/storybook/Home/productB.jpg" },
            desktop: { url: "/assets/storybook/Home/productB.jpg" },
          },
          "Props"
        ),
      },
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props"),
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props"),
      },
      title: {
        default: text("title", "Cotton Sweater", "Props"),
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "$5,09", "Props"),
      },
    },
    data() {
      return {
        productQty: 1,
      };
    },
    template: `<SfCollectedProduct
        :qty="productQty"
        :class="customClass"
        @input="productQty = $event"
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :title="title"
        :regular-price="regularPrice"
        :special-price="specialPrice"
    >
      <template #actions>
          CUSTOM ACTIONS
      </template>
    </SfCollectedProduct>`,
  }))
  .add("[slot] configuration", () => ({
    components: { SfCollectedProduct, SfProperty },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-collected-product--detailed": "sf-collected-product--detailed",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      image: {
        default: object(
          "image",
          {
            mobile: { url: "/assets/storybook/Home/productB.jpg" },
            desktop: { url: "/assets/storybook/Home/productB.jpg" },
          },
          "Props"
        ),
      },
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props"),
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props"),
      },
      title: {
        default: text("title", "Cotton Sweater", "Props"),
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "$5,09", "Props"),
      },
    },
    data() {
      return {
        productQty: 1,
      };
    },
    template: `<SfCollectedProduct
        :qty="productQty"
        :class="customClass"
        @input="productQty = $event"
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :title="title"
        :regular-price="regularPrice"
        :special-price="specialPrice"
    >
      <template #configuration>
        CUSTOM CONFIGURATION
      </template>
    </SfCollectedProduct>`,
  }))
  .add("[slot] remove", () => ({
    components: { SfCollectedProduct, SfProperty },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-collected-product--detailed": "sf-collected-product--detailed",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      image: {
        default: object(
          "image",
          {
            mobile: { url: "/assets/storybook/Home/productB.jpg" },
            desktop: { url: "/assets/storybook/Home/productB.jpg" },
          },
          "Props"
        ),
      },
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props"),
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props"),
      },
      title: {
        default: text("title", "Cotton Sweater", "Props"),
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "$5,09", "Props"),
      },
    },
    data() {
      return {
        productQty: 1,
      };
    },
    template: `<SfCollectedProduct
        :qty="productQty"
        :class="customClass"
        @input="productQty = $event"
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :title="title"
        :regular-price="regularPrice"
        :special-price="specialPrice"
    >
      <template #remove="{ removeHandler }">
        <button @click="removeHandler">CUSTOM REMOVE</button>
      </template>
    </SfCollectedProduct>`,
  }))
  .add("[slot] image", () => ({
    components: { SfCollectedProduct, SfProperty },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-collected-product--detailed": "sf-collected-product--detailed",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      image: {
        default: object(
          "image",
          {
            mobile: { url: "/assets/storybook/Home/productB.jpg" },
            desktop: { url: "/assets/storybook/Home/productB.jpg" },
          },
          "Props"
        ),
      },
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props"),
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props"),
      },
      title: {
        default: text("title", "Cotton Sweater", "Props"),
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "$5,09", "Props"),
      },
    },
    data() {
      return {
        productQty: 1,
      };
    },
    template: `<SfCollectedProduct
        :qty="productQty"
        :class="customClass"
        @input="productQty = $event"
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :title="title"
        :regular-price="regularPrice"
        :special-price="specialPrice"
    >
      <template #image="{ image, title }">
        CUSTOM IMAGE
      </template>
    </SfCollectedProduct>`,
  }))
  .add("[slot] input", () => ({
    components: { SfCollectedProduct, SfProperty },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-collected-product--detailed": "sf-collected-product--detailed",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      image: {
        default: object(
          "image",
          {
            mobile: { url: "/assets/storybook/Home/productB.jpg" },
            desktop: { url: "/assets/storybook/Home/productB.jpg" },
          },
          "Props"
        ),
      },
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props"),
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props"),
      },
      title: {
        default: text("title", "Cotton Sweater", "Props"),
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "$5,09", "Props"),
      },
    },
    data() {
      return {
        productQty: 1,
      };
    },
    template: `<SfCollectedProduct
        :class="customClass"
        :qty="productQty"
        @input="productQty = $event"
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :title="title"
        :regular-price="regularPrice"
        :special-price="specialPrice"
    >
      <template #input="{ image, title }">
        CUSTOM INPUT
      </template>
    </SfCollectedProduct>`,
  }))
  .add("[slot] title", () => ({
    components: { SfCollectedProduct, SfProperty },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-collected-product--detailed": "sf-collected-product--detailed",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      image: {
        default: object(
          "image",
          {
            mobile: { url: "/assets/storybook/Home/productB.jpg" },
            desktop: { url: "/assets/storybook/Home/productB.jpg" },
          },
          "Props"
        ),
      },
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props"),
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props"),
      },
      title: {
        default: text("title", "Cotton Sweater", "Props"),
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "$5,09", "Props"),
      },
    },
    data() {
      return {
        productQty: 1,
      };
    },
    template: `<SfCollectedProduct
        :class="customClass"
        :qty="productQty"
        @input="productQty = $event"
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :title="title"
        :regular-price="regularPrice"
        :special-price="specialPrice"
    >
      <template #title="{ title }">
        CUSTOM TITLE
      </template>
    </SfCollectedProduct>`,
  }))
  .add("[slot] price", () => ({
    components: { SfCollectedProduct, SfProperty },
    props: {
      customClass: {
        default: options(
          "CSS modifiers",
          {
            "sf-collected-product--detailed": "sf-collected-product--detailed",
          },
          "",
          { display: "multi-select" },
          "CSS Modifiers"
        ),
      },
      image: {
        default: object(
          "image",
          {
            mobile: { url: "/assets/storybook/Home/productB.jpg" },
            desktop: { url: "/assets/storybook/Home/productB.jpg" },
          },
          "Props"
        ),
      },
      imageWidth: {
        default: number("imageWidth", 140, {}, "Props"),
      },
      imageHeight: {
        default: number("imageHeight", 200, {}, "Props"),
      },
      title: {
        default: text("title", "Cotton Sweater", "Props"),
      },
      regularPrice: {
        default: text("regularPrice", "$10,99", "Props"),
      },
      specialPrice: {
        default: text("specialPrice", "$5,09", "Props"),
      },
    },
    data() {
      return {
        productQty: 1,
      };
    },
    template: `<SfCollectedProduct
        :class="customClass"
        :qty="productQty"
        @input="productQty = $event"
        :image="image"
        :image-width="imageWidth"
        :image-height="imageHeight"
        :title="title"
        :regular-price="regularPrice"
        :special-price="specialPrice"
    >
      <template #price="{ specialPrice, regularPrice }">
        CUSTOM PRICE
      </template>
    </SfCollectedProduct>`,
  }));
