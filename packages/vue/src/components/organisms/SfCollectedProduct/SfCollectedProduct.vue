<template>
  <div class="sf-collected-product">
    <div class="sf-collected-product__main">
      <div class="sf-collected-product__details">
        <slot name="title" v-bind="{ title }">
          <div class="sf-collected-product__title-wraper">
            <component
              :is="componentIs"
              class="sf-collected-product__title"
              :link="link ? link : ''"
            >
              {{ title }}
            </component>
          </div>
        </slot>
        <slot name="price" v-bind="{ specialPrice, regularPrice }">
          <SfPrice
            :class="{ 'display-none': !regularPrice }"
            :regular="regularPrice"
            :special="specialPrice"
          />
        </slot>
        <div class="sf-collected-product__configuration">
          <slot name="configuration">
            <SfProperty name="Size" value="XS" />
            <SfProperty name="Color" value="white" />
          </slot>
        </div>
      </div>
      <div class="sf-collected-product__actions">
        <slot name="actions">
          <SfButton class="sf-button--text desktop-only"
            >Save for later</SfButton
          >
        </slot>
      </div>
    </div>
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
        <div class="sf-collected-product__quantity-wrapper">
          <SfQuantitySelector
            :qty="quantity"
            :min="minQty"
            :max="maxQty"
            class="sf-collected-product__quantity-selector"
            @input="$emit('input', $event)"
          />
        </div>
      </slot>
    </div>
    <slot name="remove" v-bind="{ removeHandler }">
      <div :class="{ 'display-none': !hasRemove }">
        <SfCircleIcon
          icon="cross"
          aria-label="Remove"
          class="
            sf-circle-icon--small
            sf-collected-product__remove
            sf-collected-product__remove--circle-icon
          "
          @click="removeHandler"
        />
        <SfButton
          class="
            sf-button--text
            sf-collected-product__remove sf-collected-product__remove--text
          "
          data-testid="collected-product-desktop-remove"
          @click="removeHandler"
          >Remove</SfButton
        >
      </div>
    </slot>
    <slot name="more-actions" v-bind="{ actionsHandler }">
      <div :class="{ 'display-none': !hasMoreActions }">
        <SfButton
          aria-label="More actions"
          class="
            sf-button--pure
            sf-collected-product__more-actions
            smartphone-only
          "
          @click="actionsHandler"
        >
          <SfIcon icon="more" size="18px" />
        </SfButton>
      </div>
    </slot>
  </div>
</template>
<script>
import SfPrice from "../../atoms/SfPrice/SfPrice.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfQuantitySelector from "../../atoms/SfQuantitySelector/SfQuantitySelector.vue";
import SfLink from "../../atoms/SfLink/SfLink.vue";
import SfProperty from "../../atoms/SfProperty/SfProperty.vue";
export default {
  name: "SfCollectedProduct",
  components: {
    SfButton,
    SfIcon,
    SfImage,
    SfCircleIcon,
    SfPrice,
    SfQuantitySelector,
    SfLink,
    SfProperty,
  },
  model: {
    prop: "qty",
  },
  props: {
    image: {
      type: String,
      default: "",
    },
    imageWidth: {
      type: [Number, String],
      default: 140,
    },
    imageHeight: {
      type: [Number, String],
      default: 200,
    },
    title: {
      type: String,
      default: "",
    },
    regularPrice: {
      type: [Number, String],
      default: null,
    },
    specialPrice: {
      type: [Number, String],
      default: null,
    },
    qty: {
      type: [Number, String],
      default: 1,
    },
    minQty: {
      type: Number,
      default: null,
    },
    maxQty: {
      type: Number,
      default: null,
    },
    link: {
      type: [String, Object],
      default: null,
    },
    hasRemove: {
      type: Boolean,
      default: true,
    },
    hasMoreActions: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    componentIs() {
      return this.link ? "SfLink" : "div";
    },
    quantity() {
      return typeof this.qty === "string" ? Number(this.qty) : this.qty;
    },
  },
  methods: {
    removeHandler() {
      this.$emit("click:remove");
    },
    actionsHandler() {
      this.$emit("click:actions");
    },
  },
};
</script>
<style lang="scss" src="./SfCollectedProduct.scss"></style>
