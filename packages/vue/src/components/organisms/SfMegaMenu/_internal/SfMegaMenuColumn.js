export default {
  name: "SfMegaMenuColumn",
  inject: ["megaMenu"],
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
      return this.megaMenu.active.includes(this.title);
    }
  },
  mounted() {
    this.megaMenu.updateItems(this.title);
  }
};
