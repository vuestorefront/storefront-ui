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
    }
  },

  mounted() {
    if (this.lazy !== false) {
      const vm = this;
      const observer = lozad(vm.$refs.imgLazy, {
        loaded: function() {
          vm.loaded = true;
        }
      });
      observer.observe();
    } else {
      this.loaded = true;
    }
  }
};
