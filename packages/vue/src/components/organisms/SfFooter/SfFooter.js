// @vue/component
import Vue from "vue";
import SfFooterColumn from "./_internal/SfFooterColumn.vue";

Vue.component("SfFooterColumn", SfFooterColumn);
export default {
  name: "SfFooter",
  model: {
    prop: "opened",
    event: "change"
  },
  props: {
    opened: {
      type: Array,
      default: () => []
    },
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
      items: [],
      desktopMin: 1024,
      isMobile: false,
      mql: undefined
    };
  },
  watch: {
    isMobile: {
      handler(mobile) {
        let opened;
        this.$nextTick(() => {
          if (mobile) {
            opened = [];
          } else {
            opened = [...this.items];
          }
          this.$emit("change", opened);
        });
      },
      immediate: true
    },
    column: {
      handler(column) {
        this.$nextTick(() => {
          this.$el.style.setProperty("--col-width", `${100 / column}%`);
        });
      },
      immediate: true
    }
  },
  methods: {
    toggle(payload) {
      let opened = [...this.opened];
      if (!this.multiple) {
        opened = [payload];
      } else if (opened.includes(payload)) {
        opened = opened.filter(item => item !== payload);
      } else {
        opened.push(payload);
      }
      this.$emit("change", opened);
    },
    isMobileHandler(e) {
      this.isMobile = e.matches;
    }
  },
  mounted() {
    this.isMobile =
      Math.max(document.documentElement.clientWidth, window.innerWidth) <
      this.desktopMin;
    window.matchMedia("(max-width: 1024px)").addListener(this.isMobileHandler);
  },
  beforeDestroy() {
    window
      .matchMedia("(max-width: 1024px)")
      .removeListener(this.isMobileHandler);
  }
};
