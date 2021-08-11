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
            />
          </template>
          <SfImage
            v-else
            class="sf-product-card-horizontal__image"
            :src="image"
            :alt="title"
            :width="imageWidth"
            :height="imageHeight"
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
              v-model="quantity"
              class="sf-product-card-horizontal__add-to-cart desktop-only"
              @input="$emit('input', $event)"
              @click="$emit('click:add-to-cart', quantity)"
            />
          </slot>
        </div>
      </div>
      <SfButton
        v-if="wishlistIcon !== false"
        :aria-label="`${ariaLabel} ${title}`"
        :class="wishlistIconClasses"
        class="sf-button--pure smartphone-only"
        @click="toggleIsOnWishlist"
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
    /**
     * Product description
     */
    description: {
      type: String,
      default: "",
    },
    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: [Array, Object, String],
      default: "",
    },
    /**
     * Product image width, without unit
     */
    imageWidth: {
      type: [String, Number],
      default: 140,
    },
    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: 200,
    },
    /**
     * Product title
     */
    title: {
      type: String,
      default: "",
    },
    /**
     * Link to product page
     */
    link: {
      type: [String, Object],
      default: "",
    },
    /**
     * Link element tag
     * @deprecated will be removed in 1.0.0 use slot to replace content
     */
    linkTag: {
      type: String,
      default: undefined,
    },
    /**
     * Product rating
     */
    scoreRating: {
      type: [Number, Boolean],
      default: false,
    },
    /**
     * Product reviews count
     */
    reviewsCount: {
      type: [Number, Boolean],
      default: false,
    },
    /**
     * Maximum product rating
     */
    maxRating: {
      type: [Number, String],
      default: 5,
    },
    /**
     * Product regular price
     */
    regularPrice: {
      type: [Number, String],
      default: null,
    },
    /**
     * Product special price
     */
    specialPrice: {
      type: [Number, String],
      default: null,
    },
    /**
     * Wish list icon
     * This is the default icon for product not yet added to wish list.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    wishlistIcon: {
      type: [String, Array, Boolean],
      default: "heart",
    },
    /**
     * Wish list icon for product which has been added to wish list
     * This is the icon for product added to wish list. Default visible on mobile. Visible only on hover on desktop.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    isOnWishlistIcon: {
      type: [String, Array],
      default: "heart_fill",
    },
    /**
     * Status of whether product is on wish list or not
     */
    isOnWishlist: {
      type: Boolean,
      default: false,
    },
    /**
     * Selected quantity
     */
    qty: {
      type: [Number, String],
      default: 1,
    },
  },
  data() {
    return {
      quantity: this.qty,
    };
  },
  computed: {
    currentWishlistIcon() {
      return this.isOnWishlist ? this.isOnWishlistIcon : this.wishlistIcon;
    },
    ariaLabel() {
      return this.isOnWishlist ? "Remove from wishlist" : "Add to wishlist";
    },
    wishlistIconClasses() {
      const defaultClass = "sf-product-card-horizontal__wishlist-icon";
      return `${defaultClass} ${
        this.isOnWishlist ? "sf-product-card-horizontal--on-wishlist" : ""
      }`;
    },
    quantity() {
      return typeof this.qty === "string" ? Number(this.qty) : this.qty;
    },
  },
  methods: {
    toggleIsOnWishlist() {
      this.$emit("click:wishlist", !this.isOnWishlist);
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfProductCardHorizontal.scss";
</style>
