import lozad from "lozad";

export default {
  name: "SfImage",
  props: {
    /**
     * Image url or pictures object (`{ small: { url, alt }, normal: { url, alt } }`)
     */
    src: {
      type: [String, Object],
      default: () => {}
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
    },
    /**
     * Lazyload
     */
    lazy: {
      type: Boolean,
      default: true
    },
    /**
     * Src image placeholder
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * Screen width breakpoint for picture tag media query
     */
    pictureBreakpoint: {
      type: Number,
      default: 576
    }
  },
  data() {
    return {
      loaded: false,
      overlay: false
    };
  },
  computed: {
    hasOverlay() {
      return this.$slots.hasOwnProperty("default") && this.overlay;
    }
  },
  watch: {
    src() {
      if (!this.lazy) {
        this.loaded = true;
        return;
      }
      this.observerHandler();
    }
  },
  mounted() {
    if (!this.lazy) {
      this.loaded = true;
      return;
    }
    this.observerHandler();
  },
  methods: {
    observerHandler() {
      const vm = this;
      const el = vm.$refs.imgLazy;
      const img = el.querySelector("img");
      if (img) {
        img.remove();
      }
      el.setAttribute("data-loaded", "false");
      const observer = lozad(el, {
        loaded: function() {
          vm.loaded = true;
        }
      });
      observer.observe();
    },
    hoverHandler(state) {
      this.overlay = state;
    }
  }
};
