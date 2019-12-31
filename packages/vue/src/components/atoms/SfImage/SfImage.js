// @vue/component
import lozad from "lozad";

export default {
  name: "SfImage",
  props: {
    src: {
      type: [String, Object],
      default: () => ({ mobile: { url: "" }, desktop: { url: "" } })
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: undefined
    },
    height: {
      type: [String, Number],
      default: undefined
    },
    lazy: {
      type: Boolean,
      default: true
    },
    pictureBreakpoint: {
      type: Number,
      default: 576
    }
  },
  data() {
    return {
      show: false,
      overlay: false
    };
  },
  computed: {
    source() {
      let src = this.src;
      if (typeof src === "object") {
        if (!src.desktop || !src.mobile) {
          const object = src.desktop || src.mobile || { url: "" };
          src = object.url;
        }
      }
      return src;
    },
    showOverlay() {
      return this.$slots.default && this.overlay;
    },
    wrapperStyle() {
      return (
        this.width &&
        this.height &&
        `--width: ${this.width}; --height: ${this.height}`
      );
    },
    imgStyle() {
      return (
        this.width &&
        this.height &&
        `position: absolute; transform: translate3d(0, -50%, 0)`
      );
    }
  },
  watch: {
    lazy: {
      handler(value) {
        this.show = !value;
      },
      immediate: true
    },
    src() {
      if (!this.lazy) return;
      this.$el.removeAttribute("data-loaded");
      this.show = false;
      this.lozad();
    }
  },
  methods: {
    lozad() {
      const vm = this;
      this.$nextTick(() => {
        const observer = lozad(vm.$el, {
          load() {
            vm.show = true;
          }
        });
        observer.observe();
      });
    }
  },
  mounted() {
    if (!this.lazy) {
      this.show = true;
      return;
    }
    this.lozad();
  }
};
