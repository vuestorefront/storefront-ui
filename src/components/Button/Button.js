export default {
  name: "SfButton",
  data() {
    return {
      classObj: {
        "sf-button--secondary": this.color == "secondary",
        "sf-button--full-width": this.fullWidth == true,
        "sf-button--big": this.big == true
      }
    };
  },
  props: {
    color: {
      type: String,
      required: false,
      default: "primary"
    },
    big: {
      type: Boolean,
      required: false,
      default: false
    },
    fullWidth: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
