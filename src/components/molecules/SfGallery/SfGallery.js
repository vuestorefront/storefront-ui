import Glide from "@glidejs/glide";
import lozad from "lozad";

export default {
  props: {
    images: {
      type: Array,
      default: () => []
    },
    current: {
      type: Number,
      default: 1
    },
    sliderOptions: {
      type: Object,
      default () {
        // https://glidejs.com/docs/options/
        return {
          type: 'slider',
          autoplay: false,
          rewind: false
        }
      }
    }
  },

  data() {
    return {
      glide: null,
      activeIndex: this.current - 1
    };
  },

  methods: {
    setCurrentImage(index) {
      this.activeIndex = index;
      this.$emit("update:current", index + 1);
      if (this.glide) {
        this.glide.go("=" + index);
      }
    }
  },

  mounted() {
    // handle slider with swipe and transitions with Glide.js
    // https://glidejs.com/docs/
    const glide = new Glide(this.$refs.glide, this.sliderOptions);
    glide.on("run", () => {
      this.setCurrentImage(glide.index);
    });
    glide.mount();
    this.glide = glide;
    // handle lazy load for big images with lozad
    // https://apoorv.pro/lozad.js/
    const observer = lozad('.sf-gallery__big-image');
    observer.observe();
  },

  beforeDestroy() {
    if (this.glide) {
      this.glide.destroy();
    }
  }
};
