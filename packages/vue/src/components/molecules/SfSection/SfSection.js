import SfHeading from "../../atoms/SfHeading/SfHeading.vue";
export default {
  name: "SfSection",
  props: {
    /**
     * Heading title
     */
    titleHeading: {
      type: String,
      default: ""
    },
    /**
     * Heading subtitle
     */
    subtitleHeading: {
      type: String,
      default: ""
    },
    /**
     * Heading tag level
     */
    levelHeading: {
      type: Number,
      default: 2
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
      "sf-section--no-underline"
    );
  }
};
