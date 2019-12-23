// @vue/component
import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfMenuItem",
  props: {
    label: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "chevron_right"
    },
    count: {
      type: [String, Number],
      default: ""
    }
  },
  components: {
    SfIcon
  }
};
