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
    }
  },
  mounted() {
    this.provided.updateColumns(this.title);
  }
};
