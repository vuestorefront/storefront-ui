// @vue/component
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
  },
  model: {
    prop: "qty"
  }
};
