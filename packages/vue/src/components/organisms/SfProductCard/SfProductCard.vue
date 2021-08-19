<template>
  <div class="sf-product-card" data-testid="product-card">
    <div class="sf-product-card__image-wrapper">
      <slot
        name="image"
        v-bind="{ image, title, link, imageHeight, imageWidth }"
      >
        <SfButton
          :link="link"
          class="sf-button--pure sf-product-card__link"
          data-testid="product-link"
          v-on="$listeners"
        >
          <template v-if="Array.isArray(image)">
            <SfImage
              v-for="(picture, key) in image.slice(0, 2)"
              :key="key"
              class="sf-product-card__picture"
              :src="picture"
              :alt="title"
              :width="imageWidth"
              :height="imageHeight"
            />
          </template>
          <SfImage
            v-else
            class="sf-product-card__image"
            :src="image"
            :alt="title"
            :width="imageWidth"
            :height="imageHeight"
          />
        </SfButton>
      </slot>
      <slot name="badge" v-bind="{ badgeLabel, badgeColor }">
        <SfBadge
          v-if="badgeLabel"
          class="sf-product-card__badge"
          :class="badgeColorClass"
          >{{ badgeLabel }}</SfBadge
        >
      </slot>
      <SfButton
        v-if="wishlistIcon !== false"
        :aria-label="`${ariaLabel} ${title}`"
        :class="wishlistIconClasses"
        data-testid="product-wishlist-button"
        @click="toggleIsInWishlist"
      >
        <slot name="wishlist-icon" v-bind="{ currentWishlistIcon }">
          <SfIcon
            :icon="currentWishlistIcon"
            size="22px"
            data-test="sf-wishlist-icon"
          />
        </slot>
      </SfButton>
      <template v-if="showAddToCartButton">
        <slot
          name="add-to-cart"
          v-bind="{
            isAddedToCart,
            showAddedToCartBadge,
            isAddingToCart,
            title,
          }"
        >
          <SfCircleIcon
            class="sf-product-card__add-button"
            :aria-label="`Add to Cart ${title}`"
            :has-badge="showAddedToCartBadge"
            :disabled="addToCartDisabled"
            data-testid="product-add-icon"
            @click="onAddToCart"
          >
            <div class="sf-product-card__add-button--icons">
              <transition
                v-if="!isAddingToCart && !isAddedToCart"
                name="sf-pulse"
                mode="out-in"
              >
                <slot name="add-to-cart-icon">
                  <SfIcon
                    key="add_to_cart"
                    icon="add_to_cart"
                    size="20px"
                    color="white"
                  />
                </slot>
              </transition>
              <transition v-else name="sf-pulse" mode="out-in">
                <slot name="adding-to-cart-icon">
                  <SfIcon
                    key="added_to_cart"
                    icon="added_to_cart"
                    size="20px"
                    color="white"
                  />
                </slot>
              </transition>
            </div>
          </SfCircleIcon>
        </slot>
      </template>
    </div>
    <slot name="title" v-bind="{ title, link }">
      <SfButton
        :link="link"
        class="sf-button--pure sf-product-card__link"
        data-testid="product-link"
        v-on="$listeners"
      >
        <h3 class="sf-product-card__title">
          {{ title }}
        </h3>
      </SfButton>
    </slot>
    <slot name="price" v-bind="{ specialPrice, regularPrice }">
      <SfPrice
        v-if="regularPrice"
        class="sf-product-card__price"
        :regular="regularPrice"
        :special="specialPrice"
      />
    </slot>
    <slot name="reviews" v-bind="{ maxRating, scoreRating }">
      <div
        v-if="typeof scoreRating === 'number'"
        class="sf-product-card__reviews"
      >
        <SfRating
          class="sf-product-card__rating"
          :max="maxRating"
          :score="scoreRating"
        />
        <SfButton
          v-if="reviewsCount"
          :aria-label="`Read ${reviewsCount} reviews about ${title}`"
          class="sf-button--pure sf-product-card__reviews-count"
          data-testid="product-review-button"
          @click="$emit('click:reviews')"
        >
          ({{ reviewsCount }})
        </SfButton>
      </div>
    </slot>
  </div>
</template>
<script>
import { colorsValues as SF_COLORS } from "@storefront-ui/shared/variables/colors";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfPrice from "../../atoms/SfPrice/SfPrice.vue";
import SfRating from "../../atoms/SfRating/SfRating.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfBadge from "../../atoms/SfBadge/SfBadge.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
export default {
  name: "SfProductCard",
  components: {
    SfPrice,
    SfRating,
    SfIcon,
    SfImage,
    SfCircleIcon,
    SfBadge,
    SfButton,
  },
  props: {
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
      default: "100%",
    },
    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: "auto",
    },
    /**
     * Badge label
     */
    badgeLabel: {
      type: String,
      default: "",
    },
    /**
     * Badge color
     * It can be according to our standard colors, or legitimate CSS color such as `#fff`, `rgb(255,255,255)`), and `lightgray` or nothing.
     * Standard colors: `primary`, `secondary`, `white`, `black`, `accent`, `green-primary`, `green-secondary`, `gray-primary`, `gray-secondary`, `light-primary`, `light-secondary`, `pink-primary`, `pink-secondary`, `yellow-primary`, `yellow-secondary`, `blue-primary`, `blue-secondary`.
     */
    badgeColor: {
      type: String,
      default: "",
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
    isInWishlistIcon: {
      type: [String, Array],
      default: "heart_fill",
    },
    /**
     * Status of whether product is on wish list or not
     */
    isInWishlist: {
      type: Boolean,
      default: false,
    },
    /**
     * Status of showing add to cart button
     */
    showAddToCartButton: {
      type: Boolean,
      default: false,
    },
    /**
     * isAddedToCart status of whether button is showed, product is added or not
     */
    isAddedToCart: {
      type: Boolean,
      deafult: false,
    },
    /**
     * addToCartDisabled status of whether button is disabled when out of stock
     */
    addToCartDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isAddingToCart: false,
    };
  },
  computed: {
    isSFColors() {
      return SF_COLORS.includes(this.badgeColor.trim());
    },
    badgeColorClass() {
      return this.isSFColors ? `${this.badgeColor.trim()}` : "";
    },
    currentWishlistIcon() {
      return this.isInWishlist ? this.isInWishlistIcon : this.wishlistIcon;
    },
    showAddedToCartBadge() {
      return !this.isAddingToCart && this.isAddedToCart;
    },
    ariaLabel() {
      return this.isInWishlist ? "Remove from wishlist" : "Add to wishlist";
    },
    wishlistIconClasses() {
      const defaultClass = "sf-button--pure sf-product-card__wishlist-icon";
      return `${defaultClass} ${this.isInWishlist ? "on-wishlist" : ""}`;
    },
  },
  methods: {
    toggleIsInWishlist() {
      this.$emit("click:wishlist", !this.isInWishlist);
    },
    onAddToCart(event) {
      event.preventDefault();
      this.isAddingToCart = true;
      setTimeout(() => {
        this.isAddingToCart = false;
      }, 1000);
      this.$emit("click:add-to-cart");
    },
  },
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/organisms/SfProductCard.scss";
</style>
