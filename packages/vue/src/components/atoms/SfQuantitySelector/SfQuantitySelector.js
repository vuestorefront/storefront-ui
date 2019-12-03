import SfInput from "../../atoms/SfInput/SfInput.vue";

export default {
  name: "SfQuantitySelector",
  components: {
    SfInput
  },
  props: {
    /** Product quantity */
    qty: {
      type: String,
      default: "0"
    },
    /** Stock quantity of product */
    stock: {
      type: Number,
      default: 0
    }
  }
};
