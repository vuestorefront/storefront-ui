import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
const DEFAULT_LOGO = "/assets/logo.svg";

export default {
  name: "SfHeader",
  components: {
    SfIcon
  },
  props: {
    logo: {
      type: String,
      default: DEFAULT_LOGO
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
  computed: {
    isDefaultLogo() {
      return this.logo === DEFAULT_LOGO;
    }
  },
  methods: {
    onClickEmit(name) {
      this.$emit(`click:${name}`);
    }
  }
};
