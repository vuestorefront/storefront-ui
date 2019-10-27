const DEFAULT_LOGO = "/assets/logo.svg";

export default {
  name: "SfHeader",
  props: {
    logo: {
      type: String,
      default: DEFAULT_LOGO
    },
    navigations: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isDefaultLogo() {
      return this.logo === DEFAULT_LOGO;
    }
  }
};
