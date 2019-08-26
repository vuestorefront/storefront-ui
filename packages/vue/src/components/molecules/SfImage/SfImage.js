import lozad from "lozad";
export default {
  name: "SfImage",
  props: {
    /**
     * Images list or image url
     */
    src: [Array, String],
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
      default: "/assets/placeholder.png"
    },
    /**
     * Picture tag breakpoint
     */
    pictureBreakpoint: {
      type: Number,
      default: 576
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
    if (this.lazy !== false) {
      let observer;
      let self = this;
      observer = lozad(".sf-image-lozad", {
        loaded: function() {
          self.loaded = true;
        }
      });
      observer.observe();
    } else {
      this.loaded = true;
    }
  }
};
