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
    /** One of predefined SfIcon colors, default is black.  */
    colorIcon: {
      type: String,
      default: "white"
    },
    /** One of predefined SfIcon sizes.  */
    sizeIcon: {
      type: String,
      default: "xs"
    },
    /** Svg file iconPath  */
    pathIcon: {
      type: String,
      default: "clock"
    },
    /**
     * Alert type ("alert", "warning", "info", "success"). Check "Knobs" section to see how they look like.
     */
    type: {
      type: String,
      default: "alert",
      validator: function(value) {
        return ["alert", "warning", "info", "success"].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    hasIconSrc() {
      return this.icon && typeof this.icon === "string";
    },
    iconSrc() {
      return typeof this.icon === "string" ? this.icon : "";
    }
  }
};
