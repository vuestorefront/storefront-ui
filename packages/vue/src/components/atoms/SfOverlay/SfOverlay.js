export default {
  name: "SfOverlay",
  props: {
    /**
     * Transition effect to apply when overlay visibility is changed
     */
    transition: {
      type: String,
      default: "fade"
    },
    /**
     * Visibility state
     */
    visible: {
      type: Boolean,
      default: false
    }
  }
};
