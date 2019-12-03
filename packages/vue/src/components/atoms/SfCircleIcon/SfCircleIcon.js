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
      default: "20px"
    }
  },
  components: {
    SfButton,
    SfIcon
  }
};
