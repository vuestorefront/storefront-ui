import SfIcon from "../../atoms/SfIcon/SfIcon.vue";

export default {
  name: "SfMenuItem",
  props: {
    label: {
      type: String,
      default: ""
    },
    mobileNavIcon: {
      type: [String, Boolean],
      default: "chevron_right"
    },
    count: {
      type: String,
      default: ""
    }
  },
  components: {
    SfIcon
  }
};
