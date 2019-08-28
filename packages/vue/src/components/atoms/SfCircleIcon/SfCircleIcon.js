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
    colorIcon: {
      type: String,
      default: "white"
    },
    /**
     */
    sizeIcon: {
      type: String,
      default: "100%"
    }
  },
  components: {
    SfButton,
    SfIcon
  }
};
