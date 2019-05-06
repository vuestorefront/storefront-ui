export default {
  name: "SfAlert",
  props: {
    /**
     * Message that will be displayed in Alert.
     */
    message: String,
    /**
     * Show/hide icon.
     */
    icon: {
      type: Boolean,
      default: true
    },
    /**
     * Alert type ("alert", "warning", "info"). Check "Knobs" section to see how they look like.
     */
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
