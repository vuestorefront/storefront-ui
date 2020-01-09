<template>
  <div class="sf-collected-product">
    <slot name="remove" v-bind="{ removeHandler }">
      <SfCircleIcon
        icon="cross"
        icon-size="8px"
        icon-color="white"
        class="sf-collected-product__remove"
        @click="removeHandler"
      />
    </slot>
    <div class="sf-collected-product__aside">
      <slot name="image" v-bind="{ image, title }">
        <SfImage
          :src="image"
          :alt="title"
          :width="imageWidth"
          :height="imageHeight"
          class="sf-collected-product__image"
        />
      </slot>
      <slot name="input">
        <SfQuantitySelector
          :qty="qty"
          :min="qtyMin"
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
     * Product image width, without unit
     */
    imageWidth: {
      type: [String, Number],
      default: 140
    },
    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: 200
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
