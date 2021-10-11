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
    image: {
      type: String,
      default: "",
    },
<<<<<<< HEAD
=======
    /**
     * Product image width, without unit (for internal component)
     */
>>>>>>> 4ab6bf217 (feat: types, descriptions for footer, grouped and collected product)
    imageWidth: {
      type: [String, Number],
      default: 328,
    },
<<<<<<< HEAD
=======
    /**
     * Product image height, without unit (for internal component)
     */
>>>>>>> 4ab6bf217 (feat: types, descriptions for footer, grouped and collected product)
    imageHeight: {
      type: [String, Number],
      default: 448,
    },
<<<<<<< HEAD
=======
    /**
     * Product image placeholder (for internal component)
     */
>>>>>>> 4ab6bf217 (feat: types, descriptions for footer, grouped and collected product)
    imagePlaceholder: {
      type: String,
      default: "",
    },
<<<<<<< HEAD
=======
    /**
     * Product image picture breakpoint (for internal component)
     */
>>>>>>> 4ab6bf217 (feat: types, descriptions for footer, grouped and collected product)
    imagePictureBreakpoint: {
      type: Number,
      default: 576,
    },
<<<<<<< HEAD
=======
    /**
     * Product title (for internal component)
     */
>>>>>>> 4ab6bf217 (feat: types, descriptions for footer, grouped and collected product)
    title: {
      type: String,
      default: "",
    },
<<<<<<< HEAD
=======
    /**
     * Product regular price (for internal component)
     */
>>>>>>> 4ab6bf217 (feat: types, descriptions for footer, grouped and collected product)
    priceRegular: {
      type: [Number, String],
      default: "",
    },
<<<<<<< HEAD
=======
    /**
     * Product special price (for internal component)
     */
>>>>>>> 4ab6bf217 (feat: types, descriptions for footer, grouped and collected product)
    priceSpecial: {
      type: [Number, String],
      default: "",
    },
<<<<<<< HEAD
=======
    /** Product quantity (for internal component) */
>>>>>>> 4ab6bf217 (feat: types, descriptions for footer, grouped and collected product)
    qty: {
      type: [Number, String],
      default: 1,
    },
<<<<<<< HEAD
=======
    /**
     * Link to product (for internal component)
     */
>>>>>>> 4ab6bf217 (feat: types, descriptions for footer, grouped and collected product)
    link: {
      type: [String, Object],
      default: "",
    },
  },
};
</script>
