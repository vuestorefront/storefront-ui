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
     * It should be an url of the product
     */
    image: {
      type: String,
      default: "assets/storybook/product_thumb.jpg"
    },
    /**
     * Product title
     */
    title: {
      type: String,
      required: true
    },
    /**
     * Product title
     */
    sku: {
      type: String,
      default: ""
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
    /**
     * Selected quantity
     */
    qty: {
      type: String,
      default: "0"
    },
    /**
     * Stock quantity of product
     */
    stock: {
      type: Number,
      default: 1
    },
    /**
     * Product attributes
     */
    attributes: {
      type: Array,
      default: () => []
    }
  },
  model: {
    prop: "qty"
  }
};
