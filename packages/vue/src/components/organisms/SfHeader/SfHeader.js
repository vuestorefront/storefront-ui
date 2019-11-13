import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfHeader",
  components: {
    SfIcon
  },
  props: {
    /**
     * Heading logo
     */
    logo: {
      type: String,
      default: ""
    },
    /**
     * Heading navigations
     */
    navigations: {
      type: Array,
      default: () => []
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
