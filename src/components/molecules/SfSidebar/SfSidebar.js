import SfCircleButton from "@/components/atoms/SfCircleButton/SfCircleButton.vue";

export default {
  name: "SfSidebar",
  props: {
    button: {
      type: Boolean,
      default: true
    }
  },
  components: {
    SfCircleButton
  }
};
