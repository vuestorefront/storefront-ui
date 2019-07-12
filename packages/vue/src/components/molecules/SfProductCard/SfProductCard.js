import SfIcon from "@/components/atoms/SfIcon/SfIcon.vue";
import SfPrice from "@/components/atoms/SfPrice/SfPrice.vue";
import SfRating from "@/components/atoms/SfRating/SfRating.vue";

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
     * It receives an object, with 2 fields: "max" as the max score standards, and "score" as the product's current score received.
     */
    rating: {
      type: [Object, Boolean],
      default: false
    },
    /**
     * Product price
     * It is an object including 2 fields "regularPrice" (required) and "specialPrice" (optional)
     */
    price: {
      type: [Object, Boolean],
      default: false
    },
    /**
     * Wish list icon
     * This is the default icon for product not yet added to wish list.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    wishlistIcon: {
      type: [String, Array],
      default: "heart"
    },
    /**
     * Wish list icon for product which has been added to wish list
     * This is the icon for product added to wish list. Default visible on mobile. Visible only on hover on desktop.
     * It can be a icon name from our icons list, or array or string as SVG path(s).
     */
    onWishlistIcon: {
      type: [String, Array],
      default: "heart_fill"
    },
    /**
     * Status of whether product is on wish list or not
     */
    onWishlist: {
      type: [Boolean],
      default: false
    },
    /**
     * Custom color of the wish list icon, can be HEX, RGB or any color in our colors list for SfIcon.
     * By default it will be black.``
     */
    onWishlistColor: {
      type: String
    }
  },
  components: {
    SfPrice,
    SfRating,
    SfIcon
  },
  computed: {
    currentWishlistIcon() {
      return this.onWishlist ? this.onWishlistIcon : this.wishlistIcon;
    },
    ariaLabel() {
      return this.onWishlist ? "Remove from wishlist" : "Add to wishlist";
    }
  },
  methods: {
    toggleOnWishlist() {
      this.$emit("click:wishlist", !this.onWishlist);
    }
  }
};
