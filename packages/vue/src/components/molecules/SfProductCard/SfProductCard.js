import SfIcon from "@/components/atoms/SfIcon/SfIcon.vue";
import SfPrice from "@/components/atoms/SfPrice/SfPrice.vue";
import SfRating from "@/components/atoms/SfRating/SfRating.vue";

export default {
  name: "SfProductCard",
  props: {
    image: {
      type: String,
      default: "assets/storybook/product_thumb.png"
    },
    title: {
      type: String,
      required: true
    },
    rating: {
      type: [Object, Boolean],
      default: false
    },
    price: {
      type: [Object, Boolean],
      default: false
    },
    wishlistIcon: {
      type: [String, Array],
      default: "heart"
    },
    onWishList: {
      type: [Boolean],
      default: false
    }
  },
  components: {
    SfPrice,
    SfRating,
    SfIcon
  },
};
