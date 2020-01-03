import Simplebar from "simplebar-vue";
import SfButton from "../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfScrollable",
  components: {
    Simplebar,
    SfButton
  },
  props: {
    maxContentHeight: {
      type: String,
      default: ""
    },
    showText: {
      type: String,
      default: "Show"
    },
    hideText: {
      type: String,
      default: "Hide"
    }
  },
  data() {
    return {
      isHidden: true,
      hasScroll: false
    };
  },
  computed: {
    style() {
      return {
        "--max-height": this.maxContentHeight.trim
          ? this.maxContentHeight
          : undefined,
        maxHeight: this.isHidden ? undefined : "unset"
      };
    }
  },
  mounted() {
    const fullHeight = this.$refs.content.$el.querySelector(
      ".simplebar-content"
    ).offsetHeight;
    const height = this.$refs.content.$el.offsetHeight;

    if (fullHeight > height) {
      this.hasScroll = true;
    }
  }
};
