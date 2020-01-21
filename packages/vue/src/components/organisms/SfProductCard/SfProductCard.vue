<template>
  <div class="sf-product-card">
    <component
      :is="linkComponentTag"
      :href="linkComponentTag === 'a' ? link : undefined"
      :to="link && linkComponentTag !== 'a' ? link : undefined"
      class="sf-product-card__link"
    >
      <div ref="productImage" class="sf-product-card__image-wrapper">
        <slot name="image" v-bind="{ image, title }">
          <div v-if="Array.isArray(image)" class="sf-product-card__pictures">
            <SfImage
              v-for="(picture, key) in image.slice(0, 2)"
              :key="key"
              class="sf-product-card__picture"
              :src="picture"
              :alt="title"
              :width="imageWidth"
              :height="imageHeight"
            />
          </div>
          <SfImage
            v-else
            class="sf-product-card__image"
            :src="image"
            :alt="title"
            :width="imageWidth"
            :height="imageHeight"
          />
        </slot>
        <template v-if="showAddToCartButton">
          <slot
            name="add-to-cart"
            v-bind="{ isAddedToCart, showAddedToCartBadge, isAddingToCart }"
          >
            <SfCircleIcon
              class="sf-product-card__add-button"
              aria-label="add-to-cart"
              role="button"
              :has-badge="showAddedToCartBadge"
              :disabled="addToCartDisabled"
              @click="onAddToCart"
            >
              <div class="sf-product-card__add-button--icons">
                <transition
                  name="sf-product-card__add-button--icons"
                  mode="out-in"
                >
                  <slot v-if="!isAddingToCart" name="add-to-cart-icon">
                    <SfIcon
                      key="add_to_cart"
                      icon="add_to_cart"
                      size="20px"
                      color="white"
                    />
                  </slot>
                  <slot v-else name="adding-to-cart-icon">
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
      <slot name="title" v-bind="{ title }">
        <h3 class="sf-product-card__title">
          {{ title }}
        </h3>
      </slot>
    </component>
    <button
      v-if="wishlistIcon !== false"
      :aria-label="ariaLabel"
      :class="wishlistIconClasses"
      @click="toggleIsOnWishlist"
    >
      <slot name="wishlist-icon" v-bind="{ currentWishlistIcon }">
        <SfIcon
          :icon="currentWishlistIcon"
          color="black"
          size="22px"
          data-test="sf-wishlist-icon"
        />
      </slot>
    </button>
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
        <a
          v-if="reviewsCount"
          class="sf-product-card__reviews-count"
          href="#"
          @click="$emit('click:reviews')"
        >
          ({{ reviewsCount }})
        </a>
      </div>
    </slot>
  </div>
</template>
<script>
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfPrice from "../../atoms/SfPrice/SfPrice.vue";
import SfRating from "../../atoms/SfRating/SfRating.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
export default {
  name: "SfProductCard",
  components: {
    SfPrice,
    SfRating,
    SfIcon,
    SfImage,
    SfCircleIcon
  },
  props: {
    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: [Array, Object, String],
      default: ""
    },
    /**
     * Product image width, without unit
     */
    imageWidth: {
      type: [String, Number],
      default: 216
    },
    /**
     * Product image height, without unit
     */
    imageHeight: {
      type: [String, Number],
      default: 326
    },
    /**
     * Product title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Link to product page
     */
    link: {
      type: [String, Object],
      default: ""
    },
    /**
     * Link element tag
     * By default it'll be 'router-link' if Vue Router
     * is available on instance, or 'a' otherwise.
     */
    linkTag: {
      type: String,
      default: undefined
    },
    /**
     * Product rating
     */
    scoreRating: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Product reviews count
     */
    reviewsCount: {
      type: [Number, Boolean],
      default: false
    },
    /**
     * Maximum product rating
     */
    maxRating: {
      type: [Number, String],
      default: 5
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
     * Wish list icon
     * This is the default icon for product not yet added to wish list.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    wishlistIcon: {
      type: [String, Array, Boolean],
      default: "heart"
    },
    /**
     * Wish list icon for product which has been added to wish list
     * This is the icon for product added to wish list. Default visible on mobile. Visible only on hover on desktop.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    isOnWishlistIcon: {
      type: [String, Array],
      default: "heart_fill"
    },
    /**
     * Status of whether product is on wish list or not
     */
    isOnWishlist: {
      type: Boolean,
      default: false
    },
    /**
     * Status of showing add to cart button
     */
    showAddToCartButton: {
      type: Boolean,
      default: false
    },
    /**
     * isAddedToCart status of whether button is showed, product is added or not
     */
    isAddedToCart: {
      type: Boolean,
      deafult: false
    },
    /**
     * addToCartDisabled status of whether button is disabled when out of stock
     */
    addToCartDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isAddingToCart: false
    };
  },
  computed: {
    currentWishlistIcon() {
      return this.isOnWishlist ? this.isOnWishlistIcon : this.wishlistIcon;
    },
    showAddedToCartBadge() {
      return !this.isAddingToCart && this.isAddedToCart;
    },
    ariaLabel() {
      return this.isOnWishlist ? "Remove from wishlist" : "Add to wishlist";
    },
    wishlistIconClasses() {
      const defaultClass = "sf-product-card__wishlist-icon";
      return `${defaultClass} ${
        this.isOnWishlist ? "sf-product-card--on-wishlist" : ""
      }`;
    },
    linkComponentTag() {
      if (this.linkTag) {
        return this.linkTag;
      }
      if (this.link) {
        return typeof this.link === "object" || this.$router
          ? "router-link"
          : "a";
      }
      return "div";
    }
  },
  methods: {
    toggleIsOnWishlist() {
      this.$emit("click:wishlist", !this.isOnWishlist);
    },
    onAddToCart(event) {
      event.preventDefault();
      this.isAddingToCart = true;
      setTimeout(() => {
        this.isAddingToCart = false;
      }, 1000);
      this.$emit("click:add-to-cart");
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfProductCard.scss";
</style>
