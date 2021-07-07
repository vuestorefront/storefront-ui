<template functional>
  <div
    :class="[data.class, data.staticClass, 'sf-quantity-selector']"
    :style="[data.style, data.staticStyle]"
  >
    <component
      :is="injections.components.SfButton"
      :disabled="
        props.disabled || Boolean(props.min !== null && props.qty <= props.min)
      "
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="+"
      @click="
        $options.handleInput(props.qty - 1, listeners, props.min, props.max)
      "
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
      @input="$options.handleInput($event, listeners, props.min, props.max)"
    />
    <component
      :is="injections.components.SfButton"
      :disabled="
        props.disabled || Boolean(props.max !== null && props.qty >= props.max)
      "
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="-"
      @click="
        $options.handleInput(props.qty + 1, listeners, props.min, props.max)
      "
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
  handleInput(qty, listeners, min, max) {
    // adjust qty per min/max if needed
    const minimum = min || 1;
    if (qty < minimum || isNaN(qty)) {
      qty = minimum;
    } else if (max !== null && qty > max) {
      qty = max;
    }
    return listeners.input && listeners.input(qty);
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfQuantitySelector.scss";
</style>
