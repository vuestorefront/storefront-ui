<template>
  <div class="sf-quantity-selector">
    <SfButton
      :disabled="disabled"
      class="sf-quantity-selector__button"
      @click="$emit('input', parseInt(qty, 10) - 1)"
      >-</SfButton
    >
    <SfInput
      type="number"
      :value="qty"
      :aria-label="ariaLabel"
      :disabled="disabled"
      class="sf-quantity-selector__input"
      @input="$emit('input', parseInt($event, 10))"
    />
    <SfButton
      :disabled="disabled"
      class="sf-quantity-selector__button"
      @click="$emit('input', parseInt(qty, 10) + 1)"
      >+</SfButton
    >
  </div>
</template>
<script>
import SfInput from "../../atoms/SfInput/SfInput.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfQuantitySelector",
  components: {
    SfInput,
    SfButton
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfQuantitySelector.scss";
</style>
