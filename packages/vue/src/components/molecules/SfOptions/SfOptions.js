// @vue/component
import { Portal } from "@linusborg/vue-simple-portal";

export default {
  name: "SfOptions",
  props: {
    options: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: "text",
      validator: val => ["text", "color", "image"].includes(val)
    },
    label: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isMobile: false,
      desktopMin: 1024
    };
  },
  components: {
    Portal
  },
  computed: {
    isTypeColor() {
      return this.type === "color";
    },
    isTypeImage() {
      return this.type === "image";
    },
    isTypeText() {
      return this.type === "text" && !this.isTypeColor && !this.isTypeImage;
    }
  },
  mounted() {
    this.isMobileHandler();
    window.addEventListener("resize", this.isMobileHandler, { passive: true });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.isMobileHandler, {
      passive: true
    });
  },
  methods: {
    setActiveValue(value) {
      this.$emit("input", value);
    },
    isOptionSelected(value) {
      return this.value === value;
    },
    isMobileHandler() {
      this.isMobile =
        Math.max(document.documentElement.clientWidth, window.innerWidth) <
        this.desktopMin;
    }
  }
};
