export default {
  name: "VsfButton",
  data() {
    return {
      classObj: {
        "vsf-button--secondary": this.color == "secondary",
        "vsf-button--full-width": this.fullWidth == true
      }
    };
  },
  props: {
    text: {
      type: String,
      required: false,
      default: "Button"
    },
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
