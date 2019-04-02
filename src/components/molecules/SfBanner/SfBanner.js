import SfButton from "@/components/atoms/SfButton/SfButton.vue";

export default {
  name: "SfBanner",
  props: {
    title: {
      type: String,
      default: ""
    },
    subtitle: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: ""
    },
    image: {
      tyoe: String,
      default: ""
    }
  },
  components: {
    SfButton
  }
};
