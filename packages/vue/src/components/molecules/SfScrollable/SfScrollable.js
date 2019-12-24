import Simplebar from "simplebar-vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfScrollable",
  components: {
    Simplebar,
    SfButton
  },
  data() {
    return {
      isHidden: true
    };
  },
  props: {
    maxContentHeight: {
      type: String,
      default: ""
    },
    showText: {
      type: String,
      default: ""
    },
    closeText: {
      type: String,
      default: ""
    }
  },
  computed: {
    style() {
      return this.isHidden
        ? `max-height: ${this.maxContentHeight} `
        : "max-height: unset; overflow-y: unset;";
    }
  },
  mounted() {
    this.$el.style.setProperty("--content-height", this.maxContentHeight);
  }
};
