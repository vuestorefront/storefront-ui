import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfAlert",
  components: {
    SfIcon
  },
  props: {
    /**
     * Message that will be displayed in Alert.
     */
    message: {
      type: String,
      default: ""
    },
    /**
     * Alert type ("secondary", "info", "success", "warning", "danger"). Check "Knobs" section to see how they look like.
     */
    type: {
      type: String,
      default: "secondary",
      validator: function(value) {
        return ["secondary", "info", "success", "warning", "danger"].includes(
          value
        );
      }
    }
  },
  computed: {
    icon() {
      switch (this.type) {
        case "success":
          return "added_to_cart";
        case "danger":
          return "info_shield";
        default:
          return "info_circle";
      }
    }
  }
};
