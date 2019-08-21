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
    colorIcon: {
      type: String,
      default: ""
    }
  },
  components: {
    SfButton,
    SfIcon
  }
};
