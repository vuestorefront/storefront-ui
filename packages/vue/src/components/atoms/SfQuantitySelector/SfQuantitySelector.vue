<template functional>
  <div
    :class="[data.class, data.staticClass, 'sf-quantity-selector']"
    :style="[data.style, data.staticStyle]"
  >
    <component
      :is="injections.components.SfButton"
      :disabled="props.disabled"
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="+"
      @click="
        listeners.input &&
          listeners.input(
            props.qty,
            $options.handleInput(props.qty, parseInt(props.qty, 10) - 1)
          )
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
      @input="
        listeners.input($options.handleInput(props.qty, parseInt($event, 10)))
      "
    />
    <component
      :is="injections.components.SfButton"
      :disabled="props.disabled"
      class="sf-button--pure sf-quantity-selector__button"
      data-testid="-"
      @click="
        listeners.input &&
          listeners.input(
            props.qty,
            $options.handleInput(props.qty, parseInt(props.qty, 10) + 1)
          )
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
  handleInput(qty, value) {
    return qty < 1 || isNaN(qty) ? 1 : value;
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/atoms/SfQuantitySelector.scss";
</style>
