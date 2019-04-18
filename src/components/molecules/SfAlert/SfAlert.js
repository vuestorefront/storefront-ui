export default {
  name: "SfAlert",
  props: {
    message: String,
    icon: {
      default: true
    },
    type: {
      type: String,
      default: "alert",
      validator: function(value) {
        return ["alert", "warning", "info"].indexOf(value) !== -1;
      }
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
