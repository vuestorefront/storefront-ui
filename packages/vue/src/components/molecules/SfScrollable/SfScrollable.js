import simplebar from "simplebar-vue";
import "simplebar/dist/simplebar.min.css";
import SfButton from "../../atoms/SfButton/SfButton.vue";

export default {
  name: "SfScrollable",
  components: {
    simplebar,
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
        this.$refs.content.$el.style.setProperty("max-height", "unset");
        this.$refs.content.$el.style.setProperty("overflow-y", "unset");
      } else {
        this.$refs.content.$el.style.setProperty(
          "max-height",
          this.maxContentHeight
        );
      }
    }
  }
};
