import SfButton from "@/components/atoms/SfButton/SfButton.vue";

export default {
  name: "SfCircleButton",
  props: {
    icon: {
      type: String
    },
    alt: {
      type: String
    }
  },
  components: {
    SfButton
  }
};
