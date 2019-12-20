export default {
  name: "SfHeading",
  props: {
    /**
     * Heading level
     */
    level: {
      type: Number,
      default: 2
    },
    /**
     * Heading title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Heading subtitle
     */
    subtitle: {
      type: String,
      default: ""
    }
  },
  computed: {
    hasSubtitle() {
      return !!this.subtitle || this.$slots.hasOwnProperty("subtitle");
    }
  }
};
