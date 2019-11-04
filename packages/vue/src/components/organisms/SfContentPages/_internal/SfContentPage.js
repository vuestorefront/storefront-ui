export default {
  name: "SfContentPage",
  inject: ["provided"],
  props: {
    /**
     * Page title
     */
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    isActive() {
      return this.provided.active === this.title;
    }
  },
  mounted() {
    this.provided.updatePages(this.title);
  }
};
