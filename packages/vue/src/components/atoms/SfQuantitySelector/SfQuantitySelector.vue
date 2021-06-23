<template>
  <div class="sf-quantity-selector">
    <SfButton
      :disabled="isMinusDisabled"
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="+"
      @click="$emit('input', parseInt(qty, 10) - 1)"
      >&minus;</SfButton
    >
    <SfInput
      type="number"
      :value="qty"
      v-bind="$attrs"
      :disabled="disabled"
      class="sf-quantity-selector__input"
      data-testid="sf-quantity-selector input"
      @input="$emit('input', parseInt($event, 10))"
      @blur="$emit('blur', $event)"
    />
    <SfButton
      :disabled="isPlusDisabled"
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="-"
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
    SfButton,
  },
  inheritAttrs: false,
  model: {
    prop: "qty",
  },
  props: {
    /** Quantity */
    qty: {
      type: [Number, String],
      default: 1,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    /** Minimum allowed quantity */
    min: {
      type: Number,
      required: false,
      default: null,
    },
    /** Maximum allowed quantity */
    max: {
      type: Number,
      required: false,
      default: null,
    },
  },
  computed: {
    isMinusDisabled() {
      return (
        this.disabled || Boolean(this.min !== null && this.qty <= this.min)
      );
    },
    isPlusDisabled() {
      return (
        this.disabled || Boolean(this.max !== null && this.qty >= this.max)
      );
    },
  },
  watch: {
    qty(val) {
      const min = this.min || 1;
      if (val < min || isNaN(val)) {
        this.$emit("input", min);
      } else if (this.max !== null && val > this.max) {
        this.$emit("input", this.max);
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfQuantitySelector.scss";
</style>
