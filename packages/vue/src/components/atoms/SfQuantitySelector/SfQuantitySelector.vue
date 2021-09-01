<template>
  <div class="sf-quantity-selector">
    <component
      :is="components.SfButton"
      :disabled="disabled || Boolean(min !== null && modelValue <= min)"
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="decrease"
      @click="handleInput(-1)"
    >
      &minus;
    </component>
    <component
      :is="components.SfInput"
      :value="modelValue"
      type="number"
      :disabled="disabled"
      class="sf-quantity-selector__input"
      data-testid="sf-quantity-selector input"
      @input="handleInput(0)"
    />
    <component
      :is="components.SfButton"
      :disabled="disabled || Boolean(max !== null && modelValue >= max)"
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="increase"
      @click="handleInput(1)"
    >
      +
    </component>
  </div>
</template>
<script>
import SfInput from "../../atoms/SfInput/SfInput.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfQuantitySelector",
  compatConfig: {
    MODE: 3, // opt-in to Vue 3 behavior for this component only
  },
  inject: {
    components: {
      default: {
        SfInput,
        SfButton,
      },
    },
  },
  props: {
    /** Quantity */
    modelValue: {
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
      default: null,
    },
    /** Maximum allowed quantity */
    max: {
      type: Number,
      default: null,
    },
  },
  methods: {
    handleInput(inputType) {
      // adjust qty per min/max if needed
      var qty = this.modelValue;
      const minimum = this.min || 1;
      switch (inputType) {
        case 0:
          qty = Number(qty);
          break;
        case 1:
          qty++;
          break;
        case -1:
          qty--;
          break;
      }
      if (qty < minimum || isNaN(qty)) {
        qty = minimum;
      } else if (this.max !== null && qty > this.max) {
        qty = this.max;
      }
      this.$emit("update:modelValue", qty);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfQuantitySelector.scss";
</style>
