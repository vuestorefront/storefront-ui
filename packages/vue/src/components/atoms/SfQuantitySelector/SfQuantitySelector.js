import SfInput from "../../atoms/SfInput/SfInput.vue";
export default {
  name: "SfQuantitySelector",
  model: {
    prop: "qty"
  },
  components: {
    SfInput
  },
  props: {
    /** Quantity */
    qty: {
      type: [Number, String],
      default: 1
    },
    /** Minimum quantity */
    min: {
      type: Number,
      default: 1
    }
  },
  watch: {
    qty(value) {
      const qty = parseInt(value, 10);
      if (qty < this.min) {
        this.$emit("input", "" + this.min);
        return;
      }
    }
  }
};
