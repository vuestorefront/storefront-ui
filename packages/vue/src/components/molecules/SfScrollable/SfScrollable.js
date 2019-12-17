import SfButton from "../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfScrollable",
  components: {
    SfButton
  },
  props: {
    buttonText: {
      type: String,
      default: ""
    }
  }
};
