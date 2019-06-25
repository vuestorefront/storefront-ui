import Vue from "vue";
import SfOverlay from "./_internal/SfImageOverlay.vue";

Vue.component("SfOverlay", SfOverlay);

export default {
  name: "SfImage",
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      loaded: false,
      overlay: false,
      maxWidth: 0
    };
  },
  computed: {
    hasOverlay() {
      return this.$slots.hasOwnProperty("default");
    }
  },
  methods: {
    hoverHandler(state) {
      this.overlay = state;
    }
  },
  mounted: function() {
    this.$refs.img.setAttribute("src", this.src);
    this.$refs.img.setAttribute("alt", this.alt);
    this.$refs.img.addEventListener("load", () => {
      this.loaded = true;
      this.maxWidth = this.$refs.img.offsetWidth;
    });
  }
};
