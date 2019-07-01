export default {
  name: "SfImage",
  props: {
    /**
     * Image url
     */
    src: {
      type: String,
      default: ""
    },
    /**
     * Alt attribute value
     */
    alt: {
      type: String,
      default: ""
    },
    /**
     * Overlay transition type
     */
    transition: {
      type: String,
      default: "fade"
    }
  },
  data() {
    return {
      loaded: false,
      overlay: false,
      maxWidth: "unset"
    };
  },
  computed: {
    hasOverlay() {
      return this.$slots.hasOwnProperty("default") && this.overlay;
    }
  },
  methods: {
    hoverHandler(state) {
      this.overlay = state;
    }
  },
  mounted: function() {
    this.$refs.img.setAttribute("src", this.src);
    this.$refs.img.addEventListener("load", () => {
      this.loaded = true;
      this.$refs.img.setAttribute("alt", this.alt);
      this.maxWidth = `${this.$refs.img.offsetWidth}px`;
    });
  }
};
