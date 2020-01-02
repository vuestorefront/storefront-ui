<template>
  <div class="sf-collected-product">
    <slot name="remove" v-bind="{ removeHandler }">
      <SfCircleIcon
        class="sf-collected-product__remove"
        icon="cross"
        icon-color="white"
        icon-size="8px"
        @click="removeHandler"
      />
    </slot>
    <div class="sf-collected-product__aside">
      <slot name="image" v-bind="{ image, title }">
        <SfImage
          :alt="title"
          :src="image"
          class="sf-collected-product__image"
        />
      </slot>
      <slot name="input">
        <SfQuantitySelector
          :min="qtyMin"
          :qty="qty"
          :stock="stock"
          class="sf-collected-product__quantity-selector"
          @input="$emit('input', $event)"
        />
      </slot>
    </div>
    <div class="sf-collected-product__main">
      <slot name="title" v-bind="{ title }">
        <div class="sf-collected-product__title">{{ title }}</div>
      </slot>
      <slot name="price" v-bind="{ specialPrice, regularPrice }">
        <SfPrice
          v-if="regularPrice"
          :regular="regularPrice"
          :special="specialPrice"
        />
      </slot>
      <div class="sf-collected-product__details">
        <slot name="configuration"> </slot>
        <slot name="actions"> </slot>
      </div>
    </div>
  </div>
</template>
<script>
import SfPrice from "../../atoms/SfPrice/SfPrice.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfQuantitySelector from "../../atoms/SfQuantitySelector/SfQuantitySelector.vue";
export default {
  name: "SfCollectedProduct",
  components: {
    SfImage,
    SfCircleIcon,
    SfPrice,
    SfQuantitySelector
  },
  model: {
    prop: "qty"
  },
  props: {
    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: String,
      default: ""
    },
    /**
     * Product title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Product regular price
     */
    regularPrice: {
      type: [Number, String],
      default: null
    },
    /**
     * Product special price
     */
    specialPrice: {
      type: [Number, String],
      default: null
    },
    /**
     * Selected quantity
     */
    qty: {
      type: [Number, String],
      default: 1
    },
    /**
     * Stock quantity of product
     */
    stock: {
      type: Number,
      default: 1
    },
    /**
     * Minimum product quantity
     */
    qtyMin: {
      type: Number,
      default: 1
    }
  },
  methods: {
    removeHandler() {
      this.$emit("click:remove");
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfCollectedProduct.scss";
</style>
