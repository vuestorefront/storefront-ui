<template functional>
  <div
    :class="[data.class, data.staticClass, 'sf-quantity-selector']"
    :style="[data.style, data.staticStyle]"
  >
    <component
      :is="injections.components.SfButton"
      :disabled="props.disabled"
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="decrease"
      @click="$options.handleInput(props.qty - 1, listeners)"
    >
      &minus;
    </component>
    <component
      :is="injections.components.SfInput"
      type="number"
      :value="props.qty"
      :disabled="props.disabled"
      class="sf-quantity-selector__input"
      data-testid="sf-quantity-selector input"
      @input="$options.handleInput($event, listeners)"
    />
    <component
      :is="injections.components.SfButton"
      :disabled="props.disabled"
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="increase"
      @click="$options.handleInput(props.qty + 1, listeners)"
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
  inject: {
    components: {
      default: {
        SfInput,
        SfButton,
      },
    },
  },
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
  },
  handleInput(qty, listeners) {
    return listeners.input && listeners.input(qty < 1 || isNaN(qty) ? 1 : qty);
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfQuantitySelector.scss";
</style>
