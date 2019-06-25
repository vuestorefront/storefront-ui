import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
export default {
  name: "SfSection",
  props: {
    /**
     * Section heading
     */
    heading: {
      type: Object,
      default: () => ({
        title: "",
        subtitle: "",
        level: 2
      })
    }
  },
  data() {
    return {
      hasUnderlinedModifier: false
    };
  },
  components: {
    SfHeading
  },
  mounted: function() {
    this.hasUnderlinedModifier = this.$el.classList.contains(
      "sf-section--underline"
    );
  }
};
