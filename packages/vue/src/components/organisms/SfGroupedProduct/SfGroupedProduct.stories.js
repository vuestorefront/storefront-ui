import { SfGroupedProduct, SfProperty } from "@storefront-ui/vue";
export default {
  title: "Components/Organisms/GroupedProduct",
  component: SfGroupedProduct,
  argTypes: {
    settings: {
      control: "object",
      table: {
        category: "Props",
      },
    },
    hasCarousel: {
      control: "boolean",
      defaultValue: true,
      table: {
        category: "Props",
      },
    },
    input: { action: "Text area input typing", table: { category: "Events" } },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SfGroupedProduct, SfProperty },
  props: Object.keys(argTypes),
  data() {
    return {
      products: [
        {
          productQty: 1,
          title: "Leave white brooch",
          priceRegular: "$10.99",
          image: "/assets/storybook/SfGroupedProduct/product-white.png",
          imageWidth: 146,
          imageHeight: 200,
        },
        {
          productQty: 1,
          title: "Leave green brooch",
          priceRegular: "$13.89",
          image: "/assets/storybook/SfGroupedProduct/product-green.png",
          imageWidth: 146,
          imageHeight: 200,
        },
        {
          productQty: 1,
          title: "Leave black brooch",
          priceRegular: "$9.99",
          image: "/assets/storybook/SfGroupedProduct/product-black.png",
          imageWidth: 146,
          imageHeight: 200,
        },
        {
          productQty: 1,
          title: "Leave white brooch extra",
          priceRegular: "$15.99",
          image: "/assets/storybook/SfGroupedProduct/product-white.png",
          imageWidth: 146,
          imageHeight: 200,
        },
      ],
    };
  },
  template: `
  <SfGroupedProduct
    :settings="settings"
    :has-carousel="hasCarousel"
    :style="{maxWidth: '1140px', margin: 'auto'}"
  >
    <SfGroupedProductItem
      v-for="(item, i) in products"
      :key="i"
      v-model="item.productQty"
      @input="input"
      :image="item.image"
      :image-width="item.imageWidth"
      :image-height="item.imageHeight"
      :image-lazy="imageLazy"
      :title="item.title"
      :price-regular="item.priceRegular"
    >
      <template #details>
        <div :style="{color: '#72757E', fontSize: 'var(--font-size--base'}">MSD23-345-324</div>
        <SfProperty name="Color" value="White" :style="{margin: 'auto 0 0 0', width: '110px'}" />
      </template>
    </SfGroupedProductItem>    
  </SfGroupedProduct>`,
});

export const Common = Template.bind({});
Common.args = {
  settings: { type: "slider" },
  imageLazy: true,
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
      @input="productQty = $event"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :image-lazy="imageLazy"
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
      @input="productQty = $event"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :image-lazy="imageLazy"
      :title="title"
      :price-regular="priceRegular"
    >
      <template #image="{ image, title, imagePlaceholder, imageLazy, imagePictureBreakpoint }">
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
      @input="productQty = $event"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :image-lazy="imageLazy"
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
      @input="productQty = $event"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :image-lazy="imageLazy"
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
      @input="productQty = $event"
      :image="image"
      :image-width="imageWidth"
      :image-height="imageHeight"
      :image-lazy="imageLazy"
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
