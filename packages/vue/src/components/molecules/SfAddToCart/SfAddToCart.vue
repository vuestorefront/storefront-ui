<template>
  <div class="sf-add-to-cart" data-test="sf-add-to-card">
    <slot name="add-to-cart-btn">
      <!--@slot Custom content that will replace default Add to cart button design.-->
      <SfButton
        class="sf-add-to-cart__button"
        :disabled="disabled"
        v-on="$listeners"
      >
        Add to cart
      </SfButton>
    </slot>
    <slot name="quantity-select-input" v-bind="{ qty }">
      <SfQuantitySelector
        class="sf-add-to-cart__select-quantity"
        :value="qty"
      />
    </slot>
  </div>
</template>
<script>
// @vue/component
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfQuantitySelector from "../../atoms/SfQuantitySelector/SfQuantitySelector.vue";
export default {
  name: "SfAddToCart",
  components: {
    SfButton,
    SfQuantitySelector
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Boolean to indicate whether product
     * can be added to cart
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * Stock quantity of product
     */
    stock: {
      type: Number,
      default: 1
    },
    /**
     * Selected quantity
     */
    qty: {
      type: [Number, String],
      default: 1
    }
  },
  watch: {
    qty(value) {
      const qty = parseInt(value, 10);
      if (qty <= 0) {
        this.$emit("input", "1");
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
@import "~@storefront-ui/shared/styles/components/SfAddToCart.scss";
</style>
