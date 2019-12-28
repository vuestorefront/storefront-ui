// @vue/component
import lozad from "lozad";

export default {
  name: "SfImage",
  props: {
    src: {
      type: [String, Object],
      default: () => ({ small: { url: "" }, normal: { url: "" } })
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
      show: false
    };
  },
  computed: {
    source() {
      let src = this.src;
      if (typeof src === "object") {
        if (!src.small || !src.normal) {
          const object = src.normal || src.small || { url: "" };
          src = object.url;
        }
      }
      return src;
    }
  },
  watch: {
    src() {
      this.$el.removeAttribute("data-loaded");
      this.show = false;
      this.lozad();
    }
  },
  methods: {
    lozad() {
      if (!this.lazy) return;
      const vm = this;
      this.$nextTick(() => {
        const observer = lozad(vm.$refs.image, {
          load() {
            vm.show = true;
          }
        });
        observer.observe();
      });
    },
    error() {
    },
    load() {
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
