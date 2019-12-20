import SfButton from "../SfButton/SfButton.vue";
import SfIcon from "../SfIcon/SfIcon.vue";

export default {
  name: "SfCircleIcon",
  props: {
    /**
     */
    icon: {
      type: [String, Array],
      default: "home"
    },
    /**
     */
    iconColor: {
      type: String,
      default: "white"
    },
    /**
     */
    iconSize: {
      type: String,
      default: "100%"
    },
    /**
     * Sets aria-label for button icon
     */
    ariaLabel: {
      type: String,
      default: ""
    }
  },
  components: {
    SfButton,
    SfIcon
  }
};
