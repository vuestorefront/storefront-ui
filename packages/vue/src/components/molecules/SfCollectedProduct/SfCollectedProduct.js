import SfPrice from "../../atoms/SfPrice/SfPrice.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfCounter from "../../molecules/SfCounter/SfCounter.vue";
export default {
  name: "SfCollectedProduct",
  props: {
    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: String,
      default: "assets/storybook/product_thumb.png"
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
      default: null
    },
    /**
     * Product special price
     */
    specialPrice: {
      type: [Number, String],
      default: null
    },
    /**
     * Product quantity
     */
    quantity: {
      type: [Number, String],
      default: 0
    }
  },
  components: {
    SfIcon,
    SfCircleIcon,
    SfPrice,
    SfCounter
  }
};
