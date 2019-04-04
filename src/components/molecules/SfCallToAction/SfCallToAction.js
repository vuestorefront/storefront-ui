import SfButton from "../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfCallToAction",
  props: {
    message: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    }
  },
  components: {
    SfButton
  }
};
