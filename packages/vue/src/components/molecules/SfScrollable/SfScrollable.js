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
      hasScroll: false,
      contentEl: undefined
    };
  },
  computed: {
    style() {
      return {
        "--max-height": this.maxContentHeight.trim
          ? this.maxContentHeight
          : undefined
      };
    }
  },
  methods: {
    sizeCalc() {
      const containerHeight = this.$refs.content.$el.offsetHeight;
      const contentHeight = this.contentEl.offsetHeight;
      this.hasScroll = contentHeight > containerHeight;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.contentEl = this.$refs.content.$el.querySelector(
        ".simplebar-content"
      );
      const observer = new MutationObserver(this.sizeCalc);
      this.sizeCalc();
      observer.observe(this.contentEl, { childList: true });
    });
  }
};
