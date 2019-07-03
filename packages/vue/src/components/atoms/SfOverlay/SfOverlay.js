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
    visible: {
      type: Boolean,
      default: false
    }
  }
}
