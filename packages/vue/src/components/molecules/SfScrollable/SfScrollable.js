import SfButton from "../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfScrollable",
  components: {
    SfButton
  },
  props: {
    maxContentHeight: {
      type: String,
      default: ""
    },
    buttonText: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$el.style.setProperty("--content-height", this.maxContentHeight);
  }
};
