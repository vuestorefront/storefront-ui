// @vue/component
export default {
  name: "SfContentPage",
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
  inject: ["provided"],
  computed: {
    isActive() {
      return this.provided.active === this.title;
    }
  },
  mounted() {
    const item = {
      title: this.title,
      icon: this.icon
    };
    this.$parent.items.push(item);
  }
};
