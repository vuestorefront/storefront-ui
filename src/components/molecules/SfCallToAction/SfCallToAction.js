import SfButton from "@/components/atoms/SfButton/SfButton.vue";

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
    }
  },
  components: {
    SfButton
  }
};
