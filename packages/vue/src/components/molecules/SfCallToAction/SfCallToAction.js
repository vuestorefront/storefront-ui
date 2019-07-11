import SfButton from "../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfCallToAction",
  props: {
    title: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    }
  },
  components: {
    SfButton
  }
};
