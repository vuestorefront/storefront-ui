<template>
  <li class="glide__slide sf-grouped-product-item">
    <div class="sf-grouped-product-item__aside">
      <!-- @slot Custom image markup -->
      <slot
        name="image"
        v-bind="{
          image,
          title,
          imagePlaceholder,
          imagePictureBreakpoint,
        }"
      >
        <SfImage
          :src="image"
          :alt="title"
          :width="imageWidth"
          :height="imageHeight"
          :placeholder="imagePlaceholder"
          :image-picture-breakpoint="imagePictureBreakpoint"
          class="sf-grouped-product-item__image"
        />
      </slot>
    </div>
    <div class="sf-grouped-product-item__description">
      <!-- @slot Custom title markup -->
      <slot name="title" v-bind="{ title }">
        <div class="sf-grouped-product-item__title-wraper">
          <SfLink :link="link" class="sf-grouped-product-item__title">{{
            title
          }}</SfLink>
        </div>
      </slot>
      <!-- @slot Custom details markup -->
      <slot name="details" />
    </div>
    <!-- @slot Custom configuration markup -->
    <slot name="configuration" />
    <div class="sf-grouped-product-item__info">
      <!-- @slot Custom price markup -->
      <slot name="price" v-bind="{ priceSpecial, priceRegular }">
        <SfPrice
          :regular="priceRegular"
          :special="priceSpecial"
          class="sf-grouped-product-item__price"
        />
      </slot>
    </div>
    <!-- @slot Custom input markup -->
    <slot name="input" v-bind="{ qty }">
      <SfQuantitySelector
        :qty="qty"
        aria-label="Quantity"
        class="sf-grouped-product-item__quantity-selector"
        @input="$emit('input', $event)"
      />
    </slot>
  </li>
</template>
<script>
import SfPrice from "../../../atoms/SfPrice/SfPrice.vue";
import SfImage from "../../../atoms/SfImage/SfImage.vue";
import SfQuantitySelector from "../../../atoms/SfQuantitySelector/SfQuantitySelector.vue";
import SfLink from "../../../atoms/SfLink/SfLink.vue";
export default {
  name: "SfGroupedProductItem",
  components: {
    SfImage,
    SfPrice,
    SfQuantitySelector,
    SfLink,
  },
  model: {
    prop: "qty",
  },
  props: {
    /**
     * Product image
     */
    image: {
      type: String,
      default: "",
    },
    /**
     * Product image width, without unit
     */
    imageWidth: {
      type: [String, Number],
      default: 328,
    },
    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: 448,
    },
    /**
     * Product image placeholder
     */
    imagePlaceholder: {
      type: String,
      default: "",
    },
    /**
     * Product image picture breakpoint
     */
    imagePictureBreakpoint: {
      type: Number,
      default: 576,
    },
    /**
     * Product title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Product regular price
     */
    priceRegular: {
      type: [Number, String],
      default: "",
    },
    /**
     * Product special price
     */
    priceSpecial: {
      type: [Number, String],
      default: "",
    },
    /** Product quantity */
    qty: {
      type: [Number, String],
      default: 1,
    },
    /**
     * Link to product
     */
    link: {
      type: [String, Object],
      default: "",
    },
  },
};
</script>
