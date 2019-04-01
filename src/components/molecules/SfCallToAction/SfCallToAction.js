import SfButton from "../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfCallToAction",
  props: {
    message: String,
    buttonText: String
  },
  components: {
    SfButton
  }
};
