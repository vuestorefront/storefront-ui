import SfButton from "@/components/atoms/SfButton/SfButton.vue";

export default {
  name: "SfCircleButton",
  props: {
    icon: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: "circle button"
    }
  },
  components: {
    SfButton
  }
};
