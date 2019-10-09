import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfInput from "../../atoms/SfInput/SfInput.vue";

export default {
  name: "SfAddToCart",
  components: {
    SfButton,
    SfInput
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Boolean to indicate whether product
     * can be added to cart
     */
    canAddToCart: {
      type: Boolean,
      default: false
    },
    /**
     * Stock quantity of product
     */
    stock: {
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
  },
  watch: {
    qty(value) {
      const qty = parseInt(value);
      if (qty <= 0) {
        this.$emit("input", "1");
        return;
      }
      if (qty > this.stock) {
        this.$emit("input", "" + this.stock);

      }
    }
  }
};
