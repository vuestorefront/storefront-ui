export default {
  name: "SfOverlay",
  props: {
    /**
     * overlay transition effect
     */
    transition: {
      type: String,
      default: "fade"
    },
    /**
     * overlay visible
     */
    visible: {
      type: Boolean,
      default: false
    }
  }
};
