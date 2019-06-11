import SfButton from "../SfButton/SfButton.vue";

export default {
  name: "SfCircleIcon",
  props: {
    /**
     * Icon URL
     */
    icon: {
      type: String,
      default: ""
    },
    /**
     * Alt text for icon
     */
    alt: {
      type: String,
      default: "circle icon"
    }
  },
  components: {
    SfButton
  }
};
