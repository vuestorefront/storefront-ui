import SfHeaderNavigationItem from "./_internal/SfHeaderNavigationItem.vue";

import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
import SfCircleIcon from "../../atoms/SfCircleIcon/SfCircleIcon.vue";
import SfImage from "../../atoms/SfImage/SfImage.vue";
import SfSearchBar from "../../molecules/SfSearchBar/SfSearchBar.vue";
import Vue from "vue";

Vue.component("SfHeaderNavigationItem", SfHeaderNavigationItem);

export default {
  name: "SfHeader",
  components: {
    SfIcon,
    SfCircleIcon,
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
     * Header cartIcon (accepts same value as SfIcon)
     */
    cartIcon: {
      type: [String, Boolean],
      default: "empty_cart"
    },
    /**
     * Header wishlistIcon (accepts same value as SfIcon)
     */
    wishlistIcon: {
      type: [String, Boolean],
      default: "heart"
    },
    /**
     * Header accountIcon (accepts same value as SfIcon)
     */
    accountIcon: {
      type: [String, Boolean],
      default: "profile"
    },
    activeIcon: {
      type: String,
      default: "",
      validator(value) {
        return ["", "account", "wishlist", "cart"].includes(value);
      }
    }
  }
};
