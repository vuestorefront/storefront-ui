<template>
  <div class="sf-product-card-horizontal">
    <div class="sf-product-card-horizontal__image-wrapper">
      <component
        :is="linkComponentTag"
        :href="linkComponentTag === 'a' ? link : undefined"
        :to="link && linkComponentTag !== 'a' ? link : undefined"
        class="sf-product-card-horizontal__link"
      >
        <slot name="image" v-bind="{ image, title }">
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
        </slot>
      </component>
    </div>
    <div class="sf-product-card-horizontal__main">
      <div class="sf-product-card-horizontal__header">
        <component
          :is="linkComponentTag"
          :href="linkComponentTag === 'a' ? link : undefined"
          :to="link && linkComponentTag !== 'a' ? link : undefined"
          class="sf-product-card-horizontal__link"
        >
          <slot name="title" v-bind="{ title }">
            <h3 class="sf-product-card-horizontal__title">
              {{ title }}
            </h3>
          </slot>
        </component>
        <slot name="price" v-bind="{ specialPrice, regularPrice }">
          <SfPrice
            v-if="regularPrice"
            class="sf-product-card-horizontal__price"
            :regular="regularPrice"
            :special="specialPrice"
          />
        </slot>
      </div>
      <button
        v-if="wishlistIcon !== false"
        :aria-label="ariaLabel"
        :class="wishlistIconClasses"
        class="mobile-only"
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
      <div class="sf-product-card-horizontal__details">
        <slot name="description">
          <p class="sf-product-card-horizontal__description desktop-only">
            {{ description }}
          </p>
        </slot>
        <slot name="configuration">
          <div class="sf-product-card-horizontal__options">
            <SfProperty
              v-for="(option, i) in options"
              :key="i"
              :name="option.name"
              :value="option.value"
              class="sf-product-card-horizontal__property"
            />
          </div>
        </slot>
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
            <a
              v-if="reviewsCount"
              class="sf-product-card-horizontal__reviews-count"
              href="#"
              @click="$emit('click:reviews')"
            >
              {{ reviewsCount }} reviews
            </a>
          </div>
        </slot>
      </div>
      <slot name="actions">
        <div class="sf-product-card-horizontal__actions desktop-only">
          <SfButton
            class="sf-button--text"
            @click="$emit('click:add-to-wishlist')"
          >
            Save for later
          </SfButton>
          <SfButton
            class="sf-button--text"
            @click="$emit('click:add-to-compare')"
          >
            Add to compare
          </SfButton>
          <SfAddToCart
            v-model="qty"
            class="sf-product-card-horizontal__add-to-cart"
            @click="$emit('click:add-to-cart')"
          />
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
import SfPrice from "../../atoms/SfPrice/SfPrice.vue";
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfProperty from "../../atoms/SfProperty/SfProperty.vue";
import SfRating from "../../atoms/SfRating/SfRating.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";
import SfAddToCart from "../../molecules/SfAddToCart/SfAddToCart.vue";
import SfProductOption from "../../molecules/SfProductOption/SfProductOption.vue";
export default {
  name: "SfProductCardHorizontal",
  components: {
    SfPrice,
    SfRating,
    SfImage,
    SfIcon,
    SfButton,
    SfAddToCart,
    SfProductOption,
    SfProperty
  },
  props: {
    /**
     * Product description
     */
    description: {
      type: String,
      default: ""
    },
    /**
     * Product options
     */
    options: {
      type: [Array, Object],
      default: () => []
    },
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
    }
  },
  data() {
    return {
      qty: "1"
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
    }
  }
};
</script>
<style lang="scss">
@import "~@storefront-ui/shared/styles/components/SfProductCardHorizontal.scss";
</style>
