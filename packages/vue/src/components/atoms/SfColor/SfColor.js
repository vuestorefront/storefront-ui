export default {
  name: "SfColor",
  props: {
    color: {
      type: String,
      default: ""
    },
    isActive: {
      type: Boolean,
      default: false
    },
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  computed: {
    colorStyle() {
      return "background-color:" + this.color;
    },
    isLight() {
      return (
        this.color === "white" ||
        this.color === "#ffffff" ||
        this.color === "rgb(255,255,255)"
      );
    }
  }
};
