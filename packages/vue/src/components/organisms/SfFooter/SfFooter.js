// @vue/component
import Vue from "vue";
import SfFooterColumn from "./_internal/SfFooterColumn.vue";

Vue.component("SfFooterColumn", SfFooterColumn);
export default {
  name: "SfFooter",
  data() {
    return {
      opened: [],
      items: [],
      desktopMin: 1024,
      isMobile: false,
      mql: undefined
    };
  },
  watch: {
    isMobile: {
      handler(mobile) {
        this.$nextTick(() => {
          if (mobile) {
            this.opened = [];
          } else {
            this.opened = [...this.items];
          }
        });
      },
      immediate: true
    }
  },
  methods: {
    toggle(payload) {
      let opened = [...this.opened];
      if (opened.includes(payload)) {
        opened = opened.filter(item => item !== payload);
      } else {
        opened.push(payload);
      }
      this.opened = opened;
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
