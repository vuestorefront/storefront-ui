import { SfGroupedProduct, SfProperty } from "@storefront-ui/vue";
import SfGroupedProductItem from "./_internal/SfGroupedProductItem.vue";
export default {
  title: "Components/Organisms/GroupedProduct",
  component: SfGroupedProductItem,
  parameters: {
    // do not modify cssprops manually, they are generated automatically by update-components-docs script
    cssprops: {
      "grouped-product-item-display": { value: "", control: "text" },
      "grouped-product-item-padding": {
        value: "var(--spacer-xs)",
        control: "text",
      },
      "grouped-product-item-border": {
        value:
          "var(--grouped-product-item-border-style, solid) var(--grouped-product-item-border-color, var(--c-light))",
        control: "text",
      },
      "grouped-product-item-border-width": { value: "0", control: "text" },
      "grouped-product-item-font": { value: "", control: "text" },
      "grouped-product-item-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "grouped-product-item-font-size": {
        value: "var(--font-size--xs)",
        control: "text",
      },
      "grouped-product-item-font-line-height": {
        value: "1.6",
        control: "text",
      },
      "grouped-product-item-font-family": {
        value: "var(--font-family--primary)",
        control: "text",
      },
      "grouped-product-item-aside-position": {
        value: "relative",
        control: "text",
      },
      "grouped-product-item-flex": { value: "", control: "text" },
      "grouped-product-item-image-background": {
        value: "var(--c-light)",
        control: "text",
      },
      "grouped-product-item-quantity-selector-display": {
        value: "flex",
        control: "text",
      },
      "grouped-product-item-quantity-selector-bottom": {
        value: "var(--spacer-sm)",
        control: "text",
      },
      "grouped-product-item-quantity-selector-left": {
        value: "50%",
        control: "text",
      },
      "grouped-product-item-quantity-selector-right": {
        value: "",
        control: "text",
      },
      "grouped-product-item-quantity-selector-transfrom": {
        value: "translate3d(-50%, 0, 0)",
        control: "text",
      },
      "grouped-product-item-quantity-selector-margin": {
        value: "",
        control: "text",
      },
      "grouped-product-item-description-margin": { value: "", control: "text" },
      "grouped-product-item-info-margin": { value: "", control: "text" },
      "grouped-product-item-title-color": {
        value: "var(--c-link)",
        control: "text",
      },
      "grouped-product-item-title-margin": {
        value: "var(--spacer-xs) 0",
        control: "text",
      },
      "grouped-product-item-title-font": { value: "", control: "text" },
      "grouped-product-item-title-font-weight": {
        value: "var(--font-weight--normal)",
        control: "text",
      },
      "grouped-product-item-title-font-size": {
        value: "var(--font-size--base)",
        control: "text",
      },
      "grouped-product-item-title-font-line-height": {
        value: "1.6",
        control: "text",
      },
      "grouped-product-item-title-font-family": {
        value: "var(--font-family--secondary)",
        control: "text",
      },
      "grouped-product-item-price-margin": { value: "", control: "text" },
      "quantity-selector-background": {
        value: "var(--c-light)",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
      "link-text-decoration": {
        value: "none",
        description: "Overridden other component's CSS variable",
        control: "text",
      },
    },
    // end of code generated automatically
    docs: {
      description: {
        component:
          "Grouped Product component. Built from main component - SfGroupedProduct and internal component - SfGroupedProductItem.",
      },
    },
  },
  argTypes: {
    settings: {
      control: "object",
      table: {
        category: "Props for main component",
        type: {
          summary: "object",
        },
        defaultValue: {
          summary: `{
            type: "slider",
            rewind: true,
            gap: 0,
            slidePerPage: true,
            breakpoints: {
              1023: {
                perView: 2,
                peek: {
                  before: 0,
                  after: 50,
                },
              },
            },
          }`,
        },
      },
      defaultValue: {
        type: "slider",
        rewind: true,
        gap: 0,
        slidePerPage: true,
        breakpoints: {
          1023: {
            perView: 2,
            peek: {
              before: 0,
              after: 50,
            },
          },
        },
      },
      description:
        "Settings for carousel following [glide.js documentation](https://glidejs.com/) ",
    },
    hasCarousel: {
      control: "boolean",
      table: {
        category: "Props for main component",
        type: {
          summary: "boolean",
        },
        defaultValue: {
          summary: "true",
        },
      },
      defaultValue: true,
      description: "Indicates if the carousel of products is on",
    },
    image: {
      control: "text",
      table: {
        category: "Props for SfGroupedProductItem component",
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: "",
        },
      },
      description: "Image url",
    },
    imageWidth: {
      control: "text",
      table: {
        category: "Props for SfGroupedProductItem component",
      },
      description:
        "Product image width, without unit. Could be an integer passed as Number or String type, but values like 'auto' or '100%' are not allowed.",
    },
    imageHeight: {
      control: "text",
      table: {
        category: "Props for SfGroupedProductItem component",
      },
      description:
        "Product image height, without unit. Could be an integer passed as Number or String type, but values like 'auto' or '100%' are not allowed.",
    },
    imagePlaceholder: {
      control: "text",
      table: {
        category: "Props for SfGroupedProductItem component",
      },
      defaultValue: "",
      description: "Product image placeholder",
    },
    imagePictureBreakpoint: {
      control: "number",
      table: {
        category: "Props for SfGroupedProductItem component",
      },
      defaultValue: 576,
      description: "Product image picture breakpoint",
    },
    title: {
      control: "text",
      table: {
        category: "Props for SfGroupedProductItem component",
        type: {
          summary: "string",
        },
      },
      defaultValue: "",
      description: "Product title",
    },
    priceRegular: {
      control: "text",
      table: {
        category: "Props for SfGroupedProductItem component",
        type: {
          summary: ["string", "number"],
        },
      },
      defaultValue: "",
      description: "Product regular price",
    },
    priceSpecial: {
      control: "text",
      table: {
        category: "Props for SfGroupedProductItem component",
        type: {
          summary: ["string", "number"],
        },
      },
      defaultValue: "",
      description: "Product special price",
    },
    qty: {
      control: "number",
      table: {
        category: "Props for SfGroupedProductItem component",
        type: {
          summary: ["string", "number"],
        },
        defaultValue: 1,
      },
      defaultValue: 1,
      description: "Product quantity",
    },
    link: {
      control: "text",
      table: {
        category: "Props for SfGroupedProductItem component",
        type: {
          summary: ["string", "object"],
        },
        defaultValue: "",
      },
      defaultValue: "",
      description: "Link to product",
    },
    "v-model": {
      control: "number",
      table: {
        type: {
          summary: "number",
        },
        category: "v-model",
        defaultValue: {
          summary: 1,
        },
      },
      defaultValue: 1,
      description:
        "v-model in SfGroupedProductItem accepts `qty` prop and emits native events",
    },
    input: {
      action: "input event emitted",
      table: { category: "Events", type: { summary: null } },
      description: "Emits input event when quantity selector value is changed",
    },
    default: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Default slot for `SfGroupedProduct` component. Use this slot to place grouped product items",
    },
    "title ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot `title` for `SfGroupedProductItem` component. Use this slot to replace title element",
    },
    "image ": {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot `image` for `SfGroupedProductItem` component. Use this slot to replace image element",
    },
    details: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `SfGroupedProductItem` component. Use this slot to pass custom details",
    },
    configuration: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `SfGroupedProductItem` component. Use this slot to pass custom configuration",
    },
    price: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `SfGroupedProductItem` component. Use this slot to pass custom price element",
    },
    input: {
      table: {
        category: "Slots",
        type: {
          summary: null,
        },
      },
      description:
        "Named slot for `SfGroupedProductItem` component. Use this slot to replace quantity selector",
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfGroupedProduct, SfProperty },
  props: Object.keys(argTypes),
  data() {
    return {
      productQty: 1,
    };
  },
  methods: {
    inputHandler(value) {
      this.productQty = value;
      this.input(value);
    },
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '500px'}"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="inputHandler"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #details>
        <div :style="{color: '#72757E', fontSize: 'var(--font-size--base'}">MSD23-345-324</div>
        <SfProperty name="Color" value="White" :style="{margin: 'auto 0 0 0'}" />
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>`,
});

export const Common = Template.bind({});
Common.args = {
  settings: { type: "slider" },
  image: "/assets/storybook/SfGroupedProduct/product-white.png",
  imageWidth: 82,
  imageHeight: 112,
  title: "Leave white brooch",
  priceRegular: "$10.99",
};

export const UseConfigurationSlot = (args, { argTypes }) => ({
  components: { SfGroupedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      productQty: 1,
    };
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '500px'}"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="inputHandler"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #configuration>
        CUSTOM CONFIGURATION
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>`,
});
UseConfigurationSlot.args = { ...Common.args };

