export default {
  name: "SfMegaMenuColumn",
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
      return this.$parent.active.includes(this.title);
    }
  },
  mounted() {
    this.$parent.updateItems(this.title);
  }
};
