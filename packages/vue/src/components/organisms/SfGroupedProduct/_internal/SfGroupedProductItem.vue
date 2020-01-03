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
          imageLazy,
          imagePictureBreakpoint
        }"
      >
        <SfImage
          :src="image"
          :alt="title"
          :placeholder="imagePlaceholder"
          :lazy="imageLazy"
          :image-picture-breakpoint="imagePictureBreakpoint"
          class="sf-grouped-product-item__image"
        />
      </slot>
      <!-- @slot Custom input markup -->
      <slot name="input" v-bind="{ qty, stock }">
        <SfQuantitySelector
          :qty="qty"
          :stock="stock"
          :min="qtyMin"
          class="sf-grouped-product-item__quantity-selector"
          @input="$emit('input', $event)"
        />
      </slot>
    </div>
    <div class="sf-grouped-product-item__description">
      <!-- @slot Custom title markup -->
      <slot name="title" v-bind="{ title }">
        <div class="sf-grouped-product-item__title">{{ title }}</div>
      </slot>
      <!-- @slot Custom details markup -->
      <slot name="details" />
    </div>
    <!-- @slot Custom configuration markup -->
    <slot name="configuration" />
    <!-- @slot Custom price markup -->
    <slot name="price" v-bind="{ priceSpecial, priceRegular }">
      <SfPrice
        :regular="priceRegular"
        :special="priceSpecial"
        class="sf-grouped-product-item__price"
      />
    </slot>
  </li>
</template>
<script>
import SfPrice from "../../../atoms/SfPrice/SfPrice.vue";
import SfImage from "../../../atoms/SfImage/SfImage.vue";
import SfQuantitySelector from "../../../atoms/SfQuantitySelector/SfQuantitySelector.vue";
export default {
  name: "SfGroupedProductItem",
  components: {
    SfImage,
    SfPrice,
    SfQuantitySelector
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Product image
     */
    image: {
      type: String,
      default: ""
    },
    /**
     * Product image placeholder
     */
    imagePlaceholder: {
      type: String,
      default: ""
    },
    /**
     * Product image lazy loading
     */
    imageLazy: {
      type: Boolean,
      default: true
    },
    /**
     * Product image picture breakpoint
     */
    imagePictureBreakpoint: {
      type: Number,
      default: 576
    },
    /**
     * Product title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Product regular price
     */
    priceRegular: {
      type: [Number, String],
      default: ""
    },
    /**
     * Product special price
     */
    priceSpecial: {
      type: [Number, String],
      default: ""
    },
    /** Product quantity */
    qty: {
      type: [Number, String],
      default: 1
    },
    /**
     * Stock quantity of product
     */
    stock: {
      type: Number,
      default: 0
    },
    /**
     * Minimum product quantity
     */
    qtyMin: {
      type: Number,
      default: 1
    }
  }
};
</script>
