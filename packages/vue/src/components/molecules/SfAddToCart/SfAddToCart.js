import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfSelect from "../SfSelect/SfSelect.vue";

export default {
  name: "SfAddToCart",
  components: {
    SfButton,
    SfSelect
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Stock quantity of product
     */
    quantity: {
      type: Number,
      default: 1
    },
    /**
     * Selected quantity
     */
    qty: {
      type: String,
      default: "1"
    }
  }
};
