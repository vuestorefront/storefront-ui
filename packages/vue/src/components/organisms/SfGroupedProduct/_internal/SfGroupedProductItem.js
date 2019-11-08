import SfPrice from "../../../atoms/SfPrice/SfPrice.vue";
import SfImage from "../../../atoms/SfImage/SfImage.vue";
import SfInput from "../../../atoms/SfInput/SfInput.vue";

export default {
  name: "SfGroupedProductItem",
  components: {
    SfImage,
    SfPrice,
    SfInput
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
    placeholderImage: {
      type: String,
      default: ""
    },
    /**
     * Product image lazy loading
     */
    lazyImage: {
      type: Boolean,
      default: true
    },
    /**
     * Product image picture breakpoint
     */
    pictureBreakpointImage: {
      type: Number,
      default: 576
    },
    /**
     * Product title
     */
    title: {
      type: String,
      required: true
    },
    /**
     * Product regular price
     */
    regularPrice: {
      type: [Number, String],
      default: ""
    },
    /**
     * Product special price
     */
    specialPrice: {
      type: [Number, String],
      default: ""
    },
    /** Product quantity */
    qty: {
      type: String,
      default: "0"
    },
    /**
     * Stock quantity of product
     */
    stock: {
      type: Number,
      default: 0
    }
  },
  model: {
    prop: "qty"
  }
};
