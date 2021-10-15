<template>
  <div class="sf-product-card-horizontal">
    <div class="sf-product-card-horizontal__image-wrapper">
      <!--@slot Use this slot to replace image-->
      <slot
        name="image"
        v-bind="{ image, title, link, imageHeight, imageWidth }"
      >
        <SfLink
          :link="link"
          class="
            sf-product-card-horizontal__link
            sf-product-card-horizontal__link--image
          "
        >
          <template v-if="Array.isArray(image)">
            <SfImage
              v-for="(picture, key) in image.slice(0, 2)"
              :key="key"
              class="sf-product-card-horizontal__picture"
              :src="picture"
              :alt="title"
              :width="imageWidth"
              :height="imageHeight"
              :placeholder="productPlaceholder"
            />
          </template>
          <SfImage
            v-else
            class="sf-product-card-horizontal__image"
            :src="image"
            :alt="title"
            :width="imageWidth"
            :height="imageHeight"
            :placeholder="productPlaceholder"
          />
        </SfLink>
      </slot>
    </div>
    <div class="sf-product-card-horizontal__main">
      <div class="sf-product-card-horizontal__details">
        <!--@slot Use this slot to replace title-->
        <slot name="title" v-bind="{ title, link }">
          <SfLink :link="link" class="sf-product-card-horizontal__link">
            <h3 class="sf-product-card-horizontal__title">
              {{ title }}
            </h3>
          </SfLink>
        </slot>
        <!--@slot Use this slot to replace description-->
        <slot name="description">
          <p class="sf-product-card-horizontal__description desktop-only">
            {{ description }}
          </p>
        </slot>
        <!--@slot Use this slot to place content inside configuration-->
        <div class="sf-product-card-horizontal__configuration">
          <slot name="configuration" />
        </div>
      </div>
      <div class="sf-product-card-horizontal__actions-wrapper">
        <!--@slot Use this slot to replace price-->
        <slot name="price" v-bind="{ specialPrice, regularPrice }">
          <SfPrice
            v-if="regularPrice"
            class="sf-product-card-horizontal__price"
            :regular="regularPrice"
            :special="specialPrice"
          />
        </slot>
        <!--@slot Use this slot to replace reviews-->
        <slot name="reviews" v-bind="{ maxRating, scoreRating }">
          <div
            v-if="typeof scoreRating === 'number'"
            class="sf-product-card-horizontal__reviews"
          >
            <SfRating
              class="sf-product-card-horizontal__rating"
              :max="maxRating"
              :score="scoreRating"
            />
            <SfButton
              v-if="reviewsCount"
              :aria-label="`Read ${reviewsCount} reviews about ${title}`"
              class="sf-button--pure sf-product-card-horizontal__reviews-count"
              href="#"
              @click="$emit('click:reviews')"
            >
              ({{ reviewsCount }})
            </SfButton>
          </div>
        </slot>
        <div class="sf-product-card-horizontal__actions">
          <!--@slot Use this slot to place content inside actions-->
          <slot name="actions" />
        </div>
        <div class="sf-product-card-horizontal__add-to-cart">
          <!--@slot Use this slot to replace add to cart-->
          <slot name="add-to-cart">
            <SfAddToCart
              v-model="itemQuantity"
              class="sf-product-card-horizontal__add-to-cart desktop-only"
              @input="$emit('input', $event)"
              @click="$emit('click:add-to-cart', itemQuantity)"
            />
          </slot>
        </div>
      </div>
      <SfButton
        v-if="wishlistIcon !== false"
        :aria-label="`${ariaLabel} ${title}`"
        :class="wishlistIconClasses"
        class="sf-button--pure smartphone-only"
        @click="toggleIsInWishlist"
      >
        <!--@slot Use this slot to replace wishlist icon-->
        <slot name="wishlist-icon" v-bind="{ currentWishlistIcon }">
          <SfIcon
            :icon="currentWishlistIcon"
            size="19px"
            data-test="sf-wishlist-icon"
          />
        </slot>
      </SfButton>
    </div>
  </div>
</template>
<script>
import SfPrice from "../../atoms/SfPrice/SfPrice.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfLink from "../../atoms/SfLink/SfLink.vue";
import SfRating from "../../atoms/SfRating/SfRating.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfAddToCart from "../../molecules/SfAddToCart/SfAddToCart.vue";
import productPlaceholder from "../../../../../shared/images/product_placeholder.svg";

export default {
  name: "SfProductCardHorizontal",
  components: {
    SfPrice,
    SfRating,
    SfImage,
    SfIcon,
    SfLink,
    SfButton,
    SfAddToCart,
  },
  props: {
    description: {
      type: String,
      default: "",
    },
    image: {
      type: [Array, Object, String],
      default: "",
    },
    imageWidth: {
      type: [String, Number],
      default: 140,
    },
    imageHeight: {
      type: [String, Number],
      default: 200,
    },
    title: {
      type: String,
      default: "",
    },
    link: {
      type: [String, Object],
      default: "",
    },
    /**
     * Link element tag
     * @deprecated will be removed. Use slot to replace content
     */
    linkTag: {
      type: String,
      default: undefined,
    },
    scoreRating: {
      type: [Number, Boolean],
      default: false,
    },
    reviewsCount: {
      type: [Number, Boolean],
      default: false,
    },
    maxRating: {
      type: [Number, String],
      default: 5,
    },
    regularPrice: {
      type: [Number, String],
      default: null,
    },
    specialPrice: {
      type: [Number, String],
      default: null,
    },
    wishlistIcon: {
      type: [String, Array, Boolean],
      default: "heart",
    },
    isInWishlistIcon: {
      type: [String, Array],
      default: "heart_fill",
    },
    isInWishlist: {
      type: Boolean,
      default: false,
    },
    qty: {
      type: [Number, String],
      default: 1,
    },
  },
  data() {
    return {
      quantity: this.qty,
      productPlaceholder,
    };
  },
  computed: {
    currentWishlistIcon() {
      return this.isInWishlist ? this.isInWishlistIcon : this.wishlistIcon;
    },
    ariaLabel() {
      return this.isInWishlist ? "Remove from wishlist" : "Add to wishlist";
    },
    wishlistIconClasses() {
      const defaultClass = "sf-product-card-horizontal__wishlist-icon";
      return `${defaultClass} ${
        this.isOnWishlist ? "sf-product-card-horizontal--on-wishlist" : ""
      }`;
    },
    itemQuantity: {
      get() {
        return typeof this.quantity === "string"
          ? Number(this.quantity)
          : this.quantity;
      },
      set(newValue) {
        this.quantity = newValue;
      },
    },
  },
  methods: {
    toggleIsInWishlist() {
      this.$emit("click:wishlist", !this.isInWishlist);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfProductCardHorizontal.scss";
</style>
