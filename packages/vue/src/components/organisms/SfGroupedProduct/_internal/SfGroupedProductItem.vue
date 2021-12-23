<template>
  <li class="glide__slide sf-grouped-product-item">
    <div class="sf-grouped-product-item__aside">
      <slot
        name="image"
        v-bind="{
          image,
          title,
          imagePictureBreakpoint,
        }"
      >
        <SfImage
          :src="image"
          :alt="title"
          :width="imageWidth"
          :height="imageHeight"
          :image-picture-breakpoint="imagePictureBreakpoint"
          class="sf-grouped-product-item__image"
        />
      </slot>
    </div>
    <div class="sf-grouped-product-item__description">
      <slot name="title" v-bind="{ title }">
        <div class="sf-grouped-product-item__title-wraper">
          <SfLink :link="link" class="sf-grouped-product-item__title">{{
            title
          }}</SfLink>
        </div>
      </slot>
      <slot name="details" />
    </div>
    <slot name="configuration" />
    <div class="sf-grouped-product-item__info">
      <slot name="price" v-bind="{ priceSpecial, priceRegular }">
        <SfPrice
          :regular="priceRegular"
          :special="priceSpecial"
          class="sf-grouped-product-item__price"
        />
      </slot>
    </div>
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
    imageWidth: {
      type: Number,
      default: 328,
    },
    imageHeight: {
      type: Number,
      default: 448,
    },
    imagePictureBreakpoint: {
      type: Number,
      default: 576,
    },
    title: {
      type: String,
      default: "",
    },
    priceRegular: {
      type: [Number, String],
      default: "",
    },
    priceSpecial: {
      type: [Number, String],
      default: "",
    },
    qty: {
      type: [Number, String],
      default: 1,
    },
    link: {
      type: [String, Object],
      default: "",
    },
  },
};
</script>
