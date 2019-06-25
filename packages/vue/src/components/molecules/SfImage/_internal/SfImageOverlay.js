export default {
  name: "SfOverlay",
  props: {
    transition: {
      type: String,
      default: "fade"
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
};
