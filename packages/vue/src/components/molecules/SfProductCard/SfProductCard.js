import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfPrice from "../../atoms/SfPrice/SfPrice.vue";
import SfRating from "../../atoms/SfRating/SfRating.vue";

export default {
  name: "SfProductCard",
  props: {
    /**
     * Product image
     * It should be an url of the product
     */
    image: {
      type: String,
      default: "assets/storybook/product_thumb.png"
    },
    /**
     * Product title
     */
    title: {
      type: String,
      required: true
    },
    /**
     * Product rating
     */
    rating: {
      type: [Number, String, Boolean],
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
      type: [Boolean],
      default: false
    }
  },
  components: {
    SfPrice,
    SfRating,
    SfIcon
  },
  computed: {
    currentWishlistIcon() {
      return this.isOnWishlist ? this.isOnWishlistIcon : this.wishlistIcon;
    },
    ariaLabel() {
      return this.isOnWishlist ? "Remove from wishlist" : "Add to wishlist";
    },
    wishlistIconClasses() {
      const defaultClass = "sf-product-card__wishlist-icon";

      return `${defaultClass} ${this.isOnWishlist ? "sf-product-card--on-wishlist" : ""}`;
    }
  },
  methods: {
    toggleOnWishlist() {
      this.$emit("click:wishlist", !this.isOnWishlist);
    }
  }
};
