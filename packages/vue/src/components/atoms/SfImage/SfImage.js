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

  methods: {
    hoverHandler(state) {
      this.overlay = state;
    },

    initLozad: function() {
      const vm = this;
      this.$nextTick(() => {
        const observer = lozad(vm.$refs.imgLazy, {
          loaded: function() {
            vm.loaded = true;
          }
        });
        observer.observe();
      });
    }
  },

  mounted() {
    if (this.lazy !== false) {
      this.initLozad();
    } else {
      this.loaded = true;
    }
  },

  watch: {
    lazy: function(newValue, oldValue) {
      // init lozad if lazy loading was previously disabled
      if (!oldValue && newValue) {
        this.initLozad();
      }
      // if lazy loading was previously enabled, remove lozad classes and
      // remove spurious img tag added by lozad if src is a multi-size object
      if (oldValue && !newValue) {
        this.$refs.imgLazy.removeAttribute("data-loaded");
        if (this.$refs.imgLazy.tagName === "PICTURE") {
          this.$refs.imgLazy.querySelector("img").remove();
        }
      }
    }
  }
};
