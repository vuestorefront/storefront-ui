import SfIcon from "../../atoms/SfIcon/SfIcon.vue";
export default {
  name: "SfBar",
  components: {
    SfIcon
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    back: {
      type: Boolean,
      default: false
    },
    close: {
      type: Boolean,
      default: false
    }
  }
};
