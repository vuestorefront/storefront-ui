import SfCircleButton from "@/components/atoms/SfCircleButton/SfCircleButton.vue";

export default {
  name: "SfBottomNavigation",
  props: {
    image: String,
    isActive: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SfCircleButton
  }
};
