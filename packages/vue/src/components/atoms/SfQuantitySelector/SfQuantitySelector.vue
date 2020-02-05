<template>
  <SfInput
    type="number"
    :value="qty"
    :aria-label="ariaLabel"
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
    /**
     * Form input label
     */
    ariaLabel: {
      type: String,
      default: "quantity"
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfQuantitySelector.scss";
</style>
