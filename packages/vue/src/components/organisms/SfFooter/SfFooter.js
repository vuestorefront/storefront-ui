// @vue/component
import Vue from "vue";
import SfFooterColumn from "./_internal/SfFooterColumn.vue";

Vue.component("SfFooterColumn", SfFooterColumn);
export default {
  name: "SfFooter",
  props: {
    column: {
      type: Number,
      default: 4
    },
    multiple: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      open: [],
      items: [],
      desktopMin: 1024,
      isMobile: false
    };
  },
  watch: {
    isMobile: {
      handler(mobile) {
        let open;
        this.$nextTick(() => {
          if (mobile) {
            open = [];
          } else {
            open = [...this.items];
          }
          this.open = open;
        });
      },
      immediate: true
    },
    column: {
      handler(column) {
        if (typeof window === "undefined") return;
        this.$nextTick(() => {
          this.$el.style.setProperty("--col-width", `${100 / column}%`);
        });
      },
      immediate: true
    }
  },
  methods: {
    toggle(payload) {
      let open = [...this.open];
      if (!this.multiple) {
        open = [payload];
      } else if (open.includes(payload)) {
        open = open.filter(item => item !== payload);
      } else {
        open.push(payload);
      }
      this.open = open;
      this.$emit("change", open);
    },
    isMobileHandler(e) {
      this.isMobile = e.matches;
    }
  },
  mounted() {
    this.isMobile =
      Math.max(document.documentElement.clientWidth, window.innerWidth) <
      this.desktopMin;
    window.matchMedia(`(max-width: ${this.desktopMin}px)`).addListener(this.isMobileHandler);
  },
  beforeDestroy() {
    window
      .matchMedia(`(max-width: ${this.desktopMin}px)`)
      .removeListener(this.isMobileHandler);
  }
};
