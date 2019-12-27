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
    }
  },
  computed: {
    colorStyle() {
      return "background-color:" + this.color;
    }
  }
};
