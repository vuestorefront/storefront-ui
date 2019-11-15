import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfSearchBar from "../../molecules/SfSearchBar/SfSearchBar.vue";

export default {
  name: "SfHeader",
  components: {
    SfIcon,
    SfImage,
    SfSearchBar
  },
  props: {
    /**
     * Header logo
     */
    logo: {
      type: [String, Object],
      default: ""
    },
    /**
     * Header title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Header navigations
     */
    navigations: {
      type: Array,
      default: () => []
    },
    /**
     * Header cartIcon
     */
    cartIcon: {
      type: [String, Boolean],
      default: "empty_cart"
    },
    /**
     * Header wishlistIcon
     */
    wishlistIcon: {
      type: [String, Boolean],
      default: "heart"
    },
    /**
     * Header accountIcon
     */
    accountIcon: {
      type: [String, Boolean],
      default: "profile"
    }
  }
};
