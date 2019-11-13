import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfHeader",
  components: {
    SfIcon
  },
  props: {
    logo: {
      type: String,
      default: ""
    },
    navigations: {
      type: Array,
      default: () => []
    },
    cartIcon: {
      type: String,
      default: "empty_cart"
    },
    wishlistIcon: {
      type: String,
      default: "heart"
    },
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
