export default {
  name: "SfContentPage",
  inject: ["pages", "component"],
  props: {
    /**
     * Page title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Page nav title
     */
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    isActive() {
      return this.component.active === this.title;
    }
  },
  mounted() {
    const page = {
      title: this.title,
      icon: this.icon
    };
    this.pages.updatePages(page);
  }
};
