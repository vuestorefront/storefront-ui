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
  watch: {
    isHidden(value) {
      if (!value) {
        this.$refs.content.$el.style.setProperty("max-height", "unset");
        this.$refs.content.$el.style.setProperty("overflow-y", "unset");
      } else {
        this.$refs.content.$el.style.setProperty(
          "max-height",
          this.maxContentHeight
        );
      }
    }
  },
  mounted() {
    this.$el.style.setProperty("--content-height", this.maxContentHeight);
  }
};
