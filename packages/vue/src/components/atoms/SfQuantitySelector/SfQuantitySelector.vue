<template>
  <div class="sf-quantity-selector">
    <SfButton
      :disabled="disabled"
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="+"
      @click="$emit('input', parseInt(qty, 10) - 1)"
      >&minus;</SfButton
    >
    <SfInput
      :value="qty"
      v-bind="$attrs"
      :label="inputProps.label"
      :name="inputProps.name"
      :type="inputProps.type"
      :valid="inputProps.valid"
      :error-message="inputProps.errorMessage"
      :required="inputProps.required"
      :disabled="inputProps.disabled || disabled"
      class="sf-quantity-selector__input"
      data-testid="sf-quantity-selector input"
      @input="$emit('input', parseInt($event, 10))"
      @blur="$emit('blur', $event)"
    />
    <SfButton
      :disabled="disabled"
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
    /**
     * Object to pass input props (label, name, type, valid, errorMessage, required, disabled).
     */
    inputProps: {
      type: Object,
      default: () => {
        return {
          type: "number",
        };
      },
    },
  },
  watch: {
    qty(val) {
      if (val < 1 || isNaN(val)) {
        this.$emit("input", 1);
      }
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfQuantitySelector.scss";
</style>