export const UseImageSlot = (args, { argTypes }) => ({
  components: { SfGroupedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      productQty: 1,
    };
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '500px'}"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="inputHandler"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #image="{ image, title, imagePlaceholder, imagePictureBreakpoint }">
        <div :style="{height: '111px'}">CUSTOM IMAGE</div>
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>`,
});
UseImageSlot.args = { ...Common.args };

export const UseInputSlot = (args, { argTypes }) => ({
  components: { SfGroupedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      productQty: 1,
    };
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '500px'}"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="inputHandler"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #input="{ qty }">
        <div style="position: absolute; bottom: 0; right: 0">
          CUSTOM INPUT
        </div>
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>`,
});
UseInputSlot.args = { ...Common.args };

export const UseTitleSlot = (args, { argTypes }) => ({
  components: { SfGroupedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      productQty: 1,
    };
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '500px'}"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="inputHandler"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #title="{ title }">
        CUSTOM TITLE
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>`,
});
UseTitleSlot.args = { ...Common.args };

export const UsePriceSlot = (args, { argTypes }) => ({
  components: { SfGroupedProduct },
  props: Object.keys(argTypes),
  data() {
    return {
      productQty: 1,
    };
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '500px'}"
  >
    <SfGroupedProductItem
      :qty="productQty"
      @input="inputHandler"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #price="{ priceSpecial, priceRegular }">
        CUSTOM PRICE
      </template>
    </SfGroupedProductItem>
  </SfGroupedProduct>`,
});
UsePriceSlot.args = { ...Common.args };
