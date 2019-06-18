import SfIcon from "@/components/atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfAlert",
  components: {
    SfIcon
  },
  props: {
    /**
     * Message that will be displayed in Alert.
     */
    message: String,
    /**
     * Show/hide icon or pass different URL.
     */
    icon: {
      type: [Boolean, String],
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
    hasIconSrc() {
      return this.icon && typeof this.icon === "string";
    },
    iconSrc() {
      return typeof this.icon === "string"
        ? this.icon
        : `/assets/alert-${this.type}.svg`;
    }
  }
};
