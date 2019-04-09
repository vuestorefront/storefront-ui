export default {
  name: "SfAlert",
  props: {
    message: String,
    icon: {
      default: true
    },
    type: {
      type: String,
      default: "alert"
    }
  },
  computed: {
    iconSrc() {
      return typeof this.icon === "string"
        ? this.icon
        : `/assets/alert-${this.type}.svg`;
    }
  }
};
