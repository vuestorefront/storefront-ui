<template>
  <div class="sf-add-to-cart">
    <slot name="quantity-select-input" v-bind="{ qty }">
      <SfQuantitySelector
        :qty="qty"
        aria-label="Quantity"
        :disabled="disabled"
        class="sf-add-to-cart__select-quantity"
        @input="$emit('input', $event)"
      />
    </slot>
    <slot name="add-to-cart-btn">
      <SfButton
        class="sf-add-to-cart__button"
        :disabled="disabled"
        v-on="$listeners"
      >
        Add to cart
      </SfButton>
    </slot>
  </div>
</template>
<script>
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfQuantitySelector from "../../atoms/SfQuantitySelector/SfQuantitySelector.vue";
export default {
  name: "SfAddToCart",
  components: {
    SfButton,
    SfQuantitySelector,
  },
  model: {
    prop: "qty",
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    qty: {
      type: [Number, String],
      default: 1,
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/molecules/SfAddToCart.scss";
</style>
