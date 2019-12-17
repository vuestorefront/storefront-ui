import SfButton from "../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfScrollable",
  components: {
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
  mounted() {
    this.$el.style.setProperty("--content-height", this.maxContentHeight);
  },
  methods: {
    handleClick() {
      this.isHidden = !this.isHidden;
      if (!this.isHidden) {
        this.$refs.content.style.setProperty("max-height", "unset");
        this.$refs.content.style.setProperty("overflow-y", "unset");
      } else {
        this.$refs.content.style.setProperty(
          "max-height",
          this.maxContentHeight
        );
        this.$refs.content.style.setProperty("overflow-y", "scroll");
      }
    }
  }
};
