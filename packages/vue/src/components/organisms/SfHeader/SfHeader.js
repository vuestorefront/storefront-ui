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
     * Heading navigations
     */
    navigations: {
      type: Array,
      default: ()=>([])
    },
    /**
     * Heading cartIcon
     */
    cartIcon: {
      type: String,
      default: "empty_cart"
    },
    /**
     * Heading wishlistIcon
     */
    wishlistIcon: {
      type: String,
      default: "heart"
    },
    /**
     * Heading accountIcon
     */
    accountIcon: {
      type: String,
      default: "profile"
    }
  },
  methods: {
    onClickHandler(name) {
      this.$emit(`click:${name}`);
    }
  }
};
