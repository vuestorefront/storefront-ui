import lozad from "lozad";
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
    },
    /**
     * Lazyload
     */
    lazy: {
      type: Boolean,
      default: true
    },
    /**
     * Placeholder
     */
    placeholder: {
      type: String,
      default: ""
    },
    /**
     * Array of images
     */
    images: {
      type: Array
    }
  },
  data() {
    return {
      loaded: false,
      overlay: false,
      maxWidth: "unset",
      current: 0
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
      if (!this.src && this.images.length) {
        let current = (this.images.length > 1 && this.current === 0) ? 1 : 0
        this.switchPicture(current)
      }
    },
    switchPicture(current) {
      this.current = current
      this.$refs.picture.setAttribute("data-iesrc", this.images[current].normal.url);
      this.$refs.pictureSmall.setAttribute("srcset", this.images[current].small.url);
      this.$refs.pictureNormal.setAttribute("srcset", this.images[current].normal.url);
    }
  },
  mounted: function () {
    if (this.src && !this.images.length) {
      this.$refs.img.setAttribute("src", this.src);
      this.$refs.img.addEventListener("load", () => {
        this.loaded = true;
        this.$refs.img.setAttribute("alt", this.alt);
        this.maxWidth = `${this.$refs.img.naturalWidth}px`;
      });
    } else {
      this.$refs.picture.setAttribute("data-iesrc", this.images[this.current].normal.url);
      this.$refs.pictureSmall.setAttribute("srcset", this.images[this.current].small.url);
      this.$refs.pictureNormal.setAttribute("srcset", this.images[this.current].normal.url);
      this.$refs.picture.addEventListener("load", () => {
        this.loaded = true;
        this.$refs.picture.setAttribute("data-alt", this.images[this.current].normal.alt);
      });
    }

    const observer = lozad(".sf-image__img");
    observer.observe();
  }
};
