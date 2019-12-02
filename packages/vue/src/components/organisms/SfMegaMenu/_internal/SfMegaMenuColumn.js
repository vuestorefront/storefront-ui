export default {
  name: "SfMegaMenuColumn",
  inject: ["provided"],
  props: {
    /**
     * Column title
     */
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    isActive() {
      return this.provided.active === this.title;
    },
    isMobile() {
      return this.provided.isMobile;
    }
  }
};
