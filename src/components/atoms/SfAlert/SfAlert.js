import SfSvgAlert from "../../../../public/assets/alert-default.svg?inline";

export default {
  name: "SfAlert",
  components: {
    SfSvgAlert
  },
  props: {
    message: String,
    icon: {
      default: true
    },
    type: {
      type: String,
      default: "alert"
    }
  }
};
