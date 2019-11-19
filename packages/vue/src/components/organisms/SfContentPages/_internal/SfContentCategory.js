export default {
  name: "SfContentCategory",
  inject: ["provided"],
  props: {
    /**
     * Category title
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
