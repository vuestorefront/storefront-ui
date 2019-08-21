import SfButton from "../SfButton/SfButton.vue";
import SfIcon from "../SfIcon/SfIcon.vue";

export default {
  name: "SfCircleIcon",
  props: {
    /**
     */
    pathIcon: {
      type: [String, Array],
      default: ""
    },
    /**
     */
    sizeIcon: {
      type: String,
      default: ""
    },
    /**
     */
    colorIcon: {
      type: String,
      default: ""
    },
    /**
     */
    viewBoxIcon: {
      type: String,
      default: "0 0 24 24"
    }
  },
  components: {
    SfButton,
    SfIcon
  }
};
