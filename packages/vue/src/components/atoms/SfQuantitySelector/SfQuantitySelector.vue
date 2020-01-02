<template>
  <SfInput
    type="number"
    :value="qty"
    :min="min"
    :max="stock"
    class="sf-quantity-selector"
    @input="$emit('input', parseInt($event, 10))"
  />
</template>
<script>
import SfInput from "../../atoms/SfInput/SfInput.vue";
export default {
  name: "SfQuantitySelector",
  components: {
    SfInput
  },
  model: {
    prop: "qty"
  },
  props: {
    /** Quantity */
    qty: {
      type: [Number, String],
      default: 1
    },
    /** Stock quantity */
    stock: {
      type: Number,
      default: 99
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
      if (qty > this.stock) {
        this.$emit("input", "" + this.stock);
      }
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfQuantitySelector.scss";
</style>
