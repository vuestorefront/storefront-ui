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
    <slot name="quantity-select-input" v-bind="{ qty, stock }">
      <SfInput
        :value="qty"
        class="sf-add-to-cart__select-quantity"
        type="number"
        min="1"
        :max="stock"
        @input="
          value => {
            $emit('input', value);
          }
        "
      />
    </slot>
  </div>
</template>
<script>
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfInput from "../../atoms/SfInput/SfInput.vue";
export default {
  name: "SfAddToCart",
  components: {
    SfButton,
    SfInput
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
