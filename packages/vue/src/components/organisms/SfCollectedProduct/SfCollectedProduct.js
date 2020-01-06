// @vue/component
import SfPrice from "../../atoms/SfPrice/SfPrice.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfQuantitySelector from "../../atoms/SfQuantitySelector/SfQuantitySelector.vue";

export default {
  name: "SfCollectedProduct",
  props: {
    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: String,
      default: ""
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
     * Selected quantity
     */
    qty: {
      type: [Number, String],
      default: 1
    },
    /**
     * Stock quantity of product
     */
    stock: {
      type: Number,
      default: 1
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
  },
  methods: {
    removeHandler() {
      this.$emit("click:remove");
    }
  },
  components: {
    SfIcon,
    SfImage,
    SfCircleIcon,
    SfPrice,
    SfQuantitySelector
  }
};
